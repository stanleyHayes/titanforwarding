import {Avatar, Box, CardMedia, Link as MuiLink, Stack, Typography,} from "@mui/material";
import {motion} from "framer-motion";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const RegularBlogPost = ({post}) => {
    return (
        <Box
            component={motion.div}
            whileHover={{scale: 1.02}}
            transition={{type: "spring", stiffness: 300}}
            sx={{
                borderRadius: 1,
                p: 2,
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexDirection: {xs: "column", sm: "row"},
                cursor: "pointer",
                backgroundColor: "background.paper"
            }}
        >
            {/* Image Section */}
            <CardMedia
                component="img"
                src={post.image}
                alt={post.title}
                sx={{
                    width: {xs: '100%', md: 160},
                    height: {xs: 250, md: 120},
                    borderRadius: 0.5,
                    objectFit: "cover",
                }}
            />

            {/* Text Section */}
            <Box flex={1}>
                {/* Author & Date */}
                <Stack direction="row" justifyContent="flex-start" alignItems="center" gap={1} mb={0.5}>
                    <Avatar src={post.author.avatar} sx={{width: 24, height: 24}}/>
                    <Typography variant="caption" color="text.primary">
                        {post.author.name}
                    </Typography>
                    <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{fontSize: "0.75rem"}}
                    >
                        • {post.date}
                    </Typography>
                </Stack>

                {/* Title */}
                <Typography variant="subtitle1" fontWeight={700} gutterBottom={true}>
                    {post.title}
                </Typography>

                {/* Excerpt */}
                <Typography variant="body2" color="text.secondary" gutterBottom={true}>
                    {post.excerpt}
                </Typography>

                {/* Learn More */}
                <MuiLink
                    underline="hover"
                    color="secondary"
                    fontWeight={600}
                    display="inline-flex"
                    alignItems="center"
                    sx={{mt: 1}}
                >
                    Learn More <ArrowRightAltIcon fontSize="small" sx={{ml: 0.5}}/>
                </MuiLink>
            </Box>
        </Box>
    );
};

export default RegularBlogPost;
