import { Box, Button, Container, Typography } from "@mui/material";

function Landing() {
    return (
        <Container sx={{ height: '100vh' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Typography variant="h2" sx={{ textAlign: 'center', mb: 2, }}> ORMABA </Typography>
                <Button href="/#/login" variant="outlined" size="medium" sx={{color: 'primary.main'}}>Login</Button>
            </Box>
        </Container>
    )
}

export default Landing