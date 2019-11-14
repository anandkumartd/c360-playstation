import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {
  HeatTableCard
} from "../Components/ProfileDialog/index";

class Attributes extends Component {
  state = {};
  render() {

      const profile = this.props.profile;
      return (
        <div class="gridWrapper" style={{ height: "auto", marginBottom:"20px" }}>
        <Grid container spacing={1} style={{ height: "auto" }}>
          <Grid item xs={12} style={{ display: "flex", flex: "1" }}>
            <HeatTableCard profile={profile} />
          </Grid>
          
        </Grid>
      
      </div>
    );
  }
}

export default Attributes;
