import Carousel from "react-material-ui-carousel"
import GalleryItem from "./GalleryItem"

export default function GalleryCarousel(props)
{
    var images = ['/ormaba25/landscape1.jpg', '/ormaba25/landscape2.jpg', '/ormaba25/landscape3.jpg', '/ormaba25/landscape4.jpg', '/ormaba25/landscape5.jpg']

    return (
        <Carousel>
            {
                images.map( (image, i) => <GalleryItem key={i} image={image} /> )
            }
        </Carousel>
    )
}