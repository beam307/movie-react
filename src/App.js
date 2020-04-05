import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, List, Detail } from "./pages";
import { Header, Footer } from "./layout";


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Route exact path="/" component={ Home }/>
                <Route path="/list" component={ List }/>
                <Route path="/detail/:id" component={ Detail }/>
                <Footer/>
            </div>
        );
    }
}

export default App;
