import React from "react";
import Top from "../Heading/NavbarHeading";
import Navbar from "../Navbar/Navbar";
import HeroImage from "../HeroImage/Heroimage";
import { Box, Stack } from "@mui/material";
import SearchHospital from "../SearchPage/Searchpage";

import HeroServices from "../HeroServices/HeroServices";
import Offer from "../OFFERs/offers";
import Specialization from "../Specialization/Specialization";
import Specialists from "../Specialist/Specialist";
import PatientCaring from "../PatientCring/PatientCaring";
import Blogs from "../Blog/Blogs";
import OurFamilies from "../Ourfamalies/OurFamalies";
import FAQs from "../FaQ/Faq";
import DownloadApp from "../Download/Download";
import Footer from "../Footer/Footer";
function Main(){







    return(
        <>
        
        <Box >

        <Top/>
        <Navbar/>
        <HeroImage/>
<Stack    bgcolor="#fff" p={{ xs: 2.5, md: 9}}  position="relative" mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
 zIndex={99}
 borderRadius="15px"
 spacing={10}
      
 boxShadow="0 0 12px rgba(0,0,0,0.1)"   
>
<SearchHospital />
        <HeroServices />


</Stack>
            
        </Box>
        

<Offer />
<Specialization />
<Specialists />
<PatientCaring />

        <Blogs/>  
        <OurFamilies/>
        <FAQs/>
        <DownloadApp />
        <Footer/>
        </>
    )
}
export default Main