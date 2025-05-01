import {
    Button,
    Card,
    CardContent,
    FormControl,
    FormHelperText,
    Grid,
    OutlinedInput,
    Stack,
    Typography
} from "@mui/material";
import {useFormik} from "formik";
import * as yup from "yup";

const ContactForm = () => {

    const formik = useFormik({
        initialValues: {name: "", email: "", subject: "", message: "", phone: ""},
        validationSchema: yup.object().shape({
            name: yup.string().required("Field required"),
            email: yup.string().email("Enter valid email").required("Field required"),
            subject: yup.string().required("Field required"),
            message: yup.string().required("Field required"),
            phone: yup.string().required("Field required"),
        }),
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: (values) => {

        }
    });


    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid sx={{mb: 4}} justifyContent="center" container={true} spacing={4}>
                <Grid size={{xs: 12, md: 4, lg: 4}}>
                    <Typography sx={{mb: 2}} variant="body2">Name</Typography>
                    <FormControl fullWidth={true} variant="outlined">
                        <OutlinedInput
                            value={formik.values.name}
                            placeholder="Enter name"
                            name="name"
                            type="text"
                            required={true}
                            size="medium"
                            label="Your Name"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            error={Boolean(formik.touched.name && formik.errors.name)}
                            fullWidth={true}
                        />
                        {formik.touched.name && formik.errors.name && (
                            <FormHelperText>
                                {formik.touched.name && formik.errors.name}
                            </FormHelperText>
                        )}
                    </FormControl>
                </Grid>
                <Grid size={{xs: 12, md: 4, lg: 4}}>
                    <Typography sx={{mb: 2}} variant="body2">Email</Typography>
                    <FormControl fullWidth={true} variant="outlined">
                        <OutlinedInput
                            value={formik.values.email}
                            placeholder="Enter email address"
                            name="email"
                            type="email"
                            required={true}
                            size="medium"
                            label="Email"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            error={Boolean(formik.touched.email && formik.errors.email)}
                            fullWidth={true}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <FormHelperText>
                                {formik.touched.email && formik.errors.email}
                            </FormHelperText>
                        )}
                    </FormControl>
                </Grid>
                <Grid size={{xs: 12, md: 4, lg: 4}}>
                    <Typography sx={{mb: 2}} variant="body2">Phone</Typography>
                    <FormControl fullWidth={true} variant="outlined">
                        <OutlinedInput
                            value={formik.values.phone}
                            placeholder="Enter phone number"
                            name="phone"
                            type="text"
                            required={true}
                            size="medium"
                            label="Phone number"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            error={Boolean(formik.touched.phone && formik.errors.phone)}
                            fullWidth={true}
                        />
                        {formik.touched.phone && formik.errors.phone && (
                            <FormHelperText>
                                {formik.touched.phone && formik.errors.phone}
                            </FormHelperText>
                        )}
                    </FormControl>
                </Grid>
                <Grid size={{xs: 12}}>
                    <Typography sx={{mb: 2}} variant="body2">Message</Typography>
                    <FormControl fullWidth={true} variant="outlined">
                        <OutlinedInput
                            value={formik.values.message}
                            placeholder="Your message"
                            name="message"
                            type="text"
                            required={true}
                            size="medium"
                            label="Message"
                            multiline={true}
                            minRows={5}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            error={Boolean(formik.touched.message && formik.errors.message)}
                            fullWidth={true}
                        />
                        {formik.touched.message && formik.errors.message && (
                            <FormHelperText>
                                {formik.touched.message && formik.errors.message}
                            </FormHelperText>
                        )}
                    </FormControl>
                </Grid>
            </Grid>
            <Grid justifyContent="center" container={true}>
                <Grid size={{xs: 12, md: 3}}>
                    <Button
                        sx={{color: 'rgba(0, 0, 0, 0.85)', py: 1.5}}
                        size="large"
                        disableElevation={true}
                        fullWidth={true}
                        variant="contained"
                        color="secondary">
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default ContactForm;