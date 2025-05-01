import {AppBar, Box} from "@mui/material";
import DesktopTopBar from "./desktop-top-bar.jsx";
import DesktopHeader from "./desktop-header.jsx";
import MobileTopBar from "./mobile-top-bar.jsx";
import MobileHeader from "./mobile-header.jsx";

const Header = () => {
    return (
        <AppBar elevation={0} square={true} position="fixed">
            <Box sx={{display: {xs: 'none', lg: 'block'}}}>
                <DesktopTopBar/>
                <DesktopHeader/>
            </Box>
            <Box sx={{display: {xs: 'block', lg: 'none'}}}>
                <MobileTopBar/>
                <MobileHeader/>
            </Box>
        </AppBar>
    )
}

export default Header;