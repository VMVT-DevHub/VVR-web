/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { useCallback } from "react";
import styled from "styled-components"
import Icon from "../../styles/icons";

interface PopUpProps {
    visible: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    title: string;
}
export const PopUp = ({visible = true, onClose, title, children }:PopUpProps) => {


    const handleCloseOnEscape = useCallback(
    (event: any) => {
        if (event.key === 'Escape') {
            onClose();
        }
    },
    [onClose],
    );

    useEffect(() => {
    window.addEventListener('keydown', handleCloseOnEscape);
    return () => window.removeEventListener('keydown', handleCloseOnEscape);
    }, [visible, handleCloseOnEscape]);
    
    if (!visible) {
    return <React.Fragment />;
    }
    return (
      <Popup>
        <TitleContainer>
          <Title>{title}</Title>
          <Close
            onClick={onClose}
          >
            <Icon name={"exit"} />
          </Close>
        </TitleContainer>
        {children}
      </Popup>
    );
}

const Popup = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding: 32px 28px;
    width: 100vw;
    height: 100vh;
    background-color: ${({theme}) => theme.colors.white};
    overflow-y: scroll;
    
`
const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 32px 0 8px 12px;

`
const Title = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
`
const Close = styled.button`
    padding: 8px;
    border-radius: 8px;
    &:hover {
        background-color: ${({theme}) => theme.colors.secondary};
    }
`