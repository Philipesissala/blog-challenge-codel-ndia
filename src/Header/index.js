import React from "react";

import styles from "./styles.css"

const Header = () => {
  return (
    <div>
      <header className="headerStyle">
        <article className="articleStyle">
          <nav className="navStyle">
            <a>Codelândia</a>
            <a>Blog</a>
          </nav>
          <div>
            <input type="text" placeholder="Pesquisar no blog" className="inputSearch"/>
          </div>
        </article>
      </header>
    </div>
  );
};

export default Header;
