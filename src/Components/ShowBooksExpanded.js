import React,{useContext} from 'react';
import Context from '../Context/Context';
import NoImg from '../Assets/noImg.png'; 

const ShowBooksExpanded = ()=>{
    const {bookExpanded} = useContext(Context);
    console.log(bookExpanded);
    return (
        bookExpanded &&
        <div className='show-books'>
            <div className='Book-items expanded'>
            <div className="book-item-img">
            <img src={bookExpanded.volumeInfo.imageLinks ? bookExpanded.volumeInfo.imageLinks.thumbnail : NoImg} alt="" />
            </div>
            <div className="book-item-desc-expanded">
                <h3 className='book-title'>{bookExpanded.volumeInfo.title}</h3>
                <h3 className='book-title'>{bookExpanded.volumeInfo.authors[0]}</h3>
                <div className="book-desc">
                    {bookExpanded.volumeInfo.description ? bookExpanded.volumeInfo.description+'...' : `'lease visit more info for more info...`}
                </div>
                <div style={{display:'flex', gap:'2rem'}} className="end-flex">
                    <p>{`Avg Rating : ${bookExpanded.volumeInfo.averageRating}`}</p>
                    <p>{`Rating Count : ${bookExpanded.volumeInfo.ratingsCount}`}</p>
                    <p>{`Publisher : ${bookExpanded.volumeInfo.publisher}`}</p>
                    <p>{`Language : ${bookExpanded.volumeInfo.language}`}</p>
                    <p>{`Published On : ${bookExpanded.volumeInfo.publishedDate}`}</p>
                </div>

                <div style={{display:'flex', gap:'2rem', justifyContent: 'flex-end'}} className="btn-cont">
                    <button style={{marginTop:'auto'}} className='btn' onClick={()=>window.location.href = bookExpanded.volumeInfo.previewLink}>Now Read!</button>
                    <button style={{marginTop:'auto'}} className='btn' onClick={()=>window.location.href = bookExpanded.volumeInfo.infoLink}>More Info!</button>
                </div>
            </div>
         </div>
        </div>
    );
}

export default ShowBooksExpanded