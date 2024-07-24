import Carousel from "react-material-ui-carousel"
import GalleryItem from "./GalleryItem"

export default function GalleryCarousel(props)
{
    var images = ['/gallery1.png', '/gallery2.png', '/gallery3.png']

    return (
        <Carousel>
            {
                images.map( (image, i) => <GalleryItem key={i} image={image} /> )
            }
        </Carousel>
    )
}