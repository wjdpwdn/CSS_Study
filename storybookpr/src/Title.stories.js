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
