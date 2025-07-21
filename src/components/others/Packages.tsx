import styled from "styled-components";
import Icon from "../../styles/icons";
import {PackItem} from "../../types"
import { useTranslation } from "react-i18next";

interface PackagesProps {
  id: number;
  name: string;
  info: string;
  status?: string;
  status_code?: number;
  quantity: number;
  type: string;
  weightType: PackItem[]
}

// Everything that's commented here is responsible for status tags on packs, currently not needed.
export const Packages = ({
  name,
  info,
  // status,
  // status_code,
  quantity,
  type,
  weightType,
}: PackagesProps) => {

  const { t } = useTranslation()
  //   const handleStatus = (code:number | null | undefined) => {
  //   if(!code) return "not marketed";
  //   switch (code){
  //       case 100000072074:
  //         return "#c36464";
  //       case 100000072075:
  //         return "#a4a2a2";
  //       case 100000072083:
  //         return "#6b9e5d";
  //       case 200000026055:
  //         return "#a4a2a2"
  //       case 230000000000:
  //         return "#a4a2a2";
  //       default:
  //         return "not marketed";
  //     }
  // }
  return (
    <PackageContainer key={name}>
      <TopRow>
        <Title>{name}</Title>
        {/* <Tag $statusColor={handleStatus(status_code)}>{status}</Tag> */}
      </TopRow>
      <Subtitle>{info}</Subtitle>
      {weightType.map(item => {
        return(
          <Subtitle>
            {type}, {item.num} {item.name ? item.name : item.type} <Icon name="dot" />
             {quantity  !== 0 ? `${t('medicineDetail.pack')} ${quantity} ${t('medicineDetail.quantity')}` : '' }
          </Subtitle>
        )
      })}
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
// const Tag = styled.p<{$statusColor:string}>`
//   background-color: ${({ $statusColor }) => ($statusColor)};
//   color: white;
//   border-radius: 15px;
//   padding: 4px 8px;
//   font-size: 0.75rem;
// `;
const Subtitle = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  align-items: center;
  gap: 7px;
  margin-top: 6px;
`;
