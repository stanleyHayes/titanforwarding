import {Box, Container, Stack, Typography} from "@mui/material";

const Banner = ({title, description, image}) => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${image})`,
                width: "100%",
                height: {
                    xs: "60vh"
                },
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "overlay",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "background.overlay",
            }}>
            <Container maxWidth="lg">
                <Stack direction="column" spacing={2}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 700,
                            color: "white",
                            textTransform: "uppercase",
                            fontSize: {xs: 32, md: 36, lg: 40}}}>
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{color: "white", fontSize: {xs: 14, md: 20, lg: 28}}}>
                        {description}
                    </Typography>
                </Stack>
            </Container>
        </Box>
    )
}

export default Banner;
