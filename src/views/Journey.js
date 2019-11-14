import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
 Channel01Card,
 Channel02Card,
 Channel03Card,
 Channel04Card,
 SankyCard
} from "../Components/ProfileDialog/index";
import { minHeight } from "@material-ui/system";
class Journey extends Component {
  state = {};
  render() {
    const profile = this.props.profile;
    return (
      <div class="gridWrapper" style={{ height: "auto", marginBottom:"20px", minHeight: "100vh" }}>
      <Grid container spacing={1} style={{ height: "auto" }}>
        <Grid item xs={6} style={{ display: "flex", flex: "1" }}>
          <Channel01Card profile={profile} />
        </Grid>
        <Grid item xs={6} style={{ display: "flex", flex: "1" }}>
          <Channel02Card profile={profile} />
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ height: "auto" }}>
        <Grid item xs={6} style={{ display: "flex", flex: "1" }}>
          <Channel03Card profile={profile} />
        </Grid>
        <Grid item xs={6} style={{ display: "flex", flex: "1" }}>
          <Channel04Card profile={profile} />
        </Grid>
      </Grid>
     
    </div>
    );
  }
}

export default Journey;
