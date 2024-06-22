import { Alert, Box, Button, CircularProgress, Container, Paper, Snackbar, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import apiURL from "../APIURL";
import CenteredLoader from "../Components/CenteredLoader";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import HomeDivider from "../Components/HomeDivider";
import Footer from "../Components/Footer";

function Home() {
    const navigate = useNavigate()
    const myRef = useRef(null)
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
            <Navbar />
            <video autoPlay loop muted style={{
                position: 'absolute',
                top: 52,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: -1,
            }}>
                <source src="/aftermovie3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Container sx={{ position: 'relative', height: '97vh', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                    <Typography variant="h2" sx={{ textAlign: 'center', mb: 2 }}>O R M A B A</Typography>
                </Box>
            </Container>
            <HomeDivider/>
            <Container sx={{py: 6}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', pt: 6, boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}>
                    <Paper elevation={24} sx={{maxWidth: {md: '50vw'}, display: 'flex', justifyContent: 'center', alignItems: 'center', width: "75vw", height: '4em', mb: 6}}>
                        <Typography variant="h4" textAlign={'center'}>What is ORMABA?</Typography>
                    </Paper>
                    <Paper elevation={1} sx={{maxWidth: {md: '50vw'}, display: 'flex', justifyContent: 'center', alignItems: 'center', width: "75vw", p: 4, mb: 6}}>
                        <Typography variant="body1" textAlign={'center'}>Orientasi Mahasiswa Baru (ORMABA) adalah serangkaian acara penyambutan Mahasiswa Baru Hindu Universitas Brawijaya sekaligus sebagai media bonding antara Mahasiswa Baru Hindu Universitas Brawijaya.</Typography>
                    </Paper>
                    <Paper elevation={24} sx={{maxWidth: {md: '50vw'}, display: 'flex', justifyContent: 'center', alignItems: 'center', width: "75vw", height: '4em', mb: 6}}>
                        <Typography variant="h4" textAlign={'center'} sx={{fontSize: 20}}>Where will ORMABA be held?</Typography>
                    </Paper>
                    <Paper elevation={1} sx={{maxWidth: {md: '50vw'}, display: 'flex', justifyContent: 'center', alignItems: 'center', width: "75vw", p: 4, mb: 6}}>
                        <Typography variant="body1" textAlign={'center'}>Sama seperti tahun sebelumnya, ORMABA 2024 akan dilaksanakan secara offline bertempat di pura yang berada di malang loh.</Typography>
                    </Paper>
                    <Paper elevation={24} sx={{maxWidth: {md: '50vw'}, display: 'flex', justifyContent: 'center', alignItems: 'center', width: "75vw", height: '4em', mb: 6}}>
                        <Typography variant="h4" textAlign={'center'} sx={{fontSize: 20}}>How will ORMABA be held?</Typography>
                    </Paper>
                    <Paper elevation={1} sx={{maxWidth: {md: '50vw'}, display: 'flex', justifyContent: 'center', alignItems: 'center', width: "75vw", p: 4, mb: 8}}>
                        <Typography variant="body1" textAlign={'center'}>ORMABA 2024 terdiri dari 3 rangkaian acara. Diawali oleh Dharma Asrama 1, Dharma Asrama 2, serta Apreciation Day & Awarding yang membedakan dari tahun sebelumnya. Save the date and see you!</Typography>
                    </Paper>
                </Box>
            </Container>
            <HomeDivider />
            <Snackbar 
                open={open} 
                autoHideDuration={2000}
                onClose={() => setOpen(false)}
            >
                <Alert severity="success" sx={{ width: '100%' }}>
                {`Halo ${user.FullName}!`}
                </Alert>
            </Snackbar>
        </>
    )
}

export default Home