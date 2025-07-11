import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { device } from "../styles";

export const Footer = () => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <BottomFooter>
        <Paragraph>
          2025-{currentYear}
        </Paragraph>
        <Paragraph>
          <p>{t("footer.vmvt")}</p>
          <a href="https://vmvt.lrv.lt/lt/fb/">{t("footer.vigilance")}</a>
        </Paragraph>
      </BottomFooter>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  margin-top: auto;
`;

const BottomFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.grey_light};
  @media ${device.mobileL} {
    flex-direction: column;
  }
`;
const Paragraph = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;
