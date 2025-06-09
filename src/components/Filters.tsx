import styled from "styled-components";
import Icon from "../styles/icons";
import { useState } from "react";
import { FilterPOST, FiltersType } from "../types";

interface isDisplayedProps {
  category: boolean;
  group: boolean;
  species: boolean;
  form: boolean;
  producer: boolean;
  date: boolean;
}

export const Filters = ({
  className,
  data,
  setFilterValues,
}: {
  className?: string;
  data?: FiltersType;
  setFilterValues: (key: keyof Pick<FilterPOST, "species" | "legalCode" | "doseForm">, filter: string) => void;
}) => {
  const [isDisplayed, SetIsDisplayed] = useState<isDisplayedProps>({
    category: false,
    group: true,
    species: false,
    form: false,
    producer: false,
    date: false,
  });

  const toggleDisplay = (item: string) => {
    SetIsDisplayed({
      ...isDisplayed,
      [item]: !isDisplayed[item as keyof isDisplayedProps],
    });
  };

  console.log(data)

  const handleGroups = (code: number) => {
    switch (code) {
      case 200000017698:
        return [200000017698, "Receptinis"];
      case 200000027079:
        return [200000027079, "Tik vet. gydytojams"];
      case 200000017695:
        return [200000017695, "Be recepto"];
      case 200000017699:
        return [200000017699, "Receptinis su išimtimis"];
      default:
        return [200000017698, "Receptinis"];
    }
  };

  const legalCodeShortened = data?.legalCode.map((group) =>
    handleGroups(group[0])
  );

  return (
    <div className={className}>
      <CategoryContainer>
        <CategoryTitle>Kategorijos</CategoryTitle>
      </CategoryContainer>
      <CategoryContainer onClick={() => toggleDisplay("group")}>
        <CategoryTitle>Vaisto grupė</CategoryTitle>
        <StyledIcon $isActive={!isDisplayed.group} name="arrow" />
      </CategoryContainer>
      {isDisplayed.group && (
        <form>
          <Categories>
            {legalCodeShortened &&
              legalCodeShortened?.map((form) => (
                <CheckboxRow key={form[0]}>
                  <StyledCheckbox
                    type="checkbox"
                    id={form[0].toString()}
                    onChange={(e) => setFilterValues("legalCode", e.target.id)}
                  />
                  <label htmlFor={form[0].toString()}>{form[1]}</label>
                </CheckboxRow>
              ))}
          </Categories>
        </form>
      )}

      <CategoryContainer onClick={() => toggleDisplay("form")}>
        <CategoryTitle>Farmacinė forma</CategoryTitle>
        <StyledIcon $isActive={!isDisplayed.form} name="arrow" />
      </CategoryContainer>
      {isDisplayed.form ? (
        <form>
          <Categories>
            {data?.doseForm.map((code) => (
              <CheckboxRow key={code[1]}>
                <StyledCheckbox
                  type="checkbox"
                  id={code[0].toString()}
                  onChange={(e) => setFilterValues("doseForm", e.target.id)}
                />
                <label htmlFor={code[0].toString()}>{code[1]}</label>
              </CheckboxRow>
            ))}
          </Categories>
        </form>
      ) : (
        ""
      )}

      <CategoryContainer onClick={() => toggleDisplay("species")}>
        <CategoryTitle>Gyvūno rūšis</CategoryTitle>
        <StyledIcon $isActive={!isDisplayed.species} name="arrow" />
      </CategoryContainer>
      {isDisplayed.species ? (
        <form>
          <Categories>
            {data?.species.map((animal) => (
              <CheckboxRow key={animal[0]}>
                <StyledCheckbox
                  type="checkbox"
                  id={animal[0].toString()}
                  onChange={(e) => setFilterValues("species", e.target.id)}
                />
                <label htmlFor={animal[0].toString()}>{animal[1]}</label>
              </CheckboxRow>
            ))}
          </Categories>
        </form>
      ) : (
        ""
      )}

      <CategoryContainer onClick={() => toggleDisplay("producer")}>
        <CategoryTitle>Gamintojas / Registruotojas</CategoryTitle>
        <StyledIcon $isActive={!isDisplayed.producer} name="arrow" />
      </CategoryContainer>
      {isDisplayed.producer ? <Categories></Categories> : ""}

      <CategoryContainer onClick={() => toggleDisplay("date")}>
        <CategoryTitle>Registravimo laikotarpis</CategoryTitle>
        <StyledIcon $isActive={!isDisplayed.date} name="arrow" />
      </CategoryContainer>
      {isDisplayed.date ? <Categories></Categories> : ""}
    </div>
  );
};

const StyledCheckbox = styled.input`
  accent-color: ${({theme}) => theme.colors.primary};
  cursor:pointer;
`
const CheckboxRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;

  & label{
    cursor:pointer;
    color:  ${({theme}) => theme.colors.grey};
  }
  & label:hover{
    color:  ${({theme}) => theme.colors.primary};
    font-weight: 500;
  }
  & input:checked + label {
    color:  ${({theme}) => theme.colors.primary};
    font-weight: 500;
  }
  
`

const Categories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0 16px 0;
  cursor: pointer;
`;
const CategoryTitle = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
`;
const StyledIcon = styled(Icon)<{ $isActive: boolean }>`
  transform: ${({ $isActive }) => ($isActive ? "rotateX(180deg)" : "")};
`;




