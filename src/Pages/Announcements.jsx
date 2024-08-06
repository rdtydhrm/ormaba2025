import { Box, Container, Paper, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CenteredLoader from "../Components/CenteredLoader";
import apiURL from "../APIURL";
import AnnouItem from "../Components/AnnouItem";
import background from "/background7.jpg"
import { useNavigate } from "react-router-dom";

function Announcements() {
    const navigate = useNavigate()

    const getAnnouncements = async () => {
        const response = await axios.get(`${apiURL}/api/announcements`)
        return response.data
    }

    const {data: announcements, isLoading, error} = useQuery({
        queryKey: ["getAnnouncements"],
        queryFn: getAnnouncements,
        staleTime: 1000 * 60 * 5 // 5 minutes
    })

    if (isLoading) {
        return <CenteredLoader/>
    }

    if (error) {
        console.log(error)
        navigate('/')
    }

    return (
        <>
            <Box sx={{
                minHeight: '100vh',
                width: '100vw',
                backgroundImage: `url(${background})`,
                backgroundSize: {xs: '400vw', md: '100vw'},
                backgroundPosition: 'center',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex:  -1,
            }}>
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                zIndex: -1
            }}/>
            <Navbar />
            <Container sx={{display:'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Paper elevation={24} sx={{bgcolor: 'transparent', maxWidth: {md: '30vw'}, display: 'flex', justifyContent: 'center', alignItems: 'center', width: "75vw", height: '4em', mb: 6, mt: 16, py: {md: 6, xs: 0}}}>
                        <Typography variant="h4" textAlign={'center'}><b>PENGUMUMAN</b></Typography>
                    </Paper>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Paper elevation={24} sx={{borderRadius: 5, bgcolor: 'transparent', width: {xs: '92vw', md: '50vw'}, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', pt: 6, mb: 12}}>
                    {announcements.map((item) => (
                        <AnnouItem annou={item}/>
                    ))}
                </Paper>
                </Box>
            </Container>
            </Box>
        </>
    )
}

export default Announcements