const body = document.querySelector('body');
const button = document.querySelector("#mode-btn");

button.addEventListener('click', function() {
    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = '#eafcff';
        button.innerText = '다크 모드';
        button.style.backgroundColor = 'orange';
        button.style.color = 'black';
    } else {
        body.style.backgroundColor = 'black';
        button.innerText = '라이드 모드';
        button.style.backgroundColor = 'orange';
        button.style.color = 'white';
    }
});