import styled from "styled-components";
import texture from "../styles/images/FonoRastas.svg";
import { device } from "../styles";
import { useNavigate } from "react-router-dom";
import Icon from "../styles/icons";
import rx from "../styles/images/Rx.svg";
import rxplus from "../styles/images/Rxplus.svg";
import otc from "../styles/images/Otc.svg";
import { useTranslation } from "react-i18next";

export interface SearchSectionProps {
  title: string | undefined;
  subtitle: undefined | string[];
  code?: string;
  tags?: string[] | undefined | string[][][];
  prescription?: number | null;
  isNew: boolean;
}

export const DetailTitle = ({
  title,
  code,
  subtitle,
  tags,
  prescription,
  isNew,
}: SearchSectionProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handlePrescription = (code: number | null | undefined) => {
    if (!code) return rx;
    switch (code) {
      case 200000017698:
        return rx;
      case 200000017695:
        return otc;
      case 200000017699:
        return rxplus;
      default:
        return rx;
    }
  };

  return (
    <SearchBarContainer>
      <TopRow>
        <TextContainer>
          <TopContainer>
            <StyledButton onClick={() => navigate(-1)}>
              <Icon name={"arrow-left"} />
              {t("medicineDetail.goBack")}
            </StyledButton>
            <TopTagContainer>
              <Code>{code}</Code>
              {isNew && <NewSticker>{t("medicines.new")}</NewSticker>}
            </TopTagContainer>
          </TopContainer>

          <TitleContainer>
            <Image>
              <StyledImg
                src={handlePrescription(prescription)}
                alt="vaisto grupė"
              />
            </Image>
            <div>
              <Title>{title}</Title>
              <Subtitle>
                {subtitle &&
                  subtitle.length > 0 &&
                  `${t("medicineDetail.ingredients")}: `}
                {subtitle?.map((item, index) => {
                  if (index === subtitle.length - 1) {
                    return item;
                  } else {
                    return item + ", ";
                  }
                })}
              </Subtitle>
            </div>
          </TitleContainer>
        </TextContainer>
      </TopRow>
      <BottomRow>
        <TagContainer>
          {tags &&
            (() => {
              const filteredTags = tags.filter((tag) => tag !== undefined);
              return filteredTags.length > 0
                ? filteredTags.map((tag, index) => <Tag key={index}>{tag}</Tag>)
                : null;
            })()}
        </TagContainer>
      </BottomRow>
    </SearchBarContainer>
  );
};

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media ${device.mobileL} {
    flex-direction: column;
    margin-bottom: 8px;
  }
`;

const TopTagContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  flex-shrink: 0;
`;

const NewSticker = styled.div`
  background-color: ${({ theme }) => theme.colors.primary_light};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.75rem;
  font-weight: 500;
  padding: 5px 12px 3px 12px;
  border-radius: 15px;
`;
const StyledImg = styled.img`
  width: 56px;
`;
const TitleContainer = styled.div`
  display: flex;
  gap: 16px;
`;
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
  flex-wrap: wrap;
`;
const Code = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  padding: 5px 12px 3px 12px;
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
  padding: 5px 12px 3px 12px;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.grey_light};
  color: ${({ theme }) => theme.colors.grey};
  background-color: ${({ theme }) => theme.colors.white};
`;

const Image = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 8px;
  background-color: white;
  @media ${device.mobileL} {
    display: none;
  }
`;
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
  @media ${device.mobileL} {
    flex-direction: column;
    gap: 12px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.heading_blue};
  font-size: 2rem;
  font-weight: 600;
  @media ${device.mobileL} {
    font-size: 1.4rem;
    max-width: 100%;
  }
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.description_blue};
  font-size: 0.875rem;
  font-weight: 400;
  font-style: italic;
  @media ${device.mobileL} {
    max-width: 100%;
  }
`;

const BottomRow = styled.div``;
