import {Avatar, Box, Card, Typography,} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import {motion} from "framer-motion";
import {useState} from "react";
import {useNavigate} from "react-router";

const BlogPost = ({post}) => {
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();
    return (
        <Card
            component={motion.div}
            elevation={0}
            variant="outlined"
            sx={{
                borderRadius: 0,
                overflow: "hidden",
                backgroundColor: "background.default",
                transition: "all 0.3s ease-in-out",
                height: "100%",
            }}
        >
            <Box
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                sx={{position: "relative", cursor: 'pointer', overflow: 'hidden'}}>
                <motion.img
                    whileHover={{
                        scale: 1.2,
                        transition: {
                            duration: 0.5
                        }
                    }}
                    onClick={() => navigate(`/posts/${post.id}`)}
                    component="img"
                    src={post.image}
                    alt={post.title}
                    style={{height: 240, objectFit: "cover", borderRadius: 1, width: '100%'}}
                />

                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={hovered ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.5}}
                    transition={{duration: 0.3}}
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        pointerEvents: "none",
                    }}>
                    <Box
                        sx={{
                            width: 48,
                            height: 48,
                            borderRadius: "50%",
                            backgroundColor: "#3b82f6",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                            pointerEvents: "auto",
                        }}
                    >
                        <LaunchIcon/>
                    </Box>
                </motion.div>
            </Box>

            <Box px={2.5} pt={2} pb={3}>
                <Typography variant="caption" sx={{color: "secondary.main", mb: 1, fontWeight: 700}}>
                    {post.tag}
                </Typography>

                <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    sx={{mt: 0.5}}
                >
                    {post.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" mb={2}>
                    {post.excerpt}
                </Typography>

                <Box display="flex" alignItems="center" gap={1}>
                    <Avatar src={post.author.avatar} alt={post.author.name} sx={{width: 32, height: 32}}/>
                    <Box>
                        <Typography variant="body2" fontWeight={600}>
                            {post.author.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            {post.date}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Card>
    );
};

export default BlogPost;
