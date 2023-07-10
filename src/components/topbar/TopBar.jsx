import "./topbar.css"

export default function TopBar() {
  return (
    <div className='top'>
      <div className="topLeft">
      <i className="topIcon fa-brands fa-facebook"></i>
      <i className="topIcon fa-brands fa-twitter"></i>
      <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg" src="https://scontent-itm1-1.xx.fbcdn.net/v/t39.30808-6/343081895_1957930001220674_4525632278365742190_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EC5v5_RwUMkAX-Vns9A&_nc_ht=scontent-itm1-1.xx&oh=00_AfAjZEuCnR1rgHem_LBslCWewIz-s8tLHRUDQLQZ73rlOg&oe=64954979" alt="Profile" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
