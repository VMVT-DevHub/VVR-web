import { useTranslation } from "react-i18next";
import { SearchSection } from "../Components/SearchSection";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useLocation } from "../utils/hooks";
import { useState } from "react";
import { Medicine } from "../Components/Medicine";
import styled from "styled-components";
import { device } from "../styles";

export const HomePage = () => {
  const { t } = useTranslation();
  const [ medicineQuery, setMedicineQuery] = useState('')
  const temporaryTags = [{name: "Avims"}, {name: "Kiaulėms"},{name: "Galvijams"}]

  
  const {data:medicine, isLoading } = useLocation(medicineQuery)

  console.log(medicine)

  const medicineSchema = Yup.object().shape({
    medicine: Yup.string().required(t("homePage.required")),
  });

  const formValues = { medicine: "" };

  const handleSubmit = (values: typeof formValues) => {
    const params = {
      query: values.medicine,
    };
    setMedicineQuery(params.query)
    
  };


  return (
    <>
      <Formik
        initialValues={formValues}
        onSubmit={handleSubmit}
        validationSchema={medicineSchema}
        validateOnChange={true}
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
                showError={false}
              />
            </Form>
          );
        }}
      </Formik>
      <ContentContainer>
        <LeftColumn>

        </LeftColumn>
        <RightColumn>
          {isLoading ? <p>Loading...</p> : ''}
          { medicine?.items !== 0 ? medicine?.data.map((item) => {
            return (
              
                <Medicine key={item.id} id={item.id} title={item.orgNameLt ? item.orgNameLt : item.orgNameEn} subtitle={item.orgID} isNew={true} tags={temporaryTags} />
            );
          }) :<><br></br> <p>Nieko nerasta</p></>}
        </RightColumn>
      </ContentContainer>
      
      {/* <Medicine title={"Carprodyl Quadri, 50 mg"} subtitle={"Karprofenas"} isNew={true} tags={temporaryTags} />
      <Medicine title={"Nanotrim, 464,2 mg/g + 100 mg/g"} subtitle={"Sulfachlorpiridazinas, Trimetoprimas"} isNew={false} tags={temporaryTags} />
      <Medicine title={"Tulathromycon"} subtitle={"Tulatromicinas"} isNew={true} tags={temporaryTags} /> */}

    </>
  );
};


const ContentContainer = styled.div`
  display: flex;
  gap: 40px;
  @media ${device.mobileL} {
    gap: 0;
  }
`
const LeftColumn = styled.div`
  width: 30%;
  @media ${device.mobileL} {
    width: 0;
  }
`
const RightColumn = styled.div`
  width: 70%;
  @media ${device.mobileL} {
    width: 100%;
  }
  
`