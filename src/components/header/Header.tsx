import React from "react";
import Logo from "./Logo";
import NavBar from "./Navbar";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "2rem",
        padding: "1rem",
      }}
    >
      <Logo />
      <NavBar />
    </div>
  );
};

export default Header;
