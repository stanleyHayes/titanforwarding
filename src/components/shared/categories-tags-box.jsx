import {Card, CardContent, Chip, Stack, Typography} from "@mui/material";

const CategoryTagsBox = ({tags}) => (
    <>
        <Card variant="outlined" sx={{borderRadius: 1, mb: 3}}>
            <CardContent>
                <Typography fontWeight={700} mb={2}>
                    Categories
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                    {tags.map((tag) => (
                        <Chip
                            sx={{backgroundColor: 'light.secondary'}}
                            key={tag}
                            label={tag}
                            variant="outlined"
                            color="secondary"
                        />
                    ))}
                </Stack>
            </CardContent>
        </Card>

        <Card variant="outlined">
            <CardContent>
                <Typography fontWeight={700} mb={2}>
                    Tags
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                    {tags.map((tag) => (
                        <Chip
                            sx={{backgroundColor: 'light.secondary'}}
                            key={tag}
                            label={tag}
                            variant="outlined"
                            color="secondary"
                        />
                    ))}
                </Stack>
            </CardContent>
        </Card>
    </>
);

export default CategoryTagsBox;
