import { useTranslation } from "react-i18next";
import { SearchSection } from "../components/SearchSection";
import { Formik, Form, FormikState } from "formik";
import * as Yup from "yup";
import { useAllMedicines } from "../utils/hooks";
import { Medicine } from "../components/Medicine";
import styled from "styled-components";
import { device } from "../styles";
import { useNavigate, useSearchParams } from "react-router-dom";
import { slugs } from "../utils/routes";
import { PageSelector } from "../components/PageSelector";
import { Filters } from "../components/Filters";
import { useEffect, useState } from "react";
import { PopUp } from "../components/layouts/PopUp";
import Icon from "../styles/icons";
import { Loader } from "../components/Loader";

export const HomePage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false)

  const query = searchParams.get("query") || "";
  const page = searchParams.get("page") || 1;

  const [isUPD, setIsUPD] = useState(localStorage.getItem("isUPD") === 'true' || false);

  useEffect(() => {
    if (isNaN(Number(page)) || Number(page) < 0) {
      setSearchParams({
        query,
        page: "1",
      });
    }
  }, [query, page, setSearchParams]);

  const { data: medicine, isLoading } = useAllMedicines(query, Number(page), isUPD, i18n.language);

    if (isLoading) return <Loader />;
  

  console.log(medicine?.data)

  const medicineSchema = Yup.object().shape({
    medicine: Yup.string().test(
      function (value) {
        if (!value || value.length > 2) {
          return true;
        }
          // arba galima padaryti su REGEX
        return this.createError({
          message: t('validation.medicineLength', { value }),
        });
      }
    )
  });

  const formValues = { medicine: query };

const handleSubmit = (
  values: typeof formValues, 
  { resetForm }: { resetForm: (nextState?: Partial<FormikState<typeof formValues>>) => void }
) => {
  setSearchParams({
    query: values.medicine,
    page: "1",
  });

  resetForm({ values: values, isSubmitting: false, isValidating: false });
};

  const handlePageChange = (newPage: number) => {
    setSearchParams({
      query,
      page: newPage.toString(),
    });
  };

  console.log("current page: ", page)

  // const handleDateDifference = (registrationDate:string) => {
  //    const dateObj = new Date();
  //   const month   = dateObj.getUTCMonth() + 1;
  //   const day     = dateObj.getUTCDate();
  //   const year    = dateObj.getUTCFullYear();

  //   const currentDate = `${year}-${month}-${day}`;
  //   const currentDateArray = currentDate.split('-')
  //   const pastDateArray = registrationDate.split('-')

  //   console.log(currentDateArray)
  //   console.log(pastDateArray)
  // }

  return (
    <main>
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
      <form>
        <br></br>
        <label htmlFor="upd">Ar naudoti UPD test?</label>
        <input
          id="upd"
          name="upd"
          type={"checkbox"}
          checked={isUPD}
          onChange={(e) => {
            return setIsUPD(e.target.checked), localStorage.setItem("isUPD", e.target.checked.toString());
          }}
        />
      </form>
      <ContentContainer>
        <LeftColumn>
          {/* dynamic filter display */}
          {medicine !== undefined && medicine?.items !== 0 && (
            <>
              <StyledFilters />
              <ShowFilters onClick={() => setShowFilters((prev) => !prev)}>
                <Icon name={"filters"} />
                Rodyti Filtrus
              </ShowFilters>
              <PopUp
                visible={showFilters}
                title={"Filtrai"}
                onClose={() => {
                  setShowFilters(false);
                }}
              >
                <Filters />
              </PopUp>
            </>
          )}
        </LeftColumn>
        <RightColumn>
          {isLoading ? <p>Loading...</p> : ""}
          {medicine?.items !== 0 ? (
            medicine?.data?.map((item) => {
              // handleDateDifference(item.date)
              return (
                <Medicine
                  key={item.id}
                  id={item.id}
                  subtitle={item.ingredients}
                  code={item.code}
                  title={item.name}
                  isNew={false}
                  tags={item.species}
                  onClick={() =>
                    navigate(slugs.medicineDetail(item.id), {
                      state: { isUPD },
                    })
                  }
                />
              );
            })
          ) : (
            <NotFound>{t("medicines.notFound")}</NotFound>
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
    </main>
  );
};
const StyledFilters = styled(Filters)`
  display: block;

  @media ${device.mobileL} {
    display: none;
  }
`
const ShowFilters = styled.button`
  gap: 12px;
  display: none;
  padding: 14.5px 20px;
  border-radius: 26px;
  border: 1px solid ${({theme}) => theme.colors.grey_light};
  color: ${({theme}) => theme.colors.primary};
  font-weight: 500;
  font-family: "Inter";
  font-size: 1rem;
  margin-bottom: 16px;
  
  &:hover {
    background-color: ${({theme}) => theme.colors.secondary};
  }
  @media ${device.mobileL} {
    display: flex;
  }
`

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
  & > div > div:first-of-type{
    padding-top: 0px 
  }

`;
const RightColumn = styled.div`
  width: 70%;
  @media ${device.mobileL} {
    width: 100%;
  }
`;
