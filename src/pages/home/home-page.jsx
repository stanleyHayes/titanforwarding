import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import Layout from "../../components/layout/layout.jsx";
import CarouselItem from "../../components/shared/carousel-item.jsx";
import Carousel from "react-multi-carousel";
import banner from "../../assets/images/banner.jpg";
import sideImage01 from "../../assets/images/side-image02.jpg";
import {useNavigate} from "react-router";
import {TITAN_FORWARDING_DATA} from "../../utils/data.js";
import TrackShipmentForm from "../../components/forms/track-shipment-form.jsx";
import {motion} from "motion/react";
import Expert from "../../components/shared/expert.jsx";
import SplitContent from "../../components/shared/split-content.jsx";
import logo from "../../assets/images/logo.png";
import TestimonialCarousel from "../../components/shared/testimonial-carousel.jsx";
import Brand from "../../components/shared/brand.jsx";
import {MOTION_ANIMATIONS} from "../../utils/animations.js";
import {useSelector} from "react-redux";
import {selectNews} from "../../redux/features/news/news-slice.js";
import HeroBanner from "../../components/shared/hero-banner.jsx";
import Solution from "../../components/shared/solution.jsx";
import Features from "../../components/shared/features.jsx";
import Calculator from "../../components/shared/calculator.jsx";
import logisticImage1 from "../../assets/images/logistic-image01.jpg";
import Stat from "../../components/shared/stat.jsx";
import {ArrowRightAlt} from "@mui/icons-material";
import BlogPost from "../../components/shared/blog-post.jsx";

const MotionBox = motion.create(Box);
const MotionImg = motion.create('img');

