import Layout from "../../components/layout/layout.jsx";
import {Box, Container, Typography} from "@mui/material";
import banner from "../../assets/images/banner.jpg";
import Banner from "../../components/shared/banner.jsx";

const TermsPage = () => {

    return (
        <Layout>
            <Banner
                title="Terms of Service"
                description="Please read our terms carefully before using Titan Forwarding. By using our services, you agree to be bound by these conditions."
                image={banner}
            />

            <Box sx={{py: 8}}>
                <Container maxWidth="md">

                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        1. Acceptance of Terms
                    </Typography>
                    <Typography>
                        By accessing Titan Forwarding’s services, you agree to comply with and be legally bound by the
                        terms and conditions outlined on this page.
                    </Typography>

                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        2. Use of Services
                    </Typography>
                    <Typography>
                        Our platform may only be used for lawful purposes. Unlawful shipping, fraudulent tracking, or
                        abuse of our system is strictly prohibited.
                    </Typography>

                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        3. Account Responsibility
                    </Typography>
                    <Typography>
                        You are responsible for maintaining the confidentiality of your account credentials and for all
                        activities under your account.
                    </Typography>

                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        4. Modifications
                    </Typography>
                    <Typography>
                        Titan Forwarding reserves the right to modify these terms at any time. Your continued use of the
                        service after updates constitutes your agreement to the new terms.
                    </Typography>

                </Container>
            </Box>
        </Layout>
    );
};

export default TermsPage;
