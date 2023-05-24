import styled from "styled-components";
import Link from "next/link";
//import { FiSidebar } from "react-icons/fa";

const FooterContainer = styled.footer`
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 10vh;
  background-color: #2a3647;
  margin: 0;
  padding: 1rem;
  box-shadow: 0.1rem 0.4rem 0.5rem 0.55rem #dddddd;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  margin-left: 2rem;
`;

const NavItem = styled.li`
  margin: 0 10px;
`;

const NavLink = styled(Link)`
  color: #cdcdcd;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <NavList>
        <NavItem>
          <NavLink href="/">Summary</NavLink>
          {/* <FiSidebar /> */}
        </NavItem>
        <NavItem>
          <NavLink href="/board">Board</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/addTask">Add Task</NavLink>
        </NavItem>
      </NavList>
    </FooterContainer>
  );
}
