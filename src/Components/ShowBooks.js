import React,{useContext} from 'react';
import BookItems from '../Utils/BookItems.js';
import Context from '../Context/Context.js';

const ShowBooks = ({expanded,setExpanded})=>{
    const {books} = useContext(Context);
    console.log(books)
    return (
        books && <div className='show-books'>
        <BookItems expanded={expanded} setExpanded={setExpanded} book={books[0]}/>
        <BookItems expanded={expanded} setExpanded={setExpanded}  book={books[1]}/>
        <BookItems expanded={expanded} setExpanded={setExpanded}  book={books[3] ? books[3] : books[2]}/>
        </div>
        
    );
}

export default ShowBooks;
