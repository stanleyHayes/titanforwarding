import {Box, Container, Grid, Link, Stack, Typography} from "@mui/material";
import Layout from "../../components/layout/layout.jsx";
import Banner from "../../components/shared/banner.jsx";
import banner from "./../../assets/images/banner.jpg";
import ContactForm from "../../components/forms/contact-form.jsx";
import {TITAN_FORWARDING_DATA} from "../../utils/data.js";
import Office from "../../components/shared/office.jsx";
import logo from "../../assets/images/logo.png";
import {motion} from "motion/react";


const MotionBox = motion.create(Box);
const MotionImg = motion.create('img');

const ContactPage = () => {
    return (
        <Layout>
            <Box>
                <Banner
                    title="Let’s Get in Touch"
                    description="We take the complexity out of customs and freight — so you can focus on moving forward."
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
                        mb: 1,
                        fontSize: {xs: 32, md: 36, lg: 40}
                    }}>
                        Get in Touch
                    </Typography>
                    <Typography align="center" variant="body2" sx={{color: 'text.secondary', mb: 4}}>
                        For inquiries, contact us at {" "}
                        <Link target="_blank" href={`mailto://sales@titanforwarding.com`}>
                            sales@titanforwarding.com
                        </Link>{" "}
                        or find your local office below.
                    </Typography>
                    <Grid container spacing={4}>
                        {TITAN_FORWARDING_DATA.offices.map((office, index) => (
                            <Grid key={index} size={{xs: 12, md: 6}}>
                                <Office office={office}/>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            < Box sx={{py: 8, backgroundColor: 'background.default'}}>
                <Container>
                    <Typography variant="body1" sx={{color: 'text.secondary', mb: 1}}>
                        Let’s Talk
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 700,
                            color: 'text.secondary',
                            mb: 4,
                            fontSize: {xs: 32, md: 36, lg: 40}
                        }}>
                        Curious about how we can support your business? Fill out the form and we’ll get back to you
                        shortly.
                    </Typography>
                    <ContactForm/>
                </Container>
            </Box>
        </Layout>
    )
}

export default ContactPage;