//Создать блок на странице. При зажатии мыши на блоке - блок должен перемещатся за мышью до отпускания кнопки.

const boxElement = document.querySelector("div");
//-----------1й вариант с готовыми событиями drag-----------------
// let coordX;
// let coordY;

// boxElement.addEventListener("dragstart", function (event) {
//   console.log("starting");
//   coordX = event.offsetX;
//   coordY = event.offsetY;
// });

// boxElement.addEventListener("dragend", function (event) {
//   boxElement.style.position = "absolute";
//   boxElement.style.top = event.pageY - coordY + "px";
//   boxElement.style.left = event.pageX - coordX + "px";
//   console.log("end");
// });

//-----------2й вариант с готовыми событиями mouse-----------------
boxElement.onmousedown = function (event) {
  //getBoundingClientRect() - получить координаты верхнего левого угла относительно окна браузера (для получения относительно документа
  //нужно добавить область прокрутки pageYOffset к top и pageXOffset к left)
  let shiftX = event.clientX - boxElement.getBoundingClientRect().left;
  let shiftY = event.clientY - boxElement.getBoundingClientRect().top;

  boxElement.style.position = "absolute";

  moveAt(event.pageX, event.pageY);

  // перенос элемента на координаты (pageX, pageY) со сдвигом относительно указателя мыши
  function moveAt(pageX, pageY) {
    boxElement.style.left = pageX - shiftX + "px";
    boxElement.style.top = pageY - shiftY + "px";
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // смена положения элемента при событии mousemove
  document.addEventListener("mousemove", onMouseMove);

  // событие дроп(отпускание кнопки мыши), удалить ненужные обработчики
  boxElement.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    boxElement.onmouseup = null;
  };
};

// отключить Drag'n'Drop браузера
boxElement.ondragstart = function () {
  return false;
};
