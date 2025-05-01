import {Link, Stack, Toolbar, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {selectAppInfo} from "../../redux/features/app-info/app-info-slice.js";
import SocialIconLink from "../shared/social-icon-link.jsx";
import {Facebook, LinkedIn, Twitter} from "@mui/icons-material";

const MobileTopBar = () => {
    const {phone} = useSelector(selectAppInfo);
    return (
        <Toolbar variant="regular">
            <Stack sx={{width: '100%'}} direction="row" spacing={2} justifyContent="space-between" alignItems="center">
                <Link href={`tel:${phone}`}>
                    <Typography variant="caption" sx={{color: 'text.secondary'}}>
                        Call us now {phone}
                    </Typography>
                </Link>

                <Stack direction="row" spacing={1}>
                    <SocialIconLink
                        size="small"
                        icon={
                            <LinkedIn
                                sx={{
                                    color: 'white',
                                    transition: 'color 0.3s ease',
                                    textTransform: 'none',
                                    '&:hover': {
                                        color: 'secondary.main'
                                    }
                                }}
                            />}
                        href="https://linkedin.com/in/yourprofile"
                        label="LinkedIn"
                    />
                    <SocialIconLink
                        size="small"
                        icon={
                            <Twitter
                                sx={{
                                    color: 'white',
                                    transition: 'color 0.3s ease',
                                    textTransform: 'none',
                                    '&:hover': {
                                        color: 'secondary.main'
                                    }
                                }}
                            />}
                        href="https://twitter.com/yourhandle"
                        label="Twitter"
                    />
                    <SocialIconLink
                        size="small"
                        icon={
                            <Facebook
                                sx={{
                                    color: 'white',
                                    transition: 'color 0.3s ease',
                                    textTransform: 'none',
                                    '&:hover': {
                                        color: 'secondary.main'
                                    }
                                }}
                            />}
                        href="https://twitter.com/yourhandle"
                        label="Twitter"
                    />
                </Stack>
            </Stack>
        </Toolbar>
    )
}

export default MobileTopBar;