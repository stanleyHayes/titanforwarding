import {motion} from 'motion/react';
import {IconButton} from '@mui/material';

const HamburgerToggle = ({isOpen, toggle}) => {

    return (
        <IconButton onClick={toggle} sx={{width: 48, height: 48}}>
            <svg width="24" height="24" viewBox="0 0 24 24">
                <motion.line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    stroke='#ffd404'
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    animate={{
                        rotate: isOpen ? 45 : 0,
                        y: isOpen ? 6 : 0,
                        transformOrigin: "center",
                    }}
                    transition={{duration: 0.3}}
                />
                <motion.line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    stroke={'#ffd404'}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    animate={{
                        opacity: isOpen ? 0 : 1
                    }}
                    transition={{duration: 0.2}}
                />
                <motion.line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                    stroke='#ffd404'
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    animate={{
                        rotate: isOpen ? -45 : 0,
                        y: isOpen ? -6 : 0,
                        transformOrigin: "center",
                    }}
                    transition={{duration: 0.3}}
                />
            </svg>
        </IconButton>
    );
};

export default HamburgerToggle;
