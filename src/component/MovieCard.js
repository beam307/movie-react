import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Card } from "react-bootstrap";
import { imagePath } from '../util/constants';
import "./movieCard.scss"

export default class MovieCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="p-2 col-sm-12 col-md-3">
                <Link to={`/detail/${this.props.movie.id}`} className="movie-link">
                    <Card>
                        <Card.Img variant="top"
                                  src={ this.props.movie.backdrop_path ? (imagePath.w200 + this.props.movie.backdrop_path) : "/images/noimg.gif" }/>
                        <Card.Body>
                            <Card.Title>{ this.props.movie.title }</Card.Title>
                            <Card.Text>{ this.props.movie.overview }</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">평점 : { this.props.movie.vote_average }</small>
                            <small className="text-muted">개봉일 : { this.props.movie.release_date }</small>
                        </Card.Footer>
                    </Card>
                </Link>
            </div>
        )
    }
}
