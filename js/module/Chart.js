const arrayDate = ['00.00', '03.00', '06.00', '09.00', '12.00', '15.00', '18.00', '21.00'];
let today = new Date();

export async function getFive(data) { 
  const arrayTomorrow = [];
  const arrayAfterTomorrow = [];
  const arrayFourDay = [];
  const arrayFiveDay = [];
  const arraySixDay = [];
  for (let i = 0; i < 40; i++) {
    let newDay = new Date(data.list[i].dt_txt);
      if(today.getMonth() === newDay.getMonth()) {
        if (today.getDate() + 1 === newDay.getDate()) {
            arrayTomorrow.push(data.list[i].main.temp);          
        } else if (today.getDate() + 2 === newDay.getDate()) {
            arrayAfterTomorrow.push(data.list[i].main.temp);
        } else if (today.getDate() + 3 === newDay.getDate()) {
            arrayFourDay.push(data.list[i].main.temp);
        } else if (today.getDate() + 4 === newDay.getDate()) {
             arrayFiveDay.push(data.list[i].main.temp);
        } else if (today.getDate() + 5 === newDay.getDate()) {
            arraySixDay.push(data.list[i].main.temp);
        }  
      }

    // if (today.getMonth() === newDay.getMonth()) {  
    //   let num = newDay.getDate() - today.getDate();
    //   switch (num) {
    //   case 1:
    //     arrayTomorrow.push(data.list[i].main.temp);
    //     break;
    //   case 2:
    //     arrayAfterTomorrow.push(data.list[i].main.temp);
    //     break;
    //   case 3:
    //     arrayFourDay.push(data.list[i].main.temp);
    //     break;
    //   case 4:
    //     arrayFiveDay.push(data.list[i].main.temp);
    //     break;
    //   case 5:
    //     arraySixDay.push(data.list[i].main.temp);
    //     break;
    //   }  
    // } else {
    //   switch (newDay.getDate()) {
    //     case 0:
    //       arrayTomorrow.push(data.list[i].main.temp);
    //       break;
    //     case 1:
    //       arrayAfterTomorrow.push(data.list[i].main.temp);
    //       break;
    //     case 2:
    //       arrayFourDay.push(data.list[i].main.temp);
    //       break;
    //     case 3:
    //       arrayFiveDay.push(data.list[i].main.temp);
    //       break;
    //     case 4:
    //       arraySixDay.push(data.list[i].main.temp);
    //       break;
    //   } 
    // }
    // if (i === 39) {
    //   updateChart(arrayTomorrow, arrayAfterTomorrow, arrayFourDay, arrayFiveDay, arraySixDay);
    // }
  }
  updateChart(arrayTomorrow, arrayAfterTomorrow, arrayFourDay, arrayFiveDay, arraySixDay);
}

let canvas = document.querySelectorAll('canvas');

let ctxTomorrow = canvas[0].getContext('2d');
let ctxAfterTomorrow = canvas[1].getContext('2d');
let ctxFourDay = canvas[2].getContext('2d');
let ctxFiveDay = canvas[3].getContext('2d');
let ctxSixDay = canvas[4].getContext('2d');

let chartTomorrow = null;
let chartAfterTomorrow = null;
let chartFourDay = null;
let chartFiveDay = null;
let chartSixDay = null;

const createChart = (array) => {
  let data = {
    labels: arrayDate,
    datasets: [{
      label: 'Температура',
      data: array,
      borderWidth: 1,
      backgroundColor: 'rgba(255, 193, 7, 1)',      
      borderColor: 'rgba(255, 193, 7, 1)'
    }]
  }
  
  let config = {
    type: 'line',
    data: data
  }

  chartTomorrow = new Chart(ctxTomorrow, config);
  chartAfterTomorrow = new Chart(ctxAfterTomorrow, config);
  chartFourDay = new Chart(ctxFourDay, config);
  chartFiveDay = new Chart(ctxFiveDay, config);
  chartSixDay = new Chart(ctxSixDay, config);
}

const updateChart = (arrayTomorrow, arrayAfterTomorrow, arrayFourDay, arrayFiveDay, arraySixDay) => {
  chartTomorrow.config.data.datasets[0].data = arrayTomorrow;
  chartTomorrow.update();

  chartAfterTomorrow.config.data.datasets[0].data = arrayAfterTomorrow;
  chartAfterTomorrow.update();

  chartFourDay.config.data.datasets[0].data = arrayFourDay;
  chartFourDay.update();

  chartFiveDay.config.data.datasets[0].data = arrayFiveDay;
  chartFiveDay.update();

  chartSixDay.config.data.datasets[0].data = arraySixDay;
  chartSixDay.update();
}

createChart(); 


