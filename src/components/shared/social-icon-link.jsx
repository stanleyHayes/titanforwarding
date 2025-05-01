import {Link, Stack, Tooltip, Typography, useMediaQuery, useTheme} from "@mui/material";

const SocialIconLink = ({icon, href, label}) => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

    const handleOpen = () => {
        window.open(href, '_blank', 'noopener,noreferrer');
    };

    return (
        <Tooltip sx={{cursor: 'pointer'}} onClick={handleOpen} title={!isLargeScreen ? label : ''}>
            <Stack
                alignItems="center"
                spacing={1}
                direction="row">
                {icon}
                <Link
                    underline="none"
                    sx={{
                        color: 'primary.main',
                        transition: 'color 0.3s ease',
                        textTransform: 'none',
                        '&:hover': {
                            color: 'secondary.main'
                        }
                    }}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer">
                    {/* Only show label on medium+ screens */}
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'text.primary',
                            transition: 'color 0.3s ease',
                            textTransform: 'none',
                            '&:hover': {
                                color: 'secondary.main'
                            },
                            display: {xs: 'none', lg: 'block'}
                        }}>
                        {label}
                    </Typography>
                </Link>
            </Stack>
        </Tooltip>
    );
};

export default SocialIconLink;
