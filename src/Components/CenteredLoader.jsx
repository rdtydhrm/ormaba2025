import { Box, CircularProgress } from "@mui/material";

function CenteredLoader() {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <CircularProgress size={'69px'}/>
        </Box>
    )
}

export default CenteredLoader