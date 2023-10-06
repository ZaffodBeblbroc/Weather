const apiKey = ;

export async function getData(city) {
  const result = await fetch (`http://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&appid=${apiKey}`);
  const data = await result.json();
  console.log(data);
  return data;
}

export async function getAir(city) {
  const getCity = await get(city);
  const lat = getCity[0].lat;
  const lon = getCity[0].lon;
  const result = await fetch (`http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`);
  const dataAir = await result.json();
  return dataAir;
}

async function get(city) {
  const result = await fetch (`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`);
  const dataCity = await result.json();
  return dataCity;
}
