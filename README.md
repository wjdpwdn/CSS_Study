# CSS_Study

# Styled Components
### 1. 컴포넌트 만들기

- ES6의 Template literal(템플릿 문자열)를 사용한다 

```javascript
const ComponentName = styled.tag`
  CSSelement1 : value;
  CSSelement2 : value;
  ...
`;
  const BlueButton = styled.button`
  color : white;
  background-color: blue;
  ...
`;
```

<br /> <br />

### 2. 컴포넌트 재활용

- 컴포넌트를 선언하고 styled()에 재활용할 컴포넌트 전달후 추가하고싶은 스타일 속성 작성

```javascript
const ComponentName = styled.(Re_ComponentName)`
  // Re_ComponentName : value; ...

  New_CSSelement1 : value;
  New_CSSelement2 : value;
  ...
`;
  const BigBlueButton = styled(BlueButton)`
  padding: 10px;
  margin-top: 10px;
  ...
`;
  const BigRedButton = styled(BigBlueButton)`
  background-color: red;
  ...
`;
```
<br /> <br />

### 3. Props 활용하기

- ${}(리터럴 템플릿)을 활용하여 JS처럼 코드를 사용하자.

```javascript
const ComponentName = styled.tag`
CSSelement : ${(props) => FunctionCode}
`;
```

### 3-1. Props로 조건부 렌더링하기

- 삼항연산자를 활용하여 JS처럼 코드를 사용하자.

```javascript
const Button1 = styled.button`
background : ${(props) => (props.skyblue ? "skyblue" : "white")};
`;
export default Function App(){
  return <Button1 skyblue>button</Button>
}
```

### 3-2. Props 값으로 렌더링하기

- props의 값을 통째로 활용해서 컴포넌트 렌더링에 활용 가능하다.

```javascript
const Button2 = styled.button`
background : ${(props) => (props.color ? props.color : "white")}
`;
const Button3 = styled.button`
background : ${(props) => (props.color || white)}
`;
export default Function App(){
  return (
  <>
    <Button2 color="orange">button</Button2> //orange button
    <Button2>button</Button2> // white button
    <Button3 color="pink">button</Button3> // pink button
  </>
  )};
```

<br /> <br />

### 4. 전역 스타일 설정하기

- createGlobalStyle 함수를 불러온뒤 CSS속성을 입력한뒤 최상위 컴포넌트로 사용한다.

```javascript
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
tag {
  element1 : value;
  element2 : value;
  ...
}
`
function App(){
  return(
    <>
    <GlobalStyle/>
    <Button1>button</Button1>
    </>
  )
}
```
<br /> <br />

# StoryBook

- StoryBook 이란?
  - Component Driven Development를 하기 위한 도구
  - 각각 컴포넌트들을 따로볼수 있게 구성해주어, 한번에 하나의 컴포넌트에서 작업이 가능할수 있게 도와준다.
  -()

### 1.  설치하기

```javascript
npx storybook init // 스토리북 설치
npm run storybook // 스토리북 서버 실행(localhost:6006)
```

### 2.  설치하기