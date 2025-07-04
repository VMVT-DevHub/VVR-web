/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from "react-i18next";
import { SearchSection } from "../components/SearchSection";
import { Formik, Form, FormikState } from "formik";
import * as Yup from "yup";
import { useFilters, useMedicines } from "../utils/hooks";
import { Medicine } from "../components/Medicine";
import styled from "styled-components";
import { device } from "../styles";
import { useNavigate, useSearchParams } from "react-router-dom";
import { slugs } from "../utils/routes";
import { PageSelector } from "../components/PageSelector";
import { Filters } from "../components/Filters";
import { useEffect, useRef, useState } from "react";
import { PopUp } from "../components/layouts/PopUp";
import Icon from "../styles/icons";
import { Loader } from "../components/Loader";
import { FilterPOST } from "../types";
import { handleDateDifference, isSubset } from "../utils/functions";
import rx from "../styles/images/Rx.svg";
import rxplus from "../styles/images/Rxplus.svg";
import otc from "../styles/images/Otc.svg";

export const HomePage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const paginationRef = useRef<null | HTMLDivElement>(null);

  const query = searchParams.get("q") || "";
  const page = searchParams.get("p") || 1; 
  const species = searchParams.get("r")?.split('.').map(Number).filter(Number) || [];
  const legalCode = searchParams.get("g")?.split('.').map(Number).filter(Number) || [];
  const doseForm = searchParams.get("f")?.split('.').map(Number).filter(Number) || [];
  const reglCase = searchParams.get("rc")?.split('.').map(Number).filter(Number) || [];

  const [isUPD, setIsUPD] = useState(
    localStorage.getItem("isUPD") === "true" || false
  );

  // useEffect(() => {
  //   if (paginationRef.current) {
  //     paginationRef.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //       inline: "start",
  //     });
  //   }
  // }, [page]);


  const [filterValues, setFilterValues] = useState<FilterPOST>({
    page: Number(page),
    limit: 15,
    desc: true,
    search: query,
    species: species,
    legalCode: legalCode,
    doseForm: doseForm,
    reglCase: reglCase,
    filter:[]
  });

  useEffect(() => {
    const filters = {
      species: "r",
      legalCode: "g",
      doseForm: "f",
      reglCase: "rc"
    };

    setSearchParams((searchParams) => {
      Object.entries(filters).forEach(([filterKey, paramKey]) => {
        const filterArray = filterValues[filterKey as keyof FilterPOST];

        if (Array.isArray(filterArray) && filterArray?.length > 0) {
          searchParams.set(paramKey, filterArray.join("."));
        } else {
          searchParams.delete(paramKey);
        }
      });
      return searchParams;
    });
  }, [filterValues.species, filterValues.legalCode, filterValues.doseForm, filterValues.reglCase]);

  useEffect(() => {
    if (isNaN(Number(page)) || Number(page) < 0) {
       setSearchParams(searchParams => {
          searchParams.set("p", "1");
          return searchParams;
        });
        setFilterValues((prev) => ({
        ...prev,
        page: 1
        }));
    }
  }, [page]);

  const { data: medicine, isLoading } = useMedicines(filterValues, isUPD, i18n.language);
  const { filters, filterGroups } = useFilters(i18n.language);

  const medicineSchema = Yup.object().shape({
    medicine: Yup.string().test(function (value) {
      if (!value || value.length > 2) {
        return true;
      }
      return this.createError({
        message: "validation.medicineLength",
      });
    }),
  });
  const formValues = { medicine: query };

  const handleSubmit = (
    values: typeof formValues,
    {
      resetForm,
    }: {
      resetForm: (nextState?: Partial<FormikState<typeof formValues>>) => void;
    }
  ) => {

     setSearchParams(searchParams => {
      searchParams.set("q", values.medicine);
      searchParams.set("p", "1");
      return searchParams;
    });

    setFilterValues((prev) => ({
      ...prev,
      ["search"]: values.medicine,
    }));

    resetForm({ values: values, isSubmitting: false, isValidating: false });
  };

  const handleFilterChange = (
    rootID: number,
    groupID: number,
    filter: number[],
    groupFilter?: number[]
  ) => {
    const rootExists = filterValues.filter.findIndex(
      (item) => item.id === rootID
    );
    const groupAlreadySelected =
      filterValues.filter.filter((item) => item.groups?.includes(groupID))
        .length > 0;

    if (filter.length === 1) {//one term
      
      const term = filter[0];

      setFilterValues((prev) => {
        if (rootExists !== -1) {//if object exists

          const updatedFilter = [...prev.filter];
          const existingTerms = updatedFilter[rootExists].terms || [];
          const existingGroups = updatedFilter[rootExists].groups || [];

          if (groupAlreadySelected && groupFilter) {// a term in group is unchecked
            //1. remove group
            updatedFilter[rootExists] = {
              ...updatedFilter[rootExists],
              groups: existingGroups.filter((g) => g !== groupID),
            };
            //2. push group terms minus current term
            updatedFilter[rootExists] = {
              ...updatedFilter[rootExists],
              terms: [
                ...existingTerms,
                ...groupFilter.filter((t) => t !== term),
              ],
            };
          }
          else { // regular term toggle
            if (groupFilter && isSubset([...existingTerms, term],
               groupFilter)) { // does this term finish group
              //1. add group
              updatedFilter[rootExists] = {
                ...updatedFilter[rootExists],
                groups: [...existingGroups, groupID],
              };
              //2. remove terms
              updatedFilter[rootExists] = {
                ...updatedFilter[rootExists],
                terms: existingTerms.filter((t) => !groupFilter.includes(t)),
              };
            } else {
              updatedFilter[rootExists] = {
                ...updatedFilter[rootExists],
                terms: existingTerms.includes(term)
                  ? existingTerms.filter((t) => t !== term)
                  : [...existingTerms, term],
              };
            }
          }

          return {
            ...prev,
            filter: updatedFilter,
          };
        } else {
          //object doesnt exist, create one
          return {
            ...prev,
            filter: [
              ...prev.filter,
              {
                id: rootID,
                terms: [term],
              },
            ],
          };
        }
      });
    } else {//groups
      setFilterValues((prev) => {
        if (rootExists !== -1) { //if object exists
         
          const updatedFilter = [...prev.filter];
          const existingTerms = updatedFilter[rootExists].terms || [];
          const existingGroups = updatedFilter[rootExists].groups || [];

          const termsToRemove = filter.filter((term) =>
            existingTerms.includes(term)
          );

          if (termsToRemove.length > 0) {// if there are stray terms from this group, remove them
            updatedFilter[rootExists] = {
              ...updatedFilter[rootExists],
              terms: existingTerms.filter((t) => !filter.includes(t)),
            };
          }

          updatedFilter[rootExists] = {
            ...updatedFilter[rootExists],
            groups: existingGroups.includes(groupID)
              ? existingGroups.filter((g) => g !== groupID)
              : [...existingGroups, groupID],
          };

          return {
            ...prev,
            filter: updatedFilter,
          };
        } else {//object doesnt exist, create one
          return {
            ...prev,
            filter: [
              ...prev.filter,
              {
                id: rootID,
                groups: [groupID],
              },
            ],
          };
        }
      });
    }

    setSearchParams((searchParams) => {
      searchParams.set("p", "1");
      return searchParams;
    });
  };


  const handlePageChange = (newPage: number) => {
    setSearchParams(searchParams => {
      searchParams.set("p", newPage.toString());
      return searchParams;
    });

    setFilterValues((prev) => ({
      ...prev,
      ["page"]: newPage,
    }));
  };

  return (
    <main ref={paginationRef}>
      <Formik
        initialValues={formValues}
        onSubmit={handleSubmit}
        validationSchema={medicineSchema}
        validateOnChange={true}
        enableReinitialize={false}
      >
        {({ values, errors, setFieldValue }) => {
          return (
            <Form>
              <SearchSection
                title={t("homePage.title")}
                subtitle={t("homePage.subtitle")}
                value={values.medicine}
                name="medicine"
                onChange={(el) => setFieldValue("medicine", el)}
                error={errors.medicine}
                showError={true}
              />
            </Form>
          );
        }}
      </Formik>
      
      <ContentContainer>
        <LeftColumn>
          {/* {medicine !== undefined && medicine?.items !== 0 && ( */}
          <>
            <StyledFilters
              data={filters}
              filterGroups={filterGroups}
              filterValues={filterValues}
              setFilterValues={handleFilterChange}
            />
            <ShowFilters onClick={() => setShowFilters((prev) => !prev)}>
              <Icon name={"filters"} />
              {t('homePage.showFilters')}
            </ShowFilters>
            <PopUp
              visible={showFilters}
              title={"Filtrai"}
              onClose={() => {
                setShowFilters(false);
              }}
            >
              <Filters
                data={filters}
                filterGroups={filterGroups}
                filterValues={filterValues}
                setFilterValues={handleFilterChange}
              />
            </PopUp>
          </>
          {/* )} */}
          <form>
        <br></br>
        <label htmlFor="upd">Ar naudoti UPD test?</label>
        <input
          id="upd"
          name="upd"
          type={"checkbox"}
          checked={isUPD}
          onChange={(e) => {
            return (
              setIsUPD(e.target.checked),
              localStorage.setItem("isUPD", e.target.checked.toString())
            );
          }}
        />
      </form>
        </LeftColumn>
        <RightColumn>
          {isLoading ? <Loader /> : medicine === undefined && <ErrorMessage><p>{t('error.noMedicine')}</p></ErrorMessage>}
          {medicine?.items !== 0 ? (
            medicine?.data?.map((item) => {
              return (
                  <a
                  key={item.id}
                  href={slugs.medicineDetail(item.id)}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(slugs.medicineDetail(item.id), {
                      state: { isUPD },
                    });
                  }}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Medicine
                    key={item.id}
                    id={item.id}
                    subtitle={item.ingredients}
                    code={item.code}
                    title={item.name}
                    isNew={handleDateDifference(item.date)}
                    packRange={item.packRange}
                    tags={item.species}
                    legalCode={item.legalCode}
                  />
                </a>

              );
            })
          ) : (
            <NotFoundContainer>
              <NotFound>{t("medicines.notFound")}</NotFound>
              <StyledLink onClick={() => (window.location.href = "/")}>
                <Icon name="arrow-left" />
                {t("error.notFoundLink")}
              </StyledLink>
            </NotFoundContainer>
          )}
          {medicine !== undefined && medicine?.items !== 0 && (
            <PageSelector
              currentPage={Number(page)}
              total={medicine.total}
              setCurrentPage={handlePageChange}
            />
          )}
        </RightColumn>
      </ContentContainer>
      <>
        <Explanation>{t("footer.meaning")}</Explanation>
      <TopRow>
        <Entry>
          <StyledImg src={rx} alt="RX" />
          <Paragraph>{t("footer.prescription")}</Paragraph>
        </Entry>
        <Entry>
          <StyledImg src={otc} alt="OTC" />
          <Paragraph>{t("footer.nonprescription")}</Paragraph>
        </Entry>
        <Entry>
          <StyledImg src={rxplus} alt="RxPlus"/>
          <Paragraph>{t("footer.vetPrescription")}</Paragraph>
        </Entry>
      </TopRow>
        </>
    </main>
  );

};

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.grey};
`;
const StyledImg = styled.img`
  width: 24px;
