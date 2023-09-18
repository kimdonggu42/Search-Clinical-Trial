# [ Week 2 ] Search Clinical Trial

<img src = https://camo.githubusercontent.com/431cb39804ef7c333ffa8b0dfec7e24581654e84e3c8bcf91f64a43158c3156c/68747470733a2f2f7374617469632e77616e7465642e636f2e6b722f696d616765732f6576656e74732f323930392f62333539313861362e6a7067 />

## 프로젝트 소개

- 사용자가 질환명 검색 시 해당 키워드를 가진 추천 검색어를 보여줍니다.

- 진행 기간 : 2023.09.06 ~ 2023.09.07

## 개발 환경

### Developement

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/>

### Styling

<img src="https://img.shields.io/badge/styled component-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>

### Convention

<img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"> <img src="https://img.shields.io/badge/husky-brown?style=for-the-badge&logo=npm"> <img src="https://img.shields.io/badge/lint staged-white?style=for-the-badge&logo=npm">

## 실행 방법

- 이 프로젝트는 json server를 사용하고 있습니다. npm start 시 json server가 함께 start 됩니다.

```
$ git clone git@github.com:kimdonggu42/Search-box.git

$ npm install

$ npm start
```

## 디렉토리 구조

```
📦 src
 ┣ 📂 assets
 ┃ ┣ 📂 images
 ┃ ┗ 📂 styles
 ┣ 📂 components
 ┣ 📂 hooks
 ┣ 📂 utils
 ┣ 📜 App.tsx
 ┗ 📜 index.tsx
```

## 작업 내용

### 1. API 호출 시 캐싱 적용

- API 호출 시 응답과 현재 시간을 객체에 저장
  `{ 검색어 : { data: res.data, date: 현재 시간 } }`

- 이전에 검색했던 키워드로 재검색 시 객체에 저장된 `검색어.date`와 현재 시간을 비교하여
  호출 이후 5분이 지나지 않았다면 캐싱해둔 `검색어.data`를 반환하고 지났다면 재호출합니다.

### 2. input change event 발생 시마다 API 호출이 되지 않도록 debounce 적용

- useDebounce hook에서 value와 delay를 인자로 받아 설정한 delay 전에는 API 호출이 발생하지 않도록 했습니다.

### 3. 키보드로 검색어 이동 기능 구현

- 방향 키를 사용해 이동할 요소 검색어 ul에 ref 할당하고 검색창에서 아래 방향 키를 누르면 ref에 포커스 이벤트를 실행하여 검색어 ul로 이동되도록 했습니다.

- 검색창에서 tabIndex state를 통해 키보드 이동 event 발생 시 마다 tabIndex 값을 증감시킵니다. 그리고 상태 인덱스와 일치하는 li를 강조 표시하여 이동하는 것처럼 보이도록 했습니다.

## 작동 화면

|                                                         **검색어 추천(caching & debounce)**                                                          |                                                               **키보드로 검색어 이동**                                                               |
| :--------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img width="360px" src="https://github.com/kimdonggu42/Github-React-repository-Issue-viewer/assets/115632555/8b58474c-08af-4352-b9b7-03d5cb72d912"/> | <img width="360px" src="https://github.com/kimdonggu42/Github-React-repository-Issue-viewer/assets/115632555/969ac28b-2e19-4fdc-a450-51f5029ae11a"/> |
