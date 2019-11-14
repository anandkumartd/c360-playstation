import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import "./HeatTableCard.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MUIDataTable from "mui-datatables";
import Paper from '@material-ui/core/Paper';


class HeatTableCard extends Component {
  state = {
rows:[]
  };
  componentDidMount(){
    const profile = this.props.profile;
    const attributes = this.props.attributes;
    console.log(typeof(profile));
    var Kes =[];
    for (let key of Object.keys(profile)) {
      Kes.push(key);
    }
  console.log(Kes);
   
   var Vals =[];
    for (let value of Object.values(profile)) {
      Vals.push(value);
    }

   console.log(Vals);


  
   

 

  //  for (let z = 0; z < Vals.length>0; z++){
  //   var Val = Vals[z];
  //   var Ke = Kes[z]
  //   function createDots(Val) {
  //     return { 
  //       ke:Val
  //     };
   
  //   }
  //   var Dotsdata = createDots(Val);
  //   Calarray.push(Dotsdata);

  // }

//   Array.prototype.diff = function(Vals, Kes) {
//     for(var i in this) {   
//       var Val = Vals[i];
//       var Ke = Kes[i];
//       function createDots(Val,Ke) {
//        return { 
//        ke:Val
//    };
//   }
//    var Dotsdata = createDots(Val,Ke);
// Calarray.push(Dotsdata);      

//     }
//   };


   
    var Colsi = [];
    for (let w = 0; w < Kes.length>0; w++){
      var Ki = Kes[w];
      var Vol = Vals[w];
      
      function createCols(Kes) {
        return { 
        name: Ki,
        label:Ki,
        options: {
         filter: true,
         sort: true,
        }};
        
      }
      
      var Colsdata = createCols(Ki);

      Colsi.push(Colsdata);


    }
    console.log(Colsi);
    var Calarray=[];
    var mobj = {};
    for (var u = 0; u < Kes.length; u++){
      mobj[Kes[u]] = Vals[u];
  }
   Calarray.push(mobj);
   console.log("CAL"+Calarray);
    
    
    




    const return_biz = profile["bus_name"] == null
        ? ""
        : profile["bus_name"];
    const return_mail =  profile["bus_email"] == null
        ? ""
        : profile["bus_email"];
    const return_employees =  profile["employees"] == null
        ? ""
        : profile["employees"];
    const return_works =  profile["work_emails"] == null
        ? ""
        : profile["work_emails"];
    const return_camp = profile["email_campaign"] == null
         ? ""
        : profile["email_campaign"];
    const return_service = profile["email_service"] == null
        ? ""
       : profile["email_service"];
    const return_type = profile["email_type"] == null
        ? ""
       : profile["email_type"];
    const return_stat = profile["email_status"] == null
        ? ""
       : profile["email_status"];
    const return_date = profile["email_date"] == null
        ? ""
       : profile["email_date"];


       

     
    var array_w =[];
      for (let i = 0; i < return_works.length; i++) {
        var work = return_works[i];
        array_w.push(work);
      }
      console.log(array_w);
        
        let array_b = [];
        for (let j = 0; j < return_employees.length>0; j++) {
          var bizarray = return_employees[j];
          array_b.push(bizarray);
         }
        
      console.log(array_b);
  
        let array_i =[]
        for (let k = 0; k < return_camp.length>0; k++){
          var infoarray = return_camp[k];
          array_i.push(infoarray);
        
        }
        console.log(array_i);
     
        let array_s =[]
        for (let b = 0; b < return_camp.length>0; b++){
          var servarray = return_service[b];
          array_s.push(servarray);
        
        }
        console.log(array_s);

        let array_t =[]
        for (let c = 0; c < return_type.length>0; c++){
          var typarray = return_type[c];
          array_t.push(typarray);
        
        }
        console.log(array_t);

        let array_us =[]
        for (let d = 0; d < return_stat.length>0; d++){
          var usarray = return_stat[d];
          array_us.push(usarray);
        
        }
        console.log(array_us);

        let array_dat =[]
        for (let e = 0; e < return_date.length>0; e++){
          var darray = return_date[e];
          array_dat.push(darray);
        
        }
        console.log(array_dat);


var pair = array_w.map(function(value, index) {
  var myobj = {};
myobj["value"] = value;
myobj["name"] = array_b[index];
myobj["camp"] = array_i[index];
myobj["serv"] = array_s[index];
myobj["type"] = array_t[index];
myobj["stat"] = array_us[index];
myobj["date"] = array_dat[index];
//myobj["info"]= results[index];
  return myobj;

});




//console.log('data:'+Coox);
//var coord = [Coox, Cooy, Cooz, CooA, CooB, CooC, CooD];
//console.log(coord);
//zoo.push(datooz);
//console.log('coordinate:'+JSON.stringify(coordinate));



var areaarray;
var durationarray;
var camparray;
var serarray;
var typearray;
var tasarray;
var infarray = [];
var rowarray = [];
var nameArray = [];
var mailArray = [];
var colArray = [];
var labelArray = [];
var colArray = [];






function createData(return_biz, return_mail, areaarray, durationarray, camparray, servarray, typearray, tasarray, infarray) {
  return { return_biz, return_mail, areaarray, durationarray,  camparray, servarray, typearray, tasarray, infarray };
}

function makeData(areaarray, durationarray, camparray, servarray, typearray, tasarray, infarray){
return {name: areaarray, email: durationarray, campaign: camparray, service: servarray, type: typearray, status: tasarray, date: infarray};
}

var array = [];
var goolArray=[];
var finalarray =[];
var pair2;
for (let r = 0; r < pair.length; r++) {
var dat = pair[r];
var newArray = [];
areaarray  = dat.name;
durationarray = dat.value;
camparray =dat.camp;
servarray = dat.serv;
typearray = dat.type;
tasarray = dat.stat;
infarray = dat.date;
var table_name =  areaarray;
var table_mail = durationarray;

var ro = createData(return_biz, return_mail, areaarray, durationarray, camparray, servarray, typearray, tasarray, infarray);
rowarray.push(ro);




var ko = makeData(areaarray, durationarray, camparray, servarray, typearray, tasarray, infarray );
console.log(ko)
finalarray.push(ko);
array = Object.values(finalarray);
}

console.log(array);
console.log(JSON.stringify(finalarray));
var calarray = JSON.stringify(profile);
this.setState({
data: Calarray,
columns: Colsi,
rows: rowarray

}); 

  
  }
  render() {
    const columns = this.state.columns;
     const data = this.state.data;
      //[{name: "Jean@Aramark.com", company: "Jean Mee", city: "CP4", state: "SFMC"},
     // {name: "Freida@Manpower.com", company: "Freida McNirlin", city: "CP1", state: "Marketo"},
      //{name: "Corena@Masco.com", company: "Corena Buffy", city: "CP7", state: "MailCimp"}]
   
  
     console.log(data);
     const options = {
       filterType: 'checkbox',
     };
     
     
   
      return (
        
        <div className="div-body">
        <div className="innercontainer AttList" style={{display:"block", overflow:"hidden"}}>
        <Paper style={{maxHeight:'auto', overflowY:'scroll'}} >
       
        </Paper>
        
        <MUIDataTable
       title={"Attribution List"}
       data={data}
       columns={columns}
       options={options}
     />
      
        </div>
      </div>
      );
    }

   
  //}
}
HeatTableCard.propTypes = {
  attributes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  attributes: state.attributes.item
});

export default connect(
  mapStateToProps,
 null 
)(HeatTableCard);





