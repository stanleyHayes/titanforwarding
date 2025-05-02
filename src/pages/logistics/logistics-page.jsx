import {Box, Container, Grid, Stack, Typography, Button} from "@mui/material";
import Layout from "../../components/layout/layout.jsx";
import Banner from "../../components/shared/banner.jsx";
import banner from "../../assets/images/banner.jpg";
import logo from "../../assets/images/logo.png";
import {motion} from "motion/react";
import SplitContent from "../../components/shared/split-content.jsx";
import logisticImage1 from "../../assets/images/logistic-image01.jpg";
import {useNavigate} from "react-router";
import {ArrowRightAlt} from "@mui/icons-material";
import ServiceChips from "../../components/shared/service-chips.jsx";
import {TITAN_FORWARDING_DATA} from "../../utils/data.js";
import ContactBanner from "../../components/shared/contact-banner.jsx";
import LogisticsServicesSection from "../../components/shared/logistics-services-section.jsx";

const MotionBox = motion.create(Box);
const MotionImg = motion.create('img');

const LogisticsPage = () => {
    const navigate = useNavigate();
    return (
        <Layout>
            <Box>
                <Box>
                    <Banner
                        title="Smarter Logistics Solutions"
                        description="Optimize your supply chain with advanced freight management, real-time tracking, and scalable logistics services designed for global reach."
                        image={banner}
                    />
                </Box>
                <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                    <Container>
                        <Stack direction="row" justifyContent="center" sx={{width: '100%', mb: 4}}>
                            {/* Logo */}
                            <MotionBox
                                initial={{opacity: 0, scale: 0.8}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{delay: 0.1}}>
                                <MotionImg
                                    src={logo}
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

                        <Typography align="center" variant="body1" sx={{
                            fontWeight: 700,
                            color: 'text.secondary',
                            mb: 4,
                            fontSize: {xs: 32, md: 36, lg: 40}
                        }}>
                            Over 50 Years of Trusted Logistics Solutions
                        </Typography>
                    </Container>

                    <SplitContent
                        reversed={true}
                        image={
                            <motion.img
                                whileHover={{
                                    scale: 1.1,
                                    transition: {
                                        duration: 0.5,
                                    }
                                }}
                                src={logisticImage1}
                                style={{
                                    maxHeight: 400,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: {xs: 0.25, md: 0},
                                    overflow: 'hidden',
                                }}
                            />
                        }
                        content={
                            <Box>
                                <Typography
                                    component={motion.h4}
                                    whileInView={{opacity: 1, y: 0, transition: {duration: 0.5}}}
                                    initial={{opacity: 0, y: 50}}
                                    exit={{opacity: 0, y: 50}}
                                    variant="h4"
                                    sx={{textTransform: "uppercase", mb: 3, fontSize: {xs: 20, md: 24, lg: 32}}}
                                    align="center">
                                    Complete Flexibility for Every Shipment
                                </Typography>
                                <Typography
                                    component={motion.p}
                                    whileInView={{opacity: 1, y: 0, transition: {duration: 0.5}}}
                                    initial={{opacity: 0, y: 50}}
                                    exit={{opacity: 0, y: -50}}
                                    variant="body2" sx={{mb: 4, color: "text.secondary"}}
                                    align="center">
                                    Because we understand that your priority is delivering goods to your customers on
                                    time and in full, we provide a comprehensive range of transport and logistics
                                    solutions. This ensures you have the flexibility to ship consignments of any size —
                                    all without the hassle of switching providers.

                                    With a wide selection of reliable delivery options, you can trust us to handle your
                                    shipment, no matter how large or small. And if you're ever unsure which service is
                                    right for you, our experienced transport team — with over 120 years of combined
                                    expertise — is always ready to help.
                                </Typography>

                                <Grid
                                    component={motion.div}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.5
                                        }
                                    }}
                                    initial={{
                                        opacity: 0,
                                        y: 50
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: -50
                                    }}
                                    container={true}
                                    alignItems="center"
                                    justifyContent="center">
                                    <Grid size={{xs: 12, md: 'auto'}}>
                                        <Button
                                            sx={{color: 'black'}}
                                            onClick={() => navigate(`/services`)}
                                            endIcon={<ArrowRightAlt/>}
                                            color="secondary"
                                            fullWidth={true}
                                            variant="contained"
                                            disableElevation={true}
                                            size="large">
                                            Our Services
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        }
                    />
                </Box>
                <Box sx={{py: 8, backgroundColor: 'background.default'}}>
                    <Container>
                        <Typography align="center" variant="body1" sx={{
                            fontWeight: 700,
                            color: 'text.secondary',
                            mb: 4,
                            fontSize: {xs: 32, md: 36, lg: 40}
                        }}>
                            Comprehensive Transport Services
                        </Typography>
                    </Container>

                    <SplitContent
                        reversed={true}
                        image={
                            <motion.img
                                whileHover={{
                                    scale: 1.1,
                                    transition: {
                                        duration: 0.5,
                                    }
                                }}
                                src={logisticImage1}
                                style={{
                                    maxHeight: 400,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: 0,
                                    overflow: 'hidden',
                                }}
                            />
                        }
                        content={
                            <Box>
                                <Typography
                                    component={motion.h4}
                                    whileInView={{opacity: 1, y: 0, transition: {duration: 0.5}}}
                                    initial={{opacity: 0, y: 50}}
                                    exit={{opacity: 0, y: 50}}
                                    variant="h4"
                                    sx={{textTransform: "uppercase", mb: 3, fontSize: {xs: 20, md: 24, lg: 32}}}>
                                    Our Services
                                </Typography>
                                <ServiceChips services={TITAN_FORWARDING_DATA.services}/>
                            </Box>
                        }
                    />
                </Box>

                <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                    <Container>
                        <ContactBanner/>
                    </Container>
                </Box>

                <Box sx={{py: 8, backgroundColor: 'background.default'}}>
                    <Container>
                        <LogisticsServicesSection
                            services={TITAN_FORWARDING_DATA.logisticsServices}
                            title="Our Logistics Capabilities"
                        />
                    </Container>
                </Box>
            </Box>
        </Layout>
    )
}

export default LogisticsPage;