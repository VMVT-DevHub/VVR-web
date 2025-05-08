import { useTranslation } from "react-i18next";
import styled from "styled-components";
import rx from "../styles/images/Rx.svg";
import rxplus from "../styles/images/Rxplus.svg";
import otc from "../styles/images/Otc.svg";
import { device } from "../styles";

export const Footer = () => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
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
      <BottomFooter>
        <Paragraph>
          {t("homePage.header")}. 2025-{currentYear}
        </Paragraph>
        <Paragraph>{t("footer.vmvt")}</Paragraph>
      </BottomFooter>
    </FooterContainer>
  );
};
const StyledImg = styled.img`
  width: 24px;
`;

const FooterContainer = styled.footer`
  margin-top: auto;
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

const BottomFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  padding-bottom: 40px;
  border-top: 1px solid ${({ theme }) => theme.colors.grey_light};
  @media ${device.mobileL} {
    flex-direction: column;
  }
`;
const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.grey};
`;
