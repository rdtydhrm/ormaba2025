import { Box, CircularProgress, Container, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";

function Home() {
    return (
        <>
            <Navbar />
            <Container sx={{ height: '100vh' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Typography variant="h6" sx={{ textAlign: 'center' }}> {window.location.origin} </Typography>
                </Box>
            </Container>
        </>
    )
}

export default Home