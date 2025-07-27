import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../context/Theme";
import Image from "./../../assets/S-logo.jpg";

import "./Header.css";
export const Header = () => {
    const [{ themename }] = React.useContext(ThemeContext);

    return (
        <>
            <header className={"header " + themename}>
  <div className="center">
    <h3>
      <a href="#home" className="link">
        <span>
          <img src={Image} alt="logo" />
        </span>
        Shaktidhar
      </a>
    </h3>
    <Navbar />
  </div>
</header>

        </>
    );
};