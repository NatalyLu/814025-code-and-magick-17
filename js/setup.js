'use strict';
var configurationOfUser = document.querySelector('.setup');
configurationOfUser.classList.remove('hidden');
var fragment = document.createDocumentFragment();

var nameOfPendal = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var secondNameOfPendalf = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var colorsofRobe = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var colorsOfYyes = ['black', 'red', 'blue', 'yellow', 'green'];

var quantityOfMags = 4;
var Mags = [];

// Получаем рандомное число от 0 до длины массива
var getRandomValue = function (arrayOfValues) {
  return Math.round(Math.random() * arrayOfValues.length - 1);
};

// Куда будем вставлять элементы
var listElement = document.querySelector('.setup-similar-list');

// Шаблон
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// Создаем армию
var createMagS = function (quantity) {
  for (var i = 0; i < quantity; i++) {
    Mags.push({
      fullName: nameOfPendal[getRandomValue(nameOfPendal)] + ' ' + secondNameOfPendalf[getRandomValue(secondNameOfPendalf)],
      coatColor: colorsofRobe[getRandomValue(colorsofRobe)],
      eyesColor: colorsOfYyes[getRandomValue(colorsOfYyes)]
    });

    var wizardElement = wizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = Mags[i].fullName;
    wizardElement.querySelector('.wizard-coat').style.fill = Mags[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = Mags[i].eyesColor;

    fragment.appendChild(wizardElement);
  }
};

createMagS(quantityOfMags);
listElement.appendChild(fragment);
configurationOfUser.querySelector('.setup-similar').classList.remove('hidden');


// <template id="similar-wizard-template" style="display: none">
//   <div class="setup-similar-item">
//     <div class="setup-similar-content">
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 86" class="setup-similar-wizard">
//         <g class="wizard">
//           <use xlink:href="#wizard-coat" class="wizard-coat"></use>
//           <use xlink:href="#wizard-head" class="wizard-head"></use>
//           <use xlink:href="#wizard-eyes" class="wizard-eyes"></use>
//           <use xlink:href="#wizard-hands" class="wizard-hands"></use>
//         </g>
//       </svg>
//     </div>
//     <p class="setup-similar-label">Петр Петров</p>
//   </div>
// </template>
