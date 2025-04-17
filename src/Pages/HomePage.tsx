import { useTranslation } from "react-i18next";
import { SearchSection } from "../Components/SearchSection";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useLocations } from "../utils/hooks";
import { Medicine } from "../Components/Medicine";
import styled from "styled-components";
import { device } from "../styles";
import { useNavigate, useSearchParams } from "react-router-dom";
import { slugs } from "../utils/routes";
import { PageSelector } from "../Components/PageSelector";
import { Filters } from "../Components/Filters";
import { useEffect, useState } from "react";
import { PopUp } from "../Components/layouts/PopUp";

export const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false)

  const query = searchParams.get("query") || "";
  const page = searchParams.get("page") || 1;

  useEffect(() => {
    if (isNaN(Number(page)) || Number(page) < 0) {
      setSearchParams({
        query,
        page: "1",
      });
    }
  }, [query, page, setSearchParams]);

  const temporaryTags = [
    { name: "Avims" },
    { name: "Kiaulėms" },
    { name: "Galvijams" },
  ];

  const { data: medicine, isLoading } = useLocations(query, Number(page));

  const medicineSchema = Yup.object().shape({
    medicine: Yup.string().required("homePage.required"),
  });

  const formValues = { medicine: "" };

  const handleSubmit = (values: typeof formValues) => {
    setSearchParams({
      query: values.medicine,
      page: "1",
    });
  };

  const handlePageChange = (newPage: number) => {
    setSearchParams({
      query,
      page: newPage.toString(),
    });
  };

  return (
    <div>
      <Formik
        initialValues={formValues}
        onSubmit={handleSubmit}
        validationSchema={medicineSchema}
        validateOnChange={true}
        enableReinitialize={true}
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
          {medicine !== undefined && medicine?.items !== 0 && (
            <>
              <StyledFilters />
              <ShowFilters onClick={() => setShowFilters(prev => !prev)}>Rodyti Filtrus</ShowFilters>
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
            medicine?.data.map((item) => {
              return (
                <Medicine
                  key={item.id}
                  id={item.id}
                  title={item.orgNameLt ? item.orgNameLt : item.orgNameEn}
                  subtitle={item.orgID}
                  isNew={true}
                  tags={temporaryTags}
                  onClick={() => navigate(slugs.medicineDetail(item.id))}
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
    </div>
  );
};
const StyledFilters = styled(Filters)`
  display: block;

  @media ${device.mobileL} {
    display: none;
  }
`
const ShowFilters = styled.button`

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
    display: block;
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
