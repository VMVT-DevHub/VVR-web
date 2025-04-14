import styled from "styled-components";
import Rx from "../styles/Images/Rx.svg";
import { device } from "../styles";

export interface MedicineProps {
  id: string;
  title: string;
  subtitle: string;
  isNew?: boolean;
  tags?: { name: string }[];
  onClick?: () => void;
}

export const Medicine = ({ title, subtitle, isNew, tags, onClick}: MedicineProps) => {
  // needs language implementation
  // actual data :)


  return (
    <MedicineContainer onClick={onClick}>
      <TopRow>
        <TopRightContainer>
          {isNew && <Code> LT/2/22/0152/001-022</Code>}
          {isNew && <NewSticker>Naujiena</NewSticker>}
        </TopRightContainer>

        <TopLeftContainer>
          <ImageContainer>
            <img src={Rx} />
          </ImageContainer>
          <div>
            <Title>{title}</Title>
            <Subtitle>Veikliosios medžiagos: {subtitle}</Subtitle>
          </div>
        </TopLeftContainer>
      </TopRow>
      <BottomRow>
        <TagContainer>
        {tags?.map((tag) => (
          <Tag key={tag.name}>{tag.name}</Tag>
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
`;

const TopRightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 8px;
  order: 2;
  @media ${device.mobileXL} {
    order: 1;
  }
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
  font-size: 1.3rem;
`;
const Subtitle = styled.div`
  font-weight: 400;
  font-size: 0.875rem;
`;

const NewSticker = styled.div`
  background-color: ${({ theme }) => theme.colors.primary_light};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.75rem;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 15px;
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

`;

const Code = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  padding: 4px 12px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.grey_light};
  color: ${({ theme }) => theme.colors.primary_dark};
  min-width: 160px;
`;
