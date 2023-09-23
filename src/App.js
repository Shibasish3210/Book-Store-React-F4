import React,{useState} from 'react';
import NavBar from './Components/NavBar.js';
import ShowBooks from './Components/ShowBooks.js';
import ShowBooksExpanded from './Components/ShowBooksExpanded.js';
import MoreBooks from './Components/MoreBooks.js';
import './style.css'
// import axios from 'axios';

const App = ()=>{
    const [expanded,setExpanded] = useState(false); 
    // const {books} = useContext(Context);
    return(
        <>
            <NavBar setExpanded={setExpanded}/>
            {!expanded ? <ShowBooks expanded={expanded} setExpanded={setExpanded}/> : <ShowBooksExpanded/>}
            <h2 style={{marginLeft:'2rem'}}>{expanded ? 'More Books Like This' : 'More Books'}</h2>
            <MoreBooks expanded={expanded} setExpanded={setExpanded}/>
        </>
    );
} 

export default App;
