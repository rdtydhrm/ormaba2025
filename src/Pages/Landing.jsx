import { Box, Button, Container, Typography } from "@mui/material";

function Landing() {
    return (
        <div>
            <video autoPlay loop muted style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: -1,
            }}>
                <source src="/aftermovie3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Container sx={{ position: 'relative', height: '100vh', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                    <Typography variant="h2" sx={{ textAlign: 'center', mb: 2 }}>O R M A B A</Typography>
                    <Button href="/#/login" variant="outlined" size="medium" sx={{ color: 'primary.main' }}>LOGIN</Button>
                </Box>
            </Container>
        </div>
    );
}

export default Landing;
