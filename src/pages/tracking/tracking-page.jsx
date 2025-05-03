import {useEffect} from "react";
import {
    Alert,
    AlertTitle,
    Box,
    Button,
    Container,
    Divider,
    Grid,
    IconButton,
    InputAdornment,
    LinearProgress,
    OutlinedInput,
    Step,
    StepLabel,
    Stepper,
    Typography
} from "@mui/material";
import {Search, TrackChanges} from "@mui/icons-material";
import {useLocation, useNavigate} from "react-router";
import Layout from "../../components/layout/layout.jsx";
import Banner from "../../components/shared/banner.jsx";
import banner from "../../assets/images/banner.jpg";
import {useDispatch, useSelector} from "react-redux";
import {selectTracking, TRACKING_ACTION_CREATORS} from "../../redux/features/tracking/tracking-slice.js";
import {useFormik} from "formik";
import * as Yup from "yup";
import {motion} from "motion/react";

const validationSchema = Yup.object({
    tracking_number: Yup.string()
        .matches(/^TRK-\w+$/, "Tracking number must start with TRK-")
        .required("Tracking number is required")
});

const TrackingPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {loading, error, shipment} = useSelector(selectTracking);

    const query = new URLSearchParams(location.search);
    const trackingNumber = query.get("tracking_number");

    const formik = useFormik({
        initialValues: {
            tracking_number: trackingNumber || ""
        },
        enableReinitialize: true,
        validationSchema,
        onSubmit: (values) => {
            const clean = values.tracking_number.trim();
            if (clean) {
                navigate(`/tracking?tracking_number=${clean}`);
            }
        }
    });

    useEffect(() => {
        if (trackingNumber) {
            dispatch(TRACKING_ACTION_CREATORS.trackShipment({trackingID: trackingNumber}));
        }
    }, [dispatch, trackingNumber]);

    const nothingEntered =
        !formik.values.tracking_number && !trackingNumber && !loading && !shipment;

    return (
        <Layout>
            {loading && <LinearProgress variant="query" color="secondary"/>}
            <Banner
                title="Track Your Shipment"
                description="Enter your tracking number to get real-time updates on your cargo's location, estimated delivery time, and transit checkpoints."
                image={banner}
            />
            {loading && <LinearProgress variant="query" color="secondary"/>}
            <Box sx={{py: 8}}>
                <Container>
                    {error && (
                        <Alert variant="outlined" severity="error" sx={{mb: 4}}>
                            <AlertTitle>Error</AlertTitle>
                            <Typography variant="body1" color="error">{error}</Typography>
                        </Alert>
                    )}

                    <motion.div
                        initial={{opacity: 0, y: 40}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}>
                        <form
                            onSubmit={formik.handleSubmit}>
                            <Grid container={true} spacing={2}>
                                <Grid size={{xs: 12, md: 8}}>
                                    <OutlinedInput
                                        fullWidth={true}
                                        size="medium"
                                        placeholder="Enter tracking number"
                                        name="tracking_number"
                                        value={formik.values.tracking_number}
                                        onChange={formik.handleChange}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                e.preventDefault();
                                                formik.handleSubmit();
                                            }
                                        }}
                                        error={formik.touched.tracking_number && Boolean(formik.errors.tracking_number)}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton type="submit">
                                                    <Search/>
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        sx={{mb: 1}}
                                    />

                                    {formik.touched.tracking_number && formik.errors.tracking_number && (
                                        <Typography variant="caption" color="error" sx={{mb: 2}}>
                                            {formik.errors.tracking_number}
                                        </Typography>
                                    )}

                                </Grid>
                                <Grid size={{xs: 12, md: 4}}>
                                    <Button
                                        sx={{py: 1.5}}
                                        type="submit"
                                        fullWidth={true}
                                        disabled={loading || !formik.values.tracking_number}
                                        size="large"
                                        variant="outlined"
                                        color="secondary"
                                        startIcon={<TrackChanges/>}
                                    >
                                        {loading ? 'Tracking...' : 'Track Shipment'}
                                    </Button>
                                </Grid>
                            </Grid>

                            {nothingEntered && (
                                <Typography align="center" color="text.secondary" sx={{mt: 4}}>
                                    Enter your tracking number above to get started.
                                </Typography>
                            )}
                        </form>
                    </motion.div>

                    {shipment && (
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.2}}
                        >
                            <Divider sx={{my: 4}}/>

                            <Typography variant="h5" sx={{mb: 4}}>
                                Shipment Summary
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid size={{xs: 12, md: 6}}>
                                    <Typography fontWeight={700} variant="subtitle2">Shipment ID:</Typography>
                                    <Typography>{shipment.shipment_id}</Typography>
                                    <Typography fontWeight={700} variant="subtitle2" sx={{mt: 2}}>
                                        Dispatch Date:
                                    </Typography>
                                    <Typography>{new Date(shipment.dispatch_date).toLocaleDateString()}</Typography>
                                    <Typography fontWeight={700} variant="subtitle2" sx={{mt: 2}}>Mode of
                                        Transport:
                                    </Typography>
                                    <Typography>{shipment.mode_of_transport}</Typography>
                                    <Typography fontWeight={700} variant="subtitle2" sx={{mt: 2}}>Courier
                                        Company:</Typography>
                                    <Typography>{shipment.courier_company}</Typography>
                                </Grid>

                                <Grid size={{xs: 12, md: 6}}>
                                    <Typography fontWeight={700} variant="subtitle2">Total Value:</Typography>
                                    <Typography>${shipment.shipment_value_usd.toLocaleString()}</Typography>
                                    <Typography fontWeight={700} variant="subtitle2" sx={{mt: 2}}>
                                        Total Cost:
                                    </Typography>
                                    <Typography>${shipment.total_cost_usd.toLocaleString()}</Typography>
                                </Grid>
                            </Grid>

                            <Divider sx={{my: 4}}/>
                            <Typography variant="h6" sx={{mb: 2}}>Sender & Recipient</Typography>
                            <Grid container spacing={2}>
                                <Grid size={{xs: 12, md: 6}}>
                                    <Typography
                                        fontWeight={700}
                                        sx={{mb: 1}}
                                        variant="subtitle2">
                                        Sender:
                                    </Typography>
                                    <Typography>{shipment.sender.name}</Typography>
                                    <Typography>{shipment.sender.address}</Typography>
                                    <Typography>{shipment.sender.contact}</Typography>
                                </Grid>
                                <Grid size={{xs: 12, md: 6}}>
                                    <Typography
                                        fontWeight={700}
                                        sx={{mb: 1}}
                                        variant="subtitle2">Recipient:</Typography>
                                    <Typography>{shipment.recipient.name}</Typography>
                                    <Typography>{shipment.recipient.address}</Typography>
                                    <Typography>{shipment.recipient.contact}</Typography>
                                </Grid>
                            </Grid>

                            <Divider sx={{my: 4}}/>
                            <Typography fontWeight={700} variant="h6">Shipment Items</Typography>
                            {shipment.shipment_items.map((item, i) => (
                                <Box key={i} sx={{mb: 2}}>
                                    <Typography><strong>{item.item_description}</strong> ({item.category})</Typography>
                                    <Typography>
                                        <Typography
                                            display="inline"
                                            fontWeight={700}
                                            component="span"
                                            variant="body2">
                                            Qty:
                                        </Typography> {item.quantity} | Weight: {item.weight_kg}kg</Typography>
                                    <Typography>Declared Value: ${item.declared_value_usd} |
                                        Serials: {item.item_serials}</Typography>
                                </Box>
                            ))}

                            <Divider sx={{my: 4}}/>

                            <Typography fontWeight={700} variant="h6" sx={{mb: 2}}>Insurance</Typography>
                            <Typography>
                                <Typography
                                    display="inline"
                                    fontWeight={700}
                                    component="span"
                                    variant="body2">
                                    Policy #
                                </Typography>
                                : {shipment.insurance.policy_number}
                            </Typography>
                            <Typography>
                                <Typography
                                    display="inline"
                                    fontWeight={700}
                                    component="span"
                                    variant="body2">
                                    Insurer:
                                </Typography>
                                {shipment.insurance.insurer}
                            </Typography>
                            <Typography variant="body2" sx={{mb: 1, fontWeight: 700}}>
                                <Typography
                                    display="inline"
                                    fontWeight={700}
                                    component="span"
                                    variant="body2">
                                    Coverage
                                </Typography>:
                                ${shipment.insurance.coverage_usd}
                            </Typography>

                            <Divider sx={{my: 4}}/>

                            <Typography fontWeight={700} variant="h6" sx={{mb: 2}}>Documentation</Typography>
                            {Object.entries(shipment.documentation).map(([key, value]) => (
                                <Typography key={key}>
                                    {key.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase())}: {value}
                                </Typography>
                            ))}

                            <Divider sx={{my: 4}}/>
                            <Typography variant="h5" sx={{mb: 2}}>
                                Tracking Progress
                            </Typography>
                            <Stepper
                                orientation="vertical"
                                activeStep={shipment.tracking_logs.findIndex(s => s.is_current_step)}>
                                {shipment.tracking_logs.map((step, index) => (
                                    <Step color="secondary" key={index} completed={step.status === "completed"}>
                                        <StepLabel color="secondary">
                                            <Typography fontWeight="bold">
                                                {step.step_name} — {step.status}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {step.description}
                                            </Typography>
                                            {step.timestamp && (
                                                <Typography variant="caption">
                                                    {new Date(step.timestamp).toLocaleString()} — {step.location}
                                                    {step.officer_or_system && ` (${step.officer_or_system})`}
                                                </Typography>
                                            )}
                                        </StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </motion.div>
                    )}
                </Container>
            </Box>
        </Layout>
    );
};

export default TrackingPage;
