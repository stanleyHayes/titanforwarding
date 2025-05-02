import {Box, Typography, Link} from "@mui/material";

const Solution = ({solution}) => {
    return (
        <Box
            component={Link}
            to={solution.link}
            sx={{
                display: 'block',
                position: 'relative',
                height: 280,
                backgroundImage: `url(${solution.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 2,
                overflow: 'hidden',
                color: '#fff',
                textDecoration: 'none',
                transition: 'transform 0.3s',
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                '&:hover .hover-text': {
                    opacity: 1,
                },
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 16,
                    left: 16,
                    right: 16,
                }}
            >
                <Typography variant="caption" sx={{opacity: 0.8}}>
                    {solution.label}
                </Typography>
                <Typography variant="h6" fontWeight={700}>
                    {solution.title}
                </Typography>
                <Typography
                    className="hover-text"
                    variant="caption"
                    sx={{
                        mt: 0.5,
                        display: 'block',
                        opacity: 0,
                        transition: 'opacity 0.3s ease-in-out',
                    }}
                >
                    Discover More
                </Typography>
            </Box>
        </Box>
    )
}

export default Solution;