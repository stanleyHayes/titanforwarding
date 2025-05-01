import {List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const Features = ({features}) => {
    return (
        <List>
            {features.map((feature, index) => (
                <ListItem key={index} disableGutters>
                    <ListItemIcon sx={{minWidth: 32, color: 'primary.main'}}>
                        <CheckCircleIcon color="secondary"/>
                    </ListItemIcon>
                    <ListItemText primary={feature}/>
                </ListItem>
            ))}
        </List>
    );
};

export default Features;
