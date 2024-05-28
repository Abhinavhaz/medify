import { Box, Typography } from "@mui/material";

export default function SpecialistCard({ img, title, designation }) {
    return (
        <Box textAlign='center'>
            <Box
                component='img'
                src={img}
                border="10px solid white"
                sx={{ boxShadow: '0 15px 55px -10px rgba(0,0,0,0.09)',
                 borderRadius: '510px 520px 10px 10px' ,background: 'linear-gradient(144.2deg, #E1F3FF 0%, #2AA7FF 100%)',

                }}
                mb={2}
            />
            <Typography
                fontSize={{ xs: 16, md: 24 }}
                color='#1B3C74'
            >
                {title}
            </Typography>
            <Typography
                fontSize={{ xs: 14, md: 16 }}
                fontWeight={500}
                color=' #2AA7FF '
            >
                {designation}
            </Typography>
        </Box>
    )
}
// background: linear-gradient(144.2deg, #E1F3FF 0%, #2AA7FF 100%);
