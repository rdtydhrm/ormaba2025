import { Box, Container, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";

function Tasks() {
    return (
        <>
            <Navbar />
            <Container sx={{ height: '100vh' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Typography variant="h6" sx={{ textAlign: 'center' }}> This is the Tasks page.</Typography>
                </Box>
            </Container>
        </>
    )
}

export default Tasks