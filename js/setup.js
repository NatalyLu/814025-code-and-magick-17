'use strict';
var elementForRemoveClass = document.querySelector('.setup');
elementForRemoveClass.classList.remove('hidden');

var nameOfPendal = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var secondNameOfPendalf = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var colorsofRobe = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var colorsOfYyes = ['black', 'red', 'blue', 'yellow', 'green'];

var name = [];
var coatColor = [];
var eyesColor = [];


var randomValue = function (arrayOfValues) {
  var randomNomber = Math.random() * arrayOfValues.length;
  return randomNomber;
};

// Заполняем массивы данными
for (var i = 1; i < 4; i++) {
  var firstName = randomValue(nameOfPendal);
  var lastName = randomValue(secondNameOfPendalf);
  // name.push(lastName);
  name [i] = firstName + ' ' + lastName;
  coatColor [i] = colorsofRobe[randomValue(colorsofRobe)];
  eyesColor [i] = colorsOfYyes[randomValue(colorsOfYyes)];
}

// Куда будем вставлять элементы
var listElement = document.querySelector('.setup-similar-list');
// Шаблон
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

for (var i = 0; i < 4; i++) {
  var wizardElement = wizardTemplate.cloneNode(true);


  wizardElement.querySelector('.setup-similar-label').textContent = name[i];
  listElement.appendChild(wizardElement);
}


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
