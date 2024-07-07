import { Paper, Typography } from "@mui/material";

export default function AnnouItem({annou}) {
    return (
        <>
            <Paper sx={{bgcolor: 'transparent', maxWidth: {md: '50vw'}, display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', width: "75vw", height: '4em', mb: 6}}>
                <Typography variant="subtitle1">{annou.Title}</Typography>
                <Typography variant="subtitle1">{annou.CreatedAt.substring(0, 10)}</Typography>
            </Paper>
        </>
    )
}