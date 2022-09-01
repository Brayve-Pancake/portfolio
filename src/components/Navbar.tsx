import { useState } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Link } from "react-scroll";
import { Turn as Hamburger } from "hamburger-react";
import { CSSTransition } from "react-transition-group";

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
          <div className="navbar-top">
            <Hamburger toggled={open} toggle={setOpen} />
          </div>
          <div className="navbar-dropdown">
            <CSSTransition
              in={open}
              timeout={300}
              classNames="example"
              unmountOnExit
            >
              <div className="list-body">
                <ul className="navbar-list">
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
              {/* <div className="dropdown">
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
              </div> */}
            </CSSTransition>
          </div>
        </div>
      </ClickAwayListener>
    </div>
  );
}
