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

  if (data == "undefined" || data == null || data.length == 0) return null;
  if (!data) return null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let displayData:any;

  if (typeof data == "string") {
    displayData = data;
  } else {
    if (title == "Gamintojas (-ai)") {
      displayData = data.map((item) => {
        return (
          <InfoContainer key={item}>
            <div>
              <Icon name={"dot"} />
            </div>
            {item}
          </InfoContainer>
        );
      });
    } else {
        displayData = data.join(`, `);
    }
  }

  return (
    <ItemContainer>
      <div>
        <Icon name={icon} />
      </div>
      <TextContainer $textSize={text}>
        <p>{title}</p>
        <div>
          {displayData}
        </div>
      </TextContainer>
    </ItemContainer>
  );
};
const InfoContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 7px;
    margin-bottom: 6px;
    font-weight: 600;

`
const TextContainer = styled.div<{
  $textSize: { title: string; data: string };
}>`
  font-size: ${({ $textSize }) => $textSize.title};
  font-weight: 600;
  & p {
    font-size: ${({ $textSize }) => $textSize.data};
    font-weight: 400;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;
