import React, { useContext } from 'react';
import Context from '../Context/Context';
import NoImg from '../Assets/noImg.png';

const SuggestedBooks =({expanded,setExpanded})=>{
    const {moreBooks,setBookExpanded} = useContext(Context);

    async function handleExpansion(book){
        setBookExpanded(book);
    }
    return(
        moreBooks && moreBooks.map((book)=>{
            return <img onClick={()=>handleExpansion(book)} key={book.id} src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : NoImg} alt="" />
        })
    )
}

export default SuggestedBooks;
