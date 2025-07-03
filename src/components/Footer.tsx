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
        <Paragraph>{t("footer.vmvt")}</Paragraph>
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
  padding: 20px 0;
  padding-bottom: 40px;
  border-top: 1px solid ${({ theme }) => theme.colors.grey_light};
  @media ${device.mobileL} {
    flex-direction: column;
  }
`;
const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.grey};
`;
