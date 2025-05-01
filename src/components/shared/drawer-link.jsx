import {Stack, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice.js";
import {Link, useLocation} from "react-router";

const DrawerLink = ({icon, label, path}) => {

    const dispatch = useDispatch();
    const {pathname} = useLocation();

    return (
        <Stack
            alignItems="center"
            direction="row"
            justifyContent="space-between"
            spacing={2}>
            <Stack direction="row" spacing={2}>
                {icon}
                <Link
                    onClick={() => dispatch(UI_ACTION_CREATORS.toggleDrawerOpen(false))}
                    to={path}
                    style={{textDecoration: 'none', flexGrow: 1}}>
                    <Typography
                        display="inline"
                        sx={{
                            color: pathname === path ? 'secondary.main' : 'text.primary',
                            textTransform: "capitalize"
                        }}
                        variant="body2">
                        {label}
                    </Typography>
                </Link>

            </Stack>
        </Stack>
    )
}

export default DrawerLink;