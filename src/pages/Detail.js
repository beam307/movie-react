import React, { Component } from "react";
import './detail.scss';
import * as api from "../axios/api";
import { Intro, Credit, Poster, Backdrop, Recommendation } from "../component/detail";

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {},
            cast: null,
            image: {},
            recommendation: null
        }
    }

    componentDidMount() {
        api.getMovieDetail(this.props.match.params.id)
            .then(d => this.setState({ movie: d }));

        api.getMovieCredits(this.props.match.params.id)
            .then(c => this.setState({ cast: c }));

        api.getMovieImages(this.props.match.params.id)
            .then(i => this.setState({ image: i }));

        api.getMovieRecommendations(this.props.match.params.id)
            .then(r => this.setState({ recommendation: r }));

        api.getMovieVideos(this.props.match.params.id)
            .then(r => {
            });
    }

    render() {

        return (
            <div>
                <Intro movie={ this.state.movie }></Intro>
                <div className="content_wrapper">
                    <Credit cast={ this.state.cast }></Credit>
                    <Poster poster={ this.state.image.posters }></Poster>
                    <Backdrop backdrop={ this.state.image.backdrops }></Backdrop>
                    <Recommendation recommendation={ this.state.recommendation }></Recommendation>
                </div>
            </div>
        );
    }
}
