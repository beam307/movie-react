import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" fixed='top'>
                <Navbar.Brand href="#home">무비</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">목록</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="검색" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        );
    }
}

export default Header;
