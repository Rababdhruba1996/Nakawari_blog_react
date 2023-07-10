import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" 
        src="https://static.wixstatic.com/media/d15eb7_4144079de9394ab4b5ad2284e50188b0~mv2.jpg" alt="" />
        <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-sharp fa-solid fa-trash"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Rabab</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Cum cupiditate ipsam repudiandae exercitationem eaque optio 
                repellat sed. Sunt iste unde excepturi voluptate a dolorem ipsam 
                facere, incidunt pariatur optio repellat!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Cum cupiditate ipsam repudiandae exercitationem eaque optio 
                repellat sed. Sunt iste unde excepturi voluptate a dolorem ipsam 
                facere, incidunt pariatur optio repellat!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Cum cupiditate ipsam repudiandae exercitationem eaque optio 
                repellat sed. Sunt iste unde excepturi voluptate a dolorem ipsam 
                facere, incidunt pariatur optio repellat!Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Cum cupiditate ipsam repudiandae exercitationem eaque optio 
                repellat sed. Sunt iste unde excepturi voluptate a dolorem ipsam 
                facere, incidunt pariatur optio repellat!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Cum cupiditate ipsam repudiandae exercitationem eaque optio 
                repellat sed. Sunt iste unde excepturi voluptate a dolorem ipsam 
                facere, incidunt pariatur optio repellat!</p>
      </div>
    </div>
  )
}
