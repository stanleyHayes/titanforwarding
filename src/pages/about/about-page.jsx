import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import Layout from "../../components/layout/layout.jsx";
import banner from "../../assets/images/banner.jpg";
import Banner from "../../components/shared/banner.jsx";
import logo from "../../assets/images/logo.png";
import {TITAN_FORWARDING_DATA} from "../../utils/data.js";
import {motion} from "motion/react";
import logisticImage1 from "../../assets/images/logistic-image01.jpg";
import SplitContent from "../../components/shared/split-content.jsx";
import CoreValue from "../../components/shared/core-value.jsx";
import Stat from "../../components/shared/stat.jsx";
import Milestones from "../../components/shared/milestones.jsx";
import Industries from "../../components/shared/industries.jsx";
import TeamMember from "../../components/shared/team-member.jsx";
import Brand from "../../components/shared/brand.jsx";
import TestimonialSection from "../../components/shared/testimonial-section.jsx";

const MotionBox = motion.create(Box);
const MotionImg = motion.create('img');

const AboutPage = () => {
    return (
        <Layout>
            <Box>
                <Banner
                    title="Who We Are"
                    description="With decades of experience in global logistics, Titan Forwarding delivers reliable, efficient, and tailored shipping solutions across continents."
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
                        It means we don’t just come to work to do a job, we come to work to make a difference.
                    </Typography>
                    <Typography align="center" variant="body2" sx={{color: 'text.secondary', mb: 4}}>
                        Everyone within our business understands our mission
                    </Typography>
                </Container>
            </Box>
            <Box sx={{py: 8, backgroundColor: 'background.default'}}>
                <Container>
                    <SplitContent
                        reversed={true}
                        image={
                            <motion.img
                                whileHover={{scale: 1.1, transition: {duration: 0.5}}}
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
                                    sx={{
                                        color: 'secondary.main',
                                        mb: 3,
                                        fontStyle: 'italic',
                                        fontSize: {xs: 20, md: 24, lg: 32}
                                    }}
                                    align="center">
                                    “To make the process of buying and managing shipping and logistics services simple,
                                    efficient, stress free and cost effective.”
                                </Typography>
                                <Typography
                                    component={motion.p}
                                    whileInView={{opacity: 1, y: 0, transition: {duration: 0.5}}}
                                    initial={{opacity: 0, y: 50}}
                                    exit={{opacity: 0, y: -50}}
                                    variant="body2" sx={{mb: 4, color: "text.secondary"}}
                                    align="center">
                                    We do this by providing a friendly, efficient and personalised service combined with
                                    innovative IT solutions that enable our customers to always be in control of their
                                    supply chains.
                                </Typography>
                            </Box>
                        }/>
                </Container>
            </Box>
            <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                <Container>
                    <Grid container={true} spacing={2}>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography align="center" variant="body2" sx={{color: 'text.secondary', mb: 2}}>
                                Our Values
                            </Typography>
                            <Typography
                                align="center"
                                variant="body1"
                                sx={{
                                    fontWeight: 700,
                                    color: 'text.secondary',
                                    mb: 1,
                                    fontSize: {xs: 32, md: 36, lg: 40}
                                }}>
                                Giving customers a unique experience of partnership.
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Stack direction="column" spacing={2}>
                                {TITAN_FORWARDING_DATA.values.map((value, index) => (
                                    <CoreValue value={value} key={index}/>
                                ))}
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{py: 8, backgroundColor: 'background.default'}}>
                <Container>
                    <Grid container={true} spacing={4}>
                        {TITAN_FORWARDING_DATA.stats.map((stat, index) => (
                            <Grid size={{xs: 12, md: 6, lg: 4}} key={index}>
                                <Stat stat={stat}/>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
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
                        Driven by Purpose, Built on Progress
                    </Typography>
                    <Typography align="center" variant="body2" sx={{color: 'text.secondary', mb: 4}}>
                        Titan Forwarding has grown from strength to strength — not just by doing the job, but by making
                        a real difference every day. Our team comes to work with purpose, passion, and a shared
                        commitment to impact the world through logistics that matter.
                    </Typography>

                    <Milestones milestones={TITAN_FORWARDING_DATA.milestones}/>
                </Container>
            </Box>
            <Box sx={{py: 8, backgroundColor: 'background.default'}}>
                <Container>
                    <Industries industries={TITAN_FORWARDING_DATA.industries}/>
                </Container>
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
                        The People Behind Our Excellence
                    </Typography>
                    <Typography align="center" variant="body2" sx={{color: 'text.secondary', mb: 4}}>
                        Practical advice and trusted expertise from the team that powers our logistics solutions.
                    </Typography>

                    <Grid container={true} spacing={4} justifyContent="center">
                        {TITAN_FORWARDING_DATA.team.map((member, index) => (
                            <Grid size={{xs: 12, md: 4}} key={index}>
                                <TeamMember member={member}/>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <Box sx={{py: 8, backgroundColor: 'background.default'}}>
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
                        Recognized for Excellence
                    </Typography>
                    <Typography align="center" variant="body2" sx={{color: 'text.secondary', mb: 4}}>
                        We’re proud to hold certifications that demonstrate our dedication to professionalism, quality,
                        and industry compliance.
                    </Typography>

                    <Grid container={true} spacing={4} justifyContent="center">
                        {TITAN_FORWARDING_DATA.brands.map((brand, index) => (
                            <Grid size={{xs: 6, md: 6, lg: 3}} key={index}>
                                <Brand brand={brand}/>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
            <Box sx={{backgroundColor: 'background.paper'}}>
                <TestimonialSection testimonials={TITAN_FORWARDING_DATA.testimonials}/>
            </Box>
        </Layout>
    )
}

export default AboutPage;