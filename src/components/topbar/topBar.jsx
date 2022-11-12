import { Link } from "react-router-dom";
import image from '../../image/logo.jpg';
import "./topBar.css";


export default function TopBar() {
  const currentUser = false;
  return (
    <div className="top">
      <div className="topLeft">
        <img className="header_icon" src={image} alt="logo" />
      </div>
      {/* <div className="header_center">
        <input type="text" placeholder='Search Something' />

        <SearchIcon />
      </div> */}
      <div class='search-box'>
        <input class="search-text" type="text" placeholder="Search Anything" />
        <a href="#" class="search-btn">
          <i class="fas fa-search"></i>
        </a>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem"> <Link className="link" to="/">
            HOME
          </Link></li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem"><Link className="link" to="/write">
            WRITE
          </Link></li>
          {currentUser && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {currentUser ? (<Link className='link' to='/settings'>
          <img className="topImg" src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        </Link>) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}

