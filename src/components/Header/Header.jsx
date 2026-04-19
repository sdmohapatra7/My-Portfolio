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
        <div className="header__content">
          <h3>
            <a href="#home" className="link">
              <img src={Image} alt="logo" className="logo" />
              <span className="name">Shaktidhar</span>
            </a>
          </h3>
          <Navbar />
        </div>
      </header>

        </>
    );
};