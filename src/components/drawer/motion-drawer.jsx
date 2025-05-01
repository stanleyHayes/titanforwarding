import {Box} from "@mui/material";
import {motion} from "motion/react";
import {useEffect, useRef} from "react";
import {MOTION_ANIMATIONS} from "../../utils/animations.js";

const MotionDrawer = ({open, onOpen, onClose, children}) => {
    const prevOpen = useRef(open);

    useEffect(() => {
        if (open && !prevOpen.current) {
            onOpen?.();
        } else if (!open && prevOpen.current) {
            onClose?.();
        }
        prevOpen.current = open;
    }, [open, onOpen, onClose]);

    return (
        <Box
            component={motion.div}
            variants={MOTION_ANIMATIONS.drawer.containerVariants}
            initial="initial"
            animate={open ? 'animate' : "exit"}
            exit="exit"
            sx={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                height: '100vh',
                backgroundColor: 'background.paper',
                position: 'absolute',
                top: 0,
                elevation: 10,
                width: open ? 300 : 0
            }}>
            {children}
        </Box>
    );
};

export default MotionDrawer;
