import Layout from "../../components/layout/layout.jsx";
import {Box, Container, Typography} from "@mui/material";
import banner from "../../assets/images/banner.jpg";
import Banner from "../../components/shared/banner.jsx"; // Replace with your privacy banner image

const PrivacyPage = () => {

    return (
        <Layout>
            <Banner
                title="Privacy Policy"
                description="Your privacy is important to us. Learn how Titan Forwarding collects, protects, and uses your personal information."
                image={banner}
            />

            <Box sx={{py: 8}}>
                <Container maxWidth="md">

                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        1. Information We Collect
                    </Typography>
                    <Typography>
                        We collect personal information including your name, email, address, and shipment data to
                        provide logistics and tracking services.
                    </Typography>

                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        2. How We Use Your Data
                    </Typography>
                    <Typography>
                        Your information is used to fulfill shipping, tracking, and customer support functions. We do
                        not sell your data to third parties.
                    </Typography>

                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        3. Data Security
                    </Typography>
                    <Typography>
                        We use encryption and secure systems to protect your data. Only authorized personnel may access
                        user information.
                    </Typography>

                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        4. Your Rights
                    </Typography>
                    <Typography>
                        You can request to view, update, or delete your personal data at any time by contacting our
                        support team.
                    </Typography>

                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        5. Contact
                    </Typography>
                    <Typography>
                        For privacy concerns, email us at privacy@titanforwarding.com.
                    </Typography>

                </Container>
            </Box>
        </Layout>
    );
};

export default PrivacyPage;
