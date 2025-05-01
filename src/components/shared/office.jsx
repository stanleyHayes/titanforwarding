import {Card, CardContent, Typography, Stack, Button, Link} from "@mui/material";
import {CallOutlined, LocationOn, MailOutline, MapOutlined} from "@mui/icons-material";

const Office = ({office}) => {
    const {title, address, phone, email, mapUrl} = office;
    return (
        <Card variant="outlined" sx={{height: '100%'}}>
            <CardContent>
                <Typography align="center" variant="h6" fontWeight="bold" mb={2}>
                    {title}
                </Typography>

                <Stack justifyContent="center" direction="row" spacing={1} alignItems="flex-start" mb={2}>
                    <LocationOn color="primary"/>
                    <Typography variant="body2">{address}</Typography>
                </Stack>

                <Stack justifyContent="center" direction="row" spacing={1} alignItems="center" mb={2}>
                    <CallOutlined color="primary"/>
                    <Link href={`tel:${phone}`} underline="hover">
                        {phone}
                    </Link>
                </Stack>

                <Stack justifyContent="center" direction="row" spacing={1} alignItems="center" mb={3}>
                    <MailOutline color="primary"/>
                    <Link href={`mailto:${email}`} underline="hover">
                        {email}
                    </Link>
                </Stack>

                <Stack justifyContent="center" direction="row" spacing={1} alignItems="center">
                    {mapUrl && (
                        <Button
                            color="secondary"
                            sx={{color: 'rgba(0, 0, 0, 0.85)'}}
                            variant="contained"
                            startIcon={<MapOutlined/>}
                            href={mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="large"
                        >
                            Find us on map
                        </Button>
                    )}
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Office;



