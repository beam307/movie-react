import React, { Component } from "react";
import './detail.scss';
import * as api from "../axios/api";
import { Intro, Credit, Poster, Backdrop, Recommendation, Video } from "../component/detail";

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {},
            cast: null,
            image: {},
            recommendation: null,
            video: null
        }
    }

    componentWillReceiveProps(nextProps) {
            this.getData(nextProps.match.params.id);
    }

    componentDidMount() {
        this.getData(this.props.match.params.id);
    }

    getData(id) {
        api.getMovieDetail(id)
            .then(d => this.setState({ movie: d }));

        api.getMovieCredits(id)
            .then(c => this.setState({ cast: c }));

        api.getMovieImages(id)
            .then(i => this.setState({ image: i }));

        api.getMovieRecommendations(id)
            .then(r => this.setState({ recommendation: r }));

        api.getMovieVideos(id)
            .then(r => this.setState({ video: r }));
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
                    <Video video={ this.state.video }></Video>
                </div>
            </div>
        );
    }
}
