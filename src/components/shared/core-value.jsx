import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import React from "react";
import {AddOutlined} from "@mui/icons-material";

const CoreValue = ({value}) => {
    return (
        <Accordion variant="outlined" square={true} elevation={0}>
            <AccordionSummary expandIcon={<AddOutlined/>}>
                <Typography
                    variant="body1"
                    sx={{color: "text.primary", fontWeight: "bold"}}>
                    {value.title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography
                    variant="body1"
                    sx={{color: "text.secondary"}}>
                    {value.description}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default CoreValue;