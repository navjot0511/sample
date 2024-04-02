import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #465e2a;
  height: 65px;
  z-index: 1;
`;
export const NavLink = styled(Link)`
  color: #dda15e;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  height: 65px;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const LogoWrapper = styled.div`
  background: white;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  z-index: 3;
`;
