import React, { Component } from 'react';
import Main from "./pages/Main";
import Header from "./layout/Header";
import Footer from "./layout/Footer";


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default App;
