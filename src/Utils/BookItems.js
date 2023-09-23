import React,{useContext} from 'react';
import NoImg from '../Assets/noImg.png';
import Context from '../Context/Context';

const BookItems = ({book, expanded, setExpanded})=>{
    const {setBookExpanded} = useContext(Context);
    async function handleExpansion(){
        expanded ? setExpanded(false) : setExpanded(true);
        console.log(expanded);
        setBookExpanded(book);
    }
    return (
        <div className='Book-items'>
            <div className="book-item-img">
            <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : NoImg} alt="" />
            </div>
            <div className="book-item-desc">
                <h3 className='book-title'>{book.volumeInfo.title}</h3>
                <div className="book-desc">
                    {book.volumeInfo.description ? book.volumeInfo.description.slice(0,150)+'...' : `'Please visit more info for more info...`}
                </div>
                <button onClick={handleExpansion} style={{marginTop:'auto'}} className='btn'>Now Read!</button>
            </div>
        </div>
    );
}

export default BookItems;
