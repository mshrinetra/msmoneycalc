import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Loan from "./Loan";
import Investment from "./Investment";
import Footer from "./footer";

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className="container">
                        <Route exact path="/" component={Loan} />
                        <Route exact path="/investment" component={Investment} />
                    </div>
                </BrowserRouter>
                <Footer />
            </div>
        );
    }
}

export default App;
