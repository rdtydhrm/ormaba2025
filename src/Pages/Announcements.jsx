import { Box, Container, Paper, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CenteredLoader from "../Components/CenteredLoader";
import apiURL from "../APIURL";
import AnnouItem from "../Components/AnnouItem";

function Announcements() {
    const getAnnouncements = async () => {
        const response = await axios.get(`${apiURL}/api/announcements`)
        return response.data
    }

    const {data: announcements, isLoading, error} = useQuery({
        queryKey: ["getAnnouncements"],
        queryFn: getAnnouncements,
    })

    if (isLoading) {
        return <CenteredLoader/>
    }

    if (error) {
        console.log(error)
    }

    return (
        <>
            <Box sx={{
                position: 'absolute',
                backgroundColor: '#000000', 
                backgroundImage: 'linear-gradient(19deg, #000000 0%, #371c4b 100%)',
                // filter: 'brightness(17%)', 
                width: '100vw',
                zIndex: '-1',
                top: 0,
                left: 0,
            }}>
            <Navbar />
            <Container sx={{height: '100vh', display:'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Paper elevation={4} sx={{bgcolor: 'transparent', maxWidth: {md: '50vw'}, display: 'flex', justifyContent: 'center', alignItems: 'center', width: "75vw", height: '4em', my: 6}}>
                        <Typography variant="h4" textAlign={'center'}>Pengumuman</Typography>
                    </Paper>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Paper elevation={1} sx={{borderRadius: 5, bgcolor: 'transparent', width: {xs: '92vw', md: '75vw'}, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', pt: 6}}>
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