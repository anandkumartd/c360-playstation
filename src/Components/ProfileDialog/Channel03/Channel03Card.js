import React, { Component } from "react";
import "./Channel03Card.css";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PieChart from 'react-minimal-pie-chart';
import randomColor from "randomcolor";
import SvgIcon from "@material-ui/core/SvgIcon";
class Channel03Card extends Component {
  state = {};
  render() {
    const attributes = this.props.attributes;
    const profile = this.props.profile;

    return (
      <div className={"div-body channel"}>
         <div className={
              profile["ps_plus"] == null || profile["ps_plus"] === 0
                ? "innercontainer pssubs inactive"
                : "innercontainer pssubs active"
            }><span className={"overlay"}></span>
       <Typography gutterBottom><span><SvgIcon>
              <path
                d="M1.8,10L1.8,10C1.8,10,1.8,10,1.8,10L1.8,10z M19.1,23.3L19.1,23.3L19.1,23.3z M22.5,9.7
      c-0.9-0.4-2,0.1-2.4,1.1c-0.4,0.9,0.1,2,1.1,2.4s2-0.1,2.4-1.1C23.9,11.1,23.4,10,22.5,9.7z M12.6,3.5l-1.1,2.7l3-0.4L12.6,3.5z
       M4.1,11.9l3.3-0.4l0.4,3.3l-3.3,0.4L4.1,11.9z M26.1,13.7l-0.7-5.8c-0.1-0.7-0.7-1.2-1.4-1.1l-6.6,0.9l-0.9-6.6
      c-0.1-0.7-0.7-1.2-1.4-1.1L9.4,0.8C8.7,0.8,8.2,1.5,8.3,2.1l0.9,6.6L2.6,9.6C1.9,9.7,1.4,10.3,1.5,11l0.7,5.8
      c0.1,0.7,0.7,1.2,1.4,1.1l0,0l6.6-0.9l0.9,6.6c0.1,0.7,0.7,1.2,1.4,1.1l5.8-0.7c0.7-0.1,1.2-0.7,1.1-1.4l0,0l-0.9-6.6L25,15
      C25.7,14.9,26.2,14.3,26.1,13.7z M3.8,16.2l-0.1-0.9l-0.5-4.2l4.2-0.5l0.8-0.1l0,0l0.1,0.9l0,0l0.4,3.3l0,0l0.1,0.9L3.8,16.2z
       M10.1,7.3l2.3-5.5L16,6.6L10.1,7.3z M17,22.5l-2.2-1.7L13.2,23l-0.7-0.5l1.7-2.2L12,18.6l0.5-0.7l2.2,1.7l1.7-2.2l0.7,0.5l-1.7,2.2
      l2.2,1.7L17,22.5z M22.2,14.1c-1.5,0.2-2.9-0.9-3.1-2.4c-0.2-1.5,0.9-2.9,2.4-3.1c1.5-0.2,2.9,0.9,3.1,2.4l0,0
      C24.8,12.5,23.7,13.9,22.2,14.1z M6.8,4.1l0.5,4.4l1.3-0.2L7.8,2.2c0,0,0,0,0,0L7,3.2l0,0C6.8,3.4,6.7,3.8,6.8,4.1z M12.5,25.1
      c-0.1,0-0.1,0-0.2,0c-0.9,0-1.6-0.6-1.7-1.5l-0.8-6.1l-6.1,0.8c-0.5,0-0.9-0.1-1.3-0.3c-0.4-0.3-0.6-0.7-0.6-1.1l-0.7-5.8
      c0,0,0,0,0-0.1l-0.8,1C0.1,12.2,0,12.6,0,12.9l0.7,5.8c0.1,0.7,0.7,1.2,1.4,1.1l6.6-0.9l0.9,6.6c0.1,0.7,0.7,1.2,1.4,1.1l5.8-0.7
      c0.4,0,0.7-0.2,0.9-0.5l0,0l0.7-0.9l0,0L12.5,25.1z M19,16.3l0.2,1.2l4.3-0.6c0.3,0,0.6-0.2,0.8-0.4l0,0l0,0c0,0,0,0,0.1-0.1l0.8-1
      l0,0L19,16.3z"
              />
            </SvgIcon></span>PS Plus<small className={"title"}> (Id: 5cfa25cb)</small></Typography>
       <table className={"reventTable"}><tbody><tr className={"figures"}><td><h5><span>$</span>59/Annual</h5><p className={"title"}>Subscription Plan</p></td><td><h5><span>$</span>2124</h5><p className={"title"}>LTV</p></td></tr></tbody></table>
       
         </div>
      </div>
    );
  }
}
Channel03Card.propTypes = {
  attributes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  attributes: state.attributes.item
});

export default connect(
  mapStateToProps,
 null 
)(Channel03Card);




