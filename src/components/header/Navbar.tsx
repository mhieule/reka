// Filename - "./components/Navbar.js

import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import usericon from "../../assets/user-icon.png";

const Navbar = () => {
  return (
    <>
      <div>
        <Nav className="navbar">
          <NavMenu>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/learn">Learn</NavLink>
            <NavLink to="/practice">Practice</NavLink>
            <NavLink to="/setting">Setting</NavLink>
            <NavLink to="/competition">Live Competitions</NavLink>
            <NavLink to="/sign-up">
              <img src={usericon} alt="user"></img>
            </NavLink>
          </NavMenu>
        </Nav>
      </div>
    </>
  );
};

export default Navbar;
