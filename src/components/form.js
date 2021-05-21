import React, { useState, useEffect } from "react";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
 
const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiFormControl-root':{
      width:'30%',
      height:'10%',
      margin: theme .spacing(0),
      margin:theme.spacing(0),
      padding:theme.spacing(2)
      }
    }
})
) 
/* regular expression */
const FirstNameRE = /^[A-Z]{2,10}$/i;
const LastNameRE = /^[A-Z]{2,10}$/i;
const PhoneRE = /^[0-9]{10}$/;
const EmailRE = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/;


export default function Form() {
  const classes=useStyles();
     
  const [user, setUser] = useState({
    FirstName: "",
    FirstNameErr: "",
    LastName: "",
    LastNameErr: "",
    Phone: "",
    PhoneErr: "",
    Email: "",
    EmailErr: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setUser((prevData) => {
        return {
          ...prevData,
          FirstNameErr: "",
          LastNameErr: "",
          EmailErr: "",
          PhoneErr: "",
        };
      });
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [user.FirstNameErr,user.LastNameErr, user.PhoneErr,  user.emailErr]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const userValidation = (re, checkUser, err) => {
    if (!re.test(checkUser)) {
      setUser((prevData) => {
        return {  ...prevData,[err]:`Please enter valid input` };
      });
      return false;
    } else {
      setUser((prevData) => {
        return {
          ...prevData,
          [err]: "",
          
        };
      });
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      userValidation(FirstNameRE, user.FirstName, "FirstNameErr") &&
      userValidation(LastNameRE, user.LastName, "LastNameErr") &&
      userValidation(PhoneRE, user.Phone, "PhoneErr") &&
      userValidation(EmailRE, user.Email, "EmailErr")
    ) {
      alert("form submitted");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.root}>
          <div> 
                 
        <TextField
         style={{width:"580px",borderRadius:"8px",height:"40px",background:"white",paddingTop:"60px",paddingBottom:"40px",marginLeft:"70px",marginTop:"20px"}}
          type="text"
          label="FirstName"
          value={user.FirstName}
          onChange={(e) => handleChange(e)}
          placeholder="Your Answer"
          name="FirstName"
          className={user.FirstNameErr ? "err" : null}
           />
           {user.FirstNameErr && <h5 style={{color:"red"}}>{user.FirstNameErr}</h5>}
          
          </div>
         <div>
        <TextField 
          style={{width:"580px",borderRadius:"8px",height:"40px",background:"white",paddingTop:"60px",marginLeft:"70px",paddingBottom:"40px",marginTop:"20px"}}
          type="text"
          label="LastName"
          value={user.LastName}
          onChange={(e) => handleChange(e)}
          placeholder="your Answer"
          name="LastName"
          className={user.LastNameErr ? "err" : null}
          />  
        {user.LastNameErr && <h5 style={{color:"red"}}>{user.LastNameErr}</h5>}
        </div>
        <div>
        <TextField
        style={{width:"580px",height:"40px",borderRadius:"8px",background:"white",paddingTop:"60px",paddingBottom:"40px",marginLeft:"70px",marginTop:"20px"}}
          type="text"
          label="Phone"
          value={user.Phone}
          onChange={(e) => handleChange(e)}
          placeholder="Your Answer"
          name="Phone"
          className={user.PhoneErr ? "err" : null}
        />
        {user.PhoneErr && <h5 style={{color:"red"}}>{user.PhoneErr}</h5>}
        </div>
        <div>
        <TextField
        style={{width:"580px",borderRadius:"8px", height:"40px",background:"white",paddingBottom:"40px",paddingTop:"60px",marginLeft:"70px",marginTop:"20px"}}
          type="text"
          label="Email"
          value={user.Email}
          onChange={(e) => handleChange(e)}
          placeholder="Your Answer"
          name="Email"
          className={user.EmailErr ? "err" : null}
        />
        {user.EmailErr && <h5 style={{color:"red"}} >{user.EmailErr}</h5>}
        </div>
        <Button 
        style={{width:"80px",height:"35px",paddingBottom:'20px',marginTop:"10px",marginBottom:"30px"}}
        type="submit"
        variant="contained"
         color="primary"
         className="btn">
          Submit
        </Button>
      </form>
    </div>
  );
}

