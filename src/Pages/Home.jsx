import { Alert, Box, Button, CircularProgress, Container, Paper, Snackbar, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";
import GradientBackground from "../Components/GradientBackground";

function Home() {
    return (
        <>
            <Navbar />
            <GradientBackground pageHeight={'200vh'}/>
            <Container sx={{ position: 'relative', height: '97vh', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                    <Typography variant="h2" sx={{ textAlign: 'center', mb: 2 }}>O R M A B A</Typography>
                </Box>
            </Container>
        </>
    )
}

export default Home