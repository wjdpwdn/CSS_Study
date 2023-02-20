# [React] Custom Component

- [CSS에는 한계점과 문제점이 많았다.](https://github.com/wjdpwdn/CSS_Study/blob/main/README.md#%EA%B8%B0%EC%A1%B4%EC%9D%98-css%EC%9D%98-%EB%AC%B8%EC%A0%9C%EC%A0%90%EA%B3%BC-%ED%95%9C%EA%B3%84%EC%A0%90)

<br/>

- [CSS의 개선방안 (CSS, SASS, BEM, StyledComponents)](https://github.com/wjdpwdn/CSS_Study/blob/main/README.md#css%EC%9D%98-%EA%B0%9C%EC%84%A0-css--sass--bem--css-modules--styled-components)

<br/>

- [Styled Components를 더 알아보자.](https://github.com/wjdpwdn/CSS_Study/blob/main/README.md#styled-components)

<br/>

- [CDD Tool Storybook을 배워보자.](https://github.com/wjdpwdn/CSS_Study/blob/main/README.md#storybook)

<br/> <br/>

# 기존의 CSS의 문제점과 한계점

- 다양한 디바이스(모바일 환경)의 등장으로 디스플레이를 커버해야하기 때문에 CSS가 더 복잡해짐.

<br/> <br/>

# CDD (Component-Driven Development)

- 재사용가능한 UI컴포넌트를 미리 디자인하고 개발하기위해 등장한 개발 방법으로 CDD가 탄생하게 되었다.

## CSS의 개선 (CSS > SASS > BEM > CSS Modules > Styled Components)

- CSS를 거쳐 SASS > BEM > CSS Modules > Styled Components로 CSS가 개선되고 있다.

### CSS 전처리기의 등장 (SASS)
- SASS는 Syntactically Awesome Style Sheets의 약자로, CSS를 확장해 주는 스크립팅 언어다.
- 즉, SASS는 SCSS 코드를 읽어서 전처리한뒤 전역 CSS 번들 파일을 만들어주는 전처리기의 역할을 한다.

```css
.alert {
  border : 1px solid rgba(123,12,56,0.88);
}
.button {
  color : rgba(123,12,56,0.88);
}
```

▼ CSS vs SASS

```css
$base-color: rgba(123,12,56,0.88)
.alert {
  border : 1px solid $base-color;
}
.button {
  color : $base-color;
}

```

### BEM(Block__Element--Modifier)

- 클래스명 선택자가 장황해짐
- 재사용할시마다 모든 UI컴포넌트를 명시적으로 확장해야만하는 문제점 발생

```css
.header__navigation--navi-text {
  color : red;
}


```

### Styled-Component (CSS-in-JS의 등장)

- CSS-in-JS에는 대표적으로 styled component가 있다.
- 기능적 혹은 상태를 가진 컴포넌트들로부터 ui를 완전 분리시켜 사용할 수 있는 패턴을 제공한다.

![스크린샷 2023-02-20 오전 11 05 32](https://user-images.githubusercontent.com/102521448/220074739-a6f6e3bc-d337-4416-8be3-064cee973d83.png)

<br/> <br/>

## Styled Components

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

<br/> <br/>

# StoryBook

- StoryBook 이란?
  - Component Driven Development를 하기 위한 도구
  - 각각 컴포넌트들을 따로볼수 있게 구성해주어, 한번에 하나의 컴포넌트에서 작업이 가능할수 있게 도와준다.
  -()

### 1.  설치하기, 실행하기

```javascript
npx storybook init // 스토리북 설치
npm i @testing-library/dom // 서버실행 오류시 입력
npm run storybook // 스토리북 서버 실행(localhost:6006)
```

<br /> <br />

### 2.  사용하기

- storybook을 설치한 이후, `src`폴더에 `stories` 폴더, 상위 폴더에 `.storybook` 이 생긴다.
  - `.storybook` 폴더는 컴포넌트 파일과 똑같은 파일 이름에 .stories를 붙여 파일을 만들면 알아서 스토리로 인식한다.
  - 
<br />

  ```javascript

  // ./src/Title.js

  import React from "react";

  const Title = ({title, textColor}) => (
    <h1 style={{color : textColor}}>{title}</h1>
  );

  export default Title;
  ```
   <br />
   
  <img width="230" alt="스크린샷 2023-02-20 오후 4 17 49" src="https://user-images.githubusercontent.com/102521448/220038030-ceaa64f6-ff6c-4bfa-b212-913559063c41.png">
  
   <br />
   
  ```javascript
  // ./src/Title.stories.js

  import Title from "./Title";

  export default {
    // title : 컴포넌트 이름으로, '/'를 넣어 카테고리화 할 수 있다.
    title: "Practice/Title",
    // component : 어떤 컴포넌트를 가져와서 스토리로 만들 것인지 명시한다.
    component: Title,
    // argTypes : 컴포넌트에 필요한 전달인자의 종류와 타입을 정해준다.
    argTypes: {
      // title 전달인자에 text 타입 필요
      title: { control: "text" }, 
      // textColor 전달인자에 text 타입 필요
      textColor: { control: "text" }
    }
  }

    // 템플릿을 만들어줍니다.
    // 이 템플릿에서는 Title 컴포넌트가 args를 전달받아 props로 내려줍니다.
    const Template = (args) => <Title {...args} />

    // Storybook에서 확인하고 싶은 컴포넌트는 export const로 작성합니다.
    // 템플릿을 사용하여 Storybook에 넣어줄 스토리를 하나 만들어주었습니다.
    // Template.bind({}); 는 정해진 문법이라고 생각하고 사용하시면 됩니다.
    export const RedTitle = Template.bind({});

    // 만들어준 스토리의 전달인자를 작성해줍니다.
    RedTitle.args= {
      title: "Red Title",
      textColor: "red"
    }

    // 스토리를 하나 더 만듭니다.
    export const BlueTitle = Template.bind({});

    // 스토리의 전달인자를 작성해줍니다.
    BlueTitle.args= {
      title: "Blue Title",
      textColor: "blue"
    }
  ```
  
  <br/>
  
  ```javascript
    export const StorybookTitle = (args) => {
    return <Title {...args} />
    }
  ```
  ![스크린샷 2023-02-20 오후 4 47 33](https://user-images.githubusercontent.com/102521448/220044127-d08e0dc0-2817-4650-90b8-725d26517752.png)

