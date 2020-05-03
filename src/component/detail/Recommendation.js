import React, { Component } from "react";
import "./recommendation.scss"
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import { imagePath } from "../../util/constants";
import { Link } from "react-router-dom";

export default class Recommendation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const recommendation = this.props.recommendation;
        const params = {
            shouldSwiperUpdate: true,
            breakpoints: {
                1536: {
                    slidesPerView: 6,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20
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
            <section className="recommend">
                <h3 className="title">추천 영화</h3>
                { recommendation &&
                (<Swiper { ...params }>
                    { recommendation.map(rec => (
                        <div key={ rec.id }>
                            <Link to={ `/detail/${ rec.id }` } className="movie-link">
                                <img className="recommend-img" src={ imagePath.w300 + rec.backdrop_path }/>
                            </Link>
                            <div className="meta">
                                <span>{ rec.title }</span>
                                <span>{ rec.release_date }</span>
                            </div>
                        </div>
                    )) }
                </Swiper>)
                }
            </section>
        )
    }
}
