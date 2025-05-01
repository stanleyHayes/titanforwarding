import {Box, Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import notFound from "./../../assets/images/not-found.png";

const Empty = ({title, description, action, image = notFound}) => {
    return (
        <Card
            elevation={0}
            variant="outlined"
            sx={{
                borderRadius: 0.25,
                py: 8,
                backgroundColor: 'background.default',
                borderColor: 'border.default',
                borderWidth: 1
            }}>
            <CardContent>
                <Stack sx={{width: "100%"}} direction="column" spacing={2}>
                    <Typography align="center" variant="h6" sx={{color: "text.primary"}}>
                        {title}
                    </Typography>
                    <Stack direction="row" justifyContent="center">
                        <CardMedia
                            component="img"
                            src={image}
                            alt="logo"
                            sx={{
                                width: 150,
                                height: 150,
                                objectFit: 'cover',
                                objectPosition: 'center',
                            }}
                        />
                    </Stack>
                    <Typography align="center" variant="body2" sx={{color: "text.secondary"}}>
                        {description}
                    </Typography>
                    <Box>
                        {action}
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Empty;
