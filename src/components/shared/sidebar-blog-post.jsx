import {Box, Card, CardContent, Grid, Stack, Typography} from "@mui/material";
import {motion} from "framer-motion";

const SidebarBlogPost = ({post}) => {
    return (
        <Card
            component={motion.div}
            whileHover={{scale: 1.02}}
            transition={{type: "spring", stiffness: 250}}
            elevation={0}
            variant="contained"
            sx={{
                borderRadius: 1,
                boxShadow: "none",
                cursor: "pointer",
                backgroundColor: 'background.paper',
                "&:hover .blog-thumb": {
                    filter: "brightness(10.1)",
                },
            }}
        >
            <CardContent sx={{height: '100%'}}>
                <Stack sx={{height: '100%'}} direction="row" spacing={2}>
                    <Grid container={true} spacing={2}>
                        <Grid size={{xs: 4}}>
                            <Box sx={{overflow: 'hidden', width: '100%', height: '100%'}}>
                                <motion.img
                                    whileHover={{scale: 1.02}}
                                    src={post.image}
                                    alt={post.title}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: 8,
                                        objectFit: "cover",
                                        transition: "filter 0.3s ease"
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid size={{xs: 8}}>
                            <Stack direction="column" spacing={1}>
                                <Typography
                                    variant="subtitle2"
                                    fontWeight={600}
                                    lineHeight={1.4}
                                    sx={{color: 'text.primary'}}
                                >
                                    {post.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {post.excerpt}
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default SidebarBlogPost;
