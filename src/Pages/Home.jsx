import { Alert, Box, Button, CircularProgress, Container, Paper, Snackbar, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";

function Home() {
    return (
        <>
            <Navbar />
            <Container sx={{ position: 'relative', height: '97vh', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                    <Typography variant="h2" sx={{ textAlign: 'center', mb: 2 }}>O R M A B A</Typography>
                </Box>
            </Container>
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
        </>
    )
}

export default Home