// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.
// ====================================================================================================================
let inputValue = document.getElementById('validation-input');

let totalLenght = inputValue.getAttribute('data-length');

let inTotalLenght = parseInt(totalLenght, 10);

inputValue.onchange = function () {
  if (inputValue.value.length === inTotalLenght) {
    inputValue.classList.remove('invalid');
    inputValue.classList.add('valid');
  }
  if (inputValue.value.length === 0) {
    inputValue.classList.remove('valid');
    inputValue.classList.remove('invalid');
  }
  if (
    inputValue.value.length !== inTotalLenght &&
    inputValue.value.lenght !== 0
  ) {
    inputValue.classList.add('invalid');
  }
};

console.log(inputValue);
