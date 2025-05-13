import styled from "styled-components";
import Icon from "../../styles/icons";
import { Ingredients } from "../../types";

export interface registrationInfoProps {
  icon: string;
  title: string;
  data?: Ingredients[];
}

export const IngredientsInfo = ({
  icon,
  title,
  data,
}: registrationInfoProps) => {
  if (!data) return null;

  return (
    <ItemContainer>
      <div>
        <Icon name={icon} />
      </div>
      <TextContainer>
        <p>{title}</p>
        <div>
          {data.map((item, index) => {
            const name = item.substance?.name ?? "";
            const numeratorNum = item.substance?.numerator?.num ?? "";
            const numeratorName =
              item.substance?.numerator?.name ||
              item.substance?.numerator?.type ||
              "";
            const denominatorNum = item.substance?.denominator?.num ?? "";
            const denominatorName =
              item.substance?.denominator?.name ||
              item.substance?.numerator?.type ||
              "";

            if (!name) return null;

            return (
              <Ingredient key={index}>
                <div>
                  <Icon name={"dot"} />
                </div>
                <div>
                  {name}
                  {numeratorNum &&
                    numeratorName &&
                    denominatorNum &&
                    denominatorName && (
                      <>
                        :{" "}
                        <Info>
                          {numeratorNum} {numeratorName} / {denominatorNum}{" "}
                          {denominatorName}
                        </Info>
                      </>
                    )}
                </div>
              </Ingredient>
            );
          })}
        </div>
      </TextContainer>
    </ItemContainer>
  );
};

const Info = styled.p`
  font-weight: 400;
`;

const Ingredient = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 7px;
  margin-top: 6px;
  font-style: italic;

`;
const TextContainer = styled.div`
  font-weight: 400;
  font-size: 0.875rem;
  & > div {
    font-size: 1rem;
    font-weight: 600;
  }
`;
const ItemContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;
