import React from 'react';
import styled from "styled-components";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || `row`};
    justify-content: ${props => props.justify || `stretch`};
    align-items: ${props => props.alignItems || `stretch`};
    margin: ${props => props.margin || `0`};
`

const Flexbox = (props) => {
  return <FlexContainer {...props}/>
};

export default Flexbox;
