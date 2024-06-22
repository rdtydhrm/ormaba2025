import { Alert, Box, CircularProgress, Container, Snackbar, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import apiURL from "../APIURL";
import CenteredLoader from "../Components/CenteredLoader";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
    const navigate = useNavigate()
    const [open, setOpen] = useState(true);

    const getUserInfo = async () => {
        const response = await axios.get(`${apiURL}/api/info`)
        return response.data
    }

    const {data: user, isLoading, error} = useQuery({
        queryKey: ["getUser"],
        queryFn: getUserInfo,
        retry: false,
    })

    if (isLoading) {
        return <CenteredLoader/>
    }

    if (error) {
        navigate("/landing")
    }

    return (
        <>
            <Snackbar 
                open={open} 
                autoHideDuration={4000}
                onClose={() => setOpen(false)}
            >
                <Alert severity="success" sx={{ width: '100%' }}>
                {`Halo ${user.FullName}!`}
                </Alert>
            </Snackbar>
            <Navbar />
            <Container sx={{ height: '100vh' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Typography variant="h6" sx={{ textAlign: 'center' }}> Home Page </Typography>
                </Box>
            </Container>
        </>
    )
}

export default Home