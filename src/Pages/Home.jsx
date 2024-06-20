import { Box, CircularProgress, Container, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const {data, error, isLoading} = useQuery({
        queryKey: ['user'],
        queryFn: () => axios.get('https://ormaba-api.vercel.app/api/info'),
        retry: false,
    })

    if (isLoading) {
        return <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}><CircularProgress size={'69px'}/></Box>
    }

    if (error) {
        console.log(error)
        navigate('/landing')
    }

    return (
        <>
            <Navbar />
            <Container sx={{ height: '100vh' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Typography variant="h6" sx={{ textAlign: 'center' }}> This is the Home page.</Typography>
                </Box>
            </Container>
        </>
    )
}

export default Home