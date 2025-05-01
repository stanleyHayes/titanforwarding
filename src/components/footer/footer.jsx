import {Box} from "@mui/material";
import DesktopFooter from "./desktop-footer";
import MobileFooter from "./mobile-footer";
import Copyright from "./copyright.jsx";

const Footer = () => {
    return (
        <Box sx={{borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: "border.default"}}>
            <Box sx={{backgroundColor: "background.paper", py: {xs: 0, md: 4}}}>
                <Box sx={{display: {xs: "none", lg: "block"}}}>
                    <DesktopFooter/>
                </Box>
                <Box sx={{display: {xs: "block", lg: "none"}}}>
                    <MobileFooter/>
                </Box>
            </Box>
            <Box sx={{backgroundColor: "background.default", py: 2}}>
                <Copyright />
            </Box>
        </Box>

    )
}

export default Footer;
