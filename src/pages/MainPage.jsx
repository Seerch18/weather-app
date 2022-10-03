import React from "react";
import { useNavigate } from "react-router-dom";
import CityList from "./../components/CityList";
import AppFrame from "./../components/AppFrame";
import Paper from "@material-ui/core/Paper";

import { getCities } from "../utils/serverCities";

const MainPage = ({ actions, data }) => {
  const navigate = useNavigate();
  const onClickHandler = React.useCallback(
    (city, countryCode) => {
      // navigate.push permite alterar la URL por programación
      navigate(`/city/${countryCode}/${city}`);
    },
    [navigate]
  );
  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList
          data={data}
          actions={actions}
          cities={getCities()}
          onClickCity={onClickHandler}
        ></CityList>
      </Paper>
    </AppFrame>
  );
};

export default MainPage;
