import Carousel from "react-material-ui-carousel"
import GalleryItem from "./GalleryItem"

export default function GalleryCarousel(props)
{
    var images = ['/mentor1.jpg', '/mentor1.jpg', '/mentor1.jpg']

    return (
        <Carousel>
            {
                images.map( (image, i) => <GalleryItem key={i} image={image} /> )
            }
        </Carousel>
    )
}