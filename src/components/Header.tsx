import { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t, i18n } = useTranslation();

  //should be: const [languages] = useState(i18n.languages);
  //but this array switches it's display order on whim
  const [languages] = useState(['lt','en']); 

  const handleLanguageChange = (lng:string) => {
    i18n.changeLanguage(lng);
    window.localStorage.setItem('locale', lng);
   
  }


  return (
    <HeaderContainer>
      <StyledLink onClick={() => (window.location.href = "/")}>{t('homePage.header')}</StyledLink>
      <LocaleContainer>
        {languages.map((lng) => (
          <LanguageOption
            onClick={() => handleLanguageChange(lng)}
            key={lng}
            selected={i18n.language === lng}
          >
            {lng.toUpperCase()}
          </LanguageOption>
        ))}
      </LocaleContainer>
    </HeaderContainer>
  );
};
const StyledLink = styled.a`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
const LanguageOption = styled.span<{ selected: boolean }>`
  font-size: 0.875rem;
  padding: 8px 8.5px;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.secondary : "white"};
  border-radius: 8px;
  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px 0;
  font-weight: 500;
`;

const LocaleContainer = styled.div`
  display: flex;
  gap: 8px;
`;
