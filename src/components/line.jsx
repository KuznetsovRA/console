import React from 'react';
import styled from "styled-components";

const StyledLine = styled.div`
    font-size: 24px;
    color: green;
    font-family: Consolas;
`

const Line = (props) => {
  return <StyledLine {...props}/>;
};

export default Line;
