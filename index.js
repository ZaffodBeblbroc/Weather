let options = {
  weekday: "long",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

setInterval(function(){
  document.querySelector('.data-time').innerHTML = (new Date()).toLocaleString("ru-RU", options);
}, 1000);

import { View } from './js/View.js';
import { Model } from './js/Model.js';
import { Controller } from './js/Controller.js';
import { getData, getAir} from './js/api/ApiKey.js';
import { DomHelper } from './js/module/DomHelper.js';
import { getFive } from './js/module/Chart.js';
import { clearLocalStor, setLocalStor } from './js/module/Local.js';

const run = async (city) => {
  const data = await getData(city);
  const dataAir = await getAir(city);
  const model = new Model(data, dataAir);
  const view = new View(new DomHelper());
  const controller = new Controller(model, view);
  controller.weather();
  controller.air();
  controller.weatherFive();
  getFive(data);
  delItem();
  setLocalStor();
  airQuality();
}

document.querySelector('.local').addEventListener('click', clearLocalStor);
document.querySelector('.search').addEventListener('click', search);

function search(event) {
  event.preventDefault();
  const searchCity = document.querySelector('.text');  
  let city = searchCity.value.trim(); 
  if(city !== "") {
    searchCity.value = '';
    run(city); 
  }
}

export function delItem() {
  document.querySelectorAll('.delete-button').forEach((elem) => {
  elem.addEventListener('click', del);
  })
}

export function del() {
  localStorage.removeItem(this.parentElement.id)
  this.parentElement.remove();
} 

function airElem() {
  const elem = document.querySelector('.air-quality').textContent.slice(-4, -3);
  switch (elem) {
    case '1':
      document.querySelector('.air-excellent').classList.toggle('close-air-quality');
      break;
    case '2':
      document.querySelector('.air-average').classList.toggle('close-air-quality'); 
      break;
    case '3':
      document.querySelector('.air-bad').classList.toggle('close-air-quality');
      break;
    case '4':
      document.querySelector('.air-harmful').classList.toggle('close-air-quality');
      break;
    case '5':
      document.querySelector('.air-very-harmful').classList.toggle('close-air-quality');
      break;
  }
}

function airQuality () {
  document.querySelectorAll('.air-elem').forEach((elem) => {
    elem.classList.add('close-air-quality');
  })
  document.querySelector('.air-quality').addEventListener('click', airElem);
}