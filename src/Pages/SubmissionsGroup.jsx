import { Box, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom"
import { ormabaGroups } from "../contents";

export default function SubmissionsGroup() {
    const navigate = useNavigate();
    const params = useParams()

    return (
        <> 
            <Button variant="contained" size="medium" sx={{ m: 4, position: 'absolute' }}
                    onClick={() => navigate("/admin/submissions")}>Back</Button>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                    height: '100vh', width: '100vw'}}>
                {ormabaGroups.map((group) => (
                    <Button variant="contained" size="small" sx={{ m: 2 }}
                            onClick={() => navigate(`/admin/submissions/${params.taskID}/${group}`)}>{group}</Button>
                ))}
            </Box>
        </>
    )
}