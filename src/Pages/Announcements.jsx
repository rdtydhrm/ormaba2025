import { Box, Container, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";

function Announcements() {
    return (
        <>
            <Navbar />
            <Container sx={{ height: '100vh' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Typography variant="h6" sx={{ textAlign: 'center' }}> halaman pengumuman otw dibuat </Typography>
                </Box>
            </Container>
        </>
    )
}

export default Announcements