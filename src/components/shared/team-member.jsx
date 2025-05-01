import {Avatar, Card, CardContent, Typography} from "@mui/material";

const TeamMember = ({member}) => {
    return (
        <Card variant="outlined" sx={{textAlign: 'center'}}>
            <CardContent>
                <Avatar
                    alt={member.name}
                    src={member.image}
                    sx={{width: 80, height: 80, mx: 'auto', mb: 2}}
                />
                <Typography variant="h6" fontWeight={600}>
                    {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {member.role}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default TeamMember;