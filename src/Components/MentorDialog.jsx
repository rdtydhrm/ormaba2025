import { Box, Dialog, DialogTitle, TextField } from "@mui/material";

export default function MentorDialog(props) {
    const { onClose, mentor, open } = props;
  
    const handleClose = () => {
      onClose();
    };
  
    return (
        <Dialog onClose={handleClose} open={open} fullWidth={true} maxWidth={'md'}>
            <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'center', alignItems: 'center'}}>
                <Box sx={{m: 4, display: {xs: 'none', md: 'flex'}, justifyContent: 'center'}}>
                    <img src={mentor.image} alt={mentor.nama} style={{height: '50vh'}}/>
                </Box>
                <Box sx={{m: 4, display: {xs: 'flex', md: 'none'}, justifyContent: 'center'}}>
                    <img src={mentor.image} alt={mentor.nama} style={{height: '30vh'}}/>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', mr: {xs: 0, md: 4}, mb: {xs: 4, md: 0}, width: {xs: '90%', md: '100vw'}}}>
                    <TextField
                        label="Nama"
                        defaultValue={mentor.nama}
                        sx={{pb: 2, width: '100%'}}
                        spellCheck={false}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        label="Fakultas"
                        defaultValue={mentor.fakultas}
                        sx={{pb: 2}}
                        spellCheck={false}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        label="Jurusan"
                        defaultValue={mentor.jurusan}
                        sx={{pb: 2}}
                        spellCheck={false}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        label="Nomor"
                        defaultValue={mentor.nomor}
                        sx={{pb: 2}}
                        spellCheck={false}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        label="Instagram"
                        defaultValue={mentor.instagram}
                        sx={{}}
                        spellCheck={false}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Box>
            </Box>
        </Dialog>
    );
}

// nama: 
// fakultas: 
// jurusan: 
// nomor: 
// instagram: 