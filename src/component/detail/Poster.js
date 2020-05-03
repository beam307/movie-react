import React, { Component } from "react";
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import { imagePath } from "../../util/constants";

export default class Poster extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const posters = this.props.poster;
        const params = {
            shouldSwiperUpdate: true,
            breakpoints: {
                1536: {
                    slidesPerView: 6,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 4,
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
                <h3 className="title">포스터</h3>
                { posters &&
                <Swiper {...params}>
                    { posters.map((poster, index) => (
                        <img className="poster" key={ index } src={ imagePath.w200 + poster.file_path }/>
                    )) }
                </Swiper>
                }
            </section>
        )
    }
}
