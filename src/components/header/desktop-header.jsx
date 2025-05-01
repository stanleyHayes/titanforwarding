import {Button, Stack, Toolbar} from "@mui/material";
import logo from "../../assets/images/logo.png";
import {motion} from "motion/react";
import NavLink from "../shared/nav-link.jsx";
import {useLocation} from "react-router";
import {selectUI, UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice.js";
import HamburgerToggle from "../shared/hamburger-toggle.jsx";
import {useDispatch, useSelector} from "react-redux";

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
        path: '/about-us',
        label: 'About Us',
    },
    {
        path: '/contact',
        label: 'Contact',
    },
];

const DesktopHeader = () => {

    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const {drawerOpen} = useSelector(selectUI);

    return (
        <MotionBox
            component="nav"
            sx={{
                width: '100%',
                backgroundColor: 'background.default',
                color: 'text.primary'
            }}
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
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

                <Stack direction="row" spacing={1}>
                    <HamburgerToggle
                        isOpen={drawerOpen}
                        toggle={() => dispatch(UI_ACTION_CREATORS.toggleDrawerOpen(!drawerOpen))}
                    />
                    <Button variant="contained" color="secondary" sx={{color: 'rgba(0, 0, 0, 0.85)'}}>
                        Get Quote
                    </Button>
                </Stack>
            </Stack>
        </MotionBox>
    )
}

export default DesktopHeader;