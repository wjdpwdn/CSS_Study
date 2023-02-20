import './App.css';
import styled from "styled-components";

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

export default function App() {
  return (
  <>
    <BlueButton>1. 컴포넌트를 활용한 CSS</BlueButton>
    <br />
    <BigBlueButton>123</BigBlueButton>
    <BigRedButton>1</BigRedButton>
  </>
  );
}

