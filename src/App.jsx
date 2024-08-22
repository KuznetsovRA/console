import styled from "styled-components";
import Title from "./components/title.jsx";
import Flexbox from "./components/flexbox.jsx";
import Console from "./components/console.jsx";
import Button from "./components/button.jsx";
import {useState} from "react";
import Popup from "./components/popup.jsx";

const AppWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
    background-color: ${props => props.theme.colors.backgroundPrimary};
    
`

function App() {
  const [popup, setPopup] = useState(false)

  const onClick = ()=> {
    setPopup(!popup)
  }

  return (
    <AppWrapper>
      <Flexbox direction="column" justify="center" alignItems="center">
        <Title>
          Console simulation
        </Title>
      </Flexbox>
      <Flexbox direction="column">
        <Console/>
        <Button sendButton onClick={onClick}>Send</Button>
      </Flexbox>
      <Popup display={popup}/>

    </AppWrapper>
  )
}

export default App
