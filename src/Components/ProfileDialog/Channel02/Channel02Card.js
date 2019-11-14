import React, { Component } from "react";
import "./Channel02Card.css";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PieChart from 'react-minimal-pie-chart';
import randomColor from "randomcolor";
import SvgIcon from "@material-ui/core/SvgIcon";
class Channel02Card extends Component {
  state = {};
  render() {
    const attributes = this.props.attributes;
    const profile = this.props.profile;


    return (
      <div className={"div-body channel"}>
         <div className={
              profile["ps_now"] == null ||profile["ps_now"] === 0
                ? "innercontainer pssubs inactive"
                : "innercontainer pssubs active"
            }><span className={"overlay"}></span>
       <Typography gutterBottom><span><SvgIcon>
              <path
                d="M24.6,12.4c-0.6-2.1-4.2-5.5-9.3-8.4C10.3,1,5.4-0.5,3.4,0.1c-0.2,0-0.3,0.1-0.5,0.2C2.9,0.4,2.8,0.4,2.7,0.5
      C1.1,1.9,0,6.9,0,12.8c0,6.9,1.6,12.6,3.5,12.7c2.1,0.5,6.9-1,11.8-3.9c5-2.9,8.7-6.3,9.3-8.4c0.1-0.1,0.1-0.3,0.1-0.5
      C24.7,12.7,24.7,12.5,24.6,12.4z M7.8,14.4l-2.5,0.9c-0.5,0.2-0.5,0.4-0.2,0.5s1,0.1,1.5-0.1l1.2-0.4v1.3c-0.1,0-0.2,0-0.2,0
      c-1.3,0.2-2.5,0.1-3.8-0.3l0,0c-1.2-0.3-1.4-1-0.8-1.4c0.5-0.4,1.4-0.6,1.4-0.6l3.5-1.2L7.8,14.4L7.8,14.4z M10.7,8.9v9l-2.4-0.8
      V6.4c1.1,0.2,2.3,0.6,3.4,0.9c2.1,0.7,2.8,1.6,2.8,3.6c0,1.9-1.2,2.7-2.7,1.9V9.2c0-0.4-0.1-0.8-0.5-0.9C10.9,8.2,10.7,8.5,10.7,8.9
      z M14.1,17.8h-0.3v0.8h-0.2v-0.8h-0.3v-0.1h0.7L14.1,17.8L14.1,17.8z M15.2,18.6H15v-0.3l0-0.4l0,0l-0.3,0.8h-0.1l-0.3-0.7l0,0
      l0,0.4v0.3h-0.2v-1h0.2l0.3,0.7l0,0l0.3-0.7h0.2L15.2,18.6L15.2,18.6z M17.5,15.3c-0.3,0.4-1,0.6-1,0.6l-5.3,1.9v-1.4l3.9-1.4
      c0.5-0.2,0.5-0.4,0.2-0.5c-0.4-0.1-1-0.1-1.5,0.1l-2.6,0.9V14l0.2-0.1c0.6-0.2,1.2-0.3,1.8-0.4c1.1-0.1,2.3,0,3.4,0.4
      C17.7,14.4,17.8,14.9,17.5,15.3z"
              />
            </SvgIcon></span>PS Now<small className={"title"}> (Id: 02cd428c)</small></Typography>
       <table className={"reventTable"}><tbody><tr className={"figures"}><td><h5><span>$</span>25/Quarterly </h5><p className={"title"}>Subscription Plan</p></td><td><h5><span></span>1200</h5><p className={"title"}>Minutes played per month</p></td></tr></tbody></table>
       
         </div>
      </div>
    );
  }
}
Channel02Card.propTypes = {
  attributes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  attributes: state.attributes.item
});

export default connect(
  mapStateToProps,
 null 
)(Channel02Card);




