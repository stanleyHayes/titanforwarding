import {Button, Stack, Toolbar} from "@mui/material";
import logo from "../../assets/images/logo.png";
import {motion} from "motion/react";
import NavLink from "../shared/nav-link.jsx";
import {useLocation, Link} from "react-router";

const MotionBox = motion.create(Toolbar);
const MotionImg = motion.create('img');


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


const navItems = [
    {
        path: '/',
        label: 'Home',
    },
    {
        path: '/logistics',
        label: 'Logistics',
    },
    {
        path: '/news',
        label: 'News',
    },
    {
        path: '/services',
        label: 'Services',
    },
    {
        path: '/about',
        label: 'About Us',
    },
    {
        path: '/contact',
        label: 'Contact',
    }
];

const DesktopHeader = () => {

    const {pathname} = useLocation();

    return (
        <MotionBox
            sx={{
                backgroundColor: "background.transparent",
                backdropFilter: 'blur(35px)',
                WebkitBackdropFilter: 'blur(35px)'
            }}
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit">
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
                </MotionBox>

                {/* Navigation Links */}
                <Stack direction="row" spacing={1}>
                    {navItems.map(({path, label, icon, inactiveIcon}) => (
                        <MotionBox key={path} variants={itemVariants}>
                            <NavLink
                                path={path}
                                text={label}
                                icon={pathname === path ? icon : inactiveIcon}
                            />
                        </MotionBox>
                    ))}
                </Stack>
                <Link to="/tracking" style={{textDecoration: 'none'}}>
                    <Button component="span" variant="contained" color="secondary" sx={{color: 'rgba(0, 0, 0, 0.85)'}}>
                        Track Shipment
                    </Button>
                </Link>
            </Stack>
        </MotionBox>
    )
}

export default DesktopHeader;