import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CenteredLoader from "../Components/CenteredLoader";
import apiURL from "../APIURL";
import { Box } from "@mui/material";

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
            <Navbar />
            {/* <GradientBackground pageHeight={'100vh'}/> */}
            <Box sx={{
                position: 'absolute',
                backgroundColor: '#000000', 
                backgroundImage: 'linear-gradient(19deg, #000000 0%, #371c4b 100%)',
                // filter: 'brightness(17%)', 
                width: '100vw',
                zIndex: '-1',
                top: 0,
                left: 0,
            }}>
                <Box sx={{height: '100vh'}}/>
            </Box>
        </>
    )
}

export default Tasks