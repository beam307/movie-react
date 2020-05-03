import React, { Component } from "react";
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import { imagePath } from "../../util/constants";

export default class Backdrop extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const backdrops = this.props.backdrop;
        const params = {
            shouldSwiperUpdate: true,
            breakpoints: {
                1536: {
                    slidesPerView: 4,
                    spaceBetween: 30
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            }
        };
        return (
            <section>
                <h3 className="title">배경</h3>
                { backdrops &&
                <Swiper {...params}>
                    { backdrops.map((poster, index) => (
                        <img className="backdrop" key={ index } src={ imagePath.w200 + poster.file_path }/>
                    )) }
                </Swiper>
                }
            </section>
        )
    }
}
