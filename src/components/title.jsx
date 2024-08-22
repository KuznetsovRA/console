import React from 'react';
import styled from "styled-components";

const HeadTitle = styled.h1`
    font-family: Consolas, monospace;
    font-size: 24px;
    color: ${props => props.theme.colors.primary};
`

const Title = ({children}) => {
  return (
    <HeadTitle>
      {children}
    </HeadTitle>
  );
};

export default Title;
