import Sidetop from "./Sidetop";
import { useState } from "react";
function Sidebar({ setPage }) {
  const handleClick = (target) => {
    setPage(null);
    setTimeout(() => setPage(target), 1);
  };
  const [active, activeOn] = useState("works");
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
