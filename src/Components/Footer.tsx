import { useTranslation } from "react-i18next";
import styled from "styled-components"


export const Footer = () => {
    const { t } = useTranslation()

    const currentYear = new Date().getFullYear();
    return(
        <FooterContainer>
            <Paragraph>{t('homePage.header')}. 2025-{currentYear}</Paragraph>
            <Paragraph>{t('homePage.vmvt')}</Paragraph>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    margin-top: auto;
    border-top: 1px solid ${({theme}) => theme.colors.grey_light};
`;
const Paragraph = styled.p`
    color: ${({theme}) => theme.colors.grey};
`;