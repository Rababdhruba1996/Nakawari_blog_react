import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="https://static.wixstatic.com/media/d15eb7_4144079de9394ab4b5ad2284e50188b0~mv2.jpg" alt="" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor sit amet
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDes">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Assumenda quas optio minus, voluptas ratione officiis vel ullam quidem aliquid 
        it alias ipsam eum debitis rerum explicabo ea! Eius, officiis laboriosam?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Assumenda quas optio minus, voluptas ratione officiis vel ullam quidem aliquid 
        it alias ipsam eum debitis rerum explicabo ea! Eius, officiis laboriosam?
        </p>
    </div>
  )
}
