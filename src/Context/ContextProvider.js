import {useState, useEffect} from 'react';
import Context from './Context';
import axios from 'axios';

const ContextProvider = (props)=>{
    const [books, setBooks] = useState();

    const[moreBooks, setMoreBooks] = useState();
    
    const[bookExpanded, setBookExpanded] = useState();
    useEffect(()=>{
        const URL = `https://www.googleapis.com/books/v1/volumes?q=`
        fetchData(URL,'vikings');
    },[])
    
    console.log(books,moreBooks,bookExpanded);
    async function fetchData(URL, searchTerm) {
        const res = await axios.get(URL+searchTerm);
        let tempArr = [res.data.items[1]];
        let tempMoreBooks = res.data.items.splice(2);

        const resp = await axios.get(URL + 'sherlock+homes');
        tempArr.push(resp.data.items[2]);
        tempMoreBooks = tempMoreBooks.concat(resp.data.items.splice(3));
        
        const response = await axios.get(URL + 'harry+potter');
        tempArr.push(response.data.items[2]);
        tempMoreBooks = tempMoreBooks.concat(response.data.items.splice(3));
        setBooks([...tempArr]);
        setMoreBooks(tempMoreBooks);
    }

    return (
    <Context.Provider value={{books,setBooks,moreBooks,setMoreBooks,bookExpanded,setBookExpanded}}>
        {props.children}
    </Context.Provider>
    );
}

export default ContextProvider;