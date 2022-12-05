import './singlePost.css'
export default function SinglePost(){
  return(
    <div className="singlePost">
    <div className="singlePostWrapper">
        <img src="https://www.w3schools.com/html/img_chania.jpg" alt="" 
        className="singlePostImg" />
        <h1 className="singlePostTitle">
            fujikjl
            jgjk
            jhkj
            kjhgh
            <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor"><b>Author:Ashwani</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Repellendus quibusdam odio, autem suscipit, rerum non voluptate in aut itaque exercitationem, 
            tenetur est iste quas accusamus nemo at deleniti ut quod?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Repellendus quibusdam odio, autem suscipit, rerum non voluptate in aut itaque exercitationem, 
            tenetur est iste quas accusamus nemo at deleniti ut quod</p>
    </div>
  </div>
  )
  
}