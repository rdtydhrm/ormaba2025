import { Box, Dialog, DialogTitle, List, ListItemText, TextField, Typography } from "@mui/material";
import apiURL from "../APIURL";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function GroupDialog(props) {
    const { onClose, group, open} = props;
  
    const handleClose = () => {
        onClose();
    };

    const getFriends = async () => {
        const response = await axios.get(`${apiURL}/api/friends/Kelompok%20${group}`)
        return response.data
    }

    const {data: friends} = useQuery({
        queryKey: ["friends"],
        queryFn: getFriends,
    })
  
    return (
        <Dialog onClose={handleClose} open={open} fullWidth={true} maxWidth={'md'}>
            <DialogTitle>{`Kelompok ${group}`}</DialogTitle>
            <Box sx={{mx: 4, mb: 2}}>
                <List>
                    {friends?.map((name) => (
                        <Typography variant="subtitle1">{name}</Typography>
                    ))}
                </List>
            </Box>
        </Dialog>
    );
}

// nama: 
// fakultas: 
// jurusan: 
// nomor: 
// instagram: 