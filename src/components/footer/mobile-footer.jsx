import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Container,
    FormControl,
    InputAdornment,
    InputLabel,
    Link as MUILink,
    OutlinedInput,
    Stack,
    Toolbar,
    Typography
} from "@mui/material";
import NavLink from "../shared/drawer-link.jsx";
import {
    AddOutlined,
    ArrowRightAlt,
    CallOutlined,
    Facebook,
    Instagram,
    LocationOn,
    Mail,
    Twitter,
    YouTube
} from "@mui/icons-material";
import {Link} from "react-router";
import React from "react";
import {useFormik} from "formik";
import * as yup from "yup";
import logo from "../../assets/images/logo.png";
import {motion} from "motion/react";

const MotionBox = motion.create(Toolbar);
const MotionImg = motion.create('img');


const MobileFooter = () => {

    const formik = useFormik({
        initialValues: {email: ""},
        validationSchema: yup.object().shape({
            email: yup.string().required("Field required"),
        }),
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <Box>
            <Container>
                <Accordion variant="elevation" square={true} elevation={0}>
                    <AccordionSummary expandIcon={<AddOutlined/>}>
                        <Typography
                            display="inline"
                            component="span"
                            variant="body2"
                            sx={{color: "secondary.main", fontWeight: "bold"}}>
                            Titan Forwarding
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack spacing={3} direction="column">
                            <Box sx={{mb: 2}}>
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    sx={{height: '100%', width: '100%'}}>
                                    {/* Logo */}
                                    <MotionBox
                                        initial={{opacity: 0, scale: 0.8}}
                                        animate={{opacity: 1, scale: 1}}
                                        transition={{delay: 0.1}}
                                    >
                                        <Link to="/" style={{textDecoration: 'none'}}>
                                            <MotionImg
                                                src={logo}
                                                alt="Titan Forwarding Logo"
                                                style={{
                                                    objectFit: 'contain',
                                                    width: 50,
                                                    height: 50,
                                                    display: 'block'
                                                }}
                                                whileHover={{scale: 1.1}}
                                            />
                                        </Link>
                                    </MotionBox>
                                </Stack>
                            </Box>
                            <Typography variant="body2" sx={{color: "text.primary"}}>
                                <Typography
                                    display="inline"
                                    component="span"
                                    variant="body2"
                                    sx={{color: "secondary.main", fontWeight: "bold"}}>
                                    Titan Forwarding
                                </Typography>
                                {" "} is a global logistics and freight forwarding company specializing
                                in tailored transport solutions, customs clearance, warehousing, and supply chain
                                optimization. With a trusted network of partners and a commitment to reliability, we
                                help businesses move goods efficiently across borders — on time, every time.
                            </Typography>
                            <FormControl fullWidth={true} variant="outlined">
                                <InputLabel htmlFor="email">Your e-mail</InputLabel>
                                <OutlinedInput
                                    id="email"
                                    name="email"
                                    type="email"
                                    label="Your e-mail"
                                    placeholder="Write your experience..."
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    sx={{}}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <Button
                                                sx={{textTransform: "none"}}
                                                endIcon={<ArrowRightAlt/>}
                                                color="secondary"
                                                fullWidth={true}
                                                variant="contained"
                                                disableElevation={true}
                                                size="large">
                                                Subscribe
                                            </Button>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <Stack direction="row" spacing={1}>
                                <MUILink href="">
                                    <CallOutlined
                                        sx={{
                                            borderRadius: 1,
                                            padding: 1,
                                            fontSize: 48,
                                            borderWidth: 1,
                                            borderStyle: 'solid',
                                            borderColor: 'border.blue',
                                            backgroundColor: 'light.blue',
                                            cursor: 'pointer',
                                            color: 'icon.blue'
                                        }}
                                    />
                                </MUILink>
                                <MUILink href="">
                                    <Mail
                                        sx={{
                                            borderRadius: 1,
                                            padding: 1,
                                            fontSize: 48,
                                            borderWidth: 1,
                                            borderStyle: 'solid',
                                            borderColor: 'border.green',
                                            backgroundColor: 'light.green',
                                            cursor: 'pointer',
                                            color: 'icon.green'
                                        }}
                                    />
                                </MUILink>
                                <MUILink href="">
                                    <LocationOn
                                        sx={{
                                            borderRadius: 1,
                                            padding: 1,
                                            fontSize: 48,
                                            borderWidth: 1,
                                            borderStyle: 'solid',
                                            borderColor: 'border.yellow',
                                            backgroundColor: 'light.yellow',
                                            cursor: 'pointer',
                                            color: 'icon.yellow'
                                        }}
                                    />
                                </MUILink>
                            </Stack>
                        </Stack>
                    </AccordionDetails>
                </Accordion>

                <Accordion variant="elevation" square={true} elevation={0}>
                    <AccordionSummary expandIcon={<AddOutlined/>}>
                        <Typography
                            variant="body1"
                            sx={{color: "text.secondary", textTransform: "none", fontWeight: 'bold'}}>
                            Quick Links
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack spacing={1} direction="column">
                            <NavLink path="/services" label="Services"/>
                            <NavLink path="/" label="Home"/>
                            <NavLink path="/logistics" label="Logistics"/>
                            <NavLink path="/about-us" label="About Us"/>
                            <NavLink path="/contact" label="Contact"/>
                            <NavLink path="/news" label="News"/>
                        </Stack>
                    </AccordionDetails>
                </Accordion>

                <Accordion variant="elevation" square={true} elevation={0}>
                    <AccordionSummary expandIcon={<AddOutlined/>}>
                        <Typography
                            variant="body1"
                            sx={{color: "text.secondary", textTransform: "none", fontWeight: 'bold'}}>
                            Follow Us
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack direction="row" spacing={1}>
                            <MUILink href="">
                                <Facebook
                                    sx={{
                                        borderRadius: 1,
                                        padding: 1,
                                        fontSize: 48,
                                        borderWidth: 1,
                                        borderStyle: 'solid',
                                        borderColor: 'border.blue',
                                        backgroundColor: 'light.blue',
                                        cursor: 'pointer',
                                        color: 'icon.blue'
                                    }}
                                />
                            </MUILink>
                            <MUILink href="">
                                <Twitter
                                    sx={{
                                        borderRadius: 1,
                                        padding: 1,
                                        fontSize: 48,
                                        borderWidth: 1,
                                        borderStyle: 'solid',
                                        borderColor: 'border.green',
                                        backgroundColor: 'light.green',
                                        cursor: 'pointer',
                                        color: 'icon.green'
                                    }}
                                />
                            </MUILink>
                            <MUILink href="">
                                <Instagram
                                    sx={{
                                        borderRadius: 1,
                                        padding: 1,
                                        fontSize: 48,
                                        borderWidth: 1,
                                        borderStyle: 'solid',
                                        borderColor: 'border.yellow',
                                        backgroundColor: 'light.yellow',
                                        cursor: 'pointer',
                                        color: 'icon.yellow'
                                    }}
                                />
                            </MUILink>
                            <MUILink href="">
                                <YouTube
                                    sx={{
                                        borderRadius: 1,
                                        padding: 1,
                                        fontSize: 48,
                                        borderWidth: 1,
                                        borderStyle: 'solid',
                                        borderColor: 'border.red',
                                        backgroundColor: 'light.red',
                                        cursor: 'pointer',
                                        color: 'icon.red'
                                    }}
                                />
                            </MUILink>
                        </Stack>
                    </AccordionDetails>
                </Accordion>

            </Container>
        </Box>
    )
}

export default MobileFooter;
