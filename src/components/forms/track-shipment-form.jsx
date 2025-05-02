import {Box, Button, FormControl, FormHelperText, Grid, OutlinedInput, TextField, Typography,} from '@mui/material';
import image from "./../../assets/images/video-thumb.jpg";
import {useFormik} from "formik";
import * as yup from "yup";

const TrackShipmentSection = () => {


    const formik = useFormik({
        initialValues: {tracking: ""},
        validationSchema: yup.object().shape({
            tracking: yup.string().required("Field required"),
        }),
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: (values) => {
            console.log(values);
        }
    });


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

                        <Typography sx={{mb: 2, color: 'rgba(0, 0, 0, 0.85)'}} variant="body2">Tracking
                            Number</Typography>
                        <FormControl fullWidth={true} variant="outlined">
                            <OutlinedInput
                                value={formik.values.tracking}
                                placeholder="Enter tracking number"
                                name="tracking"
                                type="text"
                                required={true}
                                size="medium"
                                label="Tracking"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                error={Boolean(formik.touched.tracking && formik.errors.tracking)}
                                fullWidth={true}
                            />
                            {formik.touched.tracking && formik.errors.tracking && (
                                <FormHelperText>
                                    {formik.touched.tracking && formik.errors.tracking}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <Button
                            variant="contained"
                            fullWidth={true}
                            type="submit"
                            sx={{
                                mt: 3,
                                borderRadius: 0,
                                backgroundColor: '#1a1a1a',
                                color: '#fff',
                                fontWeight: 700,
                                height: 60,
                                '&:hover': {
                                    backgroundColor: '#000',
                                },
                            }}
                        >
                            SEARCH
                        </Button>
                    </Box>
                </form>
            </Grid>
        </Grid>
    );
};

export default TrackShipmentSection;
