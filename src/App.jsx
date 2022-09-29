import React, { useState, useCallback, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";
import CityPage from "./pages/CityPage";
import { NotFoundPage } from "./pages/NotFoundPage";

const App = () => {
  const [allWeather, setAllWeather] = useState({});
  const [allCharData, setAllCharData] = useState({});
  const [allForecastItemList, setAllForecastItemList] = useState({});

  const onSetAllWeather = useCallback(
    (weatherCity) => {
      setAllWeather((allWeather) => {
        return { ...allWeather, ...weatherCity };
      });
    },
    [setAllWeather]
  );

  const onSetCharData = useCallback(
    (charDataCity) => {
      setAllCharData((charData) => ({ ...charData, ...charDataCity }));
    },
    [setAllCharData]
  );

  const onSetForecastItemList = useCallback(
    (forecastItemListCity) => {
      setAllForecastItemList((forecastItemList) => ({
        ...forecastItemList,
        ...forecastItemListCity,
      }));
    },
    [setAllForecastItemList]
  );

  const actions = useMemo(
    () => ({
      onSetAllWeather,
      onSetCharData,
      onSetForecastItemList,
    }),
    [onSetAllWeather, onSetCharData, onSetForecastItemList]
  );

  const data = useMemo(
    () => ({
      allWeather,
      allCharData,
      allForecastItemList,
    }),
    [allWeather, allCharData, allForecastItemList]
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage></WelcomePage>}></Route>
        <Route
          path="/main"
          element={<MainPage data={data} actions={actions}></MainPage>}
        ></Route>
        <Route
          path="/city/:countryCode/:city"
          element={<CityPage data={data} actions={actions}></CityPage>}
        ></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
