import {Box, Container} from "@mui/material";
import {motion} from "framer-motion";

const SplitContent = ({image, content, reversed}) => {
    return (
        <Box
            component={motion.div}
            whileInView={{
                opacity: 1
            }}
            initial={{
                opacity: 0
            }}
            exit={{
                opacity: 0
            }}
            sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: {xs: "column", md: "row"}
            }}>
            <Box
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 0.5,
                        delay: 0.3
                    }
                }}
                initial={{
                    opacity: 0,
                    x: -50
                }}
                exit={{
                    opacity: 0,
                    x: -50
                }}
                component={motion.div}
                sx={{flexGrow: 1, order: {xs: 0, md: reversed ? 1 : 0}, width: "100%", overflow: 'hidden'}}>
                {image}
            </Box>
            <Box
                component={motion.div}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 0.5,
                        delay: 0.3
                    }
                }}
                initial={{
                    opacity: 0,
                    x: 50
                }}
                exit={{
                    opacity: 0,
                    x: 50
                }}
                sx={{flexGrow: 1, order: {xs: 1, md: reversed ? 0 : 1}, width: "100%", py: {xs: 4, md: 0}}}>
                <Container>
                    {content}
                </Container>
            </Box>
        </Box>
    )
}

export default SplitContent;
