import { Box, Container, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CenteredLoader from "../Components/CenteredLoader";
import apiURL from "../APIURL";
import GradientBackground from "../Components/GradientBackground";

function Announcements() {
    const getAnnouncements = async () => {
        const response = await axios.get(`${apiURL}/api/announcements`)
        return response.data
    }

    const {data: announcements, isLoading, error} = useQuery({
        queryKey: ["getAnnouncements"],
        queryFn: getAnnouncements,
        retry: false,
    })

    if (isLoading) {
        return <CenteredLoader/>
    }

    if (error) {
        console.log(error)
    }

    return (
        <>
            <Navbar />
            <GradientBackground pageHeight={'200vh'}/>
            <Container sx={{ height: '100vh' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                {announcements.map((item) => (
                    <Typography variant="h6" sx={{ textAlign: 'center' , p: 10}}> {item.Title} </Typography>
                ))}
                </Box>
            </Container>
        </>
    )
}

export default Announcements