import { Alert, Box, CircularProgress, Container, Fab, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Snackbar, TextField, Typography } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import LoginIcon from '@mui/icons-material/Login';

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import apiURL from "../APIURL";

function AdminLogin() {
    const [id, setID] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const postLogin = async (loginDetails) => {
        const response = await axios({
            method: 'POST',
            baseURL: apiURL,
            url: '/api/admin',
            data: loginDetails
        })
        return response
    }

    const mutation = useMutation({
        mutationFn: postLogin,
        onSuccess: () => {
            navigate("/admin/dashboard")
        },
    });

    const handleLogin = (e) => {
        e.preventDefault();
        mutation.mutate({ id, password });
    };

    return (
        <>
        <Container sx={{ height: '100vh' }}>
            <Box component='form' onSubmit={handleLogin} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                {mutation.isError ? (
                <Snackbar 
                    open={true} 
                    autoHideDuration={6000} 
                    onClose={() => mutation.reset()}
                >
                    <Alert severity="error" sx={{ width: '100%' }}>
                    salah.
                    </Alert>
                </Snackbar>
                ) : <></>}
                <Typography variant="h3">Admin</Typography>
                <TextField
                    required 
                    label='ID'
                    value={id}
                    onChange={(e) => setID(e.target.value)} 
                    sx={{my: 3, width: '25ch'}}
                />
                <FormControl 
                    required 
                    label='Password' 
                    type="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}  
                    sx={{mb: 3, width: '25ch'}}>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword((show) => !show)}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Password"
                />
                </FormControl>
                <Typography variant="overline" sx={{color: 'primary.main', mb: 3}}>Gunakan Akun SIAM  <LockIcon fontSize="inherit"/></Typography>
                {mutation.isPending ? (
                <CircularProgress size={48}/>
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
        </>
    )
}

export default AdminLogin