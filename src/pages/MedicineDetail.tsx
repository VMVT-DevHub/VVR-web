import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { RegistrationInfo } from "../components/others/RegistrationInfo";
import { IngredientsInfo } from "../components/others/IngredientsInfo";
import Icon from "../styles/icons";
import { useMedicine } from "../utils/hooks";
import { DetailTitle } from "../components/DetailTitle";
import { Packages } from "../components/others/Packages";
import { useEffect, useState } from "react";
import { DownloadInfo } from "../components/others/DownloadInfo";
import { Loader } from "../components/Loader";
import { useTranslation } from "react-i18next";
import { device } from "../styles";

export const MedicineDetail = () => {
  const { i18n } = useTranslation();
  const { id } = useParams();
  const location = useLocation();
  const [isUPD, setIsUPD] = useState(localStorage.getItem("isUPD") === 'true' || false);

  useEffect(() => {
    const updFromState = location.state?.isUPD;
    if (typeof updFromState === 'boolean') {
      setIsUPD(updFromState);
    }
  }, [location]);
  const { data: medicine, isLoading } = useMedicine(id!, i18n.language, isUPD);

  if (isLoading) return <Loader />;

  if (isLoading) return <p>Kraunasi...</p>;
  if (!medicine) return <p>Kažkur įsivėlė klaida!</p>;

  const animalTags = medicine.admProd
    ?.flatMap((prod) =>
      prod.routes?.flatMap((route) =>
        route.species?.flatMap((species) => species.type)
      )
    )
    .filter((item) => typeof item !== "undefined" && item !== null) || undefined;


  const animalTagsSet = new Set(animalTags);

  const usageTypes = medicine.admProd
    ?.flatMap((prod) => prod.routes?.flatMap((route) => route.type))
    .filter((item) => typeof item !== "undefined") || undefined;

  const usageTypesSet = new Set(usageTypes);


  const secondaryCountries = medicine.reglCase?.countries
    ?.map((item) => item.type).filter(item  => item !== null)
    .join(", ") || undefined;

  const manufacturers = medicine.mfctOps?.map((item) => {
      const manufacturer = [];
      if(item.name) manufacturer.push(item.name);
      if(item.address) manufacturer.push(item.address);
      if(item.country) manufacturer.push(item.country);
      if (manufacturer.length == 0) return null;
      else return manufacturer.join(", ");
    }
  ).filter(item => item !== null) || undefined;


  const handleHolder = (name:string | undefined, address:string | undefined, country:string | undefined) => {
    const holder = [];
    if(name) holder.push(name);
    if(address) holder.push(address);
    if(country) holder.push(country);
    if (holder.length == 0) return undefined;
    else return holder.join(", ");
  }

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
    .filter((text) => text !== "") || undefined;

  console.log(medicine);

  return (
    <>
      <DetailTitle
        title={medicine.name}
        code={medicine.code}
        tags={[...animalTagsSet]}
        subtitle={ingredients}
        prescription={medicine.legal?.code}
      />
      <MedicineDetailContainer>
        <LeftColumn>
          <Title>Indikacija (-os)</Title>
          <p>Šiuo metu aprašymo nėra.</p>

          <Title>Išlauka</Title>

          {medicine.admProd?.map((prod, prodIndex) =>
            prod.routes?.map((route, routeIndex) => {
              if (!route.species) {
                return (
                  <p key={`${prodIndex}-${routeIndex}`}>
                    Naudojimo būdui „{route.type}" netaikoma
                  </p>
                );
              }

              const hasAnyWithdrawalPeriods = route.species.some(
                (species) => species.withdrawalPeriod
              );

              if (!hasAnyWithdrawalPeriods) {
                return (
                  <UsageTypeContainer key={`${prodIndex}-${routeIndex}`}>
                    <UsageType>{route.type}</UsageType>
                    <AnimalContainer key={`${prodIndex}-${routeIndex}`}>
                      <p>Išlauka netaikoma</p>
                    </AnimalContainer>
                  </UsageTypeContainer>
                );
              }

              return (
                <UsageTypeContainer key={`${prodIndex}-${routeIndex}`}>
                  <UsageType>{route.type}</UsageType>
                  {route.species
                    .filter((species) => species.withdrawalPeriod)
                    .map((species, speciesIndex) => (
                      <AnimalContainer
                        key={`${prodIndex}-${routeIndex}-${speciesIndex}-${species.type}`}
                      >
                        <Animal>{species.type}</Animal>
                        <ProduceContainer>
                          {species.withdrawalPeriod.map(
                            (period, periodIndex) => {
                              const isMinPossibleValue = period.num == 0;
                              const isMaxPossibleValue = period.num == 999;

                              return (
                                <Produce
                                  key={`${prodIndex}-${routeIndex}-${speciesIndex}-${periodIndex}`}
                                >
                                  <div>
                                    {period.tissue?.type}
                                    {period.descr && (
                                      <Description> {period.descr}</Description>
                                    )}
                                  </div>
                                  <p>
                                    {isMinPossibleValue
                                      ? "Laukti nereikia"
                                      : isMaxPossibleValue
                                      ? "Nenaudojama"
                                      : `${period.num} ${period.type}`}
                                  </p>
                                </Produce>
                              );
                            }
                          )}
                        </ProduceContainer>
                      </AnimalContainer>
                    ))}
                </UsageTypeContainer>
              );
            })
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
                data={[...usageTypesSet]}
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
                title={"Paskirties gyvūnų rūšys"}
                data={[...animalTagsSet]}
                textSize="big"
              />
            )}
          </MedicineContainer>
          <Title>Pakuotės</Title>
          {medicine.packs?.map((item) => {
            return (
              <Packages
                key={item.name}
                name={medicine.code}
                info={item.name}
                status={item.marketing?.type}
                status_code={item.marketing?.code}
                type={item.quantity?.type}
                quantity={item.quantity?.num}
                weightType={item.items}
              />
            );
          }) || "informacijos apie pakuotes nėra."}
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
                data={handleHolder(
                  medicine.holder?.name,
                  medicine.holder?.address,
                  medicine.holder?.country
                )}
              />
            )}
            <RegistrationInfo
              icon={"calendar"}
              title={"Registracijos statusas"}
              data={medicine.status?.type}
            />
            {medicine.basis && (
              <RegistrationInfo
                icon={"scales"}
                title={"Registracijos teisinis pagrindas "}
                data={medicine.basis?.type}
              />
            )}
            {medicine.case && (
              <RegistrationInfo
                icon={"arrows"}
                title={"Procedūros tipas"}
                data={medicine.case?.type}
              />
            )}
            {medicine.reglCase && (
              <RegistrationInfo
                icon={"hashtag"}
                title={"Procedūros numeris"}
                data={medicine.reglCase?.name}
              />
            )}
            {medicine.reglCase?.reglCountry && (
              <RegistrationInfo
                icon={"globe"}
                title={"Referencinė valstybė narė"}
                data={medicine.reglCase?.reglCountry?.type}
              />
            )}
            {medicine.reglCase && (
              <RegistrationInfo
                icon={"flag"}
                title={"Susijusios valstybės narės"}
                data={secondaryCountries}
              />
            )}
            {medicine.legal && (
              <RegistrationInfo
                icon={"pills"}
                title={"Veterinarinio vaisto grupė"}
                data={medicine.legal?.type}
              />
            )}
            {medicine.classif && (
              <RegistrationInfo
                icon={"qrcode"}
                title={"ATCvet kodas"}
                data={medicine.classif?.map((item) => item.name)}
              />
            )}
            {medicine.mfctOps && (
              <RegistrationInfo
                icon={"microscope"}
                title={"Gamintojas (-ai)"}
                data={manufacturers}
              />
            )}
            <RegistrationInfo
              icon={"hashtag"}
              title={"UPD ID Nr."}
              data={medicine.id?.toString()}
            />
          </RegisteredInformation>

          <ProductInfoTitle>
            <Icon name={"book"} />
            <p>Produkto informacija</p>
          </ProductInfoTitle>

          {medicine.documents ? (
            medicine.documents.map((item) => {
              return (
                <DownloadInfo
                  key={item.id}
                  med_id={id!}
                  doc_id={item.id}
                  name={item.name}
                  title={item.type?.type}
                  lang={item.lang?.toUpperCase()}
                  date={item.date?.split("T")[0]}
                />
              );
            })
          ) : (
            <DownloadTitle>Pridėtų dokumentų nėra.</DownloadTitle>
          )}
        </RightColumn>
      </MedicineDetailContainer>
    </>
  );
};

const DownloadTitle = styled.div`
  margin-top: 4px;
  font-family: "inter";
  font-size: 0.8rem;
  & p {
    font-weight: 500;
    font-size: 1rem;
  }
  
`;
const UsageType = styled.p`
  font-weight: 600;
  margin-bottom: 12px;

`


const Animal = styled.p`
  font-weight: 500;
  margin-bottom: 12px;
`;

const Produce = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 12px;
  font-weight: 400;
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
  padding: 12px 12px 8px 12px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  margin-bottom: 8px;
`;
const UsageTypeContainer = styled.div`
  padding: 12px 12px 8px 12px;
  border-radius: 8px;
  margin-bottom: 8px;
`;
const MedicineContainer = styled.div``;


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
   @media ${device.mobileL} {
       width: 100%;

    }
`;

const RightColumn = styled.section`
  display: flex;
  flex-direction: column;
  width: 33%;
  @media ${device.mobileL} {
       width: 100%;

    }
`;

const MedicineDetailContainer = styled.main`
  display: flex;
  gap: 32px;
  @media ${device.mobileL} {
      flex-direction: column;
    }
`;

const Title = styled.h2``;
