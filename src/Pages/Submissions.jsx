import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"
import apiURL from "../APIURL";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CenteredLoader from "../Components/CenteredLoader";

export default function Submissions() {
    const navigate = useNavigate();

    const getTasks = async () => {
        const response = await axios.get(`${apiURL}/api/admin/tasks`)
        return response.data
    }

    const {data: tasks, isLoading, error} = useQuery({
        queryKey: ["tasks"],
        queryFn: getTasks,
    })

    if (isLoading) {
        return <CenteredLoader/>
    }

    if (error) {
        navigate("/admin/dashboard")
    }

    return (
        <> 
            <Button variant="contained" size="medium" sx={{ m: 4, position: 'absolute' }}
                    onClick={() => navigate("/admin/dashboard")}>Back</Button>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                    height: '100vh', width: '100vw'}}>
                {tasks.map((task) => (
                    <Button variant="contained" size="small" sx={{ m: 2 }}
                            onClick={() => (navigate(`/admin/submissions/${task.id}`))}>{task.title}</Button>
                ))}        
            </Box>
        </>
    )
}