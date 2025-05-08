import styled from "styled-components"
import Icon from "../../styles/icons"

export interface registrationInfoProps {
    icon:string;
    title: string;
    data: string;
}

export const RegistrationInfo = ({icon, title, data}:registrationInfoProps) => {
    return (
        <ItemContainer>
            <div>
                <Icon name={icon} />
            </div>
            <TextContainer>
                <p>{title}</p>
                <p>{data}</p>
            </TextContainer>
        </ItemContainer>
    )
}
const TextContainer = styled.div`
    font-size: 0.875rem;
    font-weight: 600;
    & :first-child {
        font-size: 0.75rem;
        font-weight: 400;
    }
`
const ItemContainer = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
`