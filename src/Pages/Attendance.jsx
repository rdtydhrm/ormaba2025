import { Box, Container, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";

function Attendance() {
    return (
        <>
            <Navbar />
            <Container sx={{ height: '100vh' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Typography variant="h6" sx={{ textAlign: 'center' }}> This is the Attendance page.</Typography>
                </Box>
            </Container>
        </>
    )
}

export default Attendance