/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import Icon from "../styles/icons";
import { useMemo, useState } from "react";
import {
  FilterGroups,
  FilterPOST,
  FiltersType,
  ProcessedFilterGroup,
} from "../types";
import { isSubset } from "../utils/functions";

export const Filters = ({
  className,
  data,
  filterGroups,
  filterValues,
  setFilterValues,
}: {
  className?: string;
  data?: FiltersType;
  filterGroups?: FilterGroups[];
  filterValues: FilterPOST;
  setFilterValues: (
    key: keyof Pick<
      FilterPOST,
      "species" | "legalCode" | "doseForm" | "reglCase"
    >,
    filter: number[]
  ) => void;
}) => {
  const [isDisplayed, SetIsDisplayed] = useState<any>({
    "Gyvūno rūšys": true,
    "Farmacinė forma": true,
    "Naudojimo būdas": true,
  });
  const [isParentDisplayed, SetIsParentDisplayed] = useState<any>({});

  const toggleDisplay = (item: string) => {
    SetIsDisplayed({
      ...isDisplayed,
      [item]: !isDisplayed[item],
    });
  };
  const toggleParentDisplay = (item: string) => {
    SetIsParentDisplayed({
      ...isParentDisplayed,
      [item]: !isParentDisplayed[item],
    });
  };

  const processFilterGroups = (
    filterGroups: FilterGroups[] | undefined,
    inheritedList?: keyof FiltersType
  ): ProcessedFilterGroup[] => {
    if (!filterGroups) return [];

    return filterGroups.map((element) => {
      const currentList = element.list || inheritedList;

      const processedTerms: [number, string][] =
        element.terms?.map((code): [number, string] => {
          if (currentList && data) {
            const found = data[currentList]?.find((item) => item[0] === code);
            const altName = found && (found.length > 2 ? String(found[2]) : String(found[1])) || ''
            return [code, found ? altName : `Unknown ${code}`];
          }
          return [code, `No list context for ${code}`];
        }) || [];

      const processedGroups =
        element.groups?.length > 0
          ? processFilterGroups(element.groups, currentList)
          : [];

      return {
        id: element.id,
        name: element.name,
        terms: processedTerms,
        groups: processedGroups,
        parent: element.parent,
        list: element.list,
      };
    });
  };
  

  //maps filter names to IDs
  const processedFilterGroupData = useMemo(
    () => processFilterGroups(filterGroups),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filterGroups, data]
  );

  const selectAllChildTerms = (parent:ProcessedFilterGroup[], termArray:number[]) => {
    parent.map((element) => {
      if(element.terms && element.terms.length > 0)
      {
        termArray.push(...element.terms.map(item => item[0]))
      }
      if(element.groups)
      {
        selectAllChildTerms(element.groups, termArray)
      }
    })
    return termArray;
  }

  //Dinamically renders information from /filter/groups api.
  //It recurses over itself to infinite depth, made up from 3 levels:
  // 1. if(element.list), it's the master, has show more/less logic
  // 2. if(!element.list), it's a parent, displayed as a checkbox, checks all
  // it's children (and theirs) once clicked, has show more/less logic
  // 3. if(element.terms), child, is one checkbox the parent covers.
  // There should only be one master, but a child can be a parent.

  const renderFilterGroups = (
    filterGroups: ProcessedFilterGroup[],
    depth: number,
    inheritedList?: keyof FiltersType
  ) => {
    return filterGroups.map((element, i) => {
      const currentList = element.list || inheritedList;
      const termArray = [
        ...element.terms.map((item) => item[0]),
        ...(element && selectAllChildTerms(element.groups, [])),
      ];

      const parentIsChecked =
        (currentList && termArray.length > 0 &&
          isSubset(filterValues[currentList], termArray) &&
          filterValues[currentList].length !== 0) ||
        false;
      return (
        <Categories key={i}>
          {element.list ? (
            <CategoryContainer onClick={() => toggleDisplay(element.name)} $isActive={isDisplayed[element.name]}>
              <CategoryTitle>{element.name}</CategoryTitle>
              <StyledIcon $isActive={isDisplayed[element.name]} name="arrow" />
              
            </CategoryContainer>
            
          ) : (
            <>
              <CheckboxRow>
                <StyledCheckbox
                  type="checkbox"
                  id={element.id.toString()}
                  onChange={() => {
                    if (currentList) setFilterValues(currentList, termArray);
                  }}
                  checked={parentIsChecked}
                />
                <StyledLabel htmlFor={element.id.toString()}>
                  {element.name}
                </StyledLabel>
                {element.terms.length > 0 && (
                  <button
                    type="button"
                    onClick={() => toggleParentDisplay(element.name)}
                  >
                    <StyledIcon
                      $isActive={!isParentDisplayed[element.name]}
                      name="arrow"
                    />
                  </button>
                )}
              </CheckboxRow>

              {isParentDisplayed[element.name] && element.terms && (
                <Categories style={{ marginLeft: `${depth}px` }}>
                  {element.terms.map((term) => {
                    const isChecked = currentList
                      ? filterValues[currentList].includes(term[0])
                      : false;
                    return (
                      <CheckboxRow key={term[0]}>
                        <StyledCheckbox
                          type="checkbox"
                          id={term[0].toString()}
                          onChange={(e) => {
                            if (currentList)
                              setFilterValues(currentList, [
                                Number(e.target.id),
                              ]);
                          }}
                          checked={isChecked}
                        />
                        <label htmlFor={term[0].toString()}>{term[1]}</label>
                      </CheckboxRow>
                    );
                  })}
                </Categories>
              )}
            </>
          )}
          {isDisplayed[element.name] || element.list && element.terms && (
                <Categories style={{ marginLeft: `${depth}px` }}>
                  {element.terms.map((term) => {
                    const isChecked = currentList
                      ? filterValues[currentList].includes(term[0])
                      : false;
                    return (
                      <CheckboxRow key={term[0]}>
                        <StyledCheckbox
                          type="checkbox"
                          id={term[0].toString()}
                          onChange={(e) => {
                            if (currentList)
                              setFilterValues(currentList, [
                                Number(e.target.id),
                              ]);
                          }}
                          checked={isChecked}
                        />
                        <label htmlFor={term[0].toString()}>{term[1]}</label>
                      </CheckboxRow>
                    );
                  })}
                </Categories>
              )}
          
          {isDisplayed[element.name] ||
            (element.groups && (
              <div style={{ marginLeft: `${depth}px` }}>
                {renderFilterGroups(element.groups, depth + 10, currentList)}
              </div>
            ))}
        </Categories>
      );
    });
  };

  return (
    <div className={className}>
      {processedFilterGroupData &&
        renderFilterGroups(processedFilterGroupData, 0)}
    </div>
  );
};
const StyledLabel = styled.label`
`;
const StyledCheckbox = styled.input`
  accent-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;
const CheckboxRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;

  & label {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.grey};
  }
  & label:hover {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
  }
  & input:checked + label {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
  }
`;

const Categories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CategoryContainer = styled.div<{ $isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  margin-bottom: ${({ $isActive }) => ($isActive ? "20px" : "0px")};
  cursor: pointer;
`;
const CategoryTitle = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
`;
const StyledIcon = styled(Icon)<{ $isActive: boolean }>`
  transform: ${({ $isActive }) => ($isActive ? "rotateX(180deg)" : "")};
`;
