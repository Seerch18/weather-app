const cities = [
  { city: "Córdoba", country: "España", countryCode: "ES" },
  { city: "Málaga", country: "España", countryCode: "ES" },
  { city: "Buenos Aires", country: "Argentina", countryCode: "AR" },
  { city: "Bogotá", country: "Colombia", countryCode: "CO" },
];

export const getCities = () => cities;

export const getCountryNameByCountryCode = (countryCode) =>
  cities.filter((c) => c.countryCode === countryCode)[0].country;
