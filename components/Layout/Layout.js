import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  gap: 0.5rem;
  padding: 5rem 0.5rem 7rem 0.5rem;
  position: relative;
  width: 100%;
  align-items: center;
`;

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
