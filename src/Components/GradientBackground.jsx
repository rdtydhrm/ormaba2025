import { Box } from "@mui/material";

function GradientBackground({pageHeight}) {
    return (
        <Box sx={{
            position: 'absolute',
            backgroundColor: '#efbb07', 
            backgroundImage: 'linear-gradient(19deg, #efbb07 0%, #e2145f 100%)',
            filter: 'brightness(17%)', 
            width: '100vw',
            height: pageHeight,
            zIndex: '-1',
            top: 0,
            left: 0,
        }}/>
    )
}

export default GradientBackground