import React, { Component } from "react";
import './detail.scss';
import * as api from "../axios/api";
import { Intro } from "../component/detail";

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {}
        }
    }

    componentDidMount() {
        api.getMovieDetail(this.props.match.params.id)
            .then(r => {
                console.log(r);
                this.setState({
                    movie: r
                });
            });
        api.getMovieCredits(this.props.match.params.id)
            .then(r => {
                console.log(r);

            });
        api.getMovieImages(this.props.match.params.id)
            .then(r => {
                console.log(r);

            });
        api.getMovieRecommendations(this.props.match.params.id)
            .then(r => {
                console.log(r);

            });
        api.getMovieVideos(this.props.match.params.id)
            .then(r => {
                console.log(r);
                           });
    }

    render() {

        return (
            <div>
                <Intro movie = {this.state.movie}></Intro>
            </div>
        );
    }
}
