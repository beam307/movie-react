import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import MovieCard from "../component/MovieCard";
import * as api from "../axios/api";
import './list.scss';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nowPlaying: [],
            popular: [],
            topRated: [],
            upComing: [],
        };
    }

    componentDidMount() {
        api.getList("now_playing")
            .then(r => {
                this.setState({
                    nowPlaying: r
                });
            });
        api.getList("popular")
            .then(r => {
                this.setState({
                    popular: r
                });
            });
        api.getList("top_rated")
            .then(r => {
                this.setState({
                    topRated: r
                });
            });
        api.getList("upcoming")
            .then(r => {
                this.setState({
                    upComing: r
                });
            });
    }

    render() {
        const nowPlaying = this.state.nowPlaying;
        const popular = this.state.popular;
        const topRated = this.state.topRated;
        const upComing = this.state.upComing;
        return (
            <Tabs defaultActiveKey="upComing" className="nav-fill">
                <Tab eventKey="nowPlaying" title="현재 상영중">
                    <div className="row mx-3 my-2">
                        { nowPlaying.map((movie, index) =>
                            <MovieCard key={ index } movie={ movie }/>)
                        }
                    </div>
                </Tab>
                <Tab eventKey="popular" title="인기 영화">
                    <div className="row mx-3 my-2">
                        { popular.map((movie, index) =>
                            <MovieCard key={ index } movie={ movie }/>)
                        }
                    </div>
                </Tab>
                <Tab eventKey="topRated" title="유명 영화">
                    <div className="row mx-3 my-2">
                        { topRated.map((movie, index) =>
                            <MovieCard key={ index } movie={ movie }/>)
                        }
                    </div>
                </Tab>
                <Tab eventKey="upComing" title="상영 예정">
                    <div className="row mx-3 my-2">
                        { upComing.map((movie, index) =>
                            <MovieCard key={ index } movie={ movie }/>)
                        }
                    </div>
                </Tab>
            </Tabs>
        );
    }
}
