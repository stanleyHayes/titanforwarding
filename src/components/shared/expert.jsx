import {motion} from "motion/react";
import {Button, Card, CardContent, CardMedia, Typography} from "@mui/material";

const MotionCard = motion.create(Card);

const Expert = ({expert}) => {
    return (
        <MotionCard
            variant="outlined"
            whileHover={{y: -10}}
            transition={{duration: 0.3}}
            sx={{borderRadius: 0, height: '100%', px: 3}}
        >
            <CardContent sx={{flexGrow: 1}}>
                <CardMedia
                    component="img"
                    image={expert.image}
                    alt={expert.title}
                    sx={{
                        objectFit: 'contain',
                        width: 100,
                        height: 100,
                        mb: 4
                    }}
                />
                <Typography variant="h6" fontWeight={700} gutterBottom>
                    {expert.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                    {expert.description}
                </Typography>
                <Button color="secondary" variant="text" size="small" sx={{textTransform: 'none'}}>
                    Connect with an Expert
                </Button>
            </CardContent>
        </MotionCard>
    )
}

export default Expert;