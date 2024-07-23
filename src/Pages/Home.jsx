import { Alert, Box, Button, Chip, CircularProgress, Container, Divider, Paper, Snackbar, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";
import GradientBackground from "../Components/GradientBackground";
import background from "/background6.png"
import { useRef } from "react";
import { essence, essenceShort, whatIsORMABA, whatIsORMABAshort } from "../contents";

function Home() {
    const learnRef = useRef(null);
    return (
        <>
            <Box sx={{
                width: '100vw',
                height: '500vh',
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
            {/* <GradientBackground pageHeight={'200vh'}/> */}
            <Container sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <section id="top-section">
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                        <Typography variant="h2" sx={{ textAlign: 'center', pb: 2, fontWeight: 'bold' }}>O R M A B A</Typography>
                        <Button variant="outlined" size="medium" sx={{ color: 'primary.main' }}
                                onClick={() => learnRef.current.scrollIntoView({behavior: 'smooth'})}>learn</Button>
                    </Box>
                </section>
                
                <section id="what-section" ref={learnRef}>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        {/* desktop version */}
                        <Box sx={{mt: 16, width: '100%', display: {xs: 'none', md: 'flex'}, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mb: 10}}>
                            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Typography variant="h3" sx={{ textAlign: 'left', display: 'inline', color: 'secondary.light', fontStyle: 'italic', mr: 2}}>What</Typography>
                                <Typography variant="h3" sx={{ textAlign: 'left', display: 'inline', mr: 4}}>is ORMABA?</Typography>
                                <span ><hr style={{display: 'inline-flex', width: '44vw'}} /></span>
                            </Box>
                            <Typography variant="body1" sx={{ textAlign: 'justify', mt: 5, pb: 5, width: '75vw'}}>{whatIsORMABA}</Typography>
                        </Box>
                        <Box sx={{width: '100%', display: {xs: 'none', md: 'flex'}, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <span ><hr style={{display: 'inline-flex', width: '40vw'}} /></span>
                                <Typography variant="h3" sx={{ pl: 4,textAlign: 'left', display: 'inline', color: 'secondary.light', fontStyle: 'italic', mr: 2}}>Essence</Typography>
                                <Typography variant="h3" sx={{ textAlign: 'left', display: 'inline'}}>of ORMABA</Typography>
                            </Box>
                            <Typography variant="body1" sx={{ textAlign: 'justify', mt: 5, pb: 5, width: '75vw'}}>{essence}</Typography>
                        </Box>

                        {/* mobile version */}
                        <Box sx={{mt: 8, width: '100%', display: {xs: 'flex', md: 'none'}, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mb: 4}}>
                            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                <Typography variant="h5" sx={{ textAlign: 'left', display: 'inline', color: 'secondary.light', fontStyle: 'italic', mr: 1}}>What</Typography>
                                <Typography variant="h5" sx={{ textAlign: 'left', display: 'inline'}}>is ORMABA?</Typography>
                            </Box>
                            <Typography variant="body1" sx={{ textAlign: 'justify', mt: 5, pb: 5, width: '75vw'}}>{whatIsORMABAshort}</Typography>
                        </Box>
                        <Box sx={{width: '100%', display: {xs: 'flex', md: 'none'}, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                <Typography variant="h5" sx={{ textAlign: 'left', display: 'inline', color: 'secondary.light', fontStyle: 'italic', mr: 1}}>Essence</Typography>
                                <Typography variant="h5" sx={{ textAlign: 'left', display: 'inline'}}>of ORMABA</Typography>
                            </Box>
                            <Typography variant="body1" sx={{ textAlign: 'justify', mt: 5, pb: 5, width: '75vw'}}>{essenceShort}</Typography>
                        </Box>
                    </Box>
                </section>
            </Container>
            </Box>
        </>
    )
}

export default Home