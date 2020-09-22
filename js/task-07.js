// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.
let controlFont = document.getElementById('font-size-control');
controlFont.setAttribute('style', 'margin:40px; display:flex;');

let text = document.getElementById('text');

controlFont.oninput = function () {
  text.style.fontSize = controlFont.value + 'px';
};

console.log(controlFont, text);
