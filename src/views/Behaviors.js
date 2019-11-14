import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
 SankyCard
} from "../Components/ProfileDialog/index";

class Behaviors extends Component {
  state = {};
  render() {
    const profile = this.props.profile;
    return (
      <div class="gridWrapper" style={{ height: "auto", marginBottom:"20px" }}>
      <Grid container spacing={1} style={{ height: "auto" }}>
      <Grid item xs={12} style={{ display: "flex", flex: "1" }}>
          <SankyCard profile={profile} />
        </Grid>
      </Grid>
    </div>
    );
  }
}

export default Behaviors;
