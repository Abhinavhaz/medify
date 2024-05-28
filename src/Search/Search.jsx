import { Container, Stack, Box, Typography, keyframes } from "@mui/material";

import axios from "axios"
import { useEffect,useState } from "react"
import tick from "../assets/Blacktick.png"
import img from "../assets/banner.png"
import SearchHospital from "../SearchPage/Searchpage";
import HospitalCard from "../HospitalCard/hospitalCard";
import NavBar from "../Navbar/Navbar"
import { useSearchParams } from "react-router-dom"
import Top from "../Heading/NavbarHeading"
import BookingModal from "../BookingModel/BookingModel";
import AutohideSnackbar from "../BookingModel/snackbar";
import DownloadApp from "../Download/Download";
import Footer from "../Footer/Footer";

function Search(){
    const [seachParams, setSearchParams] = useSearchParams();
    const [hospitals, setHospitals] = useState([]);
    const [state, setState] = useState(seachParams.get("state"));
    const [city, setCity] = useState(seachParams.get("city"));
    const availableSlots = {
      morning: ["11:30 AM"],
      afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
      evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [bookingDetails, setBookingDetails] = useState({});
    const [showBookingSuccess, setShowBookingSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
  

    useEffect(() => {
        setState(seachParams.get("state"));
        setCity(seachParams.get("city"));
      }, [seachParams]);

      
      useEffect(() => {
        const getHospitals = async () => {
          setHospitals([]);
          setIsLoading(true);
          try {
            const data = await axios.get(
              `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
            );
            setHospitals(data.data);
            setIsLoading(false);
          } catch (err) {
            console.log(err);
            setIsLoading(false);
          }
        };
    
        if (state && city) {
          getHospitals();
        }
      }, [state, city]);


      const handleBookingModal = (details) => {
        setBookingDetails(details);
        setIsModalOpen(true);
      };
    

      return(
<>
<Top/>
<NavBar/>
<Box 
marginTop={-20}
  sx={{ background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))" ,position:"absolute", top:"1",left:"0",right:"0"}}
  >

<Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: -90,
            // ............Blue box...
            background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
            // background: "red",
            // below nav blue one

            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
          }}
        >
          <Container
            
            sx={{
              background: "#fff",
              // background: "red",
              // ................search bground...white
              p: 3,
              borderRadius: 2,
              transform: "translatey(50px)",
              mb: "50px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
           <SearchHospital/>
          </Container>
        </Box>


        <Container
          
          sx={{
            pt: 10,
            pb: 10,
            px: { xs: 0, md: 4 },
            background:
              "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
            // "red",
          }}
        >
          {hospitals.length > 0 && (
            <Box>
              <Typography
                component="h1"
                fontSize={24}
                lineHeight={1.1}
                mb={2}
                fontWeight={500}
              >
                {`${hospitals.length} medical centers available in `}
                <span style={{ textTransform: "capitalize" }}>
                  {city.toLocaleLowerCase()}
                </span>
              </Typography>
              <Stack direction="row" spacing={2}>
                <img src={tick} height={24} width={24} alt="icon" />
                <Typography color="#78787" lineHeight={1.4}>
                  Book appointments with minimum wait-time & verified doctor
                  details
                </Typography>
              </Stack>
            </Box>
          )}

          <Stack alignItems="flex-start" direction={{ md: "row"  }}  justifyContent="space-between">
            <Stack
              mb={{ xs: 4, md: 0 }}
              spacing={3}
              width={{ xs: 1, md: "calc(100% - 384px)" }}
              mr="24px"
              sx={{
                backgroundColor:
                  "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
              }}
            >
              {hospitals.length > 0 &&
                hospitals.map((hospital) => (
                  <HospitalCard
                    key={hospital["Hospital Name"]}
                    details={hospital}
                    availableSlots={availableSlots}
                    handleBooking={handleBookingModal}
                  />
                ))}

              {isLoading && (
                <Typography variant="h3" p={3} borderRadius={2}>
                  Loading...
                </Typography>
              )}
              {/* .............................. */}
              {!state && (
                <Typography variant="h5" p={3} borderRadius={2}>
                  <p> Search with State and City name for Hospitals above </p>
                  <img src={tick} height={24} width={24} alt="icon" />
                  <Typography color="#78787" lineHeight={1.4}>
                    Book appointments with minimum wait-time & verified doctor
                    details
                  </Typography>
                </Typography>
              )}
            </Stack>

            <Box sx={{ textAlign: 'center', width: { xs: 1, md: 360 } }}>
              <img src={img} width="100%" height="auto" alt="banner" />
            </Box>

          </Stack>
        </Container>
        <BookingModal
          open={isModalOpen}
          setOpen={setIsModalOpen}
          bookingDetails={bookingDetails}
          showSuccessMessage={setShowBookingSuccess}
        />

        <AutohideSnackbar
          open={showBookingSuccess}
          setOpen={setShowBookingSuccess}
          message="Booking Successful"
        />

<DownloadApp />
<Footer/>


</Box>


</>
      )
}
export default Search

