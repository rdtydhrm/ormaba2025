import { Card, CardMedia } from "@mui/material";

export default function GalleryItem({image})
{
    return (
        <Card>
            <CardMedia image={image} sx={{height: '45vw', width: '80vw'}} />
        </Card>
    )
}