import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"

export default function Students() {
    const groups = ["1", "2", "3", "4", "5", "6", "7", "8"]

    const navigate = useNavigate();

    return (
        <> 
            <Button variant="contained" size="medium" sx={{ m: 4, position: 'absolute' }}
                    onClick={() => navigate("/admin/dashboard")}>Back</Button>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                    height: '100vh', width: '100vw'}}>
                <Button variant="contained" size="small" sx={{ m: 2 }}
                        onClick={() => navigate("/admin/students/all")}>Semua Siswa</Button>
                {groups.map((group) => (
                    <Button variant="contained" size="small" sx={{ m: 2 }}
                            onClick={() => navigate(`/admin/students/Kelompok%20${group}`)}>Kelompok {group}</Button>
                ))}
            </Box>
        </>
    )
}