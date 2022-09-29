import { useState, useEffect } from "react";
import axios from "axios";
import { getWeatherUrl } from "../utils/urls";
import getAllWeather from "../utils/transform/getAllWeather";
import { getCityCode } from "../utils/utils";

const useCityList = (cities, allWeather, onSetAllWeather) => {
  // const [allWeather, setAllWeather] = useState({});
  const [error, setError] = useState(null);
  /**
   * {
   *    [ Córdoba-España ]: { temperature: 10, state: "clear" }
   *    [ Málaga-España ]: { temperature: 10, state: "clear" }
   *    [ Buenos Aires-Argentina ]: { temperature: 10, state: "clear" }
   *    [ Bogotá-Colombia ]: { temperature: 10, state: "clear" }
   * }
   */

  useEffect(() => {
    const setWeather = async (city, countryCode) => {
      const url = getWeatherUrl({ city, countryCode });

      try {
        const propName = getCityCode(city, countryCode);
        onSetAllWeather({ [propName]: {} });

        const response = await axios.get(url);

        const allWeatherAux = getAllWeather(response, city, countryCode);

        // setAllWeather((allWeather) => ({
        //   ...allWeather,
        //   ...allWeatherAux,
        // }));

        onSetAllWeather(allWeatherAux);
      } catch (error) {
        if (error.response) {
          // Errores que nos responde el server
          setError("Ha ocurrido un error en el servidor del clima");
        } else if (error.request) {
          // Errores que suceden por no llegar al server
          console.log("Server in-accesible o no tengo internet");
          setError("Verifique la conexión a internet");
        } else {
          // Errores imprevistos
          console.log("Errores improvistos");
          setError("No se han podido cargar los datos");
        }
      }

      // .then((response) => {
      //   const { data } = response;
      //   const temperature = Number(
      //     convertUnits(data.main.temp).from("K").to("C").toFixed(0)
      //   );
      //   const state = data.weather[0].main.toLowerCase();
      //   const propName = `${city}-${country}`; // [ Córdoba-España ]
      //   const propValue = { temperature, state }; // { temperature: 10, state: "clear" }

      //   // Destructuring
      //   /**
      //    * allWeather 1er pasada:
      //    *  {
      //    *    [ Córdoba-España ]: { temperature: 10, state: "clear" }
      //    *  }
      //    * allWeather 2da pasada:
      //    *  {
      //    *    [ Córdoba-España ]: { temperature: 10, state: "clear" }
      //    *    [ Málaga-España ]: { temperature: 10, state: "clear" }
      //    *  }
      //    * . . .
      //    */

      //   setAllWeather((allWeather) => ({
      //     ...allWeather,
      //     [propName]: propValue,
      //   }));
      // })
      // .catch((error) => {
      //   if (error.response) {
      //     // Errores que nos responde el server
      //     setError("Ha ocurrido un error en el servidor del clima");
      //   } else if (error.request) {
      //     // Errores que suceden por no llegar al server
      //     console.log("Server in-accesible o no tengo internet");
      //     setError("Verifique la conexión a internet");
      //   } else {
      //     // Errores imprevistos
      //     console.log("Errores improvistos");
      //     setError("No se han podido cargar los datos");
      //   }
      // });
    };

    cities.forEach(({ city, countryCode }) => {
      if (!allWeather[getCityCode(city, countryCode)]) {
        setWeather(city, countryCode);
      }
    });
  }, [cities, onSetAllWeather, allWeather]);

  return { error, setError };
};

export default useCityList;
