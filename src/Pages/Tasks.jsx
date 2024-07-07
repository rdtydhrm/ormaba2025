import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CenteredLoader from "../Components/CenteredLoader";
import apiURL from "../APIURL";
import GradientBackground from "../Components/GradientBackground";

function Tasks() {
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
            <GradientBackground pageHeight={'100vh'}/>
        </>
    )
}

export default Tasks