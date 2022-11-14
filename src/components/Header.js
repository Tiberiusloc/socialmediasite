import React from "react";

function Header(){
  return ( 
    <React.Fragment>
      <nav className="nav">
        <a href="/" className="site-title">Carlbook</a>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/notifications">Notifications</a>
          </li>
          <li>
            <a href="/messages">Messages</a>
          </li>
          <li>
            <form>
            <label for="search">
              <input for="search" type="text"/>
            </label>
            <input type="submit" value="search"/>
            </form>
          </li>
          <li>
            <a href="/tweet">Tweet</a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default Header;