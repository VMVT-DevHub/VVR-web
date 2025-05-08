import { useParams } from "react-router-dom";
import styled from "styled-components";
import { RegistrationInfo } from "../components/others/RegistrationInfo";
import Icon from "../styles/icons";
import { useMedicine } from "../utils/hooks";
import { DetailTitle } from "../components/DetailTitle";

export const MedicineDetail = () => {
  const { id } = useParams();

  const { data: medicine } = useMedicine(id!, 'LT');

  console.log(medicine);
  if (!medicine) return <p>KaŽkur įsivėlė klaida!</p>;

  const temporaryTags = [
    { name: "Avims" },
    { name: "Kiaulėms" },
    { name: "Galvijams" },
  ];

  return (
    <>
      <DetailTitle title={medicine.name} code={id} tags={temporaryTags} />
      <MedicineDetailContainer>
        <LeftColumn>
          <Title>Indikacija (-os)</Title>
          <p>
            Uždegimui ir skausmui, kurį sukelia raumenų ir skeleto sistemos
            sutrikimai bei degeneracinės sąnarių ligos, malšinti. Pooperaciniam
            skausmui malšinti, prieš tai naudojus parenterinius vaistus nuo
            skausmo.
          </p>
          {id}
          <Title>Pakuotės</Title>
        </LeftColumn>
        <RightColumn>
          <RegisteredInformation>
            <Title>Registracijos informacija</Title>
            <RegistrationInfo
              icon={"calendar"}
              title={"Registracijos data"}
              data={"2018-03-22"}
            />
            <RegistrationInfo
              icon={"barcode"}
              title={"Registracijos numeris"}
              data={"LT/2/18/2454/001-002"}
            />
            <RegistrationInfo
              icon={"pen"}
              title={"Registruotojas"}
              data={"Wirtschaftsgenossenschaft deutscher Tieraerzte eG "}
            />
            <RegistrationInfo
              icon={"duration"}
              title={"Registracijos statusas"}
              data={"Galioja"}
            />
            <RegistrationInfo
              icon={"scales"}
              title={"Registracjos teisinis pagrindas "}
              data={
                "Generinio vaisto paraiška, pagal Direktyvos 2001/82/EB 13(1) straipsnį "
              }
            />
          </RegisteredInformation>

          <ProductInfoTitle>
            <Icon name={"book"} />
            <p>Produkto informacija</p>
          </ProductInfoTitle>
        </RightColumn>
      </MedicineDetailContainer>
    </>
  );
};
const ProductInfoTitle = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.primary};
    padding: 14px 0;
    gap: 12px;
    border-radius: 120px 56px 56px 0;
    margin-top: 16px;
    & p {
        color: ${({theme}) => theme.colors.secondary};
    }
`
const RegisteredInformation = styled.div`
    background-color: ${({theme}) => theme.colors.secondary};
    padding: 32px;
    border-radius: 20px;
    & h2:first-of-type {
       margin:  0 0 16px 0;
    }
`
const LeftColumn = styled.section`
    display: flex;
    flex-direction: column;
    width: 67%;
    & h2:first-of-type {
       margin-top:  0;
    }
`

const RightColumn = styled.section`
    display: flex;
    flex-direction: column;
    width: 33%;
    

`

const MedicineDetailContainer = styled.main`
    display: flex;
    gap: 32px;
`

const Title = styled.h2``;
