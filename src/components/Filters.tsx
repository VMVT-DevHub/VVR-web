import styled from "styled-components";
import Icon from "../styles/icons";
import { useState } from "react";
import { FiltersType } from "../types";

interface isDisplayedProps {
  category: boolean;
  group: boolean;
  form: boolean;
  producer: boolean;
  date: boolean;
}

export const Filters = ({ className, data }: { className?: string, data?: FiltersType}) => {
  const [isDisplayed, SetIsDisplayed] = useState<isDisplayedProps>({
    category: false,
    group: false,
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

 
  return (
    <div className={className}>
      <CategoryContainer>
        <CategoryTitle>Kategorijos</CategoryTitle>
      </CategoryContainer>
      <CategoryContainer onClick={() => toggleDisplay("group")}>
        <CategoryTitle>Vaisto grupė</CategoryTitle>
        <StyledIcon $isActive={!isDisplayed.group} name="arrow" />
      </CategoryContainer>
      {isDisplayed.group && <Categories>
        {data?.doseForm.map(form => <p>{form[1]}</p>)}
      </Categories>}

      <CategoryContainer onClick={() => toggleDisplay("form")}>
        <CategoryTitle>Farmacinė forma</CategoryTitle>
        <StyledIcon $isActive={!isDisplayed.form} name="arrow" />
      </CategoryContainer>
      {isDisplayed.form ? <Categories></Categories> : ""}

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

const Categories = styled.div``;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0 16px 12px;
  cursor: pointer;
`;
const CategoryTitle = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
`;
const StyledIcon = styled(Icon)<{ $isActive: boolean }>`
  transform: ${({ $isActive }) => ($isActive ? "rotateX(180deg)" : "")};
`;
