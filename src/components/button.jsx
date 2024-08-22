import React from 'react';
import styled, {css, keyframes} from "styled-components";

const scaleAnimation = keyframes`
    0% {
        transform: scale(100%);
    }
    100%{
        transform: scale(150%);
    }
`

const StyledButton = styled.button`
    font-size: 18px;
    cursor: pointer;
    border:none;
    padding: 10px 25px;
    align-self: ${props => props.alignSelf || `flex-end`};
    font-family: inherit;
    font-weight: 600;
    ${(props) => props.sendButton && css`
        background-color: transparent;
        border: 1px solid green;
        color: ${props => props.theme.colors.primary || "green"};
    `}
    
    &:hover {
        animation: ${scaleAnimation} 2s infinite linear;
    }
`

const Button = (props) => {
  return <StyledButton {...props}/>
};

export default Button;
