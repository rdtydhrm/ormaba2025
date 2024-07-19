import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CenteredLoader from "../Components/CenteredLoader";
import apiURL from "../APIURL";
import { Box } from "@mui/material";
import background from "/background6.png"

function Tasks() {
    const navigate = useNavigate()
    const getUserInfo = async () => {
        const response = await axios.get(`${apiURL}/api/info`)
        return response.data
    }

    const {data: user, isLoading, error} = useQuery({
        queryKey: ["getUser"],
        queryFn: getUserInfo,
    })

    if (isLoading) {
        return <CenteredLoader/>
    }

    if (error) {
        navigate("/login")
    }
    return (
        <>
            
            {/* <GradientBackground pageHeight={'100vh'}/> */}
            <Box sx={{
                width: '100vw',
                height: '500vh',
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
                <Box sx={{height: '100vh'}}/>
            </Box>
        </>
    )
}

export default Tasks