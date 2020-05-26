import React, {Component} from 'react';
import classes from'./ImageCarousel.module.css';
import CleanHands from '../Images/cleanhands.jpg';
import Heroes from '../Images/heroes.jpg';
import GroupSpread from '../Images/groupspread.jpg';
import SocialDistancing from '../Images/socialdistancing.jpg';
import WearMask from '../Images/staysafewearmask.jpg';
import Thankyou from '../Images/thankyou.jpg';
import Stopthespread from '../Images/stopthespread.jpg'; 
import { Carousel, CarouselItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class ImageCarousel extends Component {

    render() {
        return(
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        active
                        src={CleanHands}
                        alt="First slide"
                        style={{width:"320px", height:"400px"}}
                        />

                    </Carousel.Item>
                    <CarouselItem>
                        <img
                        className="d-block w-100"
                        src={Heroes}
                        alt="Third slide"
                        style={{width:"320px", height:"400px"}}

                        />
                    </CarouselItem>
                    
                    <CarouselItem>
                        <img
                        className="d-block w-100"
                        src={WearMask}
                        alt="Third slide"
                        style={{width:"320px", height:"400px"}}

                        />
                    </CarouselItem>
                </Carousel>
            </div>
            
        );
    }
}

export default ImageCarousel;