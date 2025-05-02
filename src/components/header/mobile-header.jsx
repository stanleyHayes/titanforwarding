import {Stack, Toolbar, Typography} from "@mui/material";
import logo from "../../assets/images/logo.png";
import {motion} from "motion/react";
import {useDispatch, useSelector} from "react-redux";
import {selectUI, UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice.js";
import HamburgerToggle from "../shared/hamburger-toggle.jsx";

const MotionImg = motion.img;

const MobileHeader = () => {
    const {drawerOpen} = useSelector(selectUI);
    const dispatch = useDispatch();
    return (
        <Toolbar>
            <Stack sx={{width: '100%'}} direction="row" spacing={2} justifyContent="space-between" alignItems="center">
                <MotionImg
                    src={logo}
                    alt="Titan Forwarding Logo"
                    style={{
                        objectFit: 'contain',
                        width: 30,
                        height: 30,
                        display: 'block',
                        marginBottom: 16
                    }}
                    whileHover={{scale: 1.1}}
                />

                <Typography variant="body1" fontWeight={700} sx={{color: 'secondary.main'}}>
                    Titan Forwarding
                </Typography>

                <HamburgerToggle
                    isOpen={drawerOpen}
                    toggle={() => dispatch(UI_ACTION_CREATORS.toggleDrawerOpen(!drawerOpen))}
                />
            </Stack>
        </Toolbar>
    )
}

export default MobileHeader;