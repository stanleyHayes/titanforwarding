import Layout from "../../components/layout/layout.jsx";
import {Box, Typography, Button, CardMedia} from "@mui/material";
import {useNavigate} from "react-router";
import notFoundPage from "../../assets/images/not-found.svg";

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "80vh",
                    textAlign: "center",
                    gap: 4,
                    px: 2,
                    py: 8
                }}
            >
                {/* SVG Image Placeholder */}
                <CardMedia
                    component="img"
                    src={notFoundPage}
                    alt="404 - Not Found"
                    sx={{maxWidth: 400, width: "100%"}}
                />

                <Typography variant="h3" fontWeight="bold">
                    Page Not Found
                </Typography>

                <Typography variant="body1" color="text.secondary" maxWidth={500}>
                    Oops! The page you're looking for doesn't exist or has been moved.
                    Let's get you back on track.
                </Typography>

                <Button
                    variant="outlined"
                    color="secondary"
                    size="large"
                    onClick={() => navigate("/")}
                >
                    Go to Homepage
                </Button>
            </Box>
        </Layout>
    )
}

export default NotFoundPage;
