import { useState, useEffect } from "react";
import "./header.scss";
import Sun from "../../assets/images/icon-sun.svg";
import Moon from "../../assets/images/icon-moon.svg";

const Header = () => {
  const HTML = document.querySelector("html");
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    theme ? (HTML.dataset.theme = "light") : (HTML.dataset.theme = "dark");
  }, [theme]);

  return (
    <div className="header">
      <h1>TODO</h1>
      <img
        src={theme ? Moon : Sun}
        onClick={() => {
          setTheme(!theme);
        }}
      />
    </div>
  );
};

export default Header;
