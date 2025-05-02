// TestimonialCarousel.jsx
import {Box} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Testimonial from "./testimonial.jsx";

const TestimonialCarousel = ({ testimonials }) => {
    return (
        <Box sx={{height:"100%"}}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                style={{ borderRadius: 0, height: "100%" }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <Testimonial testimonial={testimonial} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default TestimonialCarousel;
