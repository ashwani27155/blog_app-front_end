import "./header.css";
export default function Header(){
   return(
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React&Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img src="https://www.w3schools.com/html/img_girl.jpg" 
        alt="nature"className="headerImg" />
    </div>
   )
}