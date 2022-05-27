import React from 'react'
import { TextField,Button } from "@mui/material";
import styles from './LogIn.module.css'
import SendIcon from '@mui/icons-material/Send';
import {Link} from 'react-router-dom'

function LogIn() {
  return (
    <form className={styles.form}>
    <div className={styles.divForm}>
      <div style={{textAlign: "center"}}>
      <TextField
        id="Email"
        label="Email"
        defaultValue=""
        sx={{marginTop: "20px",marginRight: "20px",marginLeft: "20px"}}
      />
      <TextField
        id="Password"
        label="Password"
        type="password"
        autoComplete="current-password"
        sx={{marginTop: "20px",marginRight: "20px",marginLeft: "20px"}}
      />
      </div>
      <div style={{margin:"1rem",alignSelf: "flex-start"}}>
      <Link to="/reset-password">Reset Password</Link>
      </div>
      
    
    </div>
    <Button variant="contained" sx={{marginBottom:"1rem"}} color="success" endIcon={<SendIcon />}>Submit</Button>
  </form>
  )
}

export default LogIn