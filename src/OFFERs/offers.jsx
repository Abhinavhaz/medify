
import { Box, Container } from "@mui/material";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';


import img1 from "../assets/Offer1.png";
import img2 from "../assets/Offer2.png";
import './offers.css';


export default function Offers() {
    return (
        <Box py={6}       
        // sx={{ backgroundColor: "white", py: 6, mx: "calc(-50vw + 50%)" ,}}
        sx={{ 
            backgroundColor: "white", 
            py: 10, 
            mx: "calc(-50vw + 50%)", 
            position: "relative", 
            top: "-30px" 
        }}
        
        >
            <Container >
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{
                        type: 'bullets',
                        clickable: true
                    }}
                    breakpoints={
                        {
                            767: {
                                slidesPerView: 3
                            }
                        }
                    }
                >

                    <SwiperSlide>
                        <Box component={'img'} src={img1} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={img2} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={img1} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={img2} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={img1} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={img2} />
                    </SwiperSlide>

                </Swiper>
            </Container>
        </Box>
    )
}