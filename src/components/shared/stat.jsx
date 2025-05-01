import {Card, CardContent, Typography} from "@mui/material";
import CountUp from "react-countup";

const Stat = ({stat}) => {
    return (
        <Card
            variant="outlined"
            sx={{textAlign: 'center'}}>
            <CardContent>
                <Typography variant="h4" fontWeight={700} sx={{color: 'text.primary', mb: 2}}>
                    <CountUp
                        redraw={true}
                        start={1}
                        end={stat.value}
                        duration={2}
                        separator=","
                    />
                </Typography>
                <Typography variant="body2" sx={{color: "text.secondary"}}>
                    {stat.title}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Stat;