const HomePage = () => {
    const navigate = useNavigate();
    const {news} = useSelector(selectNews);
    return (
        <Layout>
            <Box>
                <Box>
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={
                            {
                                desktop: {
                                    breakpoint: {max: 3000, min: 1024},
                                    items: 1,
                                    slidesToSlide: 1
                                },
                                tablet: {
                                    breakpoint: {max: 1024, min: 464},
                                    items: 1,
                                    slidesToSlide: 1
                                },
                                mobile: {
                                    breakpoint: {max: 464, min: 0},
                                    items: 1,
                                    slidesToSlide: 1
                                }
                            }
                        }
                        infinite={true}
                        autoPlay={false}
                        keyBoardControl={true}
                        transitionDuration={1000}>
                        {TITAN_FORWARDING_DATA.carouselSlides.map((slide, index) => {
                            return (
                                <CarouselItem image={banner} key={index}>
                                    <Box>
                                        <Typography
                                            variant="h2"
                                            sx={{
                                                textTransform: "uppercase",
                                                fontWeight: 700,
                                                mb: 1,
                                                color: "white",
                                                fontSize: {xs: 32, md: 36, lg: 40}
                                            }}
                                            align="center">
                                            {slide.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{mb: 3, color: "white"}} align="center">
                                            {slide.caption}
                                        </Typography>
                                        <Grid container={true} spacing={2} alignItems="center" justifyContent="center">
                                            <Grid size={{xs: 12, md: 'auto'}}>
                                                <Button
                                                    onClick={() => navigate(`/${slide.link}`)}
                                                    sx={{color: 'black'}}
                                                    endIcon={<ArrowRightAlt/>}
                                                    color="secondary"
                                                    fullWidth={true}
                                                    variant="contained"
                                                    disableElevation={true}
                                                    size="large">
                                                    {slide.button}
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </CarouselItem>
                            )
                        })}
                    </Carousel>
                </Box>
                <Box sx={{backgroundColor: 'background.paper'}}>
                    <TrackShipmentForm/>
                </Box>
                <Box sx={{py: 8, backgroundColor: 'background.default'}}>
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
                                src={sideImage01}
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
                                    Worldwide Logistics, Air Freight, and Road Transport Solutions
                                </Typography>
                                <Typography
                                    component={motion.p}
                                    whileInView={{opacity: 1, y: 0, transition: {duration: 0.5}}}
                                    initial={{opacity: 0, y: 50}}
                                    exit={{opacity: 0, y: -50}}
                                    variant="body2" sx={{mb: 4, color: "text.secondary"}}
                                    align="center">
                                    Titan Forwarding Logistics is a leading third-party contract logistics
                                    provider, specializing in end-to-end supply chain, warehousing, and transportation
                                    services across our global network.
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
                                            Discover All Solutions
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        }
                    />
                </Box>
                <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                    <Container>
                        <Grid container={true} spacing={4}>
                            {TITAN_FORWARDING_DATA.experts.map((expert, index) => (
                                <Grid size={{xs: 12, md: 4}} key={index}>
                                    <Expert key={index} expert={expert}/>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
                <Box sx={{py: 8, backgroundColor: 'background.default'}}>
                    <Container>
                        <Grid container={true} spacing={2}>
                            <Grid size={{xs: 12, md: 6}}>
                                <Typography variant="body2" sx={{color: 'text.secondary', mb: 2}}>
                                    Services
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontWeight: 700,
                                        color: 'text.secondary',
                                        mb: 4,
                                        fontSize: {xs: 32, md: 36, lg: 40}
                                    }}>
                                    Quality Isn’t Extra — It’s Expected
                                </Typography>
                                <Features features={TITAN_FORWARDING_DATA.services}/>

                            </Grid>
                            <Grid size={{xs: 12, md: 6}}>
                                <motion.img
                                    whileHover={{
                                        scale: 1.1,
                                        transition: {
                                            duration: 0.5,
                                        }
                                    }}
                                    src={logisticImage1}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        overflow: 'hidden',
                                    }}
                                />
                            </Grid>
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
                            Global supply chain solutions
                        </Typography>
                        <Typography align="center" variant="body1" sx={{
                            fontWeight: 700,
                            color: 'text.secondary',
                            mb: 4
                        }}>
                            Dedicated specialists taking care of your products
                        </Typography>

                        <Grid container={true} spacing={2} alignItems="center">
                            {TITAN_FORWARDING_DATA.solutions.map((solution, i) => (
                                <Grid size={{xs: 12, md: 6, lg: 4}} key={i}>
                                    <Solution solution={solution}/>
                                </Grid>
                            ))}
                            <Grid size={{xs: 12, md: 6, lg: 4}}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: 280,
                                        borderRadius: 2,
                                        flexDirection: 'column',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Button
                                        href="/solutions"
                                        sx={{
                                            borderRadius: '50%',
                                            width: 60,
                                            height: 60,
                                            backgroundColor: '#FFD400',
                                            color: '#000',
                                            mb: 2,
                                            fontSize: 28,
                                            fontWeight: 700,
                                            minWidth: 0,
                                        }}
                                    >
                                        &rarr;
                                    </Button>
                                    <Typography fontWeight={600} fontSize={14}>
                                        DISCOVER ALL SOLUTIONS
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <Box sx={{backgroundColor: 'background.default'}}>
                    <Grid container={true} spacing={4} alignItems="center">
                        <Grid size={{xs: 12, md: 6}} height="100%">
                            <TestimonialCarousel testimonials={TITAN_FORWARDING_DATA.testimonials}/>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Container>
                                <Typography align="center" variant="body1" sx={{
                                    fontWeight: 700,
                                    color: 'text.secondary',
                                    mb: 4,
                                    fontSize: {xs: 20, md: 24, lg: 32}
                                }}>
                                    Trusted By Some The World's Companies for over 40 years
                                </Typography>

                                <Grid container={true} spacing={4} justifyContent="center">
                                    {TITAN_FORWARDING_DATA.brands.map((brand, index) => (
                                        <Grid size={{xs: 6, sm: 6, md: 6, lg: 3}} key={index}>
                                            <Brand brand={brand}/>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Container>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
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
                <HeroBanner/>
                <Box id="calculator" sx={{py: 8, backgroundColor: 'background.paper'}}>
                    <Container>
                        <Typography align="center" variant="body1" sx={{
                            fontWeight: 700,
                            color: 'text.secondary',
                            mb: 1,
                            fontSize: {xs: 32, md: 36, lg: 40}
                        }}>
                            Estimate Your Delivery Cost
                        </Typography>
                        <Typography align="center" variant="body1" sx={{
                            fontWeight: 700,
                            color: 'text.secondary',
                            mb: 4
                        }}>
                            Get an instant approximation of your shipment’s delivery charges.
                        </Typography>
                        <Calculator/>
                    </Container>
                </Box>
                <Box sx={{backgroundColor: "background.default", py: 8}}>
                    <Container maxWidth="lg">
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
                        <Grid sx={{mb: 3}} container={true} spacing={2} alignItems="center"
                              justifyContent="space-between">
                            <Grid size={{xs: 12, md: 'auto'}}>
                                <Typography
                                    variant="h4"
                                    sx={{color: "text.primary", mb: 1, fontSize: {xs: 24, md: 32, lg: 36}}}>
                                    Insights That Drive Action
                                </Typography>
                                <Typography variant="body2" sx={{color: "text.secondary", mb: 3}}>
                                    Expert guidance and informed opinions from the logistics professionals behind our
                                    success.
                                </Typography>
                            </Grid>
                            <Grid size={{xs: 12, md: 'auto'}}>
                                <Button
                                    onClick={() => navigate('/news')}
                                    sx={{textTransform: "none", borderRadius: 0.25}}
                                    endIcon={<ArrowRightAlt/>}
                                    color="secondary"
                                    fullWidth={true}
                                    variant="outlined"
                                    disableElevation={true}
                                    size="large">
                                    View All
                                </Button>
                            </Grid>
                        </Grid>
                        <Box>
                            <Grid
                                variants={MOTION_ANIMATIONS.gridContainerVariants}
                                initial="initial"
                                whileInView="animate"
                                exit="exit"
                                component={motion.div}
                                container={true} spacing={2}>
                                {
                                    news.latest.map((blogPost, index) => {
                                        return (
                                            <Grid
                                                variants={MOTION_ANIMATIONS.gridItemsVariants}
                                                component={motion.div}
                                                key={index} size={{xs: 12, sm: 6, md: 4}}>
                                                <BlogPost post={blogPost}/>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Layout>
    )
}

export default HomePage;