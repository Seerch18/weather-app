import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import { IconContext } from "react-icons";
import { WiDaySunny } from "react-icons/wi";
import { Link as LinkRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { useMemo } from "react";

const AppFrame = ({ children }) => {
  const iconContextSize = useMemo(() => ({ size: "2em" }), []);

  return (
    <Grid container justifyContent="center">
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton color="inherit" aria-label="menu">
            <Link
              component={LinkRouter}
              to={"/main"}
              color="inherit"
              aria-label="menu"
            >
              <IconContext.Provider value={iconContextSize}>
                <WiDaySunny></WiDaySunny>
              </IconContext.Provider>
            </Link>
          </IconButton>
          <Typography variant="h6" color="inherit">
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid item xs={12} sm={11} md={10} lg={8}>
        {children}
      </Grid>
    </Grid>
  );
};

AppFrame.propTypes = {
  children: PropTypes.node,
};

export default AppFrame;
