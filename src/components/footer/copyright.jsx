import {Box, Container, Divider, Grid, Stack, Typography} from "@mui/material";
import {Link} from "react-router";
import {selectUI, UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice.js";
import {useDispatch, useSelector} from "react-redux";
import {DarkModeOutlined, LightModeOutlined} from "@mui/icons-material";

const Copyright = () => {

    const dispatch = useDispatch();
    const {theme} = useSelector(selectUI);

    return (
        <Box>
            <Container>
                <Grid
                    container={true}
                    spacing={2}
                    alignItems="center"
                    justifyContent="space-between">
                    <Grid size={{xs: 12, md: "auto"}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary", textAlign: {xs: "center", lg: "left"}}}>
                            Copyright &copy; {new Date().getFullYear()}
                        </Typography>
                    </Grid>
                    <Grid size={{xs: 12, md: "auto"}}>
                        <Stack
                            justifyContent={{xs: "center", lg: "flex-start"}}
                            direction="row"
                            spacing={1}
                            divider={
                                <Divider orientation="vertical" flexItem={true} variant="fullWidth"/>
                            }>
                            <Link to="/privacy" style={{textDecoration: "none"}}>
                                <Typography sx={{color: "text.secondary"}} variant="body2" component="span">
                                    Privacy Policy
                                </Typography>
                            </Link>
                            <Link to="/terms" style={{textDecoration: "none"}}>
                                <Typography sx={{color: "text.secondary"}} variant="body2" component="span">
                                    Terms of Service
                                </Typography>
                            </Link>

                            {theme === 'dark' ? (
                                <LightModeOutlined
                                    onClick={() => dispatch(UI_ACTION_CREATORS.toggleVariant())}
                                    sx={{
                                        borderRadius: 1,
                                        padding: 0.5,
                                        fontSize: 32,
                                        borderWidth: 1,
                                        borderStyle: 'solid',
                                        borderColor: 'border.primary',
                                        backgroundColor: 'light.primary',
                                        cursor: 'pointer',
                                        color: 'icon.primary'
                                    }}
                                />
                            ) : (
                                <DarkModeOutlined
                                    onClick={() => dispatch(UI_ACTION_CREATORS.toggleVariant())}
                                    sx={{
                                        borderRadius: 1,
                                        padding: 0.5,
                                        fontSize: 32,
                                        borderWidth: 1,
                                        borderStyle: 'solid',
                                        borderColor: 'border.primary',
                                        backgroundColor: 'light.primary',
                                        cursor: 'pointer',
                                        color: 'icon.primary'
                                    }}
                                />
                            )}
                        </Stack>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Copyright;