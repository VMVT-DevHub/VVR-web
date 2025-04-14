import styled from "styled-components";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { ChildrenType } from "../../types";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export interface DefaultLayoutProps {
  children?: ChildrenType;
}

export const Default = ({ children }: DefaultLayoutProps) => {

  const scrollDiv_Ref = useRef<HTMLDivElement>(null);
  const scrollAmount_Ref = useRef<number>(0);
  const location = useLocation();

  useEffect(() => {
    const saved = sessionStorage.getItem(`scroll-${location.key}`);
    if (scrollDiv_Ref.current && saved) {
      scrollDiv_Ref.current.scrollTo(0, Number(saved));
    }
  }, [location.key]);

  function handleScroll() {
    if (scrollDiv_Ref.current) {
      scrollAmount_Ref.current = scrollDiv_Ref.current.scrollTop;
      sessionStorage.setItem(`scroll-${location.key}`, scrollAmount_Ref.current.toString());
    }
  }
  
  return (
          <MainContainer ref={scrollDiv_Ref} onScroll={handleScroll}>
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
  overflow-y: scroll;

`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 960px;
  width: 94%;
  height: 100%;
  margin: 0 auto;
`;
