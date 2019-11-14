import React, { Component } from "react";
import "./Channel01Card.css";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PieChart from 'react-minimal-pie-chart';
import randomColor from "randomcolor";
import SvgIcon from "@material-ui/core/SvgIcon";
class Channel01Card extends Component {
  state = {};
  render() {
    const attributes = this.props.attributes;
    const profile = this.props.profile;
     
    return (
      <div className={"div-body channel"}>
         <div className={
              profile["ps_vue"] == null || profile["ps_vue"] === 0
                ? "innercontainer pssubs inactive"
                : "innercontainer pssubs active"
            }><span className={"overlay"}></span>
       <Typography gutterBottom><span><SvgIcon >
              <path
                d="M18.1,14.6l-0.3,0.1c-0.1,0-0.1,0,0,0.1s0.1,0,0.2,0l0.2-0.1v0.2c0,0,0,0,0,0c-0.2,0-0.3,0-0.5,0l0,0
      c-0.2,0-0.2-0.1-0.1-0.2c0.1,0,0.2-0.1,0.2-0.1l0.4-0.2L18.1,14.6L18.1,14.6z M18.5,13.9V15l-0.3-0.1v-1.4c0.1,0,0.3,0.1,0.4,0.1
      c0.3,0.1,0.4,0.2,0.4,0.5c0,0.2-0.2,0.3-0.3,0.2v-0.5C18.6,13.9,18.6,13.8,18.5,13.9C18.5,13.8,18.5,13.8,18.5,13.9z M18.9,15
      L18.9,15l0,0.1h0L18.9,15L18.9,15L18.9,15L18.9,15L18.9,15L18.9,15z M19,15.1L19,15.1L19,15.1L19,15.1L19,15.1L19,15.1L19,15.1
      L18.9,15l0,0l0,0.1v0h0V15h0L19,15.1L19,15.1l0-0.1h0V15.1L19,15.1z M19.3,14.7c0,0-0.1,0.1-0.1,0.1L18.5,15v-0.2l0.5-0.2
      c0.1,0,0.1,0,0-0.1c0,0-0.1,0-0.2,0l-0.3,0.1v-0.2l0,0c0.1,0,0.2,0,0.2,0c0.1,0,0.3,0,0.4,0.1C19.3,14.6,19.4,14.6,19.3,14.7z
       M23.1,6.1c-0.1-0.9-0.8-1.5-1.6-1.6c-2.5-0.2-5.1-0.3-7.8-0.3l3.2-3.5c0.1-0.2,0.1-0.4,0-0.5c-0.1-0.1-0.4-0.2-0.5,0l-4.6,4.1l0,0
      l0,0L7.1,0.1C7,0,6.7,0,6.6,0.1s-0.2,0.4,0,0.5l3.2,3.5C7.1,4.2,4.5,4.3,2,4.5C1.1,4.6,0.4,5.2,0.3,6.1C0.1,8.3,0,10.6,0,13
      s0.1,4.7,0.3,7c0.1,0.9,0.8,1.5,1.6,1.6c3.1,0.2,6.4,0.3,9.8,0.3s6.7-0.1,9.8-0.3c0.9-0.1,1.5-0.7,1.6-1.6c0.2-2.2,0.3-4.6,0.3-7
      S23.4,8.3,23.1,6.1z M9.6,14.3l-2.2,0.8c-0.4,0.1-0.5,0.3-0.1,0.4c0.3,0.1,0.9,0.1,1.3-0.1l1.1-0.4v1.1c-0.1,0-0.1,0-0.2,0
      c-1.1,0.2-2.3,0.1-3.3-0.3c-1-0.3-1.2-0.9-0.7-1.3c0.4-0.3,1.2-0.6,1.2-0.6L9.6,13L9.6,14.3L9.6,14.3z M12.2,9.5v8l-2.2-0.7V7.3l0,0
      c1,0.2,2,0.5,3,0.8c1.8,0.6,2.5,1.4,2.5,3.2c0,1.7-1.1,2.4-2.4,1.7V9.8c0-0.4-0.1-0.7-0.4-0.8C12.4,8.9,12.2,9.1,12.2,9.5z
       M15.2,17.3H15v0.8h-0.1v-0.8h-0.3v-0.1h0.7L15.2,17.3L15.2,17.3z M16.2,18.1h-0.1v-0.3l0-0.4l0,0l-0.3,0.7h-0.1l-0.3-0.7l0,0l0,0.4
      v0.3h-0.1v-0.9h0.2l0.2,0.7l0,0l0.3-0.7h0.2L16.2,18.1L16.2,18.1z M18.3,15.1c-0.3,0.3-0.9,0.6-0.9,0.6l-4.7,1.7v-1.3l3.5-1.2
      c0.4-0.1,0.5-0.3,0.1-0.4c-0.3-0.1-0.9-0.1-1.3,0.1l-2.3,0.8V14l0.1-0.1c0.5-0.2,1.1-0.3,1.6-0.3c1-0.1,2,0,3,0.4
      C18.4,14.3,18.5,14.8,18.3,15.1z"
              />
            </SvgIcon></span>PS Vue<small className={"title"}> (Id: 8903f31b)</small></Typography>
       <table className={"reventTable"}><tbody><tr className={"figures"}><td><h5><span>$</span>45/Monthly </h5><p className={"title"}>Subscription Plan</p></td><td><span></span><ul className={"devicelist"} style={{listStyle:"none", fontSize:"14px", padding:"0px", fontWeight:"500"}}><li>Mobile</li><li>FireTV</li><li>Tablet</li><li>ChromeCast</li></ul><p className={"title"}>Devices</p></td></tr></tbody></table>
       
         </div>
      </div>
    );
  }
}
Channel01Card.propTypes = {
  attributes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  attributes: state.attributes.item
});

export default connect(
  mapStateToProps,
 null 
)(Channel01Card);




