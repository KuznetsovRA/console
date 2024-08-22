import React, {useState} from 'react';
import styled from "styled-components";
import Flexbox from "./flexbox.jsx";
import Line from "./line.jsx";

const StyledConsole = styled.textarea`
    width: 100%;
    height: 70vh;
    resize: none;
    border: none;
    background-color: transparent;
    color: green;
    font-size: 24px;
    
    &:focus {
        outline: none;
    };
`

const Console = () => {
  const [lines, setLines] =  useState([`console//`])
  console.log(lines)

  const onKeyPress= (e) => {
    if (e.key === "Enter") {
      setLines([...lines, `console//`])
    }
  }

  return (
    <Flexbox margin="15px 0px">
      <Flexbox direction="column" margin="0px 5px">
        {lines.map(line =>
          <Line>{line}</Line>
        )}
      </Flexbox>
      <StyledConsole onKeyPress={onKeyPress}/>
    </Flexbox>

  )
};

export default Console;
