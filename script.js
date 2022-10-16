// Создайте поле ввода INPUT и кнопку SAVE.
// При нажатии на SAVE функция возьмет значение из INPUT и запишет его в localStorage c ключём “input”.
// При загрузке страницы напишите скрипт который будет присваивать нашему полю ввода INPUT значение из localStorage по ключу “input”.

// PS: чтобы получить текущее значение поля ввода INPUT Вам надо:
//     * Получить сам INPUT
//     * Получить его значение из поля value. Например:
//         let input = document.querySelector('.input')
//         let inputText = input.value


document.querySelector('button').addEventListener('click', function() {

    let value = document.querySelector('input').value;
    localStorage.setItem('input', value);
});

document.addEventListener('Name', function(){

    let input = localStorage.getItem('input');
})

// Напишите таймер, или просто отсчётчик, который будет прибавлять +1 каждую секунду. 
// Если Вы закроете вкладку, но потом вернётесь снова - он продолжит счётчик дальше.

function Timer(){
    var elem = document.getElementById('timer');
    elem.value = parseInt(elem.value)+1;
 }
 
 function start() {
    window.TimerId = window.setInterval(Timer, 1000);
 }