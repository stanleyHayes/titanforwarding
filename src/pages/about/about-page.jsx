import {Box, Typography} from "@mui/material";
import Layout from "../../components/layout/layout.jsx";
import banner from "../../assets/images/banner.jpg";
import Banner from "../../components/shared/banner.jsx";

const AboutPage = () => {
    return (
        <Layout>
            <Box>
                <Banner
                    title="Who We Are"
                    description="With decades of experience in global logistics, Titan Forwarding delivers reliable, efficient, and tailored shipping solutions across continents."
                    image={banner}
                />
            </Box>
        </Layout>
    )
}

export default AboutPage;