import styled from "styled-components";
import { device } from "../styles";
import { useTranslation } from "react-i18next";
import { handlePrescription } from "../utils/functions";

export interface MedicineProps {
  id: string;
  title: string;
  subtitle?: string[];
  code: string;
  isNew?: boolean;
  tags?: string[];
  legalCode?: number;
  packRange: string;
  onClick?: () => void;
}

export const Medicine = ({ code, title, subtitle, isNew, tags, legalCode, packRange , onClick}: MedicineProps) => {

  const { t } = useTranslation();

  return (
    <MedicineContainer onClick={onClick}>
      <TopRow>
        <TopRightContainer>
          <Code> <p>{code}</p><p>{packRange && packRange}</p></Code>
          {isNew && <NewSticker>{t('medicines.new')}</NewSticker>}
        </TopRightContainer>

        <TopLeftContainer>
          <ImageContainer>
           <img
              src={handlePrescription(legalCode)}
              alt="vaisto grupė"
            />
          </ImageContainer>
          <div>
            <Title>{title}</Title>
            {subtitle && (
              <Subtitle>
                {t('medicines.ingredients')}
                {subtitle.length > 4
                  ? subtitle?.slice(0, 4).join(", ") + "..."
                  : subtitle?.join(", ")}
              </Subtitle>
            )}
          </div>
        </TopLeftContainer>
      </TopRow>
      <BottomRow>
        <TagContainer>
          {tags?.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagContainer>
      </BottomRow>
    </MedicineContainer>
  );
};

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;
`

const MedicineContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grey_light};
  padding: 16px;
  border-radius: 15px;
  margin-bottom: 16px;
  &:hover{
    background-color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
  }
`;

const TopLeftContainer = styled.div`
  display: flex;
  gap: 16px;
  order: 1;
  @media ${device.mobileL} {
    order: 2;
  }
  flex: 1 1 0;
  min-width: 0;
`;

const TopRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
 
  gap: 8px;
  order: 2;
  @media ${device.mobileXL} {
    order: 1;
    width: 100%;
    flex-direction: row;
    align-items: start;
  }
  flex: 0 0 auto;
`;

const TopRow = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 8px;
  @media ${device.mobileXL} {
    flex-direction: column;
  }
`;

const BottomRow = styled.div`
  display: flex;
  margin-top: 16px;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
`;
const Subtitle = styled.div`
  font-weight: 400;
  font-size: 0.875rem;
  font-style: italic;

`;

const NewSticker = styled.div`
  background-color: ${({ theme }) => theme.colors.primary_light};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.75rem;
  font-weight: 500;
  padding: 5px 12px 3px 12px;
  border-radius: 15px;
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
`;

const Code = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  padding: 5px 12px 3px 12px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.grey_light};
  color: ${({ theme }) => theme.colors.primary_dark};
  display: flex;
  flex-direction: column;
  align-items: end;
  @media ${device.mobileXL} {
    flex-direction: row;
    gap: 8px;
  }
`;
