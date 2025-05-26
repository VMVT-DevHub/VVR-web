import styled from "styled-components";
import Icon from "../../styles/icons";

export interface registrationInfoProps {
  icon: string;
  title: string;
  data?: string | string[] | null;
  textSize?: string;
}

export const RegistrationInfo = ({
  icon,
  title,
  data,
  textSize = "small",
}: registrationInfoProps) => {


  const text =
    textSize == "small"
      ? {
          title: "0.875rem",
          data: "0.75rem",
        }
      : {
          title: "1rem",
          data: "0.875rem",
        };

        
  if (data == 'undefined' || data == null || data.length == 0) return null;
  if (!data) return null;


  return (
    <ItemContainer>
      <div>
        <Icon name={icon} />
      </div>
      <TextContainer $textSize={text}>
        <p>{title}</p>
        <p>{typeof data == 'string' ? data : data.join(`, `)}</p>
      </TextContainer>
    </ItemContainer>
  );
};
const TextContainer = styled.div<{
  $textSize: { title: string; data: string };
}>`
  font-size: ${({ $textSize }) => $textSize.title};
  font-weight: 600;
  & :first-child {
    font-size: ${({ $textSize }) => $textSize.data};
    font-weight: 400;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;
