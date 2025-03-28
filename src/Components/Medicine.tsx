import styled from "styled-components";
import Rx from "../styles/Images/Rx.svg";

export interface MedicineProps {
  id: string;
  title: string;
  subtitle: string;
  isNew?: boolean;
  tags?: { name: string }[];
}

export const Medicine = ({ title, subtitle, isNew, tags }: MedicineProps) => {
  // needs language implementation
  // actual data :)

  return (
    <MedicineContainer>
      <TopRow>
        <TopLeftContainer>
          <ImageContainer>
            <img src={Rx} />
          </ImageContainer>
          <div>
            <Title>{title}</Title>
            <Subtitle>Veikliosios medžiagos: {subtitle}</Subtitle>
          </div>
        </TopLeftContainer>
        {isNew && <NewSticker>Naujiena</NewSticker>}
      </TopRow>
      <BottomRow>
        {tags?.map((tag) => (
          <Tag key={tag.name}>{tag.name}</Tag>
        ))}
      </BottomRow>
    </MedicineContainer>
  );
};

const MedicineContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grey_light};
  padding: 16px;
  border-radius: 15px;
  margin-top: 16px;
  &:hover{
    background-color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
  }
`;

const TopLeftContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const TopRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
`;

const BottomRow = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
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
