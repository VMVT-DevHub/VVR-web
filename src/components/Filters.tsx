import styled from "styled-components";
import Icon from "../styles/icons";
import { useState } from "react";
import { FilterPOST, FiltersType } from "../types";
import { useTranslation } from "react-i18next";

interface isDisplayedProps {
  category?: boolean;
  group: boolean;
  species: boolean;
  form: boolean;
  producer?: boolean;
  procedure?: boolean;
}

export const Filters = ({
  className,
  data,
  filterValues,
  setFilterValues,
}: {
  className?: string;
  data?: FiltersType;
  filterValues: FilterPOST;
  setFilterValues: (key: keyof Pick<FilterPOST, "species" | "legalCode" | "doseForm" | "reglCase">, filter: string) => void;
}) => {

  const [t] = useTranslation()
  const [isDisplayed, SetIsDisplayed] = useState<isDisplayedProps>({
    category: false,
    group: true,
    species: false,
    form: false,
    producer: false,
    procedure: true,
  });

  const toggleDisplay = (item: string) => {
    SetIsDisplayed({
      ...isDisplayed,
      [item]: !isDisplayed[item as keyof isDisplayedProps],
    });
  };

  const handleGroups = (code: number) => {
    switch (code) {
      case 200000017698:
        return [200000017698, t('filters.RX')];
      case 200000027079:
        return [200000027079, t('filters.vetsOnly')];
      case 200000017695:
        return [200000017695, t('filters.OTC')];
      case 200000017699:
        return [200000017699, t('filters.RXplus')];
      case 100000072084:
        return [100000072084, t('filters.RXhuman')]
      default:
        return [200000017698, t('filters.RX')];
    }
  };

  const legalCodeShortened = data?.legalCode.map((group) =>
    handleGroups(group[0])
  );

  return (
    <div className={className}>
      {/* <CategoryContainer>
        <CategoryTitle>Kategorijos</CategoryTitle>
      </CategoryContainer> */}
      <CategoryContainer onClick={() => toggleDisplay("group")}>
        <CategoryTitle>{t('filters.legalCode')}</CategoryTitle>
        <StyledIcon $isActive={!isDisplayed.group} name="arrow" />
      </CategoryContainer>
      {isDisplayed.group && (
        <form>
          <Categories>
            {legalCodeShortened &&
              legalCodeShortened?.map((form) => {
                const isChecked =
                  filterValues.legalCode.includes(Number(form[0])) || false;
                return (
                  <CheckboxRow key={form[0]}>
                    <StyledCheckbox
                      type="checkbox"
                      id={form[0].toString()}
                      onChange={(e) =>
                        setFilterValues("legalCode", e.target.id)
                      }
                      checked={isChecked}
                    />
                    <label htmlFor={form[0].toString()}>{form[1]}</label>
                  </CheckboxRow>
                );
              })}
          </Categories>
        </form>
      )}

      <CategoryContainer onClick={() => toggleDisplay("procedure")}>
        <CategoryTitle>{t('filters.procedure')}</CategoryTitle>
        <StyledIcon $isActive={!isDisplayed.procedure} name="arrow" />
      </CategoryContainer>
      {isDisplayed.procedure ? (
        <form>
          <Categories>
            {data?.reglCase.map((code) => {
              const isChecked =
                filterValues.reglCase.includes(Number(code[0])) || false;
              return (
                <CheckboxRow key={code[1]}>
                  <StyledCheckbox
                    type="checkbox"
                    id={code[0].toString()}
                    onChange={(e) => setFilterValues("reglCase", e.target.id)}
                    checked={isChecked}
                  />
                  <label htmlFor={code[0].toString()}>{code[1]}</label>
                </CheckboxRow>
              );
            })}
          </Categories>
        </form>
      ) : (
        ""
      )}

      <CategoryContainer onClick={() => toggleDisplay("form")}>
        <CategoryTitle>{t('filters.doseForm')}</CategoryTitle>
        <StyledIcon $isActive={!isDisplayed.form} name="arrow" />
      </CategoryContainer>
      {isDisplayed.form ? (
        <form>
          <Categories>
            {data?.doseForm.map((code) => {
              const isChecked =
                filterValues.doseForm.includes(Number(code[0])) || false;
              return (
                <CheckboxRow key={code[1]}>
                  <StyledCheckbox
                    type="checkbox"
                    id={code[0].toString()}
                    onChange={(e) => setFilterValues("doseForm", e.target.id)}
                    checked={isChecked}
                  />
                  <label htmlFor={code[0].toString()}>{code[1]}</label>
                </CheckboxRow>
              );
            })}
          </Categories>
        </form>
      ) : (
        ""
      )}

      <CategoryContainer onClick={() => toggleDisplay("species")}>
        <CategoryTitle>{t('filters.species')}</CategoryTitle>
        <StyledIcon $isActive={!isDisplayed.species} name="arrow" />
      </CategoryContainer>
      {isDisplayed.species ? (
        <form>
          <Categories>
            {data?.species.map((animal) => {
              const isChecked =
                filterValues.species.includes(Number(animal[0])) || false;
              return (
                <CheckboxRow key={animal[0]}>
                  <StyledCheckbox
                    type="checkbox"
                    id={animal[0].toString()}
                    onChange={(e) => setFilterValues("species", e.target.id)}
                    checked={isChecked}
                  />
                  <label htmlFor={animal[0].toString()}>{animal[1]}</label>
                </CheckboxRow>
              );
            })}
          </Categories>
        </form>
      ) : (
        ""
      )}

      {/* <CategoryContainer onClick={() => toggleDisplay("producer")}>
        <CategoryTitle>Gamintojas / Registruotojas</CategoryTitle>
        <StyledIcon $isActive={!isDisplayed.producer} name="arrow" />
      </CategoryContainer>
      {isDisplayed.producer ? <Categories></Categories> : ""} */}

      
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




