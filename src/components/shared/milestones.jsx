import {Card, CardContent, Step, StepContent, StepLabel, Stepper, Typography} from '@mui/material';

const Milestones = ({milestones}) => {
    return (
        <Stepper orientation="vertical" nonLinear={true} activeStep={-1}>
            {milestones.map((step, index) => (
                <Step active={true} key={index}>
                    <StepLabel>
                        <Typography variant="subtitle1" fontWeight={600}>
                            {step.title}
                        </Typography>
                    </StepLabel>
                    <StepContent>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="body2" color="text.secondary" mb={1}>
                                    {step.date}
                                </Typography>
                                <Typography variant="body1">{step.description}</Typography>
                            </CardContent>
                        </Card>
                    </StepContent>
                </Step>
            ))}
        </Stepper>
    );
};

export default Milestones;
