import * as React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from './SignUp.module.css'
import Button from '@mui/material/Button';

export default function Signup() {
  const regexPassword= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const regexPhone= /^(?:\d{10}|\w+@\w+\.\w{2,3})$/;
  const regexName=/^[a-zA-Z ]{2,30}$/;
  
// usestate --true or false --ternary op
  const navigate = useNavigate();
  const [input, setInput]=useState({
    name:"",
    email:"",
    phone:"",
    date:"",
    password:""
  })

//signupbutton     //not empty field
  const handleData=(e)=>{
    e.preventDefault();
      
      if((!input.name && !input.phone && !input.password)){
        return alert("Please Enter all fields");
      }
      else if(!regexName.test(input.name)){
        return alert("Please enter valid Name");
      }
      else if(!regexPhone.test(input.email)){
        return alert("Please enter valid email");
      }
      else if(!regexPhone.test(input.phone)){
        return alert("Please enter valid Mobile no.");
      }
      else if(!regexPassword.test(input.password)){
        console.log(input.password)
        return alert("Please enter valid Password(eg. abcdfhd2)");
      }

    localStorage.setItem(input.email, JSON.stringify(input));
    alert("Sign-Up Successfully");
    navigate("/");                            // navigate to sign in page
  };
  return (
    <>
    <div className={styles.body}>
    <Box className={styles.signuppage}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      autoComplete="off"
    >

      <h1>Create your account</h1>
      <div className={styles.signup1}>

      <TextField 
          className={styles.textfield}
          required
          id="filled-required"
          label="Name"
          variant="filled"
          name="name"
          value={input.name}
          onChange={(e)=> 
            setInput({
              ...input,
              [e.target.name]: e.target.value,})
            }
            styles={{
            width:'70%'
          }}
      />
        <TextField
          className={styles.textfield}
          required
          id="filled-required"
          label="Email"
          variant="filled"
          name="email"
          value={input.email}
          onChange={(e)=> 
            setInput({
              ...input,
              [e.target.name]: e.target.value,})
            }
          styles={{
            width:'70%'
          }}
        />
        {/* <h6><a >Use Phone instead</a></h6> */}
        <TextField
          className={styles.textfield}
          required
          id="filled-disabled"
          label="Phone"
          type='Number'
          name="phone"
          value={input.phone}
          onChange={(e)=> 
            setInput({
              ...input,
              [e.target.name]: e.target.value,})
            }
          variant="filled"
          styles={{
            width:'70%',
          }}
        />

        <TextField 
          className={styles.textfield}
          required
          id="filled-required"
          label="DOB"
          variant="filled"
          type='Date'
          name="date"
          value={input.date}
          onChange={(e)=> 
            setInput({
              ...input,
              [e.target.name]: e.target.value,})
            }
            styles={{
            width:'70%'
          }}
        />
        
        <TextField
          className={styles.textfield}
          required
          helperText="Atleast 8 characters."
          id="filled-password-input"
          label="password"
          type="password"
          name="password"
          value={input.password}
          onChange={(e)=> 
            setInput({
              ...input,
              [e.target.name]: e.target.value,})
            }
         
          // ref={password}
          variant="filled"
          styles={{
            width:'70%'
          }}
        />
        </div>
        <Button 
        className={styles.btnSignup} 
        onClick={handleData}
        variant='contained'
        style={{
            borderRadius: 30
          }}>
            Sign Up</Button>
      
    </Box>
    </div>
    </>
  );
}