import Carousel from "react-material-ui-carousel"
import GalleryItem from "./GalleryItem"

export default function GalleryCarousel(props)
{
    var images = ['/landscape1.jpg', '/landscape2.jpg', '/landscape3.jpg', '/landscape4.jpg']

    return (
        <Carousel>
            {
                images.map( (image, i) => <GalleryItem key={i} image={image} /> )
            }
        </Carousel>
    )
}