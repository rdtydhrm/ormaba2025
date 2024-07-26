import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"

export default function AdminDashboard() {
    const navigate = useNavigate();

    return (
        <> 
            <Button variant="contained" size="medium" sx={{ m: 4, position: 'absolute' }}
                    onClick={() => navigate("/")}>Back</Button>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                    height: '100vh', width: '100vw'}}>
                <Button variant="contained" size="large" sx={{ m: 4 }}
                        onClick={() => navigate("/admin/students")}>Data Siswa</Button>
                <Button variant="contained" size="large" sx={{ m: 4 }}
                        onClick={() => navigate("/admin/submissions")}>Data Tugas</Button>
            </Box>
        </>
    )
}