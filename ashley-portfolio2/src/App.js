import React, { useState,useEffect, useHistory } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import AboutPage from "./Components/about/about";
import DesignPage from "./Components/design/design";
import DevelopmentPage from "./Components/development/development";
import "./Less/App.less";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
    }
    
    render() {
        //let [isActive, setIsActive] = useState(false);

        return (
            <div className="App">
            <BrowserRouter>
                <Link to="/design" onClick={this.setState({isActive: true})}>
                    Instructional Design
                </Link>
                <Link to="/development" onClick={this.setState({isActive: true})}>
                    Development
                </Link>
                {this.state.isActive ? (
                    <Link to="/about" onClick={this.setState({isActive: false})}>
                        About Me
                    </Link>
                ) : null}
                <Switch>
                    <Route path="/design" component={DesignPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/development" component={DevelopmentPage} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}
}

export default App;
// <AboutPage />
//<DesignPage />
//<DevelopmentPage />
