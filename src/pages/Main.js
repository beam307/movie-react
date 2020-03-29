import React, { Component } from "react";
import * as api from "../axios/api";
import { imagePath } from '../util/constants';
import { Card } from "react-bootstrap";
import './main.scss';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            overview: null,
            poster: null,
        };
    }

    componentDidMount() {
        api.getRandomWeekMovie().then(r => {
            this.setState({
                title: r.title,
                overview: r.overview,
                backdrop: r.backdrop_path,
            })
        });
    }

    render() {
        return (
            <Card className="bg-dark text-white main">
                {this.state.backdrop ?
                    <Card.Img className="backdrop" src={imagePath.original + this.state.backdrop}/> : null}
                <Card.ImgOverlay className="overlay">
                    <Card.Title className="title">{this.state.title}</Card.Title>
                    <Card.Text className="description">
                        {this.state.overview}
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        );
    }
}

export default Main;
