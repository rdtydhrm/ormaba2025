import { Box, Button, Dialog, DialogActions, DialogTitle, List, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import apiURL from "../APIURL";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CenteredLoader from "./CenteredLoader";
import { Link } from "react-router-dom";

export default function GroupDialog(props) {
    const { onClose, group, open, whatsapp} = props;
  
    const handleClose = () => {
        onClose();
    };

    const getFriends = async () => {
        const response = await axios.get(`${apiURL}/api/friends/${group}`)
        return response.data
    }
    
    const {data: friends, isLoading} = useQuery({
        queryKey: ["friends"],
        queryFn: getFriends,
    })
    
    const createData = (name, faculty) => {
        return { name, faculty};
    }

    const rows = []
    friends?.map(({name, faculty}) => rows.push(createData(name, faculty)))

    if (isLoading) {
        return <CenteredLoader/>
    }
  
    return (
        <Dialog onClose={handleClose} open={open} fullWidth={true} maxWidth={'md'}>
            <DialogTitle>{`Kelompok ${group}`}</DialogTitle>
            <Box sx={{mx: 4, mb: 2}}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Nama</TableCell>
                        <TableCell>Fakultas</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell>{row.faculty}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', mb: 2}}>
            <DialogActions>
                <Link to={whatsapp}>
                    <Button variant="contained">
                        <Typography>Link Grup Whatsapp</Typography>
                    </Button>
                </Link>
            </DialogActions>
            </Box>
        </Dialog>
    );
}

// nama: 
// fakultas: 
// jurusan: 
// nomor: 
// instagram: 