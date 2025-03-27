import { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t, i18n } = useTranslation();

  const [languages] = useState(i18n.languages);

  return (
    <HeaderContainer>
      <p>{t('homePage.header')}</p>
      <LocaleContainer>
        {languages.map((lng) => (
          <LanguageOption
            onClick={() => i18n.changeLanguage(lng)}
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

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  font-weight: 500;
`;

const LocaleContainer = styled.div`
  display: flex;
  gap: 8px;
`;
