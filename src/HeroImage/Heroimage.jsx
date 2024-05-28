
import React from "react"

import { Link } from "react-router-dom"
import doctor from "../assets/doctor.png"
import { Box, Stack, Typography, Button } from "@mui/material";

function HeroImage(){

return(
  <div >

  
<div style={{display:"flex",marginTop:"5700px"}}>

<div>

<h1 style={{paddingTop:"80px", fontSize:"40px"}}>  Skip the travel! Find Online</h1>

<h1 style={{ fontSize:"60px"}}>  Medical <span style={{ color: "#2AA7FF" }}>Centers</span></h1>

<p  color="#5C6169" style={{fontSize:"20px",color:"#5C6169",paddingBottom:"20px"}}>     Connect instantly with a 24x7 specialist or choose
<br/> to video visit a particular doctor. </p>

            <Link to="/search">
            <Button  style={{textTransform: 'none' , backgroundColor: '#2AA8FF', color: '#ffffff' }}  disableElevation>
              Find Centers
            </Button>
          </Link>
</div>


<img src={doctor}/>

</div>
</div>
)



}
export default HeroImage
