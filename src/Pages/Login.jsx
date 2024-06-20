import { Alert, Box, CircularProgress, Container, Fab, Snackbar, TextField, Typography } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import LoginIcon from '@mui/icons-material/Login';

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

function Login() {
    const [nim, setNim] = useState('');
    const [password, setPassword] = useState('');

    const mutation = useMutation({
        mutationFn: (loginDetails) => {
            return axios.post('https://ormaba-api.vercel.app/api/login', loginDetails);
        },
        onSuccess: (data) => {
            // Handle successful login, e.g., redirect to home page
            console.log('Login successful', data);
            window.location.href = '/#/home';
        },
        onError: (error) => {
            // Handle login error
            console.error('Login failed', error);
        },
    });

    const handleLogin = (e) => {
        e.preventDefault();
        mutation.mutate({ nim, password });
    };
    return (
        <Container sx={{ height: '100vh' }}>
            <Box component='form' onSubmit={handleLogin} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                {mutation.isError ? (
                <Snackbar 
                    open={true} 
                    autoHideDuration={6000} 
                    onClose={() => mutation.reset()}
                >
                    <Alert severity="error" sx={{ width: '100%' }}>
                    NIM atau password salah coy
                    </Alert>
                </Snackbar>
                ) : <></>}
                <Typography variant="h3">Login</Typography>
                <TextField
                    required 
                    label='NIM'
                    value={nim}
                    onChange={(e) => setNim(e.target.value)} 
                    sx={{my: 3}}
                />
                <TextField
                    required 
                    label='Password' 
                    type="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}  
                    sx={{mb: 3}}
                />
                <Typography variant="overline" sx={{color: 'primary.main', mb: 3}}>Gunakan Akun SIAM  <LockIcon fontSize="inherit"/></Typography>
                {mutation.isPending ? (
                <CircularProgress />
                ) : (
                <Fab 
                    variant="extended" 
                    type="submit" 
                    sx={{ bgcolor: 'primary.main' }}
                >
                    Login
                    <LoginIcon sx={{ ml: 1 }} />
                </Fab>
                )}
            </Box>
        </Container>
    )
}

export default Login