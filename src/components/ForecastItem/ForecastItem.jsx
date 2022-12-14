import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconState, { validValues } from "../IconState";
import { IconContext } from "react-icons";

const ForecastItem = ({ weekDay, hour, state, temperature }) => {
  const iconContextSize = useMemo(() => ({ size: "5em" }), []);
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Typography>{weekDay}</Typography>
      </Grid>
      <Grid item>
        <Typography>{hour}</Typography>
      </Grid>
      <Grid item>
        <IconContext.Provider value={iconContextSize}>
          <IconState state={state}></IconState>
        </IconContext.Provider>
      </Grid>
      <Grid item>
        <Typography>{temperature} º</Typography>
      </Grid>
    </Grid>
  );
};

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  // state: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  state: PropTypes.oneOf(validValues).isRequired,
};

export default ForecastItem;
