import {Box, Typography} from "@mui/material";
import Layout from "../../components/layout/layout.jsx";
import Banner from "../../components/shared/banner.jsx";
import banner from "../../assets/images/banner.jpg";

const TrackingPage = () => {
    return (
        <Layout>
            <Box>
                <Banner
                    title="Track Your Shipment"
                    description="Enter your tracking number to get real-time updates on your cargo's location, estimated delivery time, and transit checkpoints."
                    image={banner}
                />
            </Box>
            <Box>
                <Typography variant="h3" align="center">Tracking Page</Typography>
            </Box>
        </Layout>
    )
}

export default TrackingPage;