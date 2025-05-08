import styled from "styled-components";
import texture from "../styles/images/FonoRastas.svg";
import { device } from "../styles";
import { useNavigate } from "react-router-dom";
import Icon from "../styles/icons";

export interface SearchSectionProps {
  title: string;
  subtitle?: string; 
  code?:string;
  tags?: { name: string }[];
}

export const DetailTitle = ({
  title,
  code,
  subtitle,
  tags,
}: SearchSectionProps) => {
//   const { t } = useTranslation();
  const navigate = useNavigate();
  // let deviceSize =

  return (
    <SearchBarContainer>
      <TopRow>
        <TextContainer>
          <StyledButton onClick={() => navigate(-1)}>
            <Icon name={"arrow-left"} />
            Grįžti atgal
          </StyledButton>
          <Title>{title}</Title>
          <Subtitle>Veikliosios medžiagos:{subtitle && subtitle}</Subtitle>
        </TextContainer>
        <Code>{code}</Code>
      </TopRow>
      <BottomRow>
        <TagContainer>
          {tags?.map((tag) => (
            <Tag key={tag.name}>{tag.name}</Tag>
          ))}
        </TagContainer>
      </BottomRow>
    </SearchBarContainer>
  );
};
const StyledButton = styled.button`
    display: flex;
    gap: 6px;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.primary_light};
    width: 150px;
    margin-bottom: 20px;
    padding: 0;
`;
const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-top: 24px;
`
const Code = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  padding: 4px 12px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.grey_light};
  color: ${({ theme }) => theme.colors.primary_dark};
  
  `;
const Tag = styled.div`
  display: flex;
  gap: 16px;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.grey_light};
  color: ${({ theme }) => theme.colors.grey};
  background-color: ${({theme}) => theme.colors.white};
`;

// const Image = styled.div`
//   @media ${device.mobileL} {
//     display: none;
//   }
// `
// const ErrorMessage = styled.p`
//   margin: 8px 0 0 8px;
//   color: red;
//   font-size: 0.75rem;
// `


const SearchBarContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 32px;
  padding: 48px 40px 40px 40px;
  background-image: url(${texture});
  background-repeat: no-repeat;
  background-position: right top;
  margin-bottom: 40px;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.heading_blue};
  font-size: 2rem;
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


const BottomRow = styled.div`
`;