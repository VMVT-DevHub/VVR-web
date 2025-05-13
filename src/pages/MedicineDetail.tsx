import { useParams } from "react-router-dom";
import styled from "styled-components";
import { RegistrationInfo } from "../components/others/RegistrationInfo";
import Icon from "../styles/icons";
import { useMedicine } from "../utils/hooks";
import { DetailTitle } from "../components/DetailTitle";
import { Packages } from "../components/others/Packages";
import { useState } from "react";

export const MedicineDetail = () => {
  const { id } = useParams();

  const { data: medicine, isLoading } = useMedicine(id!, "LT", false);
  const [timingExists, setTimingExists] = useState(true);
  const [showAllPackages, setShowAllPackages] = useState(false);

  if (isLoading) return <p>Kraunasi...</p>;
  if (!medicine) return <p>Kažkur įsivėlė klaida!</p>;

  const animalTags = medicine.admProd?.map((prod) =>
    prod.routes?.map((route) => route.species?.map((species) => species.type))
  );

  const secondaryCountries = medicine.reglCase
    ?.map((item) => item.type)
    .join(", ");

  const ingredients = medicine.ingredients?.map((item) => 
  `${item.substance.name}, ${item.substance.numerator.num} ${item.substance.numerator.name} / ${item.substance.denominator.num} ${item.substance.denominator.name}`
);
  console.log(ingredients?.[1])
  console.log(medicine);
  return (
    <>
      <DetailTitle
        title={medicine.name}
        code={medicine.code}
        tags={animalTags}
        subtitle={medicine.ingredients}
      />
      <MedicineDetailContainer>
        <LeftColumn>
          <Title>Indikacija (-os)</Title>
          <p>Šiuo metu aprašymo nėra.</p>
          <Title>Pakuotės</Title>
          {medicine.packs?.map((item) => {



            return (
              //pridet vienetus kg ir tt
              <Packages
                key={item.name}
                name={medicine.code}
                info={item.name}
                status={item.marketing?.type}
                type={item.quantity?.type}
                quantity={item.quantity?.num}
                weightType={item.items}
              />
            );
          }) || "informacijos apie pakuotes nėra."}
          <Title>Išlauka</Title>

          {medicine.admProd?.map((prod, prodIndex) =>
            prod.routes?.map((route, routeIndex) =>
              route.species?.map((species, speciesIndex) => {
                return (
                  species.withdrawalPeriod && (
                    <AnimalContainer
                      key={`${prodIndex}-${routeIndex}-${speciesIndex}-${species.type}`}
                    >
                      <Animal>{species.type}</Animal>
                      <ProduceContainer>
                        {species.withdrawalPeriod.map(
                          (period, periodIndex) => { 
                            const isMinPossibleValue = period.num == 0 ? true : false;
                            const isMaxPossibleValue = period.num == 999 ? true : false;
                            return (
                              <Produce
                                key={`${prodIndex}-${routeIndex}-${speciesIndex}-${periodIndex}`}
                              >
                                <div>
                                  {period.tissue?.type}
                                  <p>Naudojimo būdas: {route.type}</p>
                                  {period.descr && <Description> {period.descr}</Description>}
                                </div>
                                <p>
                                  {isMinPossibleValue
                                    ? "Laukti nereikia"
                                    : isMaxPossibleValue
                                    ? "Nenaudojama"
                                    : `${period.num} ${period.type}s`}
                                </p>
                              </Produce>
                            );
                            
                          }
                        )}
                      </ProduceContainer>
                    </AnimalContainer>
                  )
                );
              })
            )
          )}
          <Title>Veterinarinio vaisto informacija</Title>
          <MedicineContainer>
            <LeftInfoColumn>
              <RegistrationInfo
                icon={"flask"}
                title={"Veiklioji(-iosios) medžiaga(-os)"}
                data={ingredients}
                textSize="big"
              />
              <RegistrationInfo
                icon={"scroll"}
                title={"Naudojimo būdas(-ai)"}
                data={medicine.admProd?.[0].routes?.[0].type}
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
                icon={"animal"}
                title={"Paskirties gyvūnų rūšys pagal naudojimo būdą"}
                data={animalTags?.flat().flat()}
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
              data={medicine.date}
            />
            <RegistrationInfo
              icon={"barcode"}
              title={"Registracijos numeris"}
              data={medicine.code}
            />
            <RegistrationInfo
              icon={"pen"}
              title={"Registruotojas"}
              data={`${medicine.holder?.name}, ${medicine.holder?.address}, ${medicine.holder?.country}`} //sutvarkt kad nebutu undefined undefined
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
              data={secondaryCountries}
            />
            <RegistrationInfo
              icon={"pills"}
              title={"Veterinarinio vaisto grupė"}
              data={medicine.legal?.type}
            />
            <RegistrationInfo
              icon={"qrcode"}
              title={"ATCvet kodas"}
              data={medicine.classif?.map((item) => item.name)} //gali būt keletas
            />
            {medicine.mfctOps?.[0]?.name && ( //keletą atvaizduoti
              <RegistrationInfo
                icon={"microscope"}
                title={"Gamintojas"}
                data={medicine.mfctOps[0].name}
              />
            )}
            <RegistrationInfo
              icon={"hashtag"}
              title={"UPD ID Nr."}
              data={medicine.id.toString()}
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

const Animal = styled.p`
  font-weight: 600;
  margin-bottom: 12px;
`;

const Produce = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 12px;
  font-weight: 600;
  font-family: inter;
  border-radius: 7px;
  & p {
    font-weight: 400;
    font-family: inter;
  }
  & div {
    font-family: inter;
  }
`;

const Description = styled.p`
  margin-top: 8px;
`

const ProduceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const AnimalContainer = styled.div`
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  margin-bottom: 4px;
`;
const MedicineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
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
