import Sidetop from "./Sidetop";
import { useState, useEffect } from "react";
import useIsMobile from "./isMobile";
function Sidebar({ setPage }) {
  const isMobile = useIsMobile();
  const [active, activeOn] = useState(() => (isMobile ? "" : "works"));
  useEffect(() => {
    if (isMobile && active !== "") {
      activeOn(""); // モバイルだったらページをリセットする
    }
  }, [isMobile]);
  const handleClick = (target) => {
    setPage(null);
    setTimeout(() => setPage(target), 1);
  };

  return (
    <div className="sidebar">
      <Sidetop />
      <nav className="leftmid">
        <ul>
          <li
            className={`pagebtn ${active === "about" ? "liactive" : ""}`}
            onClick={() => {
              handleClick("about");
              activeOn("about");
            }}
          >
            About
          </li>
          <li
            className={`pagebtn ${active === "skills" ? "liactive" : ""}`}
            onClick={() => {
              handleClick("skills");
              activeOn("skills");
            }}
          >
            Skills
          </li>
          <li
            className={`pagebtn ${active === "exp" ? "liactive" : ""}`}
            onClick={() => {
              handleClick("experience");
              activeOn("exp");
            }}
          >
            Experience
          </li>
          <li
            className={`pagebtn ${active === "works" ? "liactive" : ""}`}
            onClick={() => {
              handleClick("works");
              activeOn("works");
            }}
          >
            Works
          </li>
        </ul>
      </nav>
      <p
        className="pagebtn leftbottom contactbtn"
        onClick={() => handleClick("contact")}
      >
        Contact
      </p>
    </div>
  );
}

export default Sidebar;
