import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  Checkboxes:{
    width:'30%',
    height:'10%',
    marginLeft:'40%',
    margin:theme.spacing(1),
    padding:theme.spacing(0),
  
}

}))
 
export default function Checkboxes() {
  function handleChange(event){
    console.log(event.target.value);
  }
  const classes = useStyles();
    
   
  return (
      <FormGroup aria-label="position" row='2'>
       
        <FormControlLabel
          onChange={handleChange}
          value="checked"
          control={<Checkbox color="primary"/>}
          label="Option1"
          />  
      </FormGroup>  
  );
}
