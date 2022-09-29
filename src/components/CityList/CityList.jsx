import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import CityInfo from "./../CityInfo";
import Weather from "./../Weather";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Alert from "@material-ui/lab/Alert";
import useCityList from "../../hooks/useCityList";
import { getCityCode } from "../../utils/utils";

// renderCityAndCountry se va a convertir en una función que retorna otra función
const renderCityAndCountry =
  (eventOnClickCity) => (cityAndCountry, weather) => {
    const { city, countryCode, country } = cityAndCountry;
    // const { temperature, state } = weather;
    return (
      <ListItem
        button
        key={getCityCode(city, countryCode)}
        onClick={() => eventOnClickCity(city, countryCode)}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Grid item md={8} xs={12}>
            <CityInfo city={city} country={country}></CityInfo>
          </Grid>
          <Grid>
            <Grid item md={3} xs={12}>
              <Weather
                temperature={weather && weather.temperature}
                state={weather && weather.state}
              ></Weather>
            </Grid>
          </Grid>
        </Grid>
      </ListItem>
    );
  };

// cities: es un array, y en cada item tiene que tener la ciudad, pero además el país
// ul: tag html para listas no ordenadas

const CityList = ({ cities, onClickCity, actions, data }) => {
  const { onSetAllWeather } = actions;
  const { allWeather } = data;
  const { error, setError } = useCityList(cities, allWeather, onSetAllWeather);
  return (
    <div>
      {error && (
        <Alert onClose={() => setError(null)} severity="error">
          {error}
        </Alert>
      )}
      <List>
        {cities.map((cityAndCountry) =>
          renderCityAndCountry(onClickCity)(
            cityAndCountry,
            allWeather[
              getCityCode(cityAndCountry.city, cityAndCountry.countryCode)
            ]
          )
        )}
      </List>
    </div>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
