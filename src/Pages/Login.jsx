import { Box, Container, Fab, TextField, Typography } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import LoginIcon from '@mui/icons-material/Login';

function Login() {
    return (
        <Container sx={{ height: '100vh' }}>
            <Box component='form' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Typography variant="h3">Login</Typography>
                <TextField required label='NIM' sx={{my: 3}}/>
                <TextField required label='Password' type="password" sx={{mb: 3}}/>
                <Typography variant="overline" sx={{color: 'primary.main', mb: 3}}>Gunakan Akun SIAM  <LockIcon fontSize="inherit"/></Typography>
                <Fab variant="extended" sx={{bgcolor: 'primary.main'}} href="/#/home">
                    Login
                    <LoginIcon sx={{ml: 1}}/>
                </Fab>
            </Box>
        </Container>
    )
}

export default Login