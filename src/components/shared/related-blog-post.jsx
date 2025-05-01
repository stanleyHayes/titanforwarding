import { Box, Typography, IconButton, Chip } from "@mui/material";
import { motion } from "framer-motion";
import LaunchIcon from "@mui/icons-material/Launch";

const RelatedBlogPost = ({ post }) => {
    return (
        <Box
            component={motion.div}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 250 }}
            sx={{
                position: "relative",
                height: 360,
                borderRadius: 1,
                overflow: "hidden",
                cursor: "pointer",
                backgroundImage: `url(${post.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
            }}
        >
            {/* Date badge */}
            <Chip
                label={post.date}
                size="small"
                sx={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    color: "text.primary",
                    fontWeight: 500,
                }}
                icon={
                    <Box
                        sx={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            backgroundColor: "#1d4ed8",
                            mr: 1,
                        }}
                    />
                }
            />

            {/* Overlay with title and icon */}
            <Box
                sx={{
                    background:
                        "linear-gradient(to top, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0) 100%)",
                    color: "#fff",
                    px: 2,
                    py: 3,
                }}
            >
                <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>
                    {post.title}
                </Typography>

                <IconButton
                    sx={{
                        backgroundColor: "#3b82f6",
                        color: "#fff",
                        width: 40,
                        height: 40,
                        "&:hover": {
                            backgroundColor: "#2563eb",
                        },
                    }}
                >
                    <LaunchIcon fontSize="small" />
                </IconButton>
            </Box>
        </Box>
    );
};

export default RelatedBlogPost;
