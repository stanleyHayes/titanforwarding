const drawer = {
    itemVariants: {
        initial: {opacity: 1, x: 0},
        exit: {opacity: 1, x: 0},
        animate: {opacity: 1, x: 0},
    },
    containerVariants: {
        initial: {opacity: 1, x: 0},
        exit: {opacity: 1, x: 0},
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2,
                when: "beforeChildren",
                staggerDirection: 1,
                type: "spring",
                stiffness: 150,
            }
        }
    }
}

const gridContainerVariants = {
    initial: {opacity: 0},
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.3,
            when: 'afterChildren',
            staggerDirection: -1,
        }
    },
    animate: {
        opacity: 1,
        transition: {
            type: 'spring',
            staggerChildren: 0.3,
            when: 'beforeChildren'
        }
    },
}

const gridItemsVariants = {
    initial: {opacity: 0, y: 50, scale: 0.85},
    exit: {
        opacity: 0,
        scale: 0,
        y: -50,
        transition: {
            type: 'spring',
            duration: 3
        }
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 150
        },
        whileHover: {scale: 1.02}
    },
}


const layout = {

}


export const MOTION_ANIMATIONS = {drawer, layout, gridContainerVariants, gridItemsVariants}