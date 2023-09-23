import React from 'react';
import SuggestedBooks from '../Utils/SuggestedBooks.js'
const MoreBooks = ({expanded,setExpanded})=>{
    return (
        <div className='Suggested'>
            <SuggestedBooks expanded={expanded} setExpanded={setExpanded}/>
        </div>
    );
}

export default MoreBooks;
