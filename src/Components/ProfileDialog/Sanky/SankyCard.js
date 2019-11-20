import React, { Component } from "react";
import "./SankyCard.css";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PieChart from 'react-minimal-pie-chart';
import randomColor from "randomcolor";
import ReactSankey from 'react-sankey';
import {Sankey} from 'react-vis';

const createNode = (title, value, id) => ({ title, value, id });
const createLink = (sourceId, targetId) => ({ sourceId, targetId });
const chartConfig = {
  padding: { top: 10, right: 0, bottom: 10, left: 0 },
  node: {
    width: 150,
    maxHeight: 150,
    minHeight: 55,
    rectMinHeight: 5,
    paddingBottom: 40
  },
  link: {
    width: 100
  }
}
const nodes = {
  '0':  createNode('Night_Hawk_77', 5091520, 0),
  '1':  createNode('Facebook', 3967612, 1),
  '2':  createNode('PS Store', 3948389, 2),
  '3':  createNode('Twitter', 1974194, 3),
  '4':  createNode('Battle Royal', 1502, 4),
  '5':  createNode('Web page', 3974184, 5),
  '6':  createNode('Sports', 348, 6),
  '7':  createNode('Printed Ads', 3936731, 7),
  '8':  createNode('Accessories', 1983806, 8),
  '9':  createNode('PS Plus', 661228, 9),
  '10': createNode('Black Friday', 199236, 10),
  '11': createNode('DLC', 348, 11),
  '12': createNode('GameStop', 1983082, 12),
  '13': createNode('PS4', 1290205, 13),
  '14': createNode('Controllers', 348123, 14),
  '15': createNode('RPG', 123, 15),
  '16': createNode('Instagram', 4122201, 16),
  '17': createNode('FPS', 1500, 17),
  '18': createNode('Platform', 1403, 18),
  '19': createNode('Strategy', 1504, 19),
  '20': createNode('Advantures', 1605, 20),
  '21': createNode('Email', 3821612, 21)
};



// const nodes = [
//   {name: 'Email'},  //0
//   {name: 'Facebook'}, //1
//   {name: 'PS Store'}, //2
//   {name: 'Twitter'}, //3
//   {name: 'Battle Royal'}, //4
//   {name: 'Web page'}, //5
//   {name: 'Sports'}, //6
//   {name: 'Printed Ads'}, //7
//   {name: 'Accessories'}, //8
//   {name: 'PS Plus'}, //9
//   {name: 'Black Friday'}, //10
//   {name: 'DLC'}, //11
//   {name: 'GameStop'}, //12
//   {name: 'PS4'}, //13
//   {name: 'Controllers'}, //14
//   {name: 'RPG'}, //15
//   {name: 'Instagram'}, //16
//   {name: 'FPS'}, //17
//   {name: 'Platform'}, //18
//   {name: 'Strategy'}, //19
//   {name: 'Advantures'}, //20
// ];

// const links = [
//  {source: 0, target: 20, value: 5091520},
//  {source: 1, target: 6, value: 3967612},
//  {source: 16, target: 20, value: 4122201},
//  {source: 16, target: 19, value: 4122201},
//  {source: 16, target: 18, value: 4122201},
//  {source: 3, target: 5, value: 1974194},
//  {source: 3, target: 19, value: 1974194},
//  {source: 3, target: 4, value: 1974194},
//  {source: 5, target: 2, value: 3974184},
//  {source: 5, target: 11, value: 3974184},
//  {source: 4, target: 2, value: 1502},
//  {source: 4, target: 7, value: 1502},
//  {source: 4, target: 1, value: 1502},
//  {source: 7, target: 12, value: 3936731},
//  {source: 7, target: 11, value: 3936731}
// ];
    



const links = [
  createLink(0, 1),
  createLink(1, 2),
  createLink(3, 5),
  createLink(4, 7),
  createLink(0, 3),
  createLink(4, 2),
  createLink(0, 16),
  createLink(3, 4),
  createLink(3, 19),
  createLink(16, 18),
  createLink(16, 19),
  createLink(16, 20),
  createLink(5, 2),
  createLink(7, 12),
  createLink(7, 11),
  createLink(5, 11),
  createLink(4, 11),
  createLink(12, 13),
  createLink(12, 14),
  createLink(13, 15),
  createLink(0,21),
  createLink(21,18),
  createLink(21,5),
  createLink(21,19)
];



class SankyCard extends Component {
  state = {};
  
  render() {
    const attributes = this.props.attributes;
    const profile = this.props.profile; 
    return (
      <div className={"div-body"}>
         <div className="innercontainer sankydiagram" >
       <Typography gutterBottom></Typography>
       <ReactSankey 
          rootID={0}
          nodes={nodes}
          links={links}
          hasArrows
        />
        {/* <Sankey
          nodes={nodes}
          links={links}
          width={width}
          height={height}
        /> */}
       
         </div>
      </div>
    );
  }
}
SankyCard.propTypes = {
  attributes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  attributes: state.attributes.item
});

export default connect(
  mapStateToProps,
 null 
)(SankyCard);




// const links = [
//   createLink(0, 1),
//   createLink(1, 2),
//   createLink(3, 5),
//   createLink(4, 7),
//   createLink(0, 3),
//   createLink(4, 2),
//   createLink(0, 16),
//   createLink(3, 4),
//   createLink(3, 19),
//   createLink(16, 18),
//   createLink(16, 19),
//   createLink(16, 20),
//   createLink(5, 2),
//   createLink(7, 12),
//   createLink(7, 11),
//   createLink(5, 11),
//   createLink(4, 11),
//   createLink(12, 13),
//   createLink(12, 14),
//   createLink(13, 15)
// ];