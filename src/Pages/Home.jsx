import { Accordion, AccordionDetails, AccordionSummary, Alert, Box, Button, Card, CardMedia, Chip, CircularProgress, Container, Divider, Link, Paper, Snackbar, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";
import GradientBackground from "../Components/GradientBackground";
import background from "/background7.jpg"
import { useRef } from "react";
import { essence, essenceShort, whatIsORMABA1, whatIsORMABA2, whatIsORMABAshort } from "../contents";
import GalleryCarousel from "../Components/GalleryCarousel";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { ScrollRestoration } from "react-router-dom";
import { questions, answers } from "../contents.js";

function Home() {
    const learnRef = useRef(null);
    return (
        <>
            <ScrollRestoration />
            <Box sx={{
                width: '100vw',
                backgroundImage: `url(${background})`,
                backgroundSize: {xs: '400vw', md: '100vw'},
                backgroundPosition: 'center',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex:  -1,
                pb: 2,
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
            <video autoPlay loop muted style={{
                zIndex: -1, 
                position: 'absolute', 
                objectFit: 'cover',
                width: '100vw',
                height: '100vh',
                top: 0,
                left: 0,
            }}>
                <source src="/ormaba5.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Container sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <section id="top-section">
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                        <Typography variant="h2" sx={{ textAlign: 'center', pb: 2, fontWeight: 'bold' }}>O R M A B A</Typography>
                        <Button variant="outlined" size="medium" sx={{ color: 'primary.main', fontWeight: 'bold'}}
                                onClick={() => learnRef.current.scrollIntoView({behavior: 'smooth'})}>learn</Button>
                    </Box>
                    <Box sx={{mt: 16, display: {xs: 'none', md: 'block'}}}>
                        <img src="wide1.png" alt="" style={{width: '55vw', height: 'auto'}}/>
                    </Box>
                </section>
                
            <section id="what-section" ref={learnRef}>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        {/* desktop version */}
                        <Box sx={{mt: 16, width: '100%', display: {xs: 'none', md: 'flex'}, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mb: 10}}>
                                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Paper elevation={8} sx={{bgcolor: 'transparent', pl: 4, py: 2, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <Box sx={{mr: 1}}>
                                            <img src="/wing.png" height={'50px'}/>
                                        </Box>
                                        <Typography variant="h3" sx={{ textAlign: 'left', display: 'inline', color: 'secondary.light', fontStyle: 'italic', mr: 2}}>What</Typography>
                                        <Typography variant="h3" sx={{ textAlign: 'left', display: 'inline'}}>is ORMABA?</Typography>
                                        <Box sx={{transform: 'scaleX(-1)', ml: 1, mr: 4}}>
                                            <img src="/wing.png" height={'50px'}/>
                                        </Box>
                                    </Paper>
                                    <span><hr style={{display: 'inline-flex', width: '28vw'}} /></span>
                                </Box>
                            
                            <Typography variant="body1" sx={{ textAlign: 'justify', mt: 5, width: '75vw'}}>{whatIsORMABA1} <b>Kerohanian</b>, <b>Kepemimpinan</b>, dan <b>Kekeluargaan</b>. {whatIsORMABA2}</Typography>
                        </Box>
                        <Box sx={{width: '100%', display: {xs: 'none', md: 'flex'}, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <span ><hr style={{display: 'inline-flex', width: '28vw'}} /></span>
                                <Paper elevation={8} sx={{bgcolor: 'transparent', pr: 4, py: 2, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <Box sx={{mr: 1, ml: 4}}>
                                        <img src="/wing.png" height={'50px'}/>
                                    </Box>
                                    <Typography variant="h3" sx={{ textAlign: 'left', display: 'inline', color: 'secondary.light', fontStyle: 'italic', mr: 2}}>Essence</Typography>
                                    <Typography variant="h3" sx={{ textAlign: 'left', display: 'inline'}}>of ORMABA</Typography>
                                    <Box sx={{ml: 1, transform: 'scaleX(-1)'}}>
                                        <img src="/wing.png" height={'50px'}/>
                                    </Box>
                                </Paper>
                            </Box>
                            <Typography variant="body1" sx={{ textAlign: 'justify', mt: 5, pb: 20, width: '75vw'}}>{essence}</Typography>
                        </Box>

                        {/* mobile version */}
                        <Box sx={{mt: 8, width: '100%', display: {xs: 'flex', md: 'none'}, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mb: 4}}>
                        <Paper elevation={8} sx={{bgcolor: 'transparent', p: 2, mt: 8}}>
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
                        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <Box sx={{display:'flex', justifyContent:'center', position: 'relative', left: '-139px'}}>
                                <img src="/cloud.png" alt="" height='169px'/>
                            </Box>
                            <Box sx={{display:'flex', justifyContent:'center', transform: 'scaleX(-1)', position: 'relative', right: '-139px'}}>
                                <img src="/cloud.png" alt="" height='169px'/>
                            </Box>
                        </Box>
                        <Box sx={{ mt: 0, display: 'flex', justifyContent: 'center'}}>
                            <Paper elevation={8} sx={{bgcolor: 'transparent', px: 4, py: 2 ,width: '45vw',}}>
                                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <Box sx={{mr: 3}}>
                                        <img src="/wing.png" height={'60px'}/>
                                    </Box>
                                    <Typography variant="h3" sx={{textAlign: 'center'}}>Rangkaian Kegiatan</Typography>
                                    <Box sx={{transform: 'scaleX(-1)', ml: 3}}>
                                        <img src="/wing.png" height={'60px'}/>
                                    </Box>
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
                                        <Typography variant="h6" sx={{textAlign: 'left'}}>Kegiatan perkenalan UNIKHAHIDHA secara keseluruhan (struktur kepengurusan dan program kerja), megibung, dan study case group. Untuk pelaksanaannya akan diadakan pada bulan September.</Typography>
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
                                        <Typography variant="h6" sx={{textAlign: 'right'}}>Kegiatan upacara sisya upanayana, orasi calon ketua angkatan, penampilan kelompok, outbond dan malam api unggun. Untuk pelaksanaannya akan diadakan pada bulan Oktober.</Typography>
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
                        <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center'}}>
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
                    <Box sx={{display: {md: 'flex', xs: 'none'}, justifyContent: 'space-between', mt: 16}}>
                        <Box sx={{display:'flex', justifyContent:'center', position: 'relative', left: '-139px'}}>
                            <img src="/cloud.png" alt="" height='169px'/>
                        </Box>
                        <Box sx={{display:'flex', justifyContent:'center', transform: 'scaleX(-1)', position: 'relative', right: '-139px'}}>
                            <img src="/cloud.png" alt="" height='169px'/>
                        </Box>
                    </Box>
                    <Box sx={{ mt: {md: 0, xs: 16}, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Paper elevation={8} sx={{bgcolor: 'transparent', p: 2, width: {xs: '50vw', md: '22vw'}, mb: 8, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Box sx={{mr: 3, display: {md: 'flex', xs: 'none'}}}>
                                    <img src="/wing.png" height={'60px'}/>
                                </Box>
                                
                                <Typography variant="h3" sx={{textAlign: 'center', width: '2em'}}>FAQ</Typography>
                                
                                <Box sx={{transform: 'scaleX(-1)', ml: 3, display: {md: 'flex', xs: 'none'}}}>
                                    <img src="/wing.png" height={'60px'}/>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                    <Box>
                        {questions.map((question, index) => (
                            <Accordion elevation={8} sx={{bgcolor: 'transparent'}}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`panel${index}-content`}
                                    id={`panel${index}-header`}
                                    sx={{color: 'secondary.light'}}
                                >
                                <b>{question}</b>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {answers[index]}
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                </section>

                <section id="gallery-section">
                    <Box sx={{display: {md: 'flex', xs: 'none'}, justifyContent: 'center', mt: 16}}>
                        <img src="/wide2.png" alt="" />
                    </Box>
                    <Box sx={{display: {md: 'flex', xs: 'none'}, justifyContent: 'space-between'}}>
                        <Box sx={{display:'flex', justifyContent:'center', position: 'relative', left: '-120px'}}>
                            <img src="/line.png" alt="" height='100px'/>
                        </Box>
                        <Box sx={{display:'flex', justifyContent:'center', transform: 'scaleX(-1)', position: 'relative', right: '-120px'}}>
                            <img src="/line.png" alt="" height='100px'/>
                        </Box>
                    </Box>
                    <Box sx={{width: '80vw', mt: {md: 0, xs: 16}, mb: {md: 0, xs: 16}}}>
                        <GalleryCarousel/>
                    </Box>
                    <Box sx={{display: {md: 'flex', xs: 'none'}, justifyContent: 'space-between', mt: -4}}>
                        <Box sx={{display:'flex', justifyContent:'center', transform: 'scaleY(-1)', position: 'relative', left: '-120px'}}>
                            <img src="/line.png" alt="" height='100px'/>
                        </Box>
                        <Box sx={{display:'flex', justifyContent:'center', transform: 'scaleX(-1) scaleY(-1)', position: 'relative', right: '-120px'}}>
                            <img src="/line.png" alt="" height='100px'/>
                        </Box>
                    </Box>
                    <Box sx={{display: {md: 'flex', xs: 'none'}, justifyContent: 'center', transform: 'scaleY(-1)', mb: 10}}>
                        <img src="/wide1.png" alt="" style={{width: '55vw', height: 'auto'}}/>
                    </Box>
                </section>

                <section id="contact-section">
                    <Box sx={{zIndex: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', pb: 12}}>
                        <Paper elevation={8} sx={{bgcolor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', p: 1}}>
                            <Link sx={{display: 'flex', textDecoration: 'none', zIndex: 10}} href='https://www.instagram.com/ormaba.unikahidha/' target='_blank'>
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
                        {/* copyright */}
                        <Box sx={{position: 'absolute', bottom: 10, right: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'transparent', color: 'secondary.light', p: 1, flexDirection: 'column'}}>
                            <hr style={{display: 'inline-flex', width: '90vw'}}></hr>
                            <Typography variant="body2">Copyright © 2024 | By DDTM ORMABA UNIKAHIDA</Typography>
                        </Box>
                    </Box>
                </section>
                <Paper elevation={4} sx={{
                    bgcolor: 'transparent',
                    position: 'absolute',
                    bottom: 0,
                    width: '100vw', 
                    height: '4.2em',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                </Paper>
            </Container>
            </Box>
        </>
    )
}

export default Home