'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;

var BAR_SPACE = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

var TEXT_SIZE_TITLE = 16;
var TEXT_SIZE = 16;
var BASE_LINE = Math.round(TEXT_SIZE * 1.2);
var COLOR_TEXT_H = '#00008b';
var COLOR_TEXT = 'darkblue';

var COLOR_IAM = 'rgba(255, 0, 0, 1)';
var COLOR_PLAYERS = 'rgba(0, 51, 102, 1)';


// Функция для отрисовки ОКНА
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Функция для отрисовки ТЕКСТА ЗАГЛАВИЯ
var renderText = function (ctx, color) {
  var xForText = CLOUD_X + 2 * GAP;
  var yForFirstLine = CLOUD_HEIGHT - GAP - BASE_LINE - BAR_HEIGHT - BASE_LINE - GAP - BASE_LINE;
  var yForSecondLine = CLOUD_HEIGHT - GAP - BASE_LINE - BAR_HEIGHT - BASE_LINE - GAP;
  ctx.font = TEXT_SIZE_TITLE + 'px PT Mono';
  ctx.fillStyle = color;
  ctx.fillText('Ура Вы победили!', xForText, yForFirstLine);
  ctx.fillText('Список результатов:', xForText, yForSecondLine);

};

// Функция для нахождения МАКСИМАЛЬНОГО элемента
var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};


// Основной метод для отрисовки окон и статистики
window.renderStatistics = function (ctx, names, times) {

  // отрисовка окон
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';

  // отрисовка текста заглавия
  renderText(ctx, COLOR_TEXT_H);

  var maxTime = getMaxElement(times);

  // цикл для отрисовки статистики
  for (var i = 0; i < names.length; i++) {
    // Отрисовка имени
    ctx.fillStyle = COLOR_TEXT;
    ctx.font = TEXT_SIZE + 'px PT Mono';

    // Функция для определения координат отрисовки имени игрока
    var getCoordinatesForName = function (name) {
      var xForName = CLOUD_X + BAR_SPACE + (BAR_WIDTH + BAR_SPACE) * i;
      var yForName = CLOUD_HEIGHT - GAP;
      return (name, xForName, yForName);// [name, xForName, yForName];
    };
    ctx.fillText(getCoordinatesForName(names[i])[0], getCoordinatesForName(names[i])[1], getCoordinatesForName(names[i])[2]);
    if (names[i] === 'Вы') {
      ctx.fillStyle = COLOR_IAM;
    } else {
      var RANDOM = Math.random().toFixed(1);
      if (RANDOM === 0) {
        RANDOM = 0.1;
      }
      COLOR_PLAYERS = 'rgba(0, 51, 102,' + RANDOM + ')';
      ctx.fillStyle = COLOR_PLAYERS;
    }

    // Отрисовка столбца
    ctx.fillRect(CLOUD_X + BAR_SPACE + (BAR_WIDTH + BAR_SPACE) * i, CLOUD_HEIGHT - GAP - BASE_LINE, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);

    // Отрисовка значений времени
    ctx.fillStyle = COLOR_TEXT;
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_SPACE + (BAR_WIDTH + BAR_SPACE) * i, CLOUD_HEIGHT - GAP - BASE_LINE - (BAR_HEIGHT * times[i]) / maxTime - GAP);
  }
};
