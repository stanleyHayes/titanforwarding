import { Box, Typography, Button, Stack } from '@mui/material';

const ContactBanner = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#FFD400', // bright yellow
                p: { xs: 4, md: 8 },
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <Stack spacing={2}>
                <Typography variant="h4" fontWeight={800} sx={{color: 'black'}}>
                    Contact us today!
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: 500 , color: 'rgba(0, 0, 0, 0.75)'}}>
                    Contact us today for your airfreight requirements
                </Typography>
            </Stack>

            <Button
                variant="contained"
                size="large"
                sx={{
                    mt: { xs: 3, md: 0 },
                    backgroundColor: '#1A1A1A',
                    color: '#fff',
                    fontWeight: 700,
                    '&:hover': {
                        backgroundColor: '#000',
                    },
                }}
                href="/contact" // or your contact route
            >
                CLICK HERE TO CONTACT US!
            </Button>
        </Box>
    );
};

export default ContactBanner;
