import { Box, Icon, Paper, Typography } from "@mui/material";
import CampaignIcon from '@mui/icons-material/Campaign';
import { Link } from "react-router-dom";

export default function AnnouItem({annou}) {
    return (
        <>
            <Link style={{textDecoration: 'none'}} to={`/announcements/${annou.ID}`}>
                <Paper elevation={12} sx={{bgcolor: 'transparent', maxWidth: {md: '40vw'}, display: 'flex', flexDirection: 'column', width: "75vw", mb: 6}}>
                    <Box sx={{display: 'flex'}}>
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mx: 3 }}>
                            <CampaignIcon fontSize="large" sx={{color: 'primary.main'}}/>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', py: 2}}>
                            <Typography variant="h5" sx={{color: 'primary.main'}}><b>{annou.Title}</b></Typography>
                            <Typography variant="subtitle1" ><i>{annou.CreatedAt.substring(0, 10)}</i></Typography>
                        </Box>
                    </Box>
                </Paper>
            </Link>
        </>
    )
}