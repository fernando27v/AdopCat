import React from "react";
import { TextField,Button } from "@mui/material";
import styles from './SignUp.module.css'
import SendIcon from '@mui/icons-material/Send';

function SignUp() {
  return (
    <form className={styles.form}>
      <div className={styles.divForm}>
        <div style={{textAlign: "center"}}>
        <TextField
          required
          id="First_name"
          label="First name"
          defaultValue=""
          sx={{marginTop: "20px",marginRight: "20px",marginLeft: "20px"}}
        />
        <TextField
          required
          id="Last_name"
          label="Last name"
          defaultValue=""
          sx={{marginTop: "20px",marginRight: "20px",marginLeft: "20px"}}
        />
        </div>
        <div style={{textAlign: "center"}}>
        <TextField
          required
          id="Email"
          label="Email"
          defaultValue=""
          sx={{marginTop: "20px",marginRight: "20px",marginLeft: "20px"}}
        />
        <TextField
          required
          id="Password"
          label="Password"
          type="password"
          autoComplete="current-password"
          sx={{marginTop: "20px",marginRight: "20px",marginLeft: "20px"}}
        />
        </div>
        <div style={{textAlign: "center"}}>
        <TextField
          required
          id="Favorite_movie"
          label="Favorite movie"
          defaultValue=""
          helperText="For reset password."
          sx={{marginTop: "20px",marginRight: "20px",marginLeft: "20px"}}
        />
        <TextField
          required
          id="Mother_first_name"
          label="Mother first name"
          defaultValue=""
          helperText="For reset password."
          sx={{marginTop: "20px",marginRight: "20px",marginLeft: "20px"}}
        />
        </div>
        <TextField
          id="Date_of_birth"
          label="Date of birth"
          type="date"
          defaultValue=""
          InputLabelProps={{ shrink: true }}
          sx={{marginTop: "20px"}}
        />
      
      </div>
      <Button variant="contained" sx={{marginBottom:"1rem"}} color="success" endIcon={<SendIcon />}>Submit</Button>
    </form>
  );
}

export default SignUp;
