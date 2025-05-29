import { Link } from "react-router-dom"
import styled from "styled-components"
import Icon from "../styles/icons"
import { useTranslation } from "react-i18next"

export const NotFound = () => {

    const { t } = useTranslation();

    return (
      <NotFoundContainer>
        <h1>{t('error.notFoundTitle')}</h1>
        <StyledLink to="/">
          <Icon name="arrow-left" />
          {t('error.notFoundLink')}
        </StyledLink>
      </NotFoundContainer>
    );
}

const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    gap: 12px;
`

const StyledLink = styled(Link)`
    display: flex;
    gap: 6px;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.primary_light};
    & :hover {
        text-decoration: dashed;
    }
`