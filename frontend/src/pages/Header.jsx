// create a page header
import React from "react";
import Logoheader from "../components/LogoHeader";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-animation" style={{ backgroundColor: "#141414" }}>
        {/* <RedirectionHeader /> */}
        <meta httpEquiv="refresh" content="3;url=https://www.google.com/" />
        <Logoheader />
      </div>
    </div>
  );
}

export default Header;
