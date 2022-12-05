import Sidebar from "../../components/sidebar/Sidebar"
import "./setting.css"
export default function Setting(){
    return(
        <div className="setting">
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update Your Account</span>
                    <span className="settingDeleteTitle">Delete Account</span>
                </div>
                <form  className="settingForm">
                    <label htmlFor="">
                        Profile Picture
                    </label>
                    <div className="settingPP">
                        <img src="https://www.w3schools.com/html/img_chania.jpg" alt="" />
                        <label htmlFor="fileInput">
                            <i className=" settingPPIcon fas fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="safak" />
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="safak@gmail.com" />
                    <label htmlFor="">Password</label>
                    <input type="password" />
                    <button className="settingSubmit">Update</button>
                    
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}