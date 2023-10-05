import { delItem } from '../../index.js'

export function clearLocalStor() {
  localStorage.clear();
  document.querySelectorAll('.request-history-item').forEach((elem) => {
    elem.remove()
  })
}

export function setLocalStor() {
  const arrayLocalStor = document.querySelectorAll('.request-history-item');
  for (let i= 0; i < arrayLocalStor.length; i++) {
    localStorage.setItem(`${arrayLocalStor[i].id}`, arrayLocalStor[i].textContent);
  }
}

 function getLocalStor() {
  const arrayStor = [];
  for (let i= 0; i < localStorage.length; i++) {
    arrayStor.push(localStorage.key(i));
  }
  console.log(arrayStor);
  return arrayStor;
}

document.addEventListener("DOMContentLoaded", () => {
  const arrayStore = getLocalStor();
  for (let i = 0; i < arrayStore.length; i++) {
    const item = document.createElement('li');
    item.classList.add('request-history-item', 'fs-3');
    item.innerHTML = localStorage.getItem(arrayStore[i]);
    item.setAttribute('id', localStorage.key(i))

    const itemButton = document.createElement('button');
    itemButton.classList.add('delete-button', 'btn-close', 'btn', 'btn-warning', 'fs-4');
    item.append(itemButton);
    document.querySelector('.list-request').append(item);
  }
  delItem();
}); 

