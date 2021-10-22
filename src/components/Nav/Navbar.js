import React from "react";
import { useState } from "react";
import { Link, Route } from "react-router-dom";
import { Nav, Container, Button } from "react-bootstrap";
import { StyledNavbar, NavLink } from "./styling";
import img from "../../images/1621989660958-favicon-980x980.png";

export const Navbar = () => {
  const [change, setChange] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setChange(true);
    } else {
      setChange(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <StyledNavbar className={change ? "active" : ""}>
      <Container>
        <Nav>
          <NavLink className="left">
            <Link to="/login">
              <Button
                style={{
                  backgroundColor: "green",
                  border: "none",
                }}
              >
                Sign in
              </Button>
            </Link>
          </NavLink>

          <NavLink>
            <Link to="#">
              <Button
                style={{
                  backgroundColor: "green",
                  border: "none",
                }}
              >
                Sign up
              </Button>
            </Link>
          </NavLink>
          <NavLink className="center">
            <Link to="/">
              <img src={img} className="img-fluid" alt="OKLAG" />
            </Link>
          </NavLink>
          <NavLink className="right">
            <Link to="/healthy-blogs">
              <Button
                style={{
                  backgroundColor: "green",
                  border: "none",
                }}
              >
                Blog
              </Button>
            </Link>
          </NavLink>
        </Nav>
      </Container>
    </StyledNavbar>
  );
};

{
  /* <Navbar classNames="customeNav" scrolling dark expand="md" sticky="top"></Navbar> */
}
export default function NavRoute({ exact, path, component: Component }) {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => (
        <div>
          <Navbar />
          <Component {...props} />
          {/* <div>,e</div> */}
        </div>
      )}
    />
  );
}
