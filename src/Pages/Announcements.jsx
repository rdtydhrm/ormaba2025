import { Box, Container, Paper, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CenteredLoader from "../Components/CenteredLoader";
import apiURL from "../APIURL";
import GradientBackground from "../Components/GradientBackground";
import AnnouItem from "../Components/AnnouItem";

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
            <Container>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Paper elevation={4} sx={{bgcolor: 'transparent', maxWidth: {md: '50vw'}, display: 'flex', justifyContent: 'center', alignItems: 'center', width: "75vw", height: '4em', my: 6}}>
                        <Typography variant="h4" textAlign={'center'}>Pengumuman</Typography>
                    </Paper>
                </Box>
                <Paper elevation={1} sx={{borderRadius: 5, bgcolor: 'transparent', width: {xs: '92vw', md: '75vw'}, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', pt: 6}}>
                    {announcements.map((item) => (
                        <AnnouItem annou={item}/>
                    ))}
                    
                </Paper>
            </Container>
        </>
    )
}

export default Announcements