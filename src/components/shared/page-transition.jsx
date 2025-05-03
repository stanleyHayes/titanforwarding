import { motion } from "motion/react";

const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3, ease: "easeIn" } },
};

const PageTransitionWrapper = ({ children }) => (
    <motion.div
        initial={false}
        animate="animate"
        exit="exit"
        variants={pageVariants}
        style={{ height: '100%' }}
    >
        {children}
    </motion.div>
);

export default PageTransitionWrapper;
