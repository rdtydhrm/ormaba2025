import { Box, Container, Typography } from "@mui/material";

function Home() {
    return (
        <Container sx={{ height: '100vh' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Typography variant="h1" sx={{ textAlign: 'center' }}> This is the home page.</Typography>
            </Box>
        </Container>
    )
}

export default Home