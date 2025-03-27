import styled from "styled-components";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { ChildrenType } from "../../types";

export interface DefaultLayoutProps {
  children?: ChildrenType;
}

export const Default = ({ children }: DefaultLayoutProps) => {
  return (
    <MainContainer>
      <Container>
        <InnerContainer>
          <Header />
          {children}
        </InnerContainer>
        <Footer />
      </Container>
    </MainContainer>
  );
};

const InnerContainer = styled.div`
  margin-bottom: 50px;
`

const MainContainer = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 960px;
  width: 94%;
  height: 100%;
  margin: 0 auto;
`;
