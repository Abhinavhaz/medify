
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import faqBanner from '../assets/faq.png';

export default function FAQs() {
    const text1 = "Why choose our medical for your family?";
    const text2 = "Why we are different from others?";
    const text3 = "Trusted & experience senior care & love";
    const text4 = "How to get appointment for emergency";

    const displyFaqs = () => {
        const faqData = [text1, text2, text3, text4];
        return faqData.map((item, index) => (
            <Box key={index} display="flex" alignItems="center" justifyContent="space-around" mb={2} sx={{ borderBottom: '1px solid #e0e0e0', pb: 2 }}>
                <Typography variant="body1" fontWeight={600} color="navy"  sx={{  textAlign: 'right' }}>{item}</Typography>
                <IconButton color="primary">
                    <AddIcon />
                </IconButton>
            </Box>
        ));
    }

    return (
        <Box py={4} mb={3} sx={{backgroundColor:"white"}}>
            <Container maxWidth='xl'>
                <Typography color='primary.main' fontWeight={600} textAlign='center'>
                    Get Your Answer
                </Typography>
                <Typography textAlign='center' fontWeight={600} color="navy" variant='h4' mb={2}>
                    Frequently Asked Questions
                </Typography>
                <Grid container alignItems='center' spacing={5}>
                    <Grid item xs={12} md={6}>
                        <Box
                            component='img'
                            src={faqBanner}
                            alt="FAQ Banner"
                            width={1}
                            height='auto'
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            {displyFaqs()}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
