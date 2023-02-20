import './App.css';
import styled from "styled-components";
import { createGlobalStyle } from "styled-components"

const BlueButton = styled.button`
  background-color: blue;
  color: white;
`;

const BigBlueButton = styled(BlueButton)`
  margin : 5px;
  padding : 10px;
`;

const BigRedButton = styled(BigBlueButton)`
  background-color: red;
`;

const Button2 = styled.button`
background : ${(props) =>(props.color || "white")}
`

const Button1 = styled.button`
background : ${(props)=>(props.skyblue ? "skyblue":"white")}
`;

const GlobalStyle = createGlobalStyle`
p{
  text-weight : border;
  font-size : 100px;
}
`;

export default function App() {
  return (
  <>
  <p>123</p>
  
    <BlueButton>button</BlueButton>
    <br />
    <BigBlueButton>button</BigBlueButton>
    <br />
    <BigRedButton>button</BigRedButton>
    <br />
    <GlobalStyle/>
    <Button1 skyblue>button</Button1>
    <br />
    <Button1>button</Button1>
    <br />
    <p>123</p>
  </>
  );
}

