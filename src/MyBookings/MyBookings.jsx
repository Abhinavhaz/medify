

import { Box, Typography, Container, Stack,Grid } from "@mui/material";
import HospitalCard from "../HospitalCard/hospitalCard";
import { useEffect, useState } from "react";
import cta from "../assets/banner.png";
import SearchBar from "../Searchbar/Searchbar";
import NavBar from "../Navbar/Navbar";
import Top from "../Heading/NavbarHeading";
import DownloadApp from "../Download/Download";
import Footer from "../Footer/Footer";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);

  useEffect(() => {
    const localBookings = localStorage.getItem("bookings") || "[]";
    setBookings(JSON.parse(localBookings));
  }, []);

  useEffect(() => {
    setFilteredBookings(bookings);
  }, [bookings]);

  //Separate page/component to render all the booked hospitals of user alogwith chosen date and time slot
  //It utilises HospitalCard component to generate the cards with data
  return (
    <>
    <Top/>
      <NavBar /> 
      <Box
      marginTop={-30}
        sx={{ background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))" ,position:"absolute", top:"1",left:"0",right:"0"}}
      >
        <Box
          mb="50px"
          pt={{ xs: 3, md: 1 }}
          sx={{
            position: "relative",
            background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
          }}
        >
          <Container maxWidth="xl" sx={{ px: { xs: 0, md: 5 } }}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 0, md: 12 }}
              alignItems={{ xs: "center", md: "flex-end" }}
            >
              <Typography
                component="h1"
                pb={1}
                fontSize={{ xs: 32, md: 40 }}
                fontWeight={700}
                color="#fff"
              >
                My Bookings
              </Typography>
              <Box
                bgcolor="#fff"
                p={3}
                flexGrow={1}
                borderRadius={2}
                boxShadow="0 0 10px rgba(0,0,0,0.1)"
                sx={{ translate: "0 50px" }}
                width={{ xs: 1, md: "auto" }}
              >
                <SearchBar list={bookings} filterList={setFilteredBookings} />
              </Box>
            </Stack>
          </Container>
        </Box>

        <Container maxWidth="xl" sx={{ pt: 8, pb: 10, px: { xs: 0, md: 4 } }}>
          <Stack alignItems="flex-start" direction={{ md: "row" }}>
            <Stack
              mb={{ xs: 4, md: 0 }}
              spacing={3}
              width={{ xs: 1, md: "calc(100% - 384px)" }}
              mr="24px"
            >
                
              {filteredBookings.length > 0 &&
                filteredBookings.map((hospital) => (
                  <HospitalCard
                    key={hospital["Hospital Name"]}
                    details={hospital}
                    booking={true}
                  />
                ))}

              {filteredBookings.length == 0 && (
                <Typography variant="h4" bgcolor="#fff" p={3} borderRadius={2}>
                  No Bookings Found!
                </Typography>
              )}
            </Stack>

            <img src={cta} width={360} height="auto" />
          </Stack>
        </Container>
        <DownloadApp/>
      <Footer/>
      </Box>
      
    </>
  );
}

