export class DomHelper {
  createCity(city) {
    return this.createElement({
      tag: 'p',
      classList: ['city', 'fs-2'],
      textContent: city,
    });
  }

  createTemp(temp) {
    return this.createElement({
      tag: 'p',
      classList: ['temp',],
      innerHTML: Math.round(`${temp}`) + '&#8451;',
    });
  }

  createFeels(feels) {
    return this.createElement({
      tag: 'p',
      classList: ['feels-like', 'fs-5', 'border-bottom', 'border-warning-subtle'],
      innerHTML: 'Ощущается как: ' + Math.round(`${feels}`) + ' &#8451;',
    });
  }

  createSky(sky) {
    return this.createElement({
      tag: 'p',
      classList: ['sky', 'fs-5', 'border-bottom', 'border-warning-subtle'],
      innerHTML: sky.charAt(0).toUpperCase() + sky.slice(1),
    });
  }

  createWind(wind) {
    return this.createElement({
      tag: 'p',
      classList: ['wind', 'fs-5', 'border-bottom', 'border-warning-subtle'],
      innerHTML: 'Скорость ветра: ' + `${wind}` + ' м/с',
    });
  }

  createHumidity(humidity) {
    return this.createElement({
      tag: 'p',
      classList: ['humidity', 'fs-5', 'border-bottom', 'border-warning-subtle'],
      innerHTML: 'Влажность: ' + `${humidity}` + ' %',
    });
  }

  createIcon(icon) {
    return this.createElement({
      tag: 'img',
      classList: ['img-weather'],
      src: `https://openweathermap.org/img/wn/${icon}@2x.png`,
    });
  }

  createAirQuality(air_quality) {
    return this.createElement({
      tag: 'h2',
      classList: ['air-quality'],
      innerHTML: 'ТЕКУЩЕЕ КАЧЕСТВО ВОЗДУХА ' + `${air_quality} б.`,
    });
  }

  createCo(co) {
    return this.createElement({
      tag: 'li',
      classList: ['co', 'border-bottom', 'border-warning-subtle', 'fs-3'],
      innerHTML: `Оксид углерод: ` + `${co}` + ` мкг/м &sup3`,
    });
  }

  createNo(no) {
    return this.createElement({
      tag: 'li',
      classList: ['no', 'border-bottom', 'border-warning-subtle', 'fs-3'],
      innerHTML: `Оксид азота: ` + `${no}` + ` мкг/м &sup3`,
    });
  }

  createNo2(no2) {
    return this.createElement({
      tag: 'li',
      classList: ['no2', 'border-bottom', 'border-warning-subtle', 'fs-3'],
      innerHTML: `Диоксид азота: ` + `${no2}` + ` мкг/м &sup3`,
    });
  }

  createO3(o3) {
    return this.createElement({
      tag: 'li',
      classList: ['o3', 'border-bottom', 'border-warning-subtle', 'fs-3'],
      innerHTML: `Озон: ` + `${o3}` + ` мкг/м &sup3`,
    });
  }

  createSo2(so2) {
    return this.createElement({
      tag: 'li',
      classList: ['so2', 'border-bottom', 'border-warning-subtle', 'fs-3'],
      innerHTML: `Диоксид серы: ` + `${so2}` + ` мкг/м &sup3`,
    });
  }

  createPm2_5(pm2_5) {
    return this.createElement({
      tag: 'li',
      classList: ['pm2_5', 'border-bottom', 'border-warning-subtle', 'fs-3'],
      innerHTML: `Мелкодисперсные частицы: ` + `${pm2_5}` + ` мкг/м &sup3`,
    });
  }

  createPm10(pm10) {
    return this.createElement({
      tag: 'li',
      classList: ['pm10', 'border-bottom', 'border-warning-subtle', 'fs-3'],
      innerHTML: `Крупные взвеси: ` + `${pm10}` + ` мкг/м &sup3`,
    });
  }

  createNh3(nh3) {
    return this.createElement({
      tag: 'li',
      classList: ['nh3', 'border-bottom', 'border-warning-subtle', 'fs-3'],
      innerHTML: `Амиак: ` + `${nh3}` + ` мкг/м &sup3`,
    });
  }

  createRequestItem(value) {
    return this.createElement({
      tag: 'li',
      classList: ['request-history-item', 'fs-3'],   
      attribute: value,
    });
  }

  createRequestItemText(city, temp, sky) {
    return this.createElement({
      tag: 'p',
      innerHTML: 'Город: ' + city + ' ' + Math.round(`${temp}`) + ' &#8451;' + ' ' + sky,      
    });
  }

  createRequestDelete() {
    return this.createElement({
      tag: 'button',
      classList: ['delete-button', 'btn-close', 'btn', 'btn-warning', 'fs-4'],
    });
  }

  createDate(date) {
    return this.createElement({
      tag: 'p',
      classList: ['date-five'],
      innerHTML: `Дата: ` + `${date}`,
    });
  }

  createWeatherFiveDay(date, sky, temp) {
    return this.createElement({
      tag: 'p',
      classList: ['five-day-item', 'border-top', 'border-warning-subtle', 'fs-6'],
      innerHTML: 
        date.charAt(0).toUpperCase() + date.slice(1) + '<br>' + 
        sky.charAt(0).toUpperCase() + sky.slice(1) + '<br>Средняя температура: ' + 
        Math.round(`${temp}`) + ' &#8451;',
    });
  }

  createElement({
    tag,
    classList,
    textContent,
    innerHTML,
    src,
    attribute
  }) {
    const element = document.createElement(tag);

    if (classList?.length) {
      element.classList.add(...classList);
    }

    if (textContent) {
      element.textContent = textContent;
    }

    if (innerHTML) {
      element.innerHTML = innerHTML;
    }

    if (src) {
      element.src = src;
    }

    if (attribute) {
      element.setAttribute( 'id', attribute);
    }

    return element;
  }
}