import styled from "styled-components";
import Icon from "../../styles/icons";
import {PackItem} from "../../types"

interface PackagesProps {
  name: string;
  info: string;
  status: string;
  quantity: number;
  type: string;
  weightType: PackItem[]
}
export const Packages = ({
  name,
  info,
  status,
  quantity,
  type,
  weightType,
}: PackagesProps) => {

  return (
    <PackageContainer>
      <TopRow>
        <Title>{name}</Title>
        <Tag>{status}</Tag>
      </TopRow>
      <Subtitle>{info}</Subtitle>
      <Subtitle>
        {type}, {weightType[0].num} {weightType[0].type} <Icon name="dot" />
        Pakuotėje {quantity} vnt.{" "}
      </Subtitle>
    </PackageContainer>
  );
};
const PackageContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grey_light};
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 4px;
`;
const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
`;
const Title = styled.p`
  font-weight: 600;
`;
const Tag = styled.p`
  background-color: ${({ theme }) => theme.colors.grey_light};
  border-radius: 15px;
  padding: 4px 8px;
  font-size: 0.75rem;
`;
const Subtitle = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  align-items: center;
  gap: 7px;
  margin-top: 6px;
`;
