import styled from "styled-components";
import Link from "next/link";
import { FiSidebar } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { FiLayout } from "react-icons/fi";

const FooterContainer = styled.footer`
  position: fixed;
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
  display: flex;
  margin: 0 0.3rem;
  align-items: center;
  color: #cdcdcd;
`;

const NavLink = styled(Link)`
  color: #cdcdcd;
  text-decoration: none;
  font-size: 1rem;
  padding-right: 0.2rem;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <NavList>
        <NavItem>
          <FiLayout style={{ marginRight: "0.2rem" }} />
          <NavLink href="/">Summary</NavLink>
        </NavItem>
        <NavItem>
          <FiSidebar style={{ marginRight: "0.2rem" }} />
          <NavLink href="/board">Board</NavLink>
        </NavItem>
        <NavItem>
          <FiEdit style={{ marginRight: "0.2rem" }} />
          <NavLink href="/addTask">Add Task</NavLink>
        </NavItem>
      </NavList>
    </FooterContainer>
  );
}
