import React from 'react';
import styled from "styled-components";

const StyledPopup = styled.div`
    position: fixed;
    top: calc(50% - 1rem);
    left: calc(50% - 1rem);
    width: 250px;
    height: 250px;
    border: 1px solid green;
    color: green;
    display: ${props => props.display? `block` :`none` } ;
    align-content: center;
    text-align: center;
    font-size: 40px;
`
const Popup = (props) => {
  return (
    <StyledPopup {...props}>
      Well done!
    </StyledPopup>
  );
};

export default Popup;
