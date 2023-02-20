# CSS_Study

## Styled Components
1. 컴포넌트 만들기

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

2. 컴포넌트 재활용

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

3. Props 활용하기

- ${}을 활용하여 JS처럼 코드를 사용하자.

