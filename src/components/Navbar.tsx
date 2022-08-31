import { useState } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Link } from "react-scroll";
import { Turn as Hamburger } from "hamburger-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    console.log("toggled");
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <div className="navbar">
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className="navbar-container">
          <Hamburger toggled={open} toggle={setOpen} />
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
