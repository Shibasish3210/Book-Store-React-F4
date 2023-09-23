import React,{useState, useContext} from 'react';
import Icon from '../Assets/Logo.png';
import Search from '../Assets/search.png';
import Fav from '../Assets/favourite.png';
import Premium from '../Assets/premium.png';
import Arrow from '../Assets/Arrow.png';
import Bell from '../Assets/bell.png';
import User from '../Assets/User.png';
import axios from 'axios';
import Context from '../Context/Context';


const NavBar = ({setExpanded})=>{
    const{setBooks,setMoreBooks} = useContext(Context);
    const [searchTerm, setSearchTerm] = useState('');
    async function handleSearch(){
        if(searchTerm === ''){
            alert('please enter search term');
            return;
        }
        setSearchTerm(searchTerm.split(' ').join('+'));
        const URL = `https://www.googleapis.com/books/v1/volumes?q=`;
        const res = await axios.get(URL + searchTerm);
        setBooks(res.data.items);
        setMoreBooks(res.data.items.slice(3));
        setSearchTerm('');
        setExpanded(false);
    }
    return (
        <nav>
            <div className="nav-items">
                <img className='nav-img' src={Icon} alt="logo"/>
                <div className='logo'>
                <span style={{fontSize:'3rem', fontWeight:'600'}}>KeazoN</span><span style={{fontSize:'1.5rem', fontWeight:'100'}}>BOOKS</span>
                </div>
            </div>
            <div className="nav-items">
                <div className="searchbar">
                    <img src={Search} alt="search"/>
                    <input onChange={e=>setSearchTerm(e.target.value)} type="text" className="search-input" placeholder='Search for the book you want and read it now... Sherlock Holmes, Harry Pot...'/>
                </div>
                <button onClick={handleSearch} className="btn">Search</button>
            </div>
            <div className="nav-items right-nav-item">
                <ul className="subnav">
                    <li className="right-subnav">
                        <img src={Fav} alt="favourites" />
                    </li>
                    <li className="right-subnav">
                        <img src={Bell} alt="notification" />
                    </li>
                    <li className="right-subnav">
                        <img src={Premium} alt="go-premium" />
                    </li>
                    <li style={{position:'relative'}} className="right-subnav">
                        <img className='user' src={User} alt="user" />
                        <img className='arrow' src={Arrow} alt='arrow'/>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
