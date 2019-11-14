import React, { Component } from "react";
import "./Channel04Card.css";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PieChart from 'react-minimal-pie-chart';
import randomColor from "randomcolor";
import SvgIcon from "@material-ui/core/SvgIcon";
class Channel04Card extends Component {
  state = {};
  render() {
    const attributes = this.props.attributes;
    const profile = this.props.profile;

 
    return (
      <div className={"div-body channel"}>
         <div className={
              profile["ps_video"] == null || profile["ps_video"] === 0
                ? "innercontainer pssubs inactive"
                : "innercontainer pssubs active"
            }><span className={"overlay"}></span>
       <Typography gutterBottom><span><SvgIcon>
              <path
                d="M25.2,0v0.5c0,0.4-0.3,0.7-0.7,0.7h-1.1c-0.4,0-0.7-0.3-0.7-0.7V0H5v0.5C5,1,4.7,1.3,4.3,1.3l0,0H3.2
      C2.8,1.3,2.5,1,2.5,0.5l0,0V0H0v20.3h2.5v-0.5c0-0.4,0.3-0.7,0.7-0.7l0,0h1.1C4.7,19,5,19.3,5,19.8l0,0v0.5h17.6v-0.5
      c0-0.4,0.3-0.7,0.7-0.7h1.1c0.4,0,0.7,0.3,0.7,0.7v0.5h2.5V0H25.2z M5,14.7v1.1c0,0.4-0.3,0.7-0.7,0.7l0,0H3.2
      c-0.4,0-0.7-0.3-0.7-0.7l0,0v-1.1c0-0.4,0.3-0.7,0.7-0.7l0,0h1.1C4.7,13.9,5,14.3,5,14.7L5,14.7z M5,9.6v1.1c0,0.4-0.3,0.7-0.7,0.7
      l0,0H3.2c-0.4,0-0.7-0.3-0.7-0.7l0,0V9.6c0-0.4,0.3-0.7,0.7-0.7l0,0h1.1C4.7,8.9,5,9.2,5,9.6L5,9.6z M5,4.5v1.1C5,6,4.7,6.4,4.3,6.4
      l0,0H3.2C2.8,6.4,2.5,6,2.5,5.6l0,0V4.5c0-0.4,0.3-0.7,0.7-0.7l0,0h1.1C4.7,3.8,5,4.1,5,4.5L5,4.5z M11.4,12.1L8.9,13
      c-0.4,0.2-0.5,0.4-0.2,0.5c0.4,0.1,1,0.1,1.5-0.1l1.2-0.4v1.3c-0.1,0-0.2,0-0.2,0c-1.2,0.2-2.5,0.1-3.7-0.3c-1.2-0.3-1.4-1-0.8-1.4
      C7.1,12.2,7.9,12,7.9,12l3.5-1.2L11.4,12.1L11.4,12.1z M14.3,6.7v9l-2.4-0.8V4.2l0,0c1.1,0.2,2.2,0.5,3.3,0.9c2,0.7,2.8,1.6,2.8,3.6
      c0,1.9-1.2,2.7-2.7,1.9V7c0-0.4-0.1-0.8-0.5-0.9C14.5,6,14.3,6.3,14.3,6.7z M17.7,15.5h-0.3v0.8h-0.2v-0.8h-0.3v-0.1h0.7
      C17.7,15.4,17.7,15.5,17.7,15.5z M18.8,16.3h-0.2V16l0-0.4l0,0l-0.3,0.7h-0.1l-0.3-0.7l0,0l0,0.4v0.3h-0.2v-1H18l0.3,0.7l0,0
      l0.3-0.7h0.2L18.8,16.3L18.8,16.3z M21,13c-0.3,0.4-1,0.6-1,0.6l-5.3,1.9v-1.4l3.9-1.4c0.4-0.2,0.5-0.4,0.2-0.5
      c-0.4-0.1-1-0.1-1.5,0.1l-2.6,0.9v-1.5l0.2-0.1c0.6-0.2,1.2-0.3,1.8-0.4c1.1-0.1,2.3,0,3.4,0.4C21.2,12.1,21.3,12.6,21,13z
       M25.2,15.8c0,0.4-0.3,0.7-0.7,0.7h-1.1c-0.4,0-0.7-0.3-0.7-0.7v-1.1c0-0.4,0.3-0.7,0.7-0.7h1.1c0.4,0,0.7,0.3,0.7,0.7L25.2,15.8
      L25.2,15.8z M25.2,10.7c0,0.4-0.3,0.7-0.7,0.7h-1.1c-0.4,0-0.7-0.3-0.7-0.7V9.6c0-0.4,0.3-0.7,0.7-0.7h1.1c0.4,0,0.7,0.3,0.7,0.7
      L25.2,10.7L25.2,10.7z M25.2,5.6c0,0.4-0.3,0.7-0.7,0.7h-1.1c-0.4,0-0.7-0.3-0.7-0.7V4.5c0-0.4,0.3-0.7,0.7-0.7h1.1
      c0.4,0,0.7,0.3,0.7,0.7L25.2,5.6L25.2,5.6z"
              />
            </SvgIcon></span>PS Video<small className={"title"}> (Id: ecea6d90)</small></Typography>
       <table className={"reventTable"}><tbody><tr className={"figures"}><td><h5><span></span>8 Movies/Monthly</h5><p className={"title"}># of Rentals</p></td><td><h5><span>$</span>288</h5><p className={"title"}>Annual Revenue</p></td></tr></tbody></table>
         </div>
      </div>
    );
  }
}
Channel04Card.propTypes = {
  attributes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  attributes: state.attributes.item
});

export default connect(
  mapStateToProps,
 null 
)(Channel04Card);




