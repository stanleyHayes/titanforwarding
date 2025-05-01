import {Typography} from "@mui/material";
import {Link, useLocation} from "react-router";

const NavLink = ({text, path}) => {

    const {pathname} = useLocation();

    return (
        <Link to={path} style={{textDecoration: 'none', flexGrow: 1}}>
            <Typography
                display="inline"
                sx={{
                    color: pathname === path ? 'secondary.main' : 'text.primary',
                    textTransform: "capitalize"
                }}
                variant="body1">
                {text}
            </Typography>
        </Link>
    )
}

export default NavLink;