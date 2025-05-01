import {Box, Typography, Grid, Card, CardContent, CardMedia, Stack} from "@mui/material";
import {motion} from "motion/react";

const MotionBox = motion.create(Box);
const MotionImg = motion.create('img');

const LogisticsServicesSection = ({title, services, image}) => {
    return (
        <Box sx={{py: 8, backgroundColor: "background.default"}}>

            <Typography align="center" variant="h4" fontWeight={700} mb={4}>
                {title}
            </Typography>
            {image && (
                <Stack direction="row" justifyContent="center" sx={{width: '100%', mb: 4}}>
                    {/* Logo */}
                    <MotionBox
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{delay: 0.1}}>
                        <MotionImg
                            src={image}
                            alt="Titan Forwarding Logo"
                            style={{
                                objectFit: 'contain',
                                width: 75,
                                height: 75
                            }}
                            whileHover={{scale: 1.1}}
                        />
                    </MotionBox>
                </Stack>
            )}
            <Grid container spacing={4}>
                {services.map((item, index) => (
                    <Grid size={{xs: 12, md: 4}} key={index}>
                        <Card elevation={0} sx={{height: '100%'}}>
                            <CardMedia
                                component="img"
                                height="240"
                                image={item.image}
                                alt={item.title}
                            />
                            <CardContent>
                                <Typography variant="h6" fontWeight={700} gutterBottom>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default LogisticsServicesSection;
