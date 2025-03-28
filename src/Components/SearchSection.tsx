import styled from "styled-components";
import stamp from "../styles/Images/patvirtintaLietuvojeStampas.svg";
import texture from "../styles/Images/FonoRastas.svg";
import { useTranslation } from "react-i18next";
import { device } from "../styles";

export interface SearchSectionProps {
  title: string;
  subtitle?: string; 
  disabled?: boolean;
  value?: string | number;
  onChange?: (option?: unknown) => void;
  name?: string;
  error?: string;
  showError?:boolean;
}

//This component has two  variations, controlled by whether or not subtitle prop is passed.
export const SearchSection = ({
  title,
  subtitle,
  disabled = false,
  value = '',
  onChange,
  name,
  error,
  showError = false
}: SearchSectionProps) => {
  const { t } = useTranslation();
  // let deviceSize =

  return (
    <SearchBarContainer>
      <TopRow>
        <TextContainer>
          <Title>{title}</Title>
          <Subtitle>{subtitle && subtitle}</Subtitle>
        </TextContainer>
        <Image >{subtitle && <img src={stamp} alt="Kokybės antspaudas" />}</Image>
      </TopRow>
      <BottomRow>
        <SearchBar $subtitle={!!subtitle}>
          <TextInput
            placeholder={t("homePage.inputPlaceholder")}
            disabled={disabled}
            value={value}
            name={name}
            onChange={(e) => onChange && onChange(e?.target?.value || '')}
          />
          <Button type="submit" disabled={disabled}>
            {disabled ? t("homePage.searchLoading") : t("homePage.search")}
          </Button>
        </SearchBar>
        {showError && <ErrorMessage>{error}</ErrorMessage>}
        <InputSubtitle>{t("homePage.inputSubtext")}</InputSubtitle>
      </BottomRow>
    </SearchBarContainer>
  );
};

const Image = styled.div`
  @media ${device.mobileL} {
    display: none;
  }
`
const ErrorMessage = styled.p`
  margin: 8px 0 0 8px;
  color: red;
  font-size: 0.75rem;
`

const SearchBar = styled.div<{ $subtitle: boolean}>`
  position: relative;
  margin-top: ${({ $subtitle }) => ($subtitle ? "40px" : "16px")};
  border-radius: 56px;
`;
const Button = styled.button<{ disabled: boolean }>`
  position: absolute;
  right: 0;
  top: 0px;
  background-color: ${({ theme }) => theme.colors.primary_dark};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1rem;
  padding: 18px 58px;
  border-radius: 120px 56px 56px 0;
  height: 56px;
  opacity: ${({ disabled }) => (disabled ? "0.8" : "1")};
  transition: 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary_light};
    cursor: pointer;
  }
  @media ${device.mobileL} {
      padding: 18px 30px;
  }
`;

const TextInput = styled.input<{ disabled: boolean }>`
  padding: 18px 24px;
  width: 100%;
  font-weight: 500;
  font-size: 1rem;
  border-radius: 56px;
  height: 56px;
  border: 3px solid ${({ theme }) => theme.colors.white};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};

  &:focus {
    outline: none;
    border: 3px solid ${({ theme }) => theme.colors.primary_light};
    box-shadow: 5px 5px 5px 7px ${({ theme }) => `${theme.colors.primary}33`};
  }
`;

const SearchBarContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 32px;
  padding: 48px 40px 40px 40px;
  background-image: url(${texture});
  background-repeat: no-repeat;
  background-position: right top;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.heading_blue};
  font-size: 2.5rem;
  max-width: 640px;
  font-weight: 600;
  @media ${device.mobileL} {
    font-size: 2.2rem;
    max-width: 100%;
  }
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.description_blue};
  font-size: 0.875rem;
  max-width: 468px;
  font-weight: 400;
`;

const InputSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.description_blue};
  font-size: 0.75rem;
  font-weight: 400;
  font-family: "Inter";
  margin-top: 8px;
`;

const BottomRow = styled.div``;
