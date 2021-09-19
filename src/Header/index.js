import React from "react";

import "../global.css";
import "./styles.css";
import searchImg from "../assets/search.svg";

const Header = () => {
  return (
    <div className="container">
      <header>
        <article>
          <nav>
            <a>Codelândia</a>
            <a>Blog</a>
          </nav>
          <div>
            <input
              type="text"
              placeholder="Pesquisar no blog"
              className="inputSearch"
            />
            <img src={searchImg} alt="search" />
          </div>
        </article>
      </header>
    </div>
  );
};

export default Header;
