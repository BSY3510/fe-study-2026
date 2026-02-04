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
