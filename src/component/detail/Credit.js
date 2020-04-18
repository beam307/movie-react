import React, { Component } from "react";
import "./credit.scss"
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import { imagePath } from "../../util/constants";

export default class Credit extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const casts = this.props.cast;
        const params = {
            breakpoints: {
                1536: {
                    slidesPerView: 8,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 6,
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
                <h3 className="title">주요 출연진</h3>
                { casts &&
                (<Swiper { ...params }>
                    { casts.map(cast => (
                        <div className="cast" key={ cast.cast_id }>
                            <img src={ cast.profile_path ? imagePath.face + cast.profile_path
                                : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg' }/>
                            <p className="name">{ cast.name }</p>
                            <p>{ cast.character }</p>
                        </div>
                    )) }
                </Swiper>)
                }
            </section>
        )
    }
}
