import { Box, CircularProgress, Container, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";
import { useLocation } from "react-router-dom";

function Home() {
    let location = useLocation();
    return (
        <>
            <Navbar />
            <Container sx={{ height: '100vh' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Typography variant="h6" sx={{ textAlign: 'center' }}> {location.pathname} </Typography>
                </Box>
            </Container>
        </>
    )
}

export default Home