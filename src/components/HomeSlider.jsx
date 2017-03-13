import React, {Component} from "react";
import Slick from 'react-slick';


class HomeSlider extends Component {
    // constructor(){
    //     super();
    // }

    render() {
        const settings = {
            dots: true,
            infinite:false,
            speed: 500,
            slideToShow: 1,
            slideToScroll: 1
        };

        return (
            <div id="homeSlider">
                <Slick {...settings}>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                </Slick>
            </div>
        )
    }
}

export default HomeSlider;
