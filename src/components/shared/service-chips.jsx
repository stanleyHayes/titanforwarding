import {Box, Chip, Stack} from '@mui/material';
import {motion} from "motion/react";
import {MOTION_ANIMATIONS} from "../../utils/animations.js";

const ServiceChips = ({services}) => {
    return (
        <Box>
            <Stack
                component={motion.div}
                variant={MOTION_ANIMATIONS.gridContainerVariants}
                initial="initial"
                whileInView="animate"
                exit="exit"
                direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {services.map((label, index) => (
                    <Box key={index} variant={MOTION_ANIMATIONS.gridItemsVariants} component={motion.div}>
                        <Chip
                            label={label}
                            variant="outlined"
                            color="primary"
                            sx={{mb: 1}}
                        />
                    </Box>
                ))}
            </Stack>
        </Box>
    );
};

export default ServiceChips;
