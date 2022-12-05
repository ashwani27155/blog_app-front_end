import "./sidebar.css";
export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src="https://www.w3schools.com/html/img_chania.jpg" alt="me" />
                <p>
                    hjjjjjjjjjjjjjsakhasd
                    klhasdhfsakfhkaslfhjkl
                    lkjasfhdkfjhlakshfklas
                    hlkasdfhdslahfkllkhsaf
                </p>

            </div><div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
               <ul className="sidebarList">
                   <li className="sidebarListItem">LifeStyle</li>
                   <li className="sidebarListItem">Music</li>
                   <li className="sidebarListItem">Style</li>
                   <li className="sidebarListItem">Sport</li>
                   <li className="sidebarListItem">Technology</li>
                   <li className="sidebarListItem">Cinema</li>
               </ul>

            </div>
            <div className="sidebaritem">
                <span className="sidebarTitle">Follw Us</span>
                <div className="sidebarSocial">
                    <i className=" sidebarIcon fab fa-facebook"></i>
                    <i className="sidebarIcon fab fa-twitter"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-youtube"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}