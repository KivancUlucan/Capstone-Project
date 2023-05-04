import styled from "styled-components";

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  min-height: 10vh;
  background-color: white;
  margin: 0;
  padding: 1rem;
  box-shadow: 0.1rem 0.4rem 0.5rem 0.55rem #dddddd;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const NavItem = styled.li`
  margin: 0 10px;
`;

const NavLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <NavList>
        <NavItem>
          <NavLink href="/summary">Summary</NavLink>
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
