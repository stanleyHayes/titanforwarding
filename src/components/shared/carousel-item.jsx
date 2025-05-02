import {Container, Stack} from "@mui/material";

const CarouselItem = ({children, image}) => {
    return (
        <Stack
            sx={{
                backgroundImage: `url(${image})`,
                width: "100%",
                maxWidth: '100vw',
                overflow: 'hidden',
                height: {
                    xs: "90vh",
                    md: '90vh',
                    lg: '90vh'
                },
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                backgroundBlendMode: "overlay",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "background.overlay"
            }}>
            <Container>
                {children}
            </Container>
        </Stack>
    )
}

export default CarouselItem;
