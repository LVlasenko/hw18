// Реализовать калькулятор, в котором есть слайдер (input type=”range”) и поле ввода (input type=”number”).
// Изменяя состояние range меняется состояние поля ввода number. И наоборот.

// Реализовать блок-диаграмму, который в пикселях будет отображать значение range.
// Например - range выбрали число 83, высота блока-диаграммы будет 83 пикселя.

// Красный блок - количество комиссии. Комиссия вычисляется по формуле:

// (range < 20) -> 2%
// (20 - 50)  -> 4%
// (50 - 75)  -> 6%
// (75 - 100)  -> 8%
// Красный блок отображает количество комиссии. Например Значение выбора 100, комиссия будет 8%.
// Результирующая сумма: 108. Высота красного блока - 8px

const range = document.querySelector(".range");
const box = document.querySelector(".white-block");
const number = document.querySelector(".number");
const commBlock = document.querySelector(".commision-block");

number.onchange = function () {
  const typedNumber = number.value;
  range.value = typedNumber;
  box.style.height = typedNumber + "px";
  commCalc();
};

range.onchange = function () {
  const changed = range.value;
  number.value = changed;
  box.style.height = changed + "px";
  console.log(event);
  console.log(event.type);
  commCalc();
};

function commCalc() {
  if (range.value < 20) {
    commBlock.style.height = (box.clientHeight / 100) * 2 + "px";
  } else if (range.value >= 20 && range.value < 50) {
    commBlock.style.height = (box.clientHeight / 100) * 4 + "px";
  } else if (range.value >= 50 && range.value < 70) {
    commBlock.style.height = (box.clientHeight / 100) * 6 + "px";
  } else if (range.value >= 70) {
    commBlock.style.height = (box.clientHeight / 100) * 8 + "px";
  }
}
