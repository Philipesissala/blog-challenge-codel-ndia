import React from "react";

const Header = () => {
  return (
    <div>
      <header className="headerStyle">
        <article>
          <nav>
            <a>Codelândia</a>
            <a>Blog</a>
          </nav>
          <div>
            <input type="text" placeholder="Pesquisar no blog" />
          </div>
        </article>
      </header>
    </div>
  );
};

export default Header;
