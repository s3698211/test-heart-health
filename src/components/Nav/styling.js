import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";
const StyledNavbar = styled(Navbar)`
  position: sticky;
  background: transparent;
  top: 0;
  width: 100%;
  height: 80px;
  &:hover {
    color: red;
  }
  &.active {
    background: #2f873c; // <Thing> tagged with an additional CSS class ".something"
  }
`;

const NavLink = styled(Nav.Item)`
  margin-right: 30px;

  &.center {
    float: none;
    position: absolute;
    left: 50%;
    img {
      height: 47px;
    }
  }

  &.right {
    position: absolute;
    right: 0;
  }
`;

export { StyledNavbar, NavLink };
