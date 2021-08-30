import React from "react";
import "./fonts.css";

const Header = () => {
  const headerStyle = {
    position: "absolute",
    backgroundImage:
      "linear-gradient(to right,rgba(87, 74, 232, 1), rgba(62, 161, 219, 1))",
    width: "100%",
    height: "250px",
  };
  const articleStyle = {
    position: "relative",
    maxWidth: "69%",
    margin: "0 auto",
  };
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    color: "rgba(255, 255, 255, 1)",
    marginTop: "41px",
    fontFamily: "Lexend Deca",
    fontWeight: "normal",
    fontStyle: "normal",
    fontSize: "24px",
  };

  const inputSearch = {
    position: "absolute",
    width: "100%",
    height: "65px",
    marginTop: "75px",
    outline: "none",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "#FFFFFF",
    opacity: 0.5,
    fontFamily: "Inter",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "22px",
    paddingLeft: 17,
  };
  return (
    <div>
      <header style={headerStyle}>
        <article style={articleStyle}>
          <nav style={navStyle}>
            <a>Codelândia</a>
            <a>Blog</a>
          </nav>
          <input
            type="text"
            style={inputSearch}
            placeholder="Pesquisar no blog"
          />
        </article>
      </header>
    </div>
  );
};

export default Header;
