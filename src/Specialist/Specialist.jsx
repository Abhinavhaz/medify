import { Box, Typography ,Container} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css'
import SpecialistCard from "./SpecialistCard";
import img1 from "../assets/Ahmed.png"
import img2 from "../assets/heena.png"
import img3 from "../assets/ankur.png"

import { Autoplay,Pagination } from "swiper/modules";
// // import SwiperCore, { Autoplay, Pagination } from 'swiper';

// // import "../OFFERs/offers.css"

// export default function Specialists() {

//     const specialist_data = [
//         { img: img1, title: 'Dr. Lesley Hull', designation: 'Medicine' },
//         { img: img2, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
//         { img: img3, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
//         { img: img1, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
//         { img: img2, title: 'Dr. Ahmad Stevens', designation: 'Neurologist' },
//         { img: img3, title: 'Dr. Lesley Hull', designation: 'Medicine' },
//         { img: img1, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
//         { img: img2, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
//         { img: img3, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
//         { img: img1, title: 'Dr. Ahmad Stevens', designation: 'Neurologist' }
//     ]

//     return (
//         <Box py={4} id="find-doctors">
//             <Typography variant="h2" textAlign='center' mb={3} px={2}>
//                 Our Medical Specialist
//             </Typography>
//             <Swiper
//                 slidesPerView={2}
//                 spaceBetween={20}
//                 loop={true}
//                 centeredSlides={true}
//                 autoplay={{
//                     delay: 3000,
//                     disableOnInteraction: false,
//                 }}
//                 modules={[Autoplay, Pagination]}
//                 pagination={{
//                     clickable: true
//                 }}
//                 breakpoints={
//                     {
//                         767: {
//                             slidesPerView: 4
//                         }
//                     }
//                 }
//             >
//                 {specialist_data.map((doc, index) => (
//                     <SwiperSlide key={index}>
//                         <SpecialistCard
//                             img={doc.img}
//                             title={doc.title}
//                             designation={doc.designation} />
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </Box>
//     )
// }
//

export default function Specialists() {
    const specialist_data = [
                { img: img1, title: 'Dr. Lesley Hull', designation: 'Medicine' },
                { img: img2, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
                { img: img3, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
                { img: img1, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
               
            ]
    return (
        <Box py={6}      id="find-doctors" 
        // sx={{ backgroundColor: "white", py: 6, mx: "calc(-50vw + 50%)" ,}}
        sx={{ 
            backgroundColor: "white", 
            py: 10, 
            mx: "calc(-50vw + 50%)", 
            position: "relative", 
            top: "-30px" 
        }}
        
        >
            <Typography variant="h4" textAlign='center' mb={3} px={2}>
                 Our Medical Specialist
        </Typography>
            <Container >
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    loop={true}
                                    centeredSlides={true}
                    autoplay={{
                          delay: 3000,
                         disableOnInteraction: false,
                                        }}
                    modules={[Pagination,Autoplay]}


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

{specialist_data.map((doc, index) => (
                    <SwiperSlide key={index}>
                        <SpecialistCard
                            img={doc.img}
                            title={doc.title}
                            designation={doc.designation} />
                    </SwiperSlide>
                ))}

                </Swiper>
            </Container>
        </Box>
    )
}