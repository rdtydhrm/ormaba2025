import Carousel from "react-material-ui-carousel"
import GalleryItem from "./GalleryItem"

export default function GalleryCarousel(props)
{
    var images = ['/landscape1.png', '/landscape2.png', '/landscape3.png', '/landscape4.png', '/landscape5.png']

    return (
        <Carousel>
            {
                images.map( (image, i) => <GalleryItem key={i} image={image} /> )
            }
        </Carousel>
    )
}