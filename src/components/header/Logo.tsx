import React from "react";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <img
        //src="src/assets/logo.png"
        src={logo}
        alt="Website Logo"
        style={{ width: "125px", height: "125px" }}
      />
      <h1 style={{ display: "inline-block" }}>Eure.AI</h1>
    </div>
  );
};

export default Logo;
