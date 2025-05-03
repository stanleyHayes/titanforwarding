import {Box, Button, FormControl, FormHelperText, Grid, OutlinedInput, TextField, Typography,} from '@mui/material';
import image from "./../../assets/images/video-thumb.jpg";
import {useFormik} from "formik";
import * as yup from "yup";
import {useNavigate} from "react-router";
import {selectTracking, TRACKING_ACTION_CREATORS} from "../../redux/features/tracking/tracking-slice.js";
import {useDispatch, useSelector} from "react-redux";

const TrackShipmentSection = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {tracking: ""},
        validationSchema: yup.object().shape({
            tracking: yup.string().required("Field required"),
        }),
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: (values) => {
            dispatch(TRACKING_ACTION_CREATORS.trackShipment({trackingID: values.tracking}));
            navigate(`/tracking/?tracking_number=${values.tracking}`);
        }
    });

    const {loading} = useSelector(selectTracking);

    return (
        <Grid container sx={{minHeight: 400}}>
            {/* Left image */}
            <Grid size={{xs: 12, md: 6}}>
                <Box
                    sx={{
                        height: '100%',
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            left: 16,
                            bottom: 16,
                            width: 0,
                            height: 0,
                            borderTop: '30px solid transparent',
                            borderBottom: '30px solid transparent',
                            borderLeft: '30px solid white',
                        }}
                    />
                </Box>
            </Grid>

            {/* Right form */}
            <Grid
                size={{xs: 12, md: 6}}
                sx={{
                    position: 'relative',
                    backgroundColor: '#FFD400',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    clipPath: {
                        xs: 'none',
                        md: 'polygon(0 0, 100% 0, 100% 100%, 10% 100%)',
                    },
                    px: 4,
                }}
            >
                <form onSubmit={formik.handleSubmit}>
                    <Box maxWidth={400} width="100%">
                        <Typography
                            variant="h4"
                            fontWeight={800}
                            gutterBottom={true}
                            sx={{color: 'rgba(0, 0, 0, 0.95)'}}>
                            Track your shipment
                        </Typography>

                        <Typography sx={{mb: 2, color: 'rgba(0, 0, 0, 0.85)'}} variant="body2">
                            Tracking Number
                        </Typography>

                        <FormControl fullWidth variant="outlined">
                            <OutlinedInput
                                value={formik.values.tracking}
                                placeholder="Enter tracking number"
                                name="tracking"
                                type="text"
                                required
                                size="medium"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                error={Boolean(formik.touched.tracking && formik.errors.tracking)}
                                fullWidth
                                sx={{
                                    color: 'rgba(0, 0, 0, 0.9)', // Text color
                                    '&::placeholder': {
                                        color: 'rgba(0, 0, 0, 0.7)',
                                        opacity: 1,
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgba(0, 0, 0, 0.6)',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgba(0, 0, 0, 0.8)',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgba(0, 0, 0, 0.85)',
                                    },
                                }}
                                inputProps={{
                                    style: {
                                        color: 'rgba(0, 0, 0, 0.9)',
                                    },
                                }}
                            />
                            {formik.touched.tracking && formik.errors.tracking && (
                                <FormHelperText error>
                                    {formik.errors.tracking}
                                </FormHelperText>
                            )}
                        </FormControl>


                        <Button
                            variant="contained"
                            fullWidth={true}
                            disabled={loading}
                            type="submit"
                            sx={{
                                mt: 3,
                                backgroundColor: '#1a1a1a',
                                color: '#fff',
                                fontWeight: 700,
                                height: 60,
                                '&:hover': {
                                    backgroundColor: '#000',
                                },
                            }}
                        >
                            {loading ? 'Tracking...' : 'Search'}
                        </Button>
                    </Box>
                </form>
            </Grid>
        </Grid>
    );
};

export default TrackShipmentSection;
