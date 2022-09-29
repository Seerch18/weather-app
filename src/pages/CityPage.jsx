import React, { useMemo } from "react";
import Grid from "@material-ui/core/Grid";
import CityInfo from "../components/CityInfo";
import Weather from "../components/Weather";
import WeatherDetails from "../components/WeatherDetails";
import ForecastChart from "../components/ForecastChart";
import Forecast from "../components/Forecast";
import AppFrame from "../components/AppFrame";
import useCityPage from "../hooks/useCityPage";
import { LinearProgress } from "@material-ui/core";
import useCityList from "./../hooks/useCityList";
import { getCityCode } from "../utils/utils";
import { getCountryNameByCountryCode } from "../utils/serverCities";

const CityPage = ({ data, actions }) => {
  const { onSetAllWeather, onSetCharData, onSetForecastItemList } = actions;
  const { allWeather, allCharData, allForecastItemList } = data;

  const { city, countryCode } = useCityPage(
    onSetCharData,
    onSetForecastItemList,
    allCharData,
    allForecastItemList
  );

  const cities = useMemo(() => [{ city, countryCode }], [city, countryCode]);

  useCityList(cities, allWeather, onSetAllWeather);

  const cityCode = getCityCode(city, countryCode);
  const weather = allWeather[cityCode];

  const charData = allCharData[cityCode];
  const forecastItemList = allForecastItemList[cityCode];

  const country = countryCode && getCountryNameByCountryCode(countryCode);
  const humidity = weather && weather.humidity;
  const wind = weather && weather.wind;

  const state = weather && weather.state;
  const temperature = weather && weather.temperature;
  // const data = dataExample;
  // const forecastItemList = forecastItemListExample;

  return (
    <AppFrame>
      <Grid
        container
        justifyContent="space-around"
        direction="column"
        spacing={2}
      >
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          alignItems="flex-end"
        >
          <CityInfo city={city} country={country}></CityInfo>
        </Grid>

        <Grid container item xs={12} justifyContent="center">
          <Weather state={state} temperature={temperature}></Weather>
          {humidity && wind && (
            <WeatherDetails humidity={humidity} wind={wind}></WeatherDetails>
          )}
        </Grid>

        <Grid item>{!charData && !forecastItemList && <LinearProgress />}</Grid>

        <Grid item>
          {charData && <ForecastChart data={charData}></ForecastChart>}
        </Grid>

        <Grid item>
          {forecastItemList && (
            <Forecast forecastItemList={forecastItemList}></Forecast>
          )}
        </Grid>
      </Grid>
    </AppFrame>
  );
};

CityPage.propTypes = {};

export default CityPage;
