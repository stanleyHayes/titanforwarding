import {Card} from "@mui/material";
import {motion} from "motion/react";
import {useState} from "react";

const Brand = ({brand}) => {

    const [hovered, setHovered] = useState(false);

    return (
        <Card
            elevation={0}
            sx={{
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                transition: 'background-color 0.3s ease-in-out',
                height: '100%',
                minHeight: 100
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            variant="outlined">
            <motion.img
                whileHover={{
                    scale: 1.1,
                    transition: {
                        duration: 0.5
                    }
                }}
                src={brand.image}
                style={{
                    width: '100%',
                    height: "100%",
                    objectFit: "fill",
                    mixBlendMode: hovered ? 'luminosity' : 'normal',
                    opacity: hovered ? 0.2 : 1,
                    transition: 'opacity 0.3s ease',
                    backdropFilter: hovered ? 'blur(35px)' : false
                }}
            />
        </Card>
    );
};

export default Brand;
