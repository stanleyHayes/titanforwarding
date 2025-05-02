import {Avatar, Card, CardContent, Typography} from "@mui/material";
import {FormatQuoteOutlined} from "@mui/icons-material";

const Testimonial = ({testimonial}) => {
    return (
        <Card
            variant="outlined"
            sx={{backgroundColor: 'secondary.main'}}>
            <CardContent>
                <Avatar
                    sx={{
                        backgroundColor: '#000',
                        color: '#fff',
                        width: 48,
                        height: 48,
                        mb: 3,
                    }}
                >
                    <FormatQuoteOutlined fontSize="medium"/>
                </Avatar>

                <Typography
                    variant="h6"
                    sx={{mb: 3, color: 'rgba(0, 0, 0, 0.95)', lineHeight: 1.8}}
                >
                    {testimonial.quote}
                </Typography>

                <Typography variant="h6" fontWeight={700} sx={{color: 'rgba(0, 0, 0, 0.75)'}}>
                    {testimonial.name}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{color: 'rgba(0, 0, 0, 0.55)'}}>
                    {testimonial.role}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Testimonial;