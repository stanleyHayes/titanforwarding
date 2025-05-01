import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, Paper } from '@mui/material';

const Industries = ({industries}) => {
    const [value, setValue] = useState(0);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 4,
                minHeight: 500,
                p: 3,
            }}
        >
            <Tabs
                orientation="vertical"
                value={value}
                onChange={(e, newValue) => setValue(newValue)}
                sx={{
                    borderRight: 1,
                    borderColor: 'divider',
                    minWidth: 200,
                }}
            >
                {industries.map((industry, index) => (
                    <Tab key={index} label={industry.label} />
                ))}
            </Tabs>

            <Paper elevation={2} sx={{ flex: 1, p: 4 }}>
                <Typography variant="h6" fontWeight={600} mb={2}>
                    {industries[value].label}
                </Typography>

                <Box
                    component="img"
                    src={industries[value].image}
                    alt={industries[value].label}
                    sx={{
                        width: '100%',
                        height: 240,
                        objectFit: 'cover',
                        borderRadius: 2,
                        mb: 2,
                    }}
                />

                <Typography variant="body1" color="text.secondary">
                    {industries[value].description}
                </Typography>
            </Paper>
        </Box>
    );
};

export default Industries;
