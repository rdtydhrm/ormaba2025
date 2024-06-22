import { Alert, Box, CircularProgress, Container, Snackbar, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import apiURL from "../APIURL";
import CenteredLoader from "../Components/CenteredLoader";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()

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

    let isOpen = true

    return (
        <>
            <Navbar />
            <Container sx={{ height: '100vh' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Typography variant="h6" sx={{ textAlign: 'center' }}> ngek </Typography>
                </Box>
            </Container>
        </>
    )
}

export default Home