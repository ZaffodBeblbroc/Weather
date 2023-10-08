export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
  
  async weather() {
    const city = this.model.data.city.name;
    const temp = this.model.data.list[0].main.temp;
    const feels = this.model.data.list[0].main.feels_like;
    const sky = this.model.data.list[0].weather[0].description;
    const wind = this.model.data.list[0].wind.speed;
    const humidity = this.model.data.list[0].main.humidity;
    const icon = this.model.data.list[0].weather[0].icon;

    this.view.createTemp(temp);
    this.view.createTitle(city);
    this.view.addIcon(icon);
    this.view.createWeather(feels, sky, wind, humidity);
    this.view.addIcon(icon);
    this.view.createRequestHistory(city, temp, sky);
  };

  async air() {
    const air_quality = this.model.dataAir.list[0].main.aqi;
    const co = this.model.dataAir.list[0].components.co;
    const no = this.model.dataAir.list[0].components.no;
    const no2 = this.model.dataAir.list[0].components.no2;
    const o3 = this.model.dataAir.list[0].components.o3;
    const so2 = this.model.dataAir.list[0].components.so2;
    const pm2_5 = this.model.dataAir.list[0].components.pm2_5;
    const pm10 = this.model.dataAir.list[0].components.pm10;
    const nh3 = this.model.dataAir.list[0].components.nh3;

    this.view.createAir(air_quality, co, no, no2, o3, so2, pm2_5, pm10, nh3);
  } 

  async weatherFive() {
    let today = new Date();
    let arrayToday = [];
    let arrayTomorrow = [];
    let arrayAfterTomorrow = [];
    let arrayFourDay = [];
    let arrayFiveDay = [];
    let arraySixDay = [];
    let numToday = 0;
    for (let i = 0; i < 40; i++) {
      let day = this.model.data.list[i].dt_txt;
      let newDay = new Date(day);

      if (today.getMonth() === newDay.getMonth()) {
        let num = newDay.getDate() - today.getDate();
        switch (num) {
          case 0:
            arrayToday.push(this.model.data.list[i].main.temp);
            numToday = arrayToday.length;
            break;
          case 1:
            arrayTomorrow.push(this.model.data.list[i].main.temp);
            break;
          case 2:
            arrayAfterTomorrow.push(this.model.data.list[i].main.temp);  
            break;
          case 3:
            arrayFourDay.push(this.model.data.list[i].main.temp);  
            break;
          case 4:
            arrayFiveDay.push(this.model.data.list[i].main.temp);
            break;
          case 5:
            arraySixDay.push(this.model.data.list[i].main.temp);
            break;
        }  
      } 
    }

    let sumTempArrayTomorrow = arrayTomorrow.reduce((sum, current) => sum + current, 0);
    let sumTempArrayAfterTomorrow = arrayAfterTomorrow.reduce((sum, current) => sum + current, 0);
    let sumTempArrayFour = arrayFourDay.reduce((sum, current) => sum + current, 0);
    let sumTempArrayFive = arrayFiveDay.reduce((sum, current) => sum + current, 0);
    let sumTempArraySix = arraySixDay.reduce((sum, current) => sum + current, 0);

    let dateTomorrow = new Date(this.model.data.list[numToday + 7].dt_txt);
    let dateAfterTomorrow = new Date(this.model.data.list[numToday + 15].dt_txt);
    let dateFourDay = new Date(this.model.data.list[numToday + 23].dt_txt);
    let dateFiveDay = new Date(this.model.data.list[numToday + 31].dt_txt);
    let dateSixDay = new Date(this.model.data.list[38].dt_txt);

    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    dateTomorrow = dateTomorrow.toLocaleString("ru-RU", options);
    dateAfterTomorrow = dateAfterTomorrow.toLocaleString("ru-RU", options);
    dateFourDay = dateFourDay.toLocaleString("ru-RU", options);
    dateFiveDay = dateFiveDay.toLocaleString("ru-RU", options);
    dateSixDay = dateSixDay.toLocaleString("ru-RU", options);

    const sky2 = this.model.data.list[numToday + 7].weather[0].description;
    const sky3 = this.model.data.list[numToday + 15].weather[0].description;
    const sky4 = this.model.data.list[numToday + 23].weather[0].description;
    const sky5 = this.model.data.list[numToday + 31].weather[0].description;
    const sky6 = this.model.data.list[39].weather[0].description;

    this.view.createWeatherTomorrow(dateTomorrow, sky2, sumTempArrayTomorrow/arrayTomorrow.length);
    this.view.createWeatherAfterTomorrow(dateAfterTomorrow, sky3, sumTempArrayAfterTomorrow/arrayAfterTomorrow.length);
    this.view.createWeatherFourDay(dateFourDay, sky4, sumTempArrayFour/arrayFourDay.length);
    this.view.createWeatherFiveDay(dateFiveDay, sky5, sumTempArrayFive/arrayFiveDay.length);
    this.view.createWeatherSixDay(dateSixDay, sky6, sumTempArraySix/arraySixDay.length);
  }
}


