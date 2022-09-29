const apiid = "11005de4e0f1698204fa0e45c3221305";
export const getWeatherUrl = ({ city, countryCode }) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiid}`;

export const getForecastUrl = ({ city, countryCode }) =>
  `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiid}`;
