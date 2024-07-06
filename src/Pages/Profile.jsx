import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CenteredLoader from "../Components/CenteredLoader";
import { useNavigate } from "react-router-dom";
import apiURL from "../APIURL";

function Profile() {
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
        navigate("/login")
    }
    return (
        <>
            <Navbar />
            <Container sx={{py: 6}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', pt: 6, mb: 6, boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}>
                    <Paper elevation={24} sx={{maxWidth: {md: '50vw'}, display: 'flex', justifyContent: 'center', alignItems: 'center', width: "75vw", height: '4em', mb: 6}}>
                        <Typography variant="h4" textAlign={'center'}>Profil</Typography>
                    </Paper>
                    <TextField
                        disabled
                        label="Nama Lengkap"
                        defaultValue={user.FullName}
                        sx={{maxWidth: {md: '50vw'}, width: '75vw', pb: 4}}
                    />
                    <TextField
                        disabled
                        label="NIM"
                        defaultValue={user.NIM}
                        sx={{maxWidth: {md: '50vw'}, width: '75vw', pb: 4}}
                    />
                    <TextField
                        disabled
                        label="Email"
                        defaultValue={user.Email}
                        sx={{maxWidth: {md: '50vw'}, width: '75vw', pb: 4}}
                    />
                    <TextField
                        disabled
                        label="Fakultas"
                        defaultValue={user.Faculty}
                        sx={{maxWidth: {md: '50vw'}, width: '75vw', pb: 4}}
                    />
                    <TextField
                        disabled
                        label="Program Studi"
                        defaultValue={user.StudyProgram}
                        sx={{maxWidth: {md: '50vw'}, width: '75vw', pb: 4}}
                    />
                    <TextField
                        label="ID Line"
                        sx={{maxWidth: {md: '50vw'}, width: '75vw', pb: 4}}
                        defaultValue=" "
                        helperText="contoh: @kmdavidds"
                    />
                    <TextField
                        label="Instagram"
                        sx={{maxWidth: {md: '50vw'}, width: '75vw', pb: 4}}
                        defaultValue=" "
                        helperText="contoh: @kmdavidds"
                    />
                    <TextField
                        label="Nomor Telepon"
                        sx={{maxWidth: {md: '50vw'}, width: '75vw', pb: 4}}
                        defaultValue=" "
                        helperText="contoh: 081222333444"
                    />
                    <TextField
                        label="Alergi Makanan"
                        sx={{maxWidth: {md: '50vw'}, width: '75vw', pb: 4}}
                        defaultValue=" "
                    />
                    <TextField
                        label="Riwayat Penyakit"
                        sx={{maxWidth: {md: '50vw'}, width: '75vw', pb: 6}}
                        defaultValue=" "
                    />
                    <Button variant="contained" size="large" sx={{mb: 6}}>Simpan Data</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', pt: 6, boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}>
                    <Paper elevation={24} sx={{maxWidth: {md: '50vw'}, display: 'flex', justifyContent: 'center', alignItems: 'center', width: "75vw", height: '4em', mb: 6}}>
                        <Typography variant="h4" textAlign={'center'}>Informasi</Typography>
                    </Paper>
                    <TextField
                        disabled
                        label="Kelompok"
                        defaultValue="Belum mendapatkan kelompok"
                        sx={{maxWidth: {md: '50vw'}, width: '75vw', pb: 4}}
                    />
                    <TextField
                        disabled
                        label="Mentor"
                        defaultValue="Belum mendapatkan mentor"
                        sx={{maxWidth: {md: '50vw'}, width: '75vw', pb: 6}}
                    />
                </Box>
            </Container>
        </>
    )
}

export default Profile