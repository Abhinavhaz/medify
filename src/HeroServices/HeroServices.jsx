import { Box, Grid, Typography } from "@mui/material"

import Card from "./Card"
import doclogo from "../assets/doclogo.png"
import pharmacy from "../assets/Drugstore.png"
import hospital from "../assets/Hospital.png"
import capsule from "../assets/Capsule.png"
import ambulance from "../assets/Ambulance.png"
function HeroServices(){

    const services=[
        {img:doclogo , title: "Doctors"},
        {img:pharmacy, title:"pharmacy"},
        {img:hospital,title:"Hospitals", istrue:true},
        {img : capsule, title:"Medical Store"},
        {img :ambulance , title: "Ambulance"}
    ]

return(
    
    <Box>
 <Typography
        component="h4"
        fontSize={20}
        color="#102851"
        fontWeight={500}
        textAlign="center"
        mb={2}
      >
        You may be looking for
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 1, md: 2 }}
        justifyContent={"center"}
      >
        {services.map((service) => (
          <Grid item key={service.title} xs={4} md={2.4}>
            <Card
              img={service.img}
              title={service.title}
              active={service.istrue || false}
              bgColor="#FAFBFE"
            />
          </Grid>
        ))}
      </Grid>

    </Box>
    
    
    
    
    

)
}
export default HeroServices