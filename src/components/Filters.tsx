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
import { isFilterSelected } from "../utils/functions";

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
    rootID:number,
    groupID:number,
    filter: number[]
  ) => void;
}) => {
  const [isDisplayed, SetIsDisplayed] = useState<any>({
    "Vaisto grupė": true,
    "Registracijos procedūra": true,
    "Gyvūno rūšys": false,
    "Farmacinė forma": false,
    "Naudojimo būdas": false,
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
        element.groups && element.groups.length > 0
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
  inheritedList?: keyof FiltersType,
  inheritedRootId?: number,
) => {
  return filterGroups.map((element, i) => {
    const currentList = element.list || inheritedList;
    const rootID = element.list ? element.id : inheritedRootId;
    const termArray = [
      ...element.terms.map((item) => item[0]),
      ...(element && selectAllChildTerms(element.groups, [])),
    ];


    const parentIsChecked = rootID ? isFilterSelected(rootID, element.id, termArray, filterValues) : false;

    return (
      <Categories key={i}>
        {element.list ? (
          <>
            <CategoryContainer onClick={() => toggleDisplay(element.name)} $isActive={isDisplayed[element.name]}>
              <CategoryTitle>{element.name}</CategoryTitle>
              <StyledIcon $isActive={isDisplayed[element.name]} name="arrow" />
            </CategoryContainer>
            
            {isDisplayed[element.name] && (
              <Categories style={{ marginLeft: `${depth + 10}px` }}>
                {element.terms.map((term) => {

                    const isChecked = rootID ? isFilterSelected(rootID, null, [term[0]], filterValues) : false;
                  return (
                    <CheckboxRow key={term[0]}>
                      <StyledCheckbox
                        type="checkbox"
                        id={term[0].toString()}
                        onChange={(e) => {
                          if (currentList && rootID)
                            setFilterValues(currentList, rootID, element.id, [
                              Number(e.target.id),
                            ]);
                        }}
                        checked={isChecked}
                      />
                      <label htmlFor={term[0].toString()}>{term[1]}</label>
                    </CheckboxRow>
                  );
                })}
                
                {element.groups && renderFilterGroups(element.groups, depth + 10, currentList, rootID)}
              </Categories>
            )}
          </>
        ) : (
          <>
            <CheckboxRow>
              <StyledCheckbox
                type="checkbox"
                id={element.id.toString()}
                onChange={() => {
                  if (currentList && rootID) setFilterValues(currentList, rootID, element.id, termArray);
                }}
                checked={parentIsChecked}
              />
              <StyledLabel htmlFor={element.id.toString()}>
                {element.name}
              </StyledLabel>
              {(element.terms.length > 0 || element.groups.length > 0) && (
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

            {isParentDisplayed[element.name] && (
              <Categories style={{ marginLeft: `${depth + 10}px` }}>
                {element.terms.map((term) => {
                  const isChecked = filterValues?.filter.some(item => 
                    item.terms && item.terms.includes(term[0])
                  ) || false;
                  return (
                    <CheckboxRow key={term[0]}>
                      <StyledCheckbox
                        type="checkbox"
                        id={term[0].toString()}
                        onChange={(e) => {
                          if (currentList && rootID)
                            setFilterValues(currentList,  rootID, element.id, [
                              Number(e.target.id),
                            ]);
                        }}
                        checked={isChecked}
                      />
                      <label htmlFor={term[0].toString()}>{term[1]}</label>
                    </CheckboxRow>
                  );
                })}
                
                {element.groups && renderFilterGroups(element.groups, depth + 10, currentList, rootID)}
              </Categories>
            )}
          </>
        )}
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
  }
  & input:checked + label {
    color: ${({ theme }) => theme.colors.primary};
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
  margin-bottom: ${({ $isActive }) => ($isActive ? "0px" : "16px")};
  margin-top: 8px;
  cursor: pointer;
`;
const CategoryTitle = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
`;
const StyledIcon = styled(Icon)<{ $isActive: boolean }>`
  transform: ${({ $isActive }) => ($isActive ? "rotateX(180deg)" : "")};
`;
