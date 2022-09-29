import { useEffect, useDebugValue } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from "moment";
import "moment/locale/es"; // without this line it didn't work
import { getForecastUrl } from "../utils/urls";
import getForecastItemList from "../utils/transform/getForecastItemList";
import getCharData from "./../utils/transform/getChartData";
import { getCityCode } from "../utils/utils";
moment.locale("es");

const useCityPage = (
  onSetCharData,
  onSetForecastItemList,
  allCharData,
  allForecastItemList
) => {
  const { city, countryCode } = useParams();

  useDebugValue(`useCityPage ${city}`);

  useEffect(() => {
    const getForecast = async () => {
      const url = getForecastUrl({ city, countryCode });
      const cityCode = getCityCode(city, countryCode);
      try {
        const { data } = await axios.get(url);
        console.log(data);

        const dataAux = getCharData(data);

        onSetCharData({ [cityCode]: dataAux });

        const forecastItemListAux = getForecastItemList(data);

        onSetForecastItemList({ [cityCode]: forecastItemListAux });
      } catch (error) {
        console.log(error);
      }
    };
    const cityCode = getCityCode(city, countryCode);
    if (
      allCharData &&
      allForecastItemList &&
      !allCharData[cityCode] &&
      !allForecastItemList[cityCode]
    ) {
      getForecast();
    }
  }, [
    allCharData,
    allForecastItemList,
    city,
    countryCode,
    onSetCharData,
    onSetForecastItemList,
  ]);

  return { city, countryCode };
};

export default useCityPage;