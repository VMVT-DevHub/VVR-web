import { MoonLoader } from "react-spinners"
import { theme } from "../styles"
import styled from "styled-components"

export const Loader = () => {

    return(
        <LoaderContainer>
            <MoonLoader color={theme.colors.primary} size={30} />
        </LoaderContainer>
    )
}

const LoaderContainer = styled.div`
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`