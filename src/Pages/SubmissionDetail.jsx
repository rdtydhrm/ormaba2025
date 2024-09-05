import Navbar from "../Components/Navbar";
import { ScrollRestoration, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import CenteredLoader from "../Components/CenteredLoader";
import apiURL from "../APIURL";
import { Box, Button, Container, Link, Paper, TextField, Typography } from "@mui/material";
import background from "/background7.jpg"
import { useEffect, useState } from "react";
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function SubmissionDetail() {
    const navigate = useNavigate()
    const params = useParams()

    const [link, setLink] = useState("")

    useEffect(() => {
        if (document.cookie.match(/^(.*;)?\s*yes\s*=\s*[^;]+(.*)?$/) === null) {    
            navigate("/login")
        }
    }, []);

    const patchSubmission = async (submissionDetails) => {
        const response = await axios({
            method: 'PATCH',
            baseURL: apiURL,
            url: `/api/submissions/${params.id}`,
            data: submissionDetails
        })
        return response
    }

    const mutation = useMutation({
        mutationFn: patchSubmission,
        onSuccess: () => window.location.href = '/tasks'
    });

    const handlePatch = (e) => {
        e.preventDefault();
        mutation.mutate({ url: link });
    };

    const getSubmissions = async () => {
        const response = await axios.get(`${apiURL}/api/submissions`)
        return response.data
    }

    const {data: submissions, isLoading, error} = useQuery({
        queryKey: ["getSubmissions"],
        queryFn: getSubmissions,
        staleTime: 1000 * 60 * 5 // 5 minutes
    })

    const submission = submissions?.find((sub) => sub.id == params.id)

    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = submission.task.description.split(urlRegex);

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
            <Box  sx={{ m: 4, position: 'absolute', display: { xs: 'none', md: 'inline' }, top: 70 }}>
                <Button variant="contained" size="medium"
                        onClick={() => navigate("/tasks")}>Back</Button>
            </Box>
            <Container sx={{display:'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Paper elevation={24} sx={{bgcolor: 'transparent', maxWidth: {md: '50vw'}, display: 'flex', justifyContent: 'center', alignItems: 'center', width: "75vw", mb: 6, mt: 16, py: 2}}>
                        <Box sx={{display: 'flex'}}>
                            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mx: 2}}>
                                <AssignmentIcon fontSize="large" sx={{color: 'secondary.light'}}/>
                            </Box>
                            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', mr: 2}}>
                                <Typography variant="h4" sx={{color: 'secondary.light'}}><b>{submission.task.title}</b></Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Paper elevation={24} sx={{bgcolor: 'transparent', maxWidth: {md: '50vw'}, display: 'flex', justifyContent: 'center', alignItems: 'center', width: "75vw", mb: 6, p: 4}}>
                        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Typography variant="h6" textAlign={'left'} whiteSpace={'pre-wrap'} sx={{mb: 4}}>{parts.map((part, index) =>
                            urlRegex.test(part) ? (
                                <Link key={index} href={part} target="_blank" rel="noopener noreferrer" sx={{wordBreak: 'break-all', overflowWrap:'break-word'}}>
                                {part}
                                </Link>
                            ) : (
                                part
                            )
                            )}</Typography>
                            <Box component={'form'} onSubmit={handlePatch} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center"}}>
                                {submission?.task.category === "Link" ?
                                <TextField
                                    label="Link"
                                    variant={"standard"}
                                    defaultValue={submission.url}
                                    sx={{maxWidth: {md: '30vw'}, width: '60vw', pb: 4}}
                                    onChange={(e) => setLink(e.target.value)}
                                    spellCheck={false}
                                />
                                : <></>}
                                <Button variant="contained" size="large" sx={{mb: 2, width: '10em'}} type="submit">submit</Button>
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            </Container>
            </Box>
        </>
    )
}