import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="aboutImg" src="https://scontent-itm1-1.xx.fbcdn.net/v/t1.6435-9/122165772_2092451024222007_2177606240962815631_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=njuaZQWMyY0AX_WYQ9z&_nc_ht=scontent-itm1-1.xx&oh=00_AfAswwbK2wJ2SN_0E3Dy6R6AU_Ek32j_u8zqz5mvEIUufw&oe=64B765E5" alt="my image" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Illum hic necessitatibus obcaecati voluptas, 
            ipsa, ipsum omnis voluptatum a labore unde magnam! 
            </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-facebook"></i>
        <i className="sidebarIcon fa-brands fa-twitter"></i>
        <i className="sidebarIcon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  )
}
