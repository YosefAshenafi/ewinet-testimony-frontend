import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import image from '../../image/logo.jpg';
import "./topBar.css";


export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const logout = async (e) => {
    console.log("Hello World");
    window.localStorage.removeItem('user');
    window.location.reload();


  }


  return (
    <div className="top">
      <div className="topLeft">
        <img className="header_icon" src={image} alt="logo" />
      </div>
      {/* <div className="header_center">
        <input type="text" placeholder='Search Something' />

        <SearchIcon />
      </div> */}
      <div className='search-box'>
        <input className="search-text" type="text" placeholder="Search Anything" />
        <a href="#" className="search-btn">
          <i className="fas fa-search"></i>
        </a>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem"> <Link className="link" to="/">
            HOME
          </Link></li>
          <li className="topListItem">TESTIMONY</li>
          {/* <li className="topListItem">CONTACT</li> */}
          <li className="topListItem"><Link className="link" to="/write">
            WRITE
          </Link></li>
          {user && <li className="topListItem" onClick={logout}>LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (<Link className='link' to='/settings'>
          <img className="topImg" src={PF + user.profilePic} alt="" />
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

