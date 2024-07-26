import { Box, Icon, Paper, Typography } from "@mui/material";
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from "react-router-dom";

export default function SubmissionItem({submission}) {
    const statusColor = submission.status === "Pending" ? "yellow" : submission.status === "Done" ? "lime" : "red"
    return (
        <>
            <Link style={{textDecoration: 'none'}} to={`/submissions/${submission.id}`}>
                <Paper elevation={12} sx={{bgcolor: 'transparent', maxWidth: {md: '40vw'}, display: 'flex', flexDirection: 'column', width: "75vw", mb: 6}}>
                    <Box sx={{display: 'flex'}}>
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mx: 3 }}>
                            <AssignmentIcon fontSize="large" sx={{color: 'secondary.light'}}/>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', py: 2}}>
                            <Typography variant="h5" sx={{color: 'secondary.light'}}><b>{submission.task.title} ({submission.task.category})</b></Typography>
                            <Typography variant="subtitle1" ><i>Deadline: {submission.deadline.substring(0, 10)}</i></Typography>
                            <Typography variant="subtitle1" ><i>Status: <Box component={'span'} sx={{color: `${statusColor}`}}><b>{submission.status}</b></Box></i></Typography>
                        </Box>
                    </Box>
                </Paper>
            </Link>
        </>
    )
}