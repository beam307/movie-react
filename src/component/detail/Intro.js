import React, { Component } from "react";
import { imagePath } from '../../util/constants';
import "./intro.scss"

export default class Intro extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const release_year = this.props.movie.release_date ? this.props.movie.release_date.split("-")[0] || "" : "";
        const genres = this.props.movie.genres ? this.props.movie.genres.map(g => g.name).join(", ") : "";
        return (
            <div className="header"
                 style={{ 'backgroundImage': `url(${imagePath.original + this.props.movie.backdrop_path})` }}>
                <div className="custom_bg">
                    <div className="intro_wrapper">
                        <div className="real_header">
                            <div className="poster">
                                <img src={imagePath.w300 + this.props.movie.poster_path} alt="포스터"/>
                            </div>
                            <div className="overview">
                                <div className="title">
                                    <h2>{this.props.movie.title} <span className="year">({release_year})</span></h2>
                                    <div className="facts">
                                        <span className="release">{this.props.movie.release_date}</span>
                                        <span className="genres">{genres}</span>
                                        <span className="runtime">{this.props.movie.runtime}분</span>
                                    </div>
                                </div>
                                <div className="header_info">
                                    <h3 className="tagline">{this.props.movie.tagline}</h3>
                                    <h3 className="summary">개요</h3>
                                    <div>
                                        <p>{this.props.movie.overview}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
