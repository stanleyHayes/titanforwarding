import {Box, Typography, Button, Stack, Container, Grid} from '@mui/material';
import banner from "./../../assets/images/section-bg-02.jpg";

const HeroBanner = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                backgroundImage: `url(${banner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                backgroundBlendMode: 'overlay',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            <Container maxWidth="md">
                <Typography variant="h2" fontWeight={900} gutterBottom sx={{color: '#fff'}}>
                    We are now Logistics<br/>Industry Limited
                </Typography>

                <Typography variant="subtitle1" mb={4} sx={{color: '#f0f0f0'}}>
                    We’re one of the leading shipping and logistics providers.
                </Typography>

                <Grid container spacing={2}>
                    <Grid size={{xs: 12, md: 'auto'}}>
                        <Button
                            fullWidth={true}
                            variant="contained"
                            size="large"
                            sx={{backgroundColor: '#FFD400', color: '#000', fontWeight: 600}}
                        >
                            Get A Quote
                        </Button>
                    </Grid>
                    <Grid size={{xs: 12, md: 'auto'}}>
                        <Button
                            fullWidth={true}
                            href="#calculator"
                            variant="outlined"
                            size="large"
                            sx={{color: '#fff', borderColor: '#fff', fontWeight: 600}}
                        >
                            Estimate cost
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HeroBanner;
