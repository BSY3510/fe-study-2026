# week1
## html
- head: 인코딩 및 제목, css 연결 등
- body: 보여지는 부분
    - js 연결
- h1: 가장 큰 제목
- p: 문단
- button: 버튼

## css
- <>으로 묶여진 부분을 꾸밈
- Content, Padding, Border, Margin
- class명을 기준으로도 꾸일 수 있음

## js
- 브라우저의 자바스크립트 엔진 위에서 동작
- DOM(Document Object Model): HTML 태그들을 자바스크립트가 다룰 수 있도록 객체화한 것
- DOM Selection --> Event Listener
- ex. const body = document.querySelector('body');

## GitHub 배포
- GitHub Pages 설정 활용

# week2
## JS 문법
- var: 옛날 스타일
- let: 변수, 재할당 가능
- const: 상수, 재할당 불가(객체나 배열은 참조 주소만 고정이므로 내부 값 수정 가능)
- ...: 깊은 복사
    - ex. const todo = {id:1, done: false}; let todo1 = {...todo};

## 함수
- Arrow Function: Lambda와 유사
    - ex. const add = (a, b) => a+b;
- map(): 데이터 변환
- filter(): 데이터 필터링
- forEach(): 단순 반복 실행
- .getElementById(): id 기반 DOM 요소 가져옴
- .createElement(): 요소 생성
- .classList.add(): 클래스 추가
    - css 파일과 연계하여 활용 가능
- .addEventListener(): 이벤트리스너 추가
- .stopPropagation(): 이벤트 버블링 방지

## 태그
- ul: 순서 없는 목록
- ol: 순서 있는 목록
- li: 목록 항목

## LocalStorage
- 브라우저에 Key-Value로 데이터 저장하는 공간
- 문자열만 저장 가능, 객체나 배열을 넣으려면 변환 과정 필요
    - JSON.stringify(데이터): 객체/배열 -> 문자열
    - JSON.parse(문자열): 문자열 -> 객체/배열

# week3
## 비동기 처리
- 요청을 보내고 다음 줄을 실행하며 응답이 오면 나중에 알림
- async/await 문법
    - Callback이나 .then() 체이닝 방식과 달리 어느 부분에서 오류가 발생하였는지 확인 용이

## .hidden 클래스
- 요소를 숨겼다 보여주는 기법에 활용
- display: none;

## JS로 API 호출
1. API 요청: await fetch(url);
2. 상태 코드 확인: if문
3. JSON 변환: (비동기) await response.json();

## alert
- alert창 띄움
- alert(message);

## 구조 분해 할당
- 객체 안에 여러 값들이 있는 경우 이들을 꺼내서 같은 이름의 변수에 할당 가능
- ex. const {url, name, bio} = data;

## 모듈 시스템
1. 서버와 통신하는 로직 담당
2. 화면을 그리는 로직 담당
3. 모듈을 연결하는 로직
- script 태그 type="module" 추가로 브라우저에게 모듈 사용 표시
- <span style="color:red">**※ 주의: 브라우저 보안 정책상 모듈 시스템은 로컬 파일 경로로 직접 열 경우 작동하지 않을 수 있다.(CORS 오류 발생)**</span>

# week4
## FrontEnd Tool
- Node.js & npm
    - 자바스크립트 실행 환경 / 라이브러리 관리 도구
- Vite
    - 프론트엔드 빌드 도구
    - 모듈 연결, 코드 압축, 서버 실행 등
- React
    - UI를 만들기 위한 라이브러리
    - 데이터(State)가 변하면, 화면(UI)이 바뀜

## 패키지 구조
- node_modules/
    - 라이브러리들이 저장되는 곳
- public/
    - 이미지, 폰트 같은 정적 파일 저장소
- src/
    - 소스 코드, main.jsx(프로그램 진입점), App.jsx(메인 페이지 컴포넌트), index.css(전역 스타일)
- package.json
    - 프로젝트 설정 및 의존성 목록


# week5
## 컴포넌트 분리
- 컴포넌트 조립을 할 수 있게 분리를 하면 재사용성과 유지보수성에 용이
- src/components 패키지에서 구현

## Props(Properties)
- 부모 컴포넌트가 자식 컴포넌트에게 데이터를 넘겨줄 때 사용
- 데이터는 위에서 아래로만 흐른다(Unidirectional Data Flow)