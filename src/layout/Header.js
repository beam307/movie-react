import React, { Component } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" fixed='top' className="position-relative">
                <Navbar.Brand><Link to="/" className="link">무비</Link></Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/list" className="list nav-link">목록</Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl type="text" placeholder="검색" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        );
    }
}

export default Header;
