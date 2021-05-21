import { Button, Checkbox } from '@material-ui/core';
import React from 'react';
import './App.css';
import Form from "./components/form"
//import Button from "./components/Button"
import {Paper,makeStyles} from "@material-ui/core"
import Checkboxes from './components/Checkboxes'

const useStyles = makeStyles(theme => ({
  pageContent:{
    height:'20%',
    marginLeft:'0%',
    margin:theme.spacing(0),
    padding:theme.spacing(1),       
}
}))
function App() {
  const classes = useStyles(); 
  return (
    <div className="App">
      <div className='pageContent'>
    <Paper  className={classes.pageContent} elevation={3} >
      <h1 style={{marginTop:'0px',marginBottom:'0px',width:'580px',height:'40px',fontWeight:'400'}}>Event registration</h1>
      <p style={{fontWeight:"500",marginBottom:"1px",marginTop:'1px'}} >Event timing: january 4th-6th,2020
          <div>Event Address: 123 your street your city,12345</div>
           <div> Contact us:  (123)433-3540 <a target="_blank" href="tryit.asp?filename=trycss_text">singhsonal2001@gmail.com </a></div> </p> 
           <h5 style={{color:"red" ,marginTop:"6px"}}>* Requried</h5>
        </Paper>
        </div>
         <div className='Checkboxes'>
         <Paper className={classes.Checkboxes} elevation={3}>
             <Checkboxes/>
             </Paper>
             </div>   
               <Form/>
     </div>
      
  );
}

export default App;
