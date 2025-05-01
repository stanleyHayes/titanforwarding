import {Box, Grid} from '@mui/material';
import Testimonial from "./testimonial.jsx";
import banner from "./../../assets/images/banner.jpg";

const TestimonialSection = ({testimonials}) => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${banner})`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                py: 10,
                px: {xs: 2, md: 6},
                color: '#000',
            }}
        >
            <Grid container spacing={4}>
                {testimonials.map((testimonial, i) => (
                    <Grid size={{xs: 12, md: 6}} key={i}>
                        <Testimonial testimonial={testimonial}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default TestimonialSection;
