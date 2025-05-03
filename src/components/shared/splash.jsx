import {Box, Typography, Button, Card, CardContent, CardMedia} from "@mui/material";
import logo from '../../assets/images/logo.png';

const Splash = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundImage: `url('https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=1470&q=80')`, // replace with your logistics image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2,
            }}
        >
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    maxWidth: 500,
                    width: '100%',
                    p: 4,
                    borderRadius: 4,
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    color: '#fff',
                    textAlign: 'center',
                }}
                elevation={0}>
                {/* Logo */}
                <CardMedia
                    component="img"
                    image={logo} // Replace with actual logo path
                    alt="Titan Forwarding Logo"
                    sx={{
                        width: 80,
                        height: 80,
                        mb: 2,
                    }}
                />

                <CardContent>
                    {/* Title */}
                    <Typography variant="h3" fontWeight="bold" gutterBottom>
                        Titan Forwarding
                    </Typography>

                    {/* Subtitle */}
                    <Typography variant="h6" sx={{opacity: 0.9, mb: 2}}>
                        Moving the world, one shipment at a time.
                    </Typography>

                    {/* Catchy Text */}
                    <Typography variant="body1" sx={{opacity: 0.8, mb: 4}}>
                        Trusted by thousands to deliver packages across continents. Efficiency and reliability,
                        redefined.
                    </Typography>

                    {/* CTA Button */}
                    <Button variant="contained" color="secondary" sx={{color: 'rgba(0, 0, 0, 0.75)'}} size="large">
                        Explore Now
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Splash;
