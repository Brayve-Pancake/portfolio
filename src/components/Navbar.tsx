import { useState } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <div className="navbar">
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className="navbar-container">
          <button className="button" onClick={handleToggle}>
            ☰
          </button>
          {open && (
            <div className="dropdown">
              <ul>
                <li>
                  <Link
                    className="test6"
                    // to takes the navbar to an ID
                    to="anchor1"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={handleToggle}
                  >
                    Test 7 (anchor)
                  </Link>
                </li>
                <li>
                  <Link
                    className="test6"
                    to="anchor2"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={handleToggle}
                  >
                    Test 8
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </ClickAwayListener>
    </div>
  );
}
