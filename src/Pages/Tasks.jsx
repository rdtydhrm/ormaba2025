import Navbar from "../Components/Navbar";
import { ScrollRestoration, useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CenteredLoader from "../Components/CenteredLoader";
import apiURL from "../APIURL";
import { Box, Container, Paper, Typography } from "@mui/material";
import background from "/background7.jpg"
import { useEffect } from "react";
import SubmissionItem from "../Components/SubmissionItem";

function Tasks() {
    const navigate = useNavigate()
    useEffect(() => {
        if (document.cookie.match(/^(.*;)?\s*yes\s*=\s*[^;]+(.*)?$/) === null) {    
            navigate("/login")
        }
    }, []);

    const getSubmissions = async () => {
        const response = await axios.get(`${apiURL}/api/submissions`)
        return response.data
    }

    const {data: submissions, isLoading, error} = useQuery({
        queryKey: ["getSubmissions"],
        queryFn: getSubmissions,
        staleTime: 1000 * 60 * 5 // 5 minutes
    })

    if (isLoading) {
        return <CenteredLoader/>
    }

    if (error) {
        navigate("/login")
    }
    return (
        <>
            <ScrollRestoration />
            <Box sx={{
                minHeight: '100vh',
                width: '100vw',
                backgroundImage: `url(${background})`,
                backgroundSize: {xs: '400vw', md: '100vw'},
                backgroundPosition: 'top center',
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
                        <Typography variant="h4" textAlign={'center'}><b>PENUGASAN</b></Typography>
                    </Paper>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Paper elevation={24} sx={{borderRadius: 5, bgcolor: 'transparent', width: {xs: '92vw', md: '50vw'}, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', pt: 6, mb: 12}}>
                    {submissions.map((item) => (
                        <SubmissionItem submission={item}/>
                    ))}
                </Paper>
                </Box>
            </Container>
            </Box>
        </>
    )
}

export default Tasks