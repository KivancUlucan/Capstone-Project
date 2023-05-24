import styled from "styled-components";

const HeaderContainer = styled.header`
  top: 0;
  left: 0;
  width: 100vw;
  height: 10vh;
  background-color: white;
  font-size: 1rem;
  margin: 0;
  padding: 1rem 1rem 1rem 1rem;
  box-shadow: 0.1rem 0.4rem 0.5rem -0.25rem #dddddd;
  background-color: #2a3647;
`;
const Title = styled.h1`
  font-size: 1rem;
  margin-left: 2rem;
  color: #cdcdcd;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Title>Kanban Project Management Tool</Title>
    </HeaderContainer>
  );
}
