# 원티드 프리온보딩 인턴십 1주차 과제

## 📝Contents

### 배포 링크

[https://wanted-onboarding-week1.vercel.app](https://wanted-onboarding-week1.vercel.app/signin)

### 프로젝트 실행 방법

```tsx
$ git clone https://github.com/wanted-onboarding-10team/wanted-onboarding-week1.git
$ npm i
$ npm start
```

### 사용 기술 스택

![](https://cdn.discordapp.com/attachments/1077499116839522326/1078606768646668288/2023-02-24_6.17.24.png)

### 파일 구조

```
📦
├─ public
├─ src
│  ├─ App.js
│  ├─ index.js
│  ├─ Router.js (라우터 설정 관련 컴포넌트)
│  ├─ api (서버와 통신하는 로직)
│  ├─ components (pages의 하위 컴포넌트)
│  │  └─ common (공통)
│  │  └─ todo
│  │  └─ auth
│  ├─ pages (route 경로 컴포넌트)
│  ├─ utils
│  │   └─ hooks
│  │   └─ auth (Middleware -> 인가 구현)
└─ └─ styles (palette, GlobalStyle)
```

### 기능별 코드 구조

- **Auth**

  - **접근 구조**

    ```jsx
    import AuthForm from '../components/auth/AuthForm';

    function SignInPage() {
      return <AuthForm mode="login" or "register" />;
    }

    export default SignInPage or SignUpPage ;
    ```

    동일한 구조에 props만 login과 register로 다른 page를 만들어
    AuthForm.jsx 로 접근하게 구성하였습니다.

  - **인가 / 인증**

    ContextAPI를 이용해 Root 에서 관리하도록 구성하였습니다.

    자세한 코드는 [src/utils/auth/AuthContext](https://github.com/wanted-onboarding-10team/wanted-onboarding-week1/blob/main/src/utils/auth/AuthContext.js)와 [Middleware](https://github.com/wanted-onboarding-10team/wanted-onboarding-week1/blob/main/src/utils/auth/Middleware.js) 파일에서 확인 가능합니다.

  - **유효성 검사**

    useAuthForm hook을 이용하였습니다.

    자세한 코드는 [src/utils/hooks/useAuthForm](https://github.com/wanted-onboarding-10team/wanted-onboarding-week1/blob/main/src/utils/hooks/useAuthForm.js) 파일에서 확인 가능합니다.

- **Todo**

  - **접근 구조**

    ```jsx
    import TodoList from '../components/todo/TodoList';

    const TodoPage = () => {
      return <TodoList />;
    };

    export default TodoPage;
    ```

  - **CRUD**

    useGetApi hook을 이용하였습니다.

    자세한 코드는 [src/utils/hooks/useGetApi](https://github.com/wanted-onboarding-10team/wanted-onboarding-week1/blob/main/src/utils/hooks/useGetApi.js) 파일에서 확인 가능합니다.

  - **컴포넌트**

    관련된 컴포넌트는 TodoContent와 TodoList가 있습니다.

## ✅Team Rules

### 커밋 메세지 컨벤션

[[GIT] ⚡️ Gitmoji 사용법 정리 (+ 깃모지 툴 소개)](https://inpa.tistory.com/entry/GIT-⚡️-Gitmoji-사용법-Gitmoji-cli)

[Gitmoji 사용하기](https://treasurebear.tistory.com/70)

![](https://cdn.discordapp.com/attachments/1077499116839522326/1078606883960668251/2023-02-24_6.18.25.png)

```tsx
<이모지> <간략한 커밋 내용>

<커밋 목적>
```

Gitmoji 사용 이유 → 이모지로 한눈에 어떤 커밋 내용인지 알 수 있기 때문에 사용하였습니다.

### 네이밍 컨벤션

폴더 명 : `camel case`

컴포넌트 파일 명: `pascal case`, 확장자: `.jsx`

파일 명 : `camel case`, 확장자: `.js`

### Prettier

```tsx
module.exports = {
  printWidth: 100,
  singleQuote: true,
  arrowParens: 'avoid',
};
```

### EsLint

```tsx
module.exports = {
  extends: ['react-app', 'eslint:recommended'],
  rules: {
    'no-var': 'error',
    'no-multiple-empty-lines': 'error',
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    eqeqeq: 'error',
    'dot-notation': 'error',
    'no-unused-vars': 'error',
  },
};
```

## 🌟Best Practice 채택 과정

### 10조의 소통 방법

1. 팀 노션 페이지
2. 디스코드
3. 각자 기능 발표 후 기능 별로 의견 조율

-----


### 인가 절차를 `context API`로 사용한 이유

인증된 사용자 여부를 전역적으로 관리하고,
하위 컴포넌트에서도 로그인 여부 값을 확인할 수 있게 하기 위해 context API를 채택하였습니다.

**🤔 고민한 지점** <br>

- **HOC (Higher Order Component, 고차컴포넌트)**
- **Context API**

전역적으로 인가를 담당하면 좋을 것 같다는 의견이 있어 저희 팀은 위와 같은 두가지의 접근 방식을 고려하였습니다.

두 방식 다 전역적으로 루트 컴포넌트에서 인가를 담당한다는 것은 동일한 지점이었으나, 저희가 Context API 를 선택한 이유는 다음과 같습니다.

1. Context API 현재 현업에서 많은 비중을 차지하고 있는 라이브러리 입니다. 따라서 기술을 팀원과 다같이 학습하는 것이 동료학습을 위해 구성된 팀의 목적에 부합하다고 생각했습니다.
2. Context API 를 이용하면 인가 관리만이 아닌, 루트의 Provider을 이용해 전역적으로 login 및 logout 관리가 가능하다는 장점이 있었습니다.

→ 결정사항
팀원들과 이런 토론을 통해 최종적으로 Context API를 인가 관리에 사용하기로 결정하였습니다.


### `api`폴더를 따로 생성한 이유

- 사용자 설정 인스턴스 생성
- 유지보수를 위해 기능별로 api 관리


### todo CRUD를 `useGetApi hooks` 로 사용한 이유

**🤔 고민한 지점** <br>

1. crud 할때마다 get 해오는 방식

   1. 장점 : 서버에 수정되었는지 여부를 확인 가능
   2. 단점 : 빈번하게 수정이 이루어 질 수 있는 완료 여부 체크박스를 변경할 때에도, 변경될 때마다 서버에 데이터 요청이 이루어짐

2. 처음에만 get, 이후 update, delete 요청만 보내고, front 단에서 따로 배열 처리해서 보여주는 방식
   1. 장점 : 서버에 계속해서 todo 데이터를 요청하지 않아도 됨
   2. 단점 : 서버에 적용 여부가 불안하여 신뢰성이 낮아짐.

→ 결정 사항
1번의 crud를 할 때마다 get 해오는 방식을 사용하되, 완료 여부만 수정하는 경우 서버에 수정 요청을 보내고 todo list에 대한 요청을 다시 받지 않도록 useGetApi hook을 만들었습니다.
이 hook을 사용하여 서버에 빈번한 요청 횟수를 줄이고, 데이터의 신뢰도를 높일 수 있도록 하였습니다.


### 유효성 검사를 `useAuthForm hooks`로 사용한 이유

- 유효성 검사를 hook을 이용해 처리함으로써 기능적인 로직을 분리하고자 하였습니다.
- 이후 추가적인 유효성 검사 또는 기능적인 확장이 필요할 때 효율적으로 처리할 수 있습니다.


### 로그인 페이지와 회원가입 페이지를 props를 통해 구분한 이유

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9cb4ce47-c232-4b0c-bc78-73c0be78c10b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230224T090855Z&X-Amz-Expires=86400&X-Amz-Signature=104650ccfcc11bc47d5b3431459f87fcd6c8202c85ba29af400f7e658f8b75a7&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject)

로그인 페이지와 회원가입 페이지 UI가 일치하기 때문에 코드의 중복을 줄이는 것과 재사용성을 위해
AuthForm 컴포넌트를 작성하여 페이지에서 호출하도록 하였습니다.

**🤔 고민한 지점** <br>

1.  react-router-dom의 useMatch로 signin인지 signup인지 판별
2.  컴포넌트에 props를 넘겨서 signin인지 signup인지 판별

→ 결정사항
1번의 경우 signin인지 아닌지만 판별할 수 있다는 문제점이 있습니다. 현재 기능상으로는 문제가 없지만,
나중에 어떤 기능이 추가되었을 때 바로 반영할 수 있는 2번의 방식으로 채택하였습니다.

### 팀원 소개

- [유시온 (팀장)](https://github.com/yoosion030)
- [홍수민](https://github.com/hongsoom)
- [황서영](https://github.com/Seo0H)
- [한동룡](https://github.com/Ryong-E)
- [이새미](https://github.com/shinpanda)
- [박수완](https://github.com/skdoqj)
