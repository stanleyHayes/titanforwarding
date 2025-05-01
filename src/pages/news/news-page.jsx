import Layout from "../../components/layout/layout";
import {
    Alert,
    AlertTitle,
    Box,
    Button,
    Container,
    Divider,
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    LinearProgress,
    OutlinedInput,
    Pagination,
    Stack,
    Typography
} from "@mui/material";
import banner from "../../assets/images/banner.jpg";
import Banner from "../../components/shared/banner";
import {AddShoppingCartOutlined} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {selectNews} from "../../redux/features/news/news-slice.js";
import {AnimatePresence, motion} from "motion/react";
import Empty from "../../components/shared/empty";
import {useNavigate} from "react-router";
import CategoryTagsBox from "../../components/shared/categories-tags-box";
import SidebarBlogPost from "../../components/shared/sidebar-blog-post";
import RegularBlogPost from "../../components/shared/regular-blog-post";
import FeaturedBlogPostCarousel from "../../components/shared/featured-blog-post-carousel";
import {useFormik} from "formik";
import * as Yup from "yup";
import {MOTION_ANIMATIONS} from "../../utils/animations.js";
import {TITAN_FORWARDING_DATA} from "../../utils/data.js";


const NewsPage = () => {
    const formik = useFormik({
        initialValues: {
            query: ''
        },
        validateOnChange: true,
        validateOnBlur: true,
        validationSchema: Yup.object().shape({
            query: Yup.string().required('Name is required')
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    });

    const {news, error, loading} = useSelector(selectNews);
    const navigate = useNavigate();


    return (
        <Layout>
            <Box>
                {loading && <LinearProgress variant="indeterminate" color="secondary"/>}
                <Banner
                    description="Stay informed with the latest developments in logistics, shipping technology, and global supply chain trends."
                    image={banner}
                    title="Industry Insights & Updates"
                />
                <Box sx={{backgroundColor: "background.default", py: 8}}>
                    <Container maxWidth="lg">
                        <AnimatePresence mode="wait">
                            {error && (
                                <Alert
                                    initial={{
                                        opacity: 0,
                                        y: 50,
                                        transition: {
                                            duration: 0.5
                                        }
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: -50,
                                        transition: {
                                            duration: 0.5
                                        }
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.5
                                        }
                                    }}
                                    component={motion.div}
                                    sx={{mb: 4}}
                                    severity="error"
                                    variant="standard">
                                    <AlertTitle>{error}</AlertTitle>
                                </Alert>
                            )}
                        </AnimatePresence>

                        <Grid container={true} spacing={4}>
                            {/* Main Content */}
                            <Grid size={{xs: 12, md: 8}}>
                                {/* Featured Carousel */}
                                <FeaturedBlogPostCarousel posts={news.featured}/>

                                {/* Regular Blog Posts */}
                                <Box mt={5}>
                                    <Typography variant="h5" fontWeight={700} mb={3}>
                                        Latest Post
                                    </Typography>
                                    {news?.latest?.length > 0 && news?.latest?.map((post, idx) => (
                                        <Stack
                                            divider={<Divider variant="fullWidth" sx={{my: 1}}/>}
                                            variants={MOTION_ANIMATIONS.gridContainerVariants}
                                            initial="initial"
                                            whileInView="animate"
                                            exit="exit"
                                            component={motion.div}
                                            direciton="column"
                                            key={idx}
                                            spacing={2}>
                                            <Box
                                                key={idx}
                                                variants={MOTION_ANIMATIONS.gridItemsVariants}
                                                component={motion.div}>
                                                <RegularBlogPost post={post}/>
                                                {news?.latest?.length - 1 > idx && (
                                                    <Divider
                                                        variant="middle" sx={{
                                                        my: 1,
                                                        backgroundColor: "border.default",
                                                        color: "border.default"
                                                    }}/>
                                                )}
                                            </Box>
                                        </Stack>
                                    ))}

                                    {news?.latest?.length === 0 && (
                                        <Empty
                                            title="Our Stories Are Loading..."
                                            description="Hold tight — the StayUp news is getting ready to drop some gems."
                                            action={
                                                <Stack sx={{width: "100%"}} direction="row" justifyContent="center">
                                                    <Button
                                                        variant="outlined"
                                                        onClick={() => navigate('/shop')}
                                                        startIcon={
                                                            <AddShoppingCartOutlined
                                                                sx={{
                                                                    fontSize: 32,
                                                                    borderColor: 'border.secondary',
                                                                    backgroundColor: 'light.secondary',
                                                                    cursor: 'pointer',
                                                                    color: 'icon.secondary',
                                                                    borderStyle: 'solid'
                                                                }}
                                                            />
                                                        }
                                                        sx={{color: 'rgba(0, 0, 0, 0.85)'}}
                                                        color="secondary"
                                                        size="small">
                                                        Go Shopping
                                                    </Button>
                                                </Stack>
                                            }
                                        />
                                    )}
                                </Box>

                                {/* Pagination */}
                                <Box display="flex" justifyContent="center" mt={5}>
                                    <Pagination count={5} shape="rounded" color="secondary"/>
                                </Box>
                            </Grid>
                            {/* Right Sidebar */}
                            <Grid size={{xs: 12, md: 4}}>
                                <FormControl sx={{mb: 1}} fullWidth={true} variant="outlined">
                                    <InputLabel htmlFor="query" sx={{}}>Search</InputLabel>
                                    <OutlinedInput
                                        sx={{
                                            borderRadius: 0.25,
                                            '& fieldset': {
                                                borderRadius: 0.25,
                                            }
                                        }}
                                        value={formik.values.query}
                                        placeholder="Search"
                                        query="query"
                                        id="query"
                                        type="text"
                                        required={true}
                                        size="medium"
                                        label="Name"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        error={Boolean(formik.touched.query && formik.errors.query)}
                                        fullWidth={true}
                                    />
                                    {formik.touched.query && formik.errors.query && (
                                        <FormHelperText>
                                            <Typography color="error" sx={{fontSize: 12}}>
                                                {formik.errors.query}
                                            </Typography>
                                        </FormHelperText>
                                    )}
                                </FormControl>
                                <Button
                                    fullWidth={true}
                                    variant="contained"
                                    color="secondary"
                                    sx={{color: 'rgba(0, 0, 0, 0.85)', mb: 4}}>
                                    Search
                                </Button>
                                <CategoryTagsBox tags={TITAN_FORWARDING_DATA.tags}/>
                                <Box mt={4}>
                                    <Typography fontWeight={700} mb={2}>
                                        Popular Blog
                                    </Typography>
                                    <Box>
                                        {news?.popular?.length > 0 && news?.popular?.map((post, idx) => (
                                            <Grid
                                                variants={MOTION_ANIMATIONS.gridContainerVariants}
                                                initial="initial"
                                                whileInView="animate"
                                                exit="exit"
                                                component={motion.div}
                                                container={true}
                                                direction="column"
                                                key={idx}
                                                spacing={2}>
                                                <Grid
                                                    key={idx}
                                                    variants={MOTION_ANIMATIONS.gridItemsVariants}
                                                    component={motion.div}
                                                    size={{xs: 12}}>
                                                    <SidebarBlogPost post={post}/>
                                                    {news?.popular?.length - 1 > idx && (
                                                        <Divider
                                                            variant="middle" sx={{
                                                            my: 1,
                                                            backgroundColor: "border.default",
                                                            color: "border.default"
                                                        }}/>
                                                    )}
                                                </Grid>
                                            </Grid>
                                        ))}
                                    </Box>
                                    {news?.popular?.length === 0 && (
                                        <Empty
                                            title="Our Stories Are Loading..."
                                            description="Hold tight — the StayUp news is getting ready to drop some gems."
                                            action={null}
                                        />
                                    )}
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </Layout>
    );
};

export default NewsPage;
