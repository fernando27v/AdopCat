import React from 'react'
import NavBar from '../NavBar/NavBar'
import styles from './Landing.module.css'
import {Typography,Button} from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import {Link} from 'react-router-dom'
function Landing() {
  return (
    <div className={styles.divLanding}>
        <div className={styles.divText}>
             <Typography variant="h1" sx={{marginTop: "1rem",marginBottom:"1rem"}}>Ad<PetsIcon sx={{fontSize:"3.4rem"}}/>pcat</Typography>
             <Typography variant="h3" sx={{marginTop: "1rem",marginBottom:"1rem"}}>Welcome to Adopcat!!</Typography>
             <Typography variant="h4" sx={{marginTop: "1rem",marginBottom:"1rem"}}>Adopcat is a platform that allows you to find a cat that you can adopt.</Typography>
           <Link to="/home" style={{textDecoration: "none"}}><Button variant="contained" sx={{marginTop: "3rem",backgroundColor: "#30a139",padding:"16px 22px"}}>Lets Go!</Button></Link>
        </div>
       
    </div>
  )
}

export default Landing