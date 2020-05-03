import React, { Component } from "react";
import "./video.scss"
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import { videoPath, videoImage } from "../../util/constants";

export default class Video extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const video = this.props.video;
        const params = {
            shouldSwiperUpdate: true,
            breakpoints: {
                1536: {
                    slidesPerView: 4,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                360: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            }
        };
        return (
            <section className="video">
                <h3 className="title">영상</h3>
                { video &&
                (<Swiper { ...params }>
                    { video.map(v => (
                        <div key={ v.id }>
                            <div className="image-wrapper">
                                <img className="video-image" src={ videoImage(v.key) }/>
                                <div className="play_background">
                                    <a href={ videoPath(v.key) } target="_blank">
                                        <span></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )) }
                </Swiper>)
                }
            </section>
        )
    }
}
