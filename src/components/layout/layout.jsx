import {Box, SwipeableDrawer} from "@mui/material";
import Header from "../header/header.jsx";
import DrawerContent from "../drawer/drawer-content.jsx";
import {selectUI, UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice.js";
import {useDispatch, useSelector} from "react-redux";
import Footer from "../footer/footer.jsx";
import {motion} from "motion/react";

const Layout = ({children}) => {

    const {drawerOpen} = useSelector(selectUI);
    const dispatch = useDispatch();

    return (
        <Box
            sx={{}}
            component={motion.div}
            initial={{}}
            exit={{}}
            animate={{}}>
            <Box sx={{display: "flex", flexDirection: "column"}}>
                <Box>
                    <Header/>
                </Box>
                <Box sx={{flexGrow: 1, mt: {xs:8.2, md: 16.2}}}>
                    {children}
                </Box>
                <Box>
                    <Footer/>
                </Box>
            </Box>

            <SwipeableDrawer
                open={drawerOpen}
                onOpen={() => dispatch(UI_ACTION_CREATORS.toggleDrawerOpen(true))}
                onClose={() => dispatch(UI_ACTION_CREATORS.toggleDrawerOpen(false))}>
                <DrawerContent/>
            </SwipeableDrawer>
        </Box>
    )
}

export default Layout;