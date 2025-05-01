import {Avatar, Box, Grid, Typography,} from "@mui/material";
import {motion} from "framer-motion";

const FeaturedBlogPost = ({ post }) => {
    return (
        <Grid container spacing={4} alignItems="center">
            {/* Image Section */}
            <Grid size={{ xs: 12, md: 6 }}>
                <Box
                    component={motion.div}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    sx={{
                        overflow: "hidden",
                        borderRadius: 1,
                        position: "relative",
                    }}
                >
                    <Box
                        component="img"
                        src={post.image}
                        alt={post.title}
                        sx={{
                            width: "100%",
                            height: "100%",
                            maxHeight: 400,
                            objectFit: "cover",
                            transition: "all 0.3s ease-in-out",
                            filter: "brightness(100%)",
                            "&:hover": {
                                filter: "brightness(90%)",
                            },
                        }}
                    />
                </Box>
            </Grid>

            {/* Content Section */}
            <Grid size={{ xs: 12, md: 6 }}>
                <Box>
                    <Typography
                        variant="caption"
                        color="secondary"
                        fontWeight={600}
                        gutterBottom
                    >
                        {post.tag}
                    </Typography>

                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{ mb: 2, fontSize: { xs: "1.5rem", md: "2rem" } }}
                    >
                        {post.title}
                    </Typography>

                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        {post.excerpt}
                    </Typography>

                    <Box display="flex" alignItems="center" gap={1.5}>
                        <Avatar src={post.author.avatar} alt={post.author.name} />
                        <Box>
                            <Typography fontWeight={600}>{post.author.name}</Typography>
                            <Typography variant="caption" color="text.secondary">
                                {post.date}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default FeaturedBlogPost;
