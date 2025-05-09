import { useParams } from "react-router-dom";
import styled from "styled-components";
import { RegistrationInfo } from "../components/others/RegistrationInfo";
import Icon from "../styles/icons";
import { useMedicine } from "../utils/hooks";
import { DetailTitle } from "../components/DetailTitle";
import { Packages } from "../components/others/Packages";

export const MedicineDetail = () => {
  const { id } = useParams();

  const { data: medicine, isLoading } = useMedicine(id!, "LT");

  if (isLoading) return <p>Kraunasi...</p>;
  if (!medicine) return <p>Kažkur įsivėlė klaida!</p>;

  const temporaryTags = [{ name: "????" }, { name: "??????" }];

  console.log(medicine);
  console.log(medicine.code.split("-"));
  return (
    <>
      <DetailTitle
        title={medicine.name}
        code={id}
        tags={temporaryTags}
        subtitle={medicine.ingredients}
      />
      <MedicineDetailContainer>
        <LeftColumn>
          <Title>Indikacija (-os)</Title>
          <p>admProd ???</p>
          <Title>Pakuotės</Title>
          {medicine.packs?.map((item) => {
            return (
              <Packages
                key={item.name}
                name={medicine.code}
                info={item.name}
                status={item.marketing?.type}
                type={item.quantity?.type}
                quantity={item.quantity?.num}
              />
            );
          }) || "informacijos apie pakuotes nėra."}
          <Title>Išlauka</Title>
          ???
          <Title>Veterinarinio vaisto informacija</Title>
          <MedicineContainer>
            <LeftInfoColumn>
              <RegistrationInfo
                icon={"pill"}
                title={"Vaisto tipas"}
                data={"???"}
                textSize="big"
              />
              <RegistrationInfo
                icon={"flask"}
                title={"Veiklioji(-iosios) medžiaga(-os)"}
                data={"???"}
                textSize="big"
              />
              <RegistrationInfo
                icon={"scroll"}
                title={"Naudojimo būdas(-ai)"}
                data={"???"}
                textSize="big"
              />
            </LeftInfoColumn>
            <RightInfoColumn>
              <RegistrationInfo
                icon={"vaccine"}
                title={"Vaisto forma"}
                data={medicine.extension?.type}
                textSize="big"
              />
              <RegistrationInfo
                icon={"pipe"}
                title={"Pagalbinės medžiagos"}
                data={"???"}
                textSize="big"
              />
              <RegistrationInfo
                icon={"animal"}
                title={"Paskirties gyvūnų rūšys pagal naudojimo būdą"}
                data={"???"}
                textSize="big"
              />
            </RightInfoColumn>
          </MedicineContainer>
        </LeftColumn>

        <RightColumn>
          <RegisteredInformation>
            <Title>Registracijos informacija</Title>
            <RegistrationInfo
              icon={"calendar"}
              title={"Registracijos data"}
              data={"???"}
            />
            <RegistrationInfo
              icon={"barcode"}
              title={"Registracijos numeris"}
              data={medicine.code}
            />
            <RegistrationInfo
              icon={"pen"}
              title={"Registruotojas"}
              data={medicine.holder?.name + " ???"}
            />
            <RegistrationInfo
              icon={"calendar"}
              title={"Registracijos statusas"}
              data={medicine.status?.type}
            />
            <RegistrationInfo
              icon={"scales"}
              title={"Registracijos teisinis pagrindas "}
              data={medicine.basis?.type}
            />
            <RegistrationInfo
              icon={"arrows"}
              title={"Procedūros tipas"}
              data={medicine.case?.type}
            />
            <RegistrationInfo
              icon={"hashtag"}
              title={"Procedūros numeris"}
              data={medicine.case?.name}
            />
            <RegistrationInfo
              icon={"globe"}
              title={"Referencinė valstybė narė"}
              data={medicine.holder?.country}
            />
            <RegistrationInfo
              icon={"flag"}
              title={"Susijusi valstybė narė"}
              data={"???"}
            />
            <RegistrationInfo
              icon={"pills"}
              title={"Veterinarinio vaisto grupė"}
              data={"???"}
            />
            <RegistrationInfo
              icon={"qrcode"}
              title={"ATCvet kodas"}
              data={"???"}
            />
            {medicine.mfctOps?.[0]?.name && (
              <RegistrationInfo
                icon={"microscope"}
                title={"Gamintojas"}
                data={medicine.mfctOps[0].name}
              />
            )}
            <RegistrationInfo
              icon={"hashtag"}
              title={"UPD ID Nr."}
              data={medicine.id + " ???"}
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
const MedicineContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LeftInfoColumn = styled.div`
  width: 50%;
`;
const RightInfoColumn = styled.div`
  width: 50%;
`;
const ProductInfoTitle = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 14px 0;
  gap: 12px;
  border-radius: 120px 56px 56px 0;
  margin-top: 16px;
  & p {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
const RegisteredInformation = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 32px;
  border-radius: 20px;
  & h2:first-of-type {
    margin: 0 0 16px 0;
  }
`;
const LeftColumn = styled.section`
  display: flex;
  flex-direction: column;
  width: 67%;
  & h2:first-of-type {
    margin-top: 0;
  }
`;

const RightColumn = styled.section`
  display: flex;
  flex-direction: column;
  width: 33%;
`;

const MedicineDetailContainer = styled.main`
  display: flex;
  gap: 32px;
`;

const Title = styled.h2``;
