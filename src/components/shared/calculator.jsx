import {
    Box,
    Card,
    Grid,
    Typography,
    ToggleButton,
    ToggleButtonGroup,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    Button,
} from '@mui/material';
import {useFormik} from 'formik';
import {useState} from 'react';

const Calculator = () => {
    const [price, setPrice] = useState(0);

    const formik = useFormik({
        initialValues: {
            distance: '',
            destination: '',
            width: '',
            height: '',
            weight: '',
            fragile: false,
            express: false,
            insurance: false,
            packaging: false,
        },
        onSubmit: (values) => {
            const base = 5000;
            const cost =
                base +
                (Number(values.distance) || 0) * 5 +
                (values.fragile ? 15 : 0) +
                (values.express ? 200 : 0) +
                (values.insurance ? 150 : 0) +
                (values.packaging ? 50 : 0);
            setPrice(cost);
        },
    });

    return (
        <Card variant="outlined" sx={{p: 4, borderRadius: 2}}>
            <form onSubmit={formik.handleSubmit}>
                <Grid container={true} spacing={2}>
                    {/* Distance Select */}
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography sx={{mb: 1}} variant="body2">Distance</Typography>
                        <FormControl fullWidth={true}>
                            <InputLabel>Distance</InputLabel>
                            <Select
                                name="distance"
                                value={formik.values.distance}
                                onChange={formik.handleChange}
                                input={<OutlinedInput label="Distance"/>}
                                variant="outlined">
                                <MenuItem value={10}>10 km</MenuItem>
                                <MenuItem value={50}>50 km</MenuItem>
                                <MenuItem value={100}>100 km</MenuItem>
                                <MenuItem value={200}>200+ km</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* Destination */}
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography sx={{mb: 1}} variant="body2">Destination</Typography>
                        <FormControl fullWidth={true}>
                            <InputLabel>Destination</InputLabel>
                            <OutlinedInput
                                label="Destination"
                                name="destination"
                                value={formik.values.destination}
                                onChange={formik.handleChange}
                                required={true}
                                placeholder="Destination"
                            />
                        </FormControl>
                    </Grid>

                    {/* Width, Height, Weight */}
                    <Grid size={{xs: 12, md: 3}}>
                        <Typography sx={{mb: 1}} variant="body2">Width</Typography>
                        <FormControl fullWidth>
                            <InputLabel>Width (cm)</InputLabel>
                            <OutlinedInput
                                label="Width (cm)"
                                name="width"
                                type="number"
                                value={formik.values.width}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required={true}
                                placeholder="Width (cm)"
                            />
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 3}}>
                        <Typography sx={{mb: 1}} variant="body2">Height</Typography>
                        <FormControl fullWidth>
                            <InputLabel>Height (cm)</InputLabel>
                            <OutlinedInput
                                label="Height (cm)"
                                name="height"
                                type="number"
                                value={formik.values.height}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required={true}
                                placeholder="Height (cm)"
                            />
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 3}}>
                        <Typography sx={{mb: 1}} variant="body2">Weight</Typography>
                        <FormControl fullWidth>
                            <InputLabel>Weight (kg)</InputLabel>
                            <OutlinedInput
                                label="Weight (kg)"
                                name="weight"
                                type="number"
                                value={formik.values.weight}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required={true}
                                placeholder={'Weight (kg)'}
                            />
                        </FormControl>
                    </Grid>

                    {/* Fragile Toggle */}
                    <Grid size={{xs: 12, md: 3}}>
                        <Typography fontWeight={500} sx={{mb: 1}}>
                            Fragile
                        </Typography>
                        <ToggleButtonGroup
                            exclusive={true}
                            value={formik.values.fragile}
                            onChange={(e, val) => {
                                if (val !== null) formik.setFieldValue('fragile', val);
                            }}
                        >
                            <ToggleButton
                                size="medium"
                                value={true}
                                sx={{
                                    backgroundColor: formik.values.fragile ? '#FFD400' : '',
                                }}
                            >
                                Yes
                            </ToggleButton>
                            <ToggleButton
                                size="medium"
                                value={false}
                                sx={{
                                    backgroundColor: !formik.values.fragile ? '#1a1a1a' : '',
                                    color: !formik.values.fragile ? '#fff' : '',
                                }}
                            >
                                No
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>

                    {/* Add-ons */}
                    <Grid size={{xs: 12}}>
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formik.values.express}
                                        onChange={formik.handleChange}
                                        name="express"
                                    />
                                }
                                label="Express Delivery"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formik.values.insurance}
                                        onChange={formik.handleChange}
                                        name="insurance"
                                    />
                                }
                                label="Insurance"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formik.values.packaging}
                                        onChange={formik.handleChange}
                                        name="packaging"
                                    />
                                }
                                label="Packaging"
                            />
                        </FormGroup>
                    </Grid>

                    {/* Submit Button */}
                    <Grid size={{xs: 12}}>
                        <Button color="secondary" variant="outlined" type="submit">
                            Calculate Cost
                        </Button>
                    </Grid>
                </Grid>
            </form>

            {/* Price Display */}
            <Box
                sx={{
                    mt: 4,
                    p: 3,
                    backgroundColor: '#FFD400',
                    textAlign: 'center',
                    borderRadius: 1,
                }}
            >
                <Typography variant="h6" fontWeight={600}>
                    Estimated Price: <span style={{color: '#000'}}>${price.toFixed(3)}</span>
                </Typography>
            </Box>
        </Card>
    );
};

export default Calculator;
