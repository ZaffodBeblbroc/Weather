export class View {
  constructor (domElement) {
    this.domElement = domElement;
  }

  createTitle(title) {
    const city = this.domElement.createCity(title);
    if (document.querySelector('.city')) {
      document.querySelector('.city').remove();
    }
    return  document.querySelector('.navbar-brand').append(city);
  }

  createTemp(tempToday) {
    const temp = this.domElement.createTemp(tempToday);
    if (document.querySelector('.temp')) {
      document.querySelector('.temp').remove();
    }
    return document.querySelector('.weather-temp').append(temp);
  }

  createWeather(data3, data4, data5, data6) {
    const feels = this.domElement.createFeels(data3);
    const sky = this.domElement.createSky(data4);
    const wind = this.domElement.createWind(data5);
    const humidity = this.domElement.createHumidity(data6);
    if (document.querySelector('.weather-list p')) {
      document.querySelectorAll('.weather-list p').forEach(elem=>{
        elem.remove();
      })
    }
    return document.querySelector('.weather-list').append(feels, sky, wind, humidity);
  }

  addIcon(iconQ) {
    const icon = this.domElement.createIcon(iconQ)
    if (document.querySelector('.img-weather')) {
      document.querySelector('.img-weather').remove();
    }
    return document.querySelector('.icon').append(icon);
  } 

  createAir(data, data2, data3, data4, data5, data6, data7, data8, data9) {
    const air_quality = this.domElement.createAirQuality(data);    
    const co = this.domElement.createCo(data2);
    const no = this.domElement.createNo(data3);
    const no2 = this.domElement.createNo2(data4);
    const o3 = this.domElement.createO3(data5)
    const so2 = this.domElement.createSo2(data6);
    const pm2_5 = this.domElement.createPm2_5(data7);
    const pm10 = this.domElement.createPm10(data8);
    const nh3 = this.domElement.createNh3(data9);

    if (document.querySelector('.list-gases li')) {
      document.querySelectorAll('.list-gases li').forEach(elem=>{
        elem.remove();
      })
      document.querySelector('.air h2').remove();
    }

    document.querySelector('.air').prepend(air_quality);
    return document.querySelector('.list-gases').append(co, no, no2, o3, so2, pm2_5, pm10, nh3);
  }

  createRequestHistory(data, data2, data3) {
    const value = Math.floor(Math.random() * (9999 - 1000));
    const item = this.domElement.createRequestItem(value);
    const text = this.domElement.createRequestItemText(data, data2, data3);
    const deleteItem = this.domElement.createRequestDelete();
    item.append(text);
    item.append(deleteItem);

    if(document.querySelectorAll('.list-request li').length < 10) {
      return document.querySelector('.list-request').prepend(item);
    } else {
      const array = document.querySelectorAll('.list-request li');
      array[9].remove();
      localStorage.removeItem(array[9].id)
      document.querySelector('.list-request').prepend(item);
    }
  }

  createWeatherTomorrow(date, sky, temp) {
    const item = this.domElement.createWeatherFiveDay(date, sky, temp);
    if (document.querySelector('.tomorrow .five-day-item')) {
      document.querySelector('.tomorrow .five-day-item').remove();
      }
    return document.querySelector('.tomorrow').prepend(item);
  }

  createWeatherAfterTomorrow(date, sky, temp) {
    const item = this.domElement.createWeatherFiveDay(date, sky, temp);
    if (document.querySelector('.after-tomorrow .five-day-item')) {
      document.querySelector('.after-tomorrow .five-day-item').remove();
      }
    return document.querySelector('.after-tomorrow').prepend(item);
  }

  createWeatherFourDay(date, sky, temp) {
    const item = this.domElement.createWeatherFiveDay(date, sky, temp);
    if (document.querySelector('.day-four .five-day-item')) {
      document.querySelector('.day-four .five-day-item').remove();
      }
    return document.querySelector('.day-four').prepend(item);
  }

  createWeatherFiveDay(date, sky, temp) {
    const item = this.domElement.createWeatherFiveDay(date, sky, temp);
    if (document.querySelector('.day-five .five-day-item')) {
      document.querySelector('.day-five .five-day-item').remove();
      }
    return document.querySelector('.day-five').prepend(item);
  }

  createWeatherSixDay(date, sky, temp) {
    const item = this.domElement.createWeatherFiveDay(date, sky, temp);
    if (document.querySelector('.day-six .five-day-item')) {
      document.querySelector('.day-six .five-day-item').remove();
      }
    return document.querySelector('.day-six').prepend(item);
  }
}

