import { useParams } from "react-router-dom";
import styled from "styled-components";
import { RegistrationInfo } from "../components/others/RegistrationInfo";
import { IngredientsInfo } from "../components/others/IngredientsInfo";
import Icon from "../styles/icons";
import { useMedicine } from "../utils/hooks";
import { DetailTitle } from "../components/DetailTitle";
import { Packages } from "../components/others/Packages";

export const MedicineDetail = () => {
  const { id } = useParams();

  const { data: medicine, isLoading } = useMedicine(id!, "LT", false);
  // const [timingExists, setTimingExists] = useState(true);
  // const [showAllPackages, setShowAllPackages] = useState(false);

  if (isLoading) return <p>Kraunasi...</p>;
  if (!medicine) return <p>Kažkur įsivėlė klaida!</p>;

  const animalTags = medicine.admProd
    ?.flatMap((prod) =>
      prod.routes?.flatMap((route) =>
        route.species?.flatMap((species) => species.type)
      )
    )
    .filter((item) => typeof item !== "undefined");

  const animalTagsSet = new Set(animalTags);

  const usageTypes = medicine.admProd
    ?.map((prod) => prod.routes?.map((route) => route.type))
    .filter((item) => typeof item !== "undefined");

  const secondaryCountries = medicine.reglCase
    ?.map((item) => item.type)
    .join(", ");

  const manufacturers = medicine.mfctOps?.map(
    (item) => `${item.name}, ${item.address}, ${item.country}`
  );

  const ingredients = medicine.ingredients
    ?.map((item) => {
      const name = item.substance?.name ?? "";
      const numeratorNum = item.substance?.numerator?.num ?? "";
      const numeratorName = item.substance?.numerator?.name ?? "";
      const denominatorNum = item.substance?.denominator?.num ?? "";
      const denominatorName = item.substance?.denominator?.name ?? "";

      if (!name) return "";

      let result = name;

      if (numeratorNum && numeratorName && denominatorNum && denominatorName) {
        result += `, ${numeratorNum} ${numeratorName} / ${denominatorNum} ${denominatorName}`;
      }

      return result;
    })
    .filter((text) => text !== "");

  console.log(medicine);
  return (
    <>
      <DetailTitle
        title={medicine.name}
        code={medicine.code}
        tags={[...animalTagsSet]}
        subtitle={ingredients}
      />
      <MedicineDetailContainer>
        <LeftColumn>
          <Title>Indikacija (-os)</Title>
          <p>Šiuo metu aprašymo nėra.</p>
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
                        {species.withdrawalPeriod.map((period, periodIndex) => {
                          const isMinPossibleValue =
                            period.num == 0 ? true : false;
                          const isMaxPossibleValue =
                            period.num == 999 ? true : false;
                          return (
                            <Produce
                              key={`${prodIndex}-${routeIndex}-${speciesIndex}-${periodIndex}`}
                            >
                              <div>
                                {period.tissue?.type}
                                <p>Naudojimo būdas: {route.type}</p>
                                {period.descr && (
                                  <Description> {period.descr}</Description>
                                )}
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
                        })}
                      </ProduceContainer>
                    </AnimalContainer>
                  )
                );
              })
            )
          )}
          <Title>Veterinarinio vaisto informacija</Title>
          <MedicineContainer>
            <IngredientsInfo
              icon={"flask"}
              title={"Veiklioji(-iosios) medžiaga(-os)"}
              data={medicine.ingredients}
            />
            {usageTypes && usageTypes.length > 0 && (
              <RegistrationInfo
                icon={"scroll"}
                title={"Naudojimo būdas(-ai)"}
                data={usageTypes.flat().flat()}
                textSize="big"
              />
            )}
            <RegistrationInfo
              icon={"vaccine"}
              title={"Vaisto forma"}
              data={medicine.extension?.type}
              textSize="big"
            />
            {animalTags && animalTags.length > 0 && (
              <RegistrationInfo
                icon={"animal"}
                title={"Paskirties gyvūnų rūšys pagal naudojimo būdą"}
                data={[...animalTagsSet]}
                textSize="big"
              />
            )}
          </MedicineContainer>
          <LeftInfoColumn></LeftInfoColumn>
          <RightInfoColumn></RightInfoColumn>
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
            {medicine.holder && (
              <RegistrationInfo
                icon={"pen"}
                title={"Registruotojas"}
                data={`${medicine.holder?.name}, ${medicine.holder?.address}, ${medicine.holder?.country}`}
              />
            )}
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
              data={medicine.classif?.map((item) => item.name)}
            />
            {medicine.mfctOps && (
              <RegistrationInfo
                icon={"microscope"}
                title={"Gamintojas"}
                data={manufacturers}
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
    width: 80%;
  }
`;

const Description = styled.p`
  margin-top: 8px;
`;

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
const MedicineContainer = styled.div``;
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
