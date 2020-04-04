import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, List } from "./pages";
import { Header, Footer } from "./layout";


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Route exact path="/" component={ Home }/>
                <Route path="/list" component={ List }/>
                <Route path="/detail/:id" component={ List }/>
                <Footer/>
            </div>
        );
    }
}

export default App;
