import {Box, Container, Typography} from "@mui/material";
import Layout from "../../components/layout/layout.jsx";
import Banner from "../../components/shared/banner.jsx";
import banner from "../../assets/images/banner.jpg";
import ContactBanner from "../../components/shared/contact-banner.jsx";
import LogisticsServicesSection from "../../components/shared/logistics-services-section.jsx";
import {motion} from "motion/react";
import {TITAN_FORWARDING_DATA} from "../../utils/data.js";
import logo from "../../assets/images/logo.png";
import sideImage from "../../assets/images/side-image02.jpg";
import Features from "../../components/shared/features.jsx";
import SplitContent from "../../components/shared/split-content.jsx";

const MotionBox = motion.create(Box);
const MotionImg = motion.create('img');
const ServicesPage = () => {
    return (
        <Layout>
            <Box>
                <Banner
                    title="Our Services"
                    description="From air and sea freight to customs brokerage and last-mile delivery, we provide end-to-end logistics built around your business."
                    image={banner}
                />
            </Box>

            <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
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
                            src={sideImage}
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
                                📦 Supply Chain Solutions
                            </Typography>
                            <Typography
                                component={motion.p}
                                whileInView={{opacity: 1, y: 0, transition: {duration: 0.5}}}
                                initial={{opacity: 0, y: 50}}
                                exit={{opacity: 0, y: -50}}
                                variant="body2" sx={{mb: 4, color: "text.secondary"}}
                                align="center">
                                At Cardinal, we are dedicated to helping clients optimize their supply chain operations.
                                Our approach is centered around designing and implementing tailored, transformative
                                logistics solutions for each client's unique challenges. By leveraging innovative
                                technologies and strategies, we provide true end-to-end visibility across the supply
                                chain — empowering our clients with unprecedented insights and control. We remain
                                committed to continuous improvement and delivering measurable value through smarter,
                                scalable supply chain management.
                            </Typography>
                        </Box>
                    }
                />
            </Box>
            <Box sx={{py: 8, backgroundColor: 'background.default'}}>
                <SplitContent
                    reversed={false}
                    image={
                        <motion.img
                            whileHover={{
                                scale: 1.1,
                                transition: {
                                    duration: 0.5,
                                }
                            }}
                            src={sideImage}
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
                                🌐 Internet Fulfilment
                            </Typography>
                            <Typography
                                component={motion.p}
                                whileInView={{opacity: 1, y: 0, transition: {duration: 0.5}}}
                                initial={{opacity: 0, y: 50}}
                                exit={{opacity: 0, y: -50}}
                                variant="body2" sx={{mb: 4, color: "text.secondary"}}
                                align="center">
                                We handle every step of your order fulfilment process — from pick and pack to delivery
                                and returns — so you can focus on growing your business. Our fulfilment services are
                                designed to save you time and money while offering full transparency and seamless
                                integration.
                            </Typography>
                            <Features features={TITAN_FORWARDING_DATA.features} />
                        </Box>
                    }
                />
            </Box>
            <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
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
                            src={sideImage}
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
                                🚢 Global Freight Forwarding
                            </Typography>
                            <Typography
                                component={motion.p}
                                whileInView={{opacity: 1, y: 0, transition: {duration: 0.5}}}
                                initial={{opacity: 0, y: 50}}
                                exit={{opacity: 0, y: -50}}
                                variant="body2" sx={{mb: 4, color: "text.secondary"}}
                                align="center">
                                Our global freight forwarding services are built around one goal: making your
                                international logistics simpler and more effective. We work closely with each client to
                                develop fully customised solutions that align with their supply chain needs. Through
                                deep industry expertise and global network partnerships, we provide full supply chain
                                visibility and control — from origin to destination — ensuring reliability, compliance,
                                and efficiency at every stage.≤
                            </Typography>
                        </Box>
                    }
                />
            </Box>
            <Box>
                <Box sx={{py: 8, backgroundColor: 'background.default'}}>
                    <Container>
                        <LogisticsServicesSection
                            services={TITAN_FORWARDING_DATA.logisticsSolutions}
                            image={logo}
                            title="Our Global World"
                        />
                    </Container>
                </Box>


                <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                    <Container>
                        <ContactBanner/>
                    </Container>
                </Box>
            </Box>
        </Layout>
    )
}

export default ServicesPage;