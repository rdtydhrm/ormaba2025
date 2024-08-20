import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import CenteredLoader from "../Components/CenteredLoader";
import { useNavigate } from "react-router-dom";
import apiURL from "../APIURL";
import { useEffect, useState } from "react";
import background from "/background7.jpg"
import GradientBackground from "../Components/GradientBackground";
import { purple } from "@mui/material/colors";
import getMentor from "../mentor";
import MentorDialog from "../Components/MentorDialog";
import GroupDialog from "../Components/GroupDialog";

function Profile() {
    const navigate = useNavigate()
    useEffect(() => {
        if (document.cookie.match(/^(.*;)?\s*yes\s*=\s*[^;]+(.*)?$/) === null) {    
            navigate("/login")
        }
    }, []);
    const [lineId, setLineId] = useState('');
    const [instagram, setInstagram] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [foodAlergies, setFoodAlergies] = useState('');
    const [sickness, setSickness] = useState('');
    const [origin, setOrigin] = useState('');
    const [hobby, setHobby] = useState('');
    const [pdob, setPDOB] = useState('');
    const [motto, setMotto] = useState('');

    const [openGroup, setOpenGroup] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClickOpenGroup = () => {
        setOpenGroup(true);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleCloseGroup = () => {
        setOpenGroup(false);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const patchProfile = async (profileDetails) => {
        const response = await axios({
            method: 'PATCH',
            baseURL: apiURL,
            url: '/api/profile',
            data: profileDetails
        })
        return response
    }

    const mutation = useMutation({
        mutationFn: patchProfile,
        onSuccess: () => window.location.href = '/profile'
    });

    const handlePatch = (e) => {
        e.preventDefault();
        mutation.mutate({ lineId, instagram, phoneNumber, foodAlergies, sickness, origin, hobby, pdob, motto });
    };
    
    const getUserInfo = async () => {
        const response = await axios.get(`${apiURL}/api/info`)
        return response.data
    }

    const {data: user, isLoading, error} = useQuery({
        queryKey: ["getUser"],
        queryFn: getUserInfo,
    })

    useEffect(() => {
        if (user) {
            setLineId(user.LineID || '');
            setInstagram(user.Instagram || '');
            setPhoneNumber(user.PhoneNumber || '');
            setFoodAlergies(user.FoodAlergies || '');
            setSickness(user.Sickness || '');
            setOrigin(user.Origin || '');
            setHobby(user.Hobby || '');
            setPDOB(user.PDOB || '');
            setMotto(user.Motto || '');
        }
    }, [user]);

    if (isLoading) {
        return <CenteredLoader/>
    }

    if (error) {
        navigate("/login")
    }

    return (
        <>
            
            {/* <GradientBackground pageHeight={{md: '245vh', xs: '230vh'}}/> */}
            <Box sx={{
                width: '100vw',
                backgroundImage: `url(${background})`,
                backgroundSize: {xs: '400vw', md: '100vw'},
                backgroundPosition: 'center',
                position: 'absolute',
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
            <Container sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', my: 8}}>
                <Box component='form' onSubmit={handlePatch} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', pt: 6, mb: 6}}>
                    <Paper elevation={24} sx={{bgcolor: 'transparent', width: {xs: '92vw', md: '75vw'}, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', pt: 6}}>
                        <Paper elevation={12} sx={{bgcolor: 'transparent', maxWidth: {md: '50vw'}, display: 'flex', justifyContent: 'center', alignItems: 'center', width: "75vw", height: '4em', mb: 6, py: {md: 6, xs: 0}}}>
                            <Typography variant="h4" textAlign={'center'} fontWeight={'bold'}>IDENTITAS DIRI</Typography>
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
                            label="Asal Daerah"
                            sx={{maxWidth: {md: '50vw'}, width: '75vw', pb: 4}}
                            defaultValue={user === undefined ? " " : user.Origin === "" ? " " : user.Origin }
                            helperText="contoh: Malang, Jawa Timur"
                            onChange={(e) => setOrigin(e.target.value)} 
                            spellCheck={false}
                        />
                        <TextField
                            label="Tempat, Tanggal Lahir"
                            sx={{maxWidth: {md: '50vw'}, width: '75vw', pb: 4}}
                            defaultValue={user === undefined ? " " : user.PDOB === "" ? " " : user.PDOB }
                            helperText="contoh: Singaraja, 11 September 2001"
                            onChange={(e) => setPDOB(e.target.value)}
                            spellCheck={false}
                        />
                        <TextField
                            label="ID Line"
                            sx={{maxWidth: {md: '50vw'}, width: '75vw', pb: 4}}
                            defaultValue={user === undefined ? " " : user.LineID === "" ? " " : user.LineID }
                            helperText="contoh: @ormaba.unikahidha"
                            onChange={(e) => setLineId(e.target.value)} 
                            spellCheck={false}
                        />
                        <TextField
                            label="Instagram"
                            sx={{maxWidth: {md: '50vw'}, width: '75vw', pb: 4}}
                            defaultValue={user === undefined ? " " : user.Instagram === "" ? " " : user.Instagram }
                            helperText="contoh: @ormaba.unikahidha"
                            onChange={(e) => setInstagram(e.target.value)} 
                            spellCheck={false}  
                        />
                        <TextField
                            label="Nomor Telepon"
                            sx={{maxWidth: {md: '50vw'}, width: '75vw', pb: 4}}
                            defaultValue={user === undefined ? " " : user.PhoneNumber === "" ? " " : user.PhoneNumber }
                            helperText="contoh: 08814830918"
                            onChange={(e) => setPhoneNumber(e.target.value)} 
                            spellCheck={false}  
                        />
                        <TextField
                            label="Hobi"
                            sx={{maxWidth: {md: '50vw'}, width: '75vw', pb: 4}}
                            defaultValue={user === undefined ? " " : user.Hobby === "" ? " " : user.Hobby }
                            onChange={(e) => setHobby(e.target.value)}
                            spellCheck={false}
                        />
                        <TextField
                            label="Alergi Makanan"
                            sx={{maxWidth: {md: '50vw'}, width: '75vw', pb: 4}}
                            defaultValue={user === undefined ? " " : user.FoodAlergies === "" ? " " : user.FoodAlergies }
                            onChange={(e) => setFoodAlergies(e.target.value)} 
                            spellCheck={false}
                        />
                        <TextField
                            label="Riwayat Penyakit"
                            sx={{maxWidth: {md: '50vw'}, width: '75vw', pb: 4}}
                            defaultValue={user === undefined ? " " : user.Sickness === "" ? " " : user.Sickness }
                            onChange={(e) => setSickness(e.target.value)} 
                            spellCheck={false}
                        />
                        <TextField
                            label="Motto Hidup"
                            sx={{maxWidth: {md: '50vw'}, width: '75vw', pb: 6}}
                            defaultValue={user === undefined ? " " : user.Motto === "" ? " " : user.Motto }
                            onChange={(e) => setMotto(e.target.value)}
                            spellCheck={false}
                        />
                        <Button variant="outlined" size="large" sx={{mb: 6}} type="submit">Simpan Data</Button>
                    </Paper>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Paper elevation={24} sx={{bgcolor: 'transparent', width: {xs: '92vw', md: '75vw'}, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', pt: 6}}>
                    <Paper elevation={12} sx={{bgcolor: 'transparent', maxWidth: {md: '50vw'}, display: 'flex', justifyContent: 'center', alignItems: 'center', width: "75vw", height: '4em', mb: 6, py: {md: 6, xs: 0}}}>
                        <Typography variant="h4" textAlign={'center'} fontWeight={'bold'}>INFORMASI</Typography>
                    </Paper>
                    <TextField
                        label="Kelompok"
                        defaultValue={user === undefined ? " " : user.Group === "" ? "Belum mendapatkan kelompok" : user.Group}
                        sx={{maxWidth: {md: '50vw'}, width: '75vw', pb: 4}}
                        onClick={handleClickOpenGroup}
                        spellCheck={false}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        label="Mentor"
                        defaultValue={getMentor(user.Group).nama}
                        sx={{maxWidth: {md: '50vw'}, width: '75vw', pb: 6}}
                        onClick={handleClickOpen}
                        spellCheck={false}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Paper>
                </Box>
            </Container>
            </Box>
            <GroupDialog
                group={user.Group}
                whatsapp={getMentor(user.Group).groupLink}
                open={openGroup}
                onClose={handleCloseGroup}
            />
            <MentorDialog
                mentor={getMentor(user.Group)}
                open={open}
                onClose={handleClose}
            />
        </>
    )
}

export default Profile