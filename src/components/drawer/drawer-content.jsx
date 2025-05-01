import {Box, Stack, Typography} from "@mui/material";
import {motion} from "motion/react";
import {useLocation} from "react-router";
import DrawerLink from "../shared/drawer-link.jsx";
import logo from "../../assets/images/logo.png";
import {
    ContactMail, ContactMailOutlined,
    Home,
    HomeOutlined, Info, InfoOutlined,
    LocalShipping,
    LocalShippingOutlined, MiscellaneousServices, MiscellaneousServicesOutlined,
    Newspaper,
    NewspaperOutlined
} from "@mui/icons-material";

const MotionBox = motion.create(Box);
const MotionImg = motion.create('img');
const MotionTypography = motion.create(Typography);

const navItems = [
    {
        path: '/',
        label: 'Home',
        icon: <Home color="secondary"/>,
        inactiveIcon: <HomeOutlined/>,
    },
    {
        path: '/logistics',
        label: 'Logistics',
        icon: <LocalShipping color="secondary"/>,
        inactiveIcon: <LocalShippingOutlined/>,
    },
    {
        path: '/news',
        label: 'News',
        icon: <Newspaper color="secondary"/>,
        inactiveIcon: <NewspaperOutlined/>,
    },
    {
        path: '/services',
        label: 'Services',
        icon: <MiscellaneousServices color="secondary"/>,
        inactiveIcon: <MiscellaneousServicesOutlined/>,
    },
    {
        path: '/about-us',
        label: 'About Us',
        icon: <Info color="secondary"/>,
        inactiveIcon: <InfoOutlined/>,
    },
    {
        path: '/contact',
        label: 'Contact',
        icon: <ContactMail color="secondary"/>,
        inactiveIcon: <ContactMailOutlined/>,
    },
];

const containerVariants = {
    initial: {opacity: 0, x: -30},
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.12,
            delayChildren: 0.1
        }
    },
    exit: {opacity: 0, x: -30, transition: {duration: 0.3}}
};

const itemVariants = {
    initial: {opacity: 0, y: 20},
    animate: {opacity: 1, y: 0},
    exit: {opacity: 0, y: -20}
};

const DrawerContent = () => {
    const {pathname} = useLocation();

    return (
        <MotionBox
            component="nav"
            sx={{
                height: '100vh',
                px: 8,
                py: 4,
                backgroundColor: 'background.default',
                color: 'text.primary',
                maxWidth: {xs: '80vw'}
            }}
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Stack direction="column" justifyContent="space-between" sx={{height: '100%'}}>
                {/* Logo */}
                <MotionBox
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{delay: 0.1}}
                >
                    <MotionImg
                        src={logo}
                        alt="Titan Forwarding Logo"
                        style={{
                            objectFit: 'contain',
                            width: 100,
                            height: 100,
                            display: 'block',
                            marginBottom: 16
                        }}
                        whileHover={{scale: 1.1}}
                    />
                </MotionBox>

                {/* Navigation Links */}
                <Stack direction="column" spacing={2}>
                    {navItems.map(({path, label, icon, inactiveIcon}) => (
                        <MotionBox key={path} variants={itemVariants}>
                            <DrawerLink
                                path={path}
                                label={label}
                                icon={pathname === path ? icon : inactiveIcon}
                            />
                        </MotionBox>
                    ))}
                </Stack>

                {/* Footer */}
                <MotionTypography
                    variant="body2"
                    sx={{color: 'text.secondary', textAlign: 'center', mt: 3}}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1}}
                >
                    © Titan Forwarding | All rights reserved
                </MotionTypography>
            </Stack>
        </MotionBox>
    );
};

export default DrawerContent;
