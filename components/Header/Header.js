import styled from "styled-components";

const Headline = styled.h1`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 10vh;
  background-color: white;
  font-size: 1rem;
  margin: 0;
  padding: 1rem 1rem 1rem 1rem;
  box-shadow: 0.1rem 0.4rem 0.5rem -0.25rem #dddddd;
`;

export default function Header() {
  return <Headline>Kanban Project management Tool</Headline>;
}
