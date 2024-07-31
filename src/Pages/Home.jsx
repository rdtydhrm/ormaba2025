import { Accordion, AccordionDetails, AccordionSummary, Alert, Box, Button, Card, CardMedia, Chip, CircularProgress, Container, Divider, Link, Paper, Snackbar, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";
import GradientBackground from "../Components/GradientBackground";
import background from "/background7.jpg"
import { useRef } from "react";
import { essence, essenceShort, whatIsORMABA1, whatIsORMABA2, whatIsORMABAshort } from "../contents";
import GalleryCarousel from "../Components/GalleryCarousel";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function Home() {
    const learnRef = useRef(null);
    return (
        <>
            <Box sx={{
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

            <Container sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <section id="top-section">
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                        <Typography variant="h2" sx={{ textAlign: 'center', pb: 2, fontWeight: 'bold' }}>O R M A B A</Typography>
                        <Button variant="outlined" size="medium" sx={{ color: 'primary.main', fontWeight: 'bold'}}
                                onClick={() => learnRef.current.scrollIntoView({behavior: 'smooth'})}>learn</Button>
                    </Box>
                </section>
                
            <section id="what-section" ref={learnRef} style={{marginTop: '10em'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        {/* desktop version */}
                        <Box sx={{mt: 16, width: '100%', display: {xs: 'none', md: 'flex'}, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mb: 10}}>
                            
                                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Paper elevation={8} sx={{bgcolor: 'transparent', pl: 4, py: 2}}>
                                        <Typography variant="h3" sx={{ textAlign: 'left', display: 'inline', color: 'secondary.light', fontStyle: 'italic', mr: 2}}>What</Typography>
                                        <Typography variant="h3" sx={{ textAlign: 'left', display: 'inline', mr: 4}}>is ORMABA?</Typography>
                                    </Paper>
                                    <span><hr style={{display: 'inline-flex', width: '44vw'}} /></span>
                                </Box>
                            
                            <Typography variant="body1" sx={{ textAlign: 'justify', mt: 5, pb: 5, width: '75vw'}}>{whatIsORMABA1} <b>Kerohanian</b>, <b>Kepemimpinan</b>, dan <b>Kekeluargaan</b>. {whatIsORMABA2}</Typography>
                        </Box>
                        <Box sx={{width: '100%', display: {xs: 'none', md: 'flex'}, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <span ><hr style={{display: 'inline-flex', width: '40vw'}} /></span>
                                <Paper elevation={8} sx={{bgcolor: 'transparent', pr: 4, py: 2}}>
                                    <Typography variant="h3" sx={{ pl: 4,textAlign: 'left', display: 'inline', color: 'secondary.light', fontStyle: 'italic', mr: 2}}>Essence</Typography>
                                    <Typography variant="h3" sx={{ textAlign: 'left', display: 'inline'}}>of ORMABA</Typography>
                                </Paper>
                            </Box>
                            <Typography variant="body1" sx={{ textAlign: 'justify', mt: 5, pb: 5, width: '75vw'}}>{essence}</Typography>
                        </Box>

                        {/* mobile version */}
                        <Box sx={{mt: 8, width: '100%', display: {xs: 'flex', md: 'none'}, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mb: 4}}>
                        <Paper elevation={8} sx={{bgcolor: 'transparent', p: 2}}>
                            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                <Typography variant="h5" sx={{ textAlign: 'left', display: 'inline', color: 'secondary.light', fontStyle: 'italic', mr: 1}}>What</Typography>
                                <Typography variant="h5" sx={{ textAlign: 'left', display: 'inline'}}>is ORMABA?</Typography>
                            </Box>
                        </Paper>
                            <Typography variant="body1" sx={{ textAlign: 'justify', mt: 5, pb: 5, width: '75vw'}}>{whatIsORMABAshort}</Typography>
                        </Box>
                        <Box sx={{width: '100%', display: {xs: 'flex', md: 'none'}, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                        <Paper elevation={8} sx={{bgcolor: 'transparent', p: 2}}>
                            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                <Typography variant="h5" sx={{ textAlign: 'left', display: 'inline', color: 'secondary.light', fontStyle: 'italic', mr: 1}}>Essence</Typography>
                                <Typography variant="h5" sx={{ textAlign: 'left', display: 'inline'}}>of ORMABA</Typography>
                            </Box>
                            </Paper>
                            <Typography variant="body1" sx={{ textAlign: 'justify', mt: 5, pb: 5, width: '75vw'}}>{essenceShort}</Typography>
                        </Box>
                    </Box>
                </section >

                <section id="days-section">
                    {/* desktop version */}
                    <Box sx={{display: {xs: 'none', md: 'inherit'}}}>
                        <Box sx={{ mt: 24, display: 'flex', justifyContent: 'center'}}>
                            <Paper elevation={8} sx={{bgcolor: 'transparent', p: 4, width: '40vw',}}>
                                <Box>
                                    <Typography variant="h3" sx={{textAlign: 'center'}}>Rangkaian Kegiatan</Typography>
                                </Box>
                            </Paper>
                        </Box>
                        <Box sx={{ mt: 8, width: '75vw' }}>
                            <Paper elevation={8} sx={{bgcolor: 'transparent', p: 4, display: 'flex'}}>
                                <Box sx={{mr: 4, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <img src="/da1.jpeg" alt="" height='200px' style={{borderRadius: '10%'}}/>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                    <Box>
                                        <Typography variant="h3" sx={{color: 'secondary.light', mb: 2}}><b><i>Dharma Asrama 1</i></b></Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="h6" sx={{textAlign: 'left'}}>Pada DA I berfokus untuk mengenalkan UNIKAHIDHA serta menanamkan nilai-nilai kerohanian kepada mahasiswa  baru. Kegiatan ini akan dilaksanakan secara offline di salah satu pura di Malang dan selama 1 hari.</Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </Box>
                        <Box sx={{ mt: 8, width: '75vw' }}>
                            <Paper elevation={8} sx={{bgcolor: 'transparent', p: 4, display: 'flex'}}>
                                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                    <Box>
                                        <Typography variant="h3" sx={{color: 'secondary.light', mb: 2, textAlign: 'right'}}><b><i>Dharma Asrama 2</i></b></Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="h6" sx={{textAlign: 'right'}}>Pada DA II berfokus untuk menanamkan nilai kekeluargaan dan kepemimpinan. Kegiatan ini akan dilaksanakan secara offline di salah satu pura di Malang dan selama 2 hari 1 malam.</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ml: 4, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <img src="/da2.jpeg" alt="" height='200px' style={{borderRadius: '10%'}}/>
                                </Box>
                            </Paper>
                        </Box>
                    </Box>

                    {/* mobile version */}
                    <Box sx={{display: {xs: 'inherit', md: 'none'}}}>
                        <Box sx={{ mt: 24, display: 'flex', justifyContent: 'center'}}>
                            <Paper elevation={8} sx={{bgcolor: 'transparent', p: 4, width: '80vw',}}>
                                <Box>
                                    <Typography variant="h5" sx={{textAlign: 'center'}}>Rangkaian Kegiatan</Typography>
                                </Box>
                            </Paper>
                        </Box>
                        <Box sx={{ mt: 8, width: '80vw' }}>
                            <Paper elevation={8} sx={{bgcolor: 'transparent', p: 4, display: 'flex', flexDirection: {xs: 'column', md: 'row'}}}>
                                <Box sx={{mb: 4, mt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <img src="/da1.jpeg" alt="" height='200px' style={{borderRadius: '10%'}}/>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                    <Box>
                                        <Typography variant="h6" sx={{color: 'secondary.light', mb: 4, textAlign: 'center'}}><b>Dharma Asrama 1</b></Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" sx={{textAlign: 'center', mb: 2}}>Pada DA I berfokus untuk mengenalkan UNIKAHIDHA serta menanamkan nilai-nilai kerohanian kepada mahasiswa  baru. Kegiatan ini akan dilaksanakan secara offline di salah satu pura di Malang dan selama 1 hari.</Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </Box>
                        <Box sx={{ mt: 8, width: '80vw' }}>
                            <Paper elevation={8} sx={{bgcolor: 'transparent', p: 4, display: 'flex', flexDirection: {xs: 'column', md: 'row'}}}>
                                <Box sx={{mb: 4, mt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <img src="/da2.jpeg" alt="" height='200px' style={{borderRadius: '10%'}}/>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                    <Box>
                                        <Typography variant="h6" sx={{color: 'secondary.light', mb: 4, textAlign: 'center'}}><b>Dharma Asrama 2</b></Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" sx={{textAlign: 'center', mb: 2}}>Pada DA II berfokus untuk menanamkan nilai kekeluargaan dan kepemimpinan. Kegiatan ini akan dilaksanakan secara offline di salah satu pura di Malang dan selama 2 hari 1 malam.</Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </Box>
                    </Box>
                </section>

                <section id="faq-section">
                    <Box sx={{ mt: 30, display: 'flex', justifyContent: 'center'}}>
                            <Paper elevation={8} sx={{bgcolor: 'transparent', p: 2, width: {xs: '50vw', md: '15vw'}, mb: 8}}>
                                <Box>
                                    <Typography variant="h3" sx={{textAlign: 'center'}}>FAQ</Typography>
                                </Box>
                            </Paper>
                    </Box>
                    <Box>
                        <Accordion elevation={8} sx={{bgcolor: 'transparent'}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                sx={{color: 'secondary.light'}}
                            >
                            <b>Apakah perlu motor untuk mengikuti ORMABA?</b>
                            </AccordionSummary>
                            <AccordionDetails>
                                Tidak perlu. ORMABA akan dilaksanakan di luar kampus, tetapi akan disediakan transportasi dari panitia.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion elevation={8} sx={{bgcolor: 'transparent'}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                                sx={{color: 'secondary.light'}}
                            >
                            <b>Kapan ORMABA dilaksanakan?</b>
                            </AccordionSummary>
                            <AccordionDetails>
                                Jadwal pelaksanaan ORMABA akan diumumkan lebih lanjut oleh panitia.
                                ORMABA akan dilaksanakan sesuai dengan jadwal dari masing-masing fakultas
                                agar tidak tabrakan dengan ospek fakultas.
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </section>

                <section id="gallery-section">
                    <Box sx={{mt: 32, width: '80vw', mb: 30}}>
                        <GalleryCarousel/>
                    </Box>
                </section>

                <section id="contact-section">
                    <Box sx={{mb: 12}}>
                        <Paper elevation={8} sx={{bgcolor: 'transparent', display: 'flex', p: 1}}>
                            <Link sx={{display: 'flex', textDecoration: 'none'}} href='https://www.instagram.com/ormaba.unikahidha/' target='_blank'>
                                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mr: 1}}>
                                    <img src="/ig.webp" alt="" height='50px'/>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                    <Box>
                                        <Typography variant="h5" sx={{color: 'secondary.light', pr: 1}}><b>INSTAGRAM</b></Typography>
                                    </Box>
                                </Box>
                            </Link>
                        </Paper>
                    </Box>
                </section>
            </Container>
            </Box>
        </>
    )
}

export default Home