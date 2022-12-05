import './topBar.css';
import {Link} from "react-router-dom"
export default function TopBar(){
    const user=true;
    return (
    <div className="top">
        <div className="topLeft">
            <i className=" topIcon fab fa-facebook"></i>
            <i className="topIcon fab fa-twitter"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-youtube"></i>
            <i className="topIcon fab fa-instagram"></i>
        </div>
        <div className="topcenter">
            <ul className="topList">
                <li className="topListItem"><Link className="link" to="/" >Home</Link></li>
                <li className="topListItem"><Link className="link" to="/" >About</Link></li>
                <li className="topListItem"><Link className="link" to="/" >Contact</Link></li>
                <li className="topListItem"><Link className="link" to="/" >Write</Link></li>
                <li className="topListItem">
                    {user && "Logout"}
                </li>
            </ul>
        </div>
        <div className="topRight">
            {
                user ?(
                    <img src="https://www.w3schools.com/html/img_girl.jpg" alt="profile img" className="topImage" />
                ):(
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login" >Login</Link>
                        </li>
                    
                        <li className="topListItem">
                            <Link className="link" to="/register" >Register</Link>
                        </li>
                    </ul>
                )
            }
           
            <i className="searchIcon fas fa-search"></i>
        </div>
            
    </div>
    )
}