// FeaturedBlogPostCarousel.jsx
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FeaturedBlogPost from "./featured-blog-post";

const FeaturedBlogPostCarousel = ({ posts }) => {
    return (
        <Box>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                style={{ borderRadius: 16 }}
            >
                {posts.map((post, index) => (
                    <SwiperSlide key={index}>
                        <FeaturedBlogPost post={post} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default FeaturedBlogPostCarousel;