`;
const Explanation = styled.p`
  margin-bottom: 8px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
`;
const TopRow = styled.div`
  display: flex;
  gap: 16px;
  @media ${device.mobileL} {
    flex-direction: column;
  }
  margin-bottom: 16px;
`;
const Entry = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ErrorMessage = styled.div`
  width: 450px;
  margin: 0 auto;
`
const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledLink = styled.a`
  display: flex;
  gap: 6px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary_light};
  margin-top: 8px;
  cursor: pointer;
  & :hover {
    text-decoration: dashed;
  }
`;

// const StyledButton = styled.button`
//   border: 1px solid grey;
//   border-radius: 8px;
//   margin-top: 8px;
// `
const StyledFilters = styled(Filters)`
  display: block;
  @media ${device.mobileL} {
    display: none;
  }
`;
const ShowFilters = styled.button`
  gap: 12px;
  display: none;
  padding: 14.5px 20px;
  border-radius: 26px;
  border: 1px solid ${({ theme }) => theme.colors.grey_light};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 16px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  @media ${device.mobileL} {
    display: flex;
  }
`;

const NotFound = styled.p`
  font-weight: 500;
  margin-top: 40px;
`;
const ContentContainer = styled.div`
  display: flex;
  padding-top: 40px;
  gap: 40px;
  @media ${device.mobileL} {
    gap: 0;
    flex-direction: column;
  }
`;
const LeftColumn = styled.div`
  width: 30%;
  @media ${device.mobileL} {
    width: 100%;
  }
  & > div > div:first-of-type {
    padding-top: 0px;
  }
`;
const RightColumn = styled.div`
  width: 70%;
  @media ${device.mobileL} {
    width: 100%;
  }
`;


