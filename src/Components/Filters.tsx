import styled from "styled-components";
import Icon from "../styles/icons";

export const Filters = () => {
  return (
    <>
      <CategoryContainer>
        <CategoryTitle>Kategorijos</CategoryTitle>
      </CategoryContainer>
      <CategoryContainer>
        <CategoryTitle>Vaisto grupė</CategoryTitle>
        <StyledIcon $isActive={false} name="arrow" />
      </CategoryContainer>
      <CategoryContainer>
        <CategoryTitle>Farmacinė forma</CategoryTitle>
        <StyledIcon $isActive={false} name="arrow" />
      </CategoryContainer>
      <CategoryContainer>
        <CategoryTitle>Gamintojas/Registruotojas</CategoryTitle>
        <StyledIcon $isActive={false} name="arrow" />
      </CategoryContainer>
      <CategoryContainer>
        <CategoryTitle>Registravimo laikotarpis</CategoryTitle>
        <StyledIcon $isActive={true} name="arrow" />
      </CategoryContainer>
    </>
  );
};

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 0 16px 12px;
`;
const CategoryTitle = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
`;
const StyledIcon = styled(Icon)<{ $isActive: boolean }>`
  transform: ${({ $isActive }) => ($isActive ? "rotateX(180deg)" : "")};
`;
