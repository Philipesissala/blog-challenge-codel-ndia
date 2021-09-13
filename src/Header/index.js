import React from "react";

import "./styles.css";

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
          </div>
        </article>
      </header>
    </div>
  );
};

export default Header;
