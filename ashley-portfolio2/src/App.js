import React, { useState, useEffect, useHistory } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import AboutPage from "./Components/about/about";
import DesignPage from "./Components/design/design";
import DevelopmentPage from "./Components/development/development";
import styled from "styled-components";

import { ButtonsDiv } from "./styles/appStyles";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        };
    }
    clickOn = () => {
        this.setState({ isActive: true });
    };
    clickOff = () => {
        this.setState({ isActive: false });
    };
    render() {
        //let [isActive, setIsActive] = useState(false);

        return (
            <div className="App">
                <BrowserRouter>
                    <div className="about-div">
                        {this.state.isActive ? (
                            <Link to="/about" onClick={this.clickOff}>
                                About Me
                            </Link>
                        ) : null}
                        <div className="appButton">
                            <div className="circle"></div>
                            <Link className="link"
                                to="/design"
                                onClick={this.clickOn}
                            >
                                Instructional Design
                            </Link>
                        </div>
                        <div className="appButton">
                            <div className="circle"></div>
                            <Link className="link"
                                to="/development"
                                onClick={this.clickOn}
                            >
                                Development
                            </Link>
                        </div>
                    </div>
                    <Switch>
                        <Route path="/design" component={DesignPage} />
                        <Route path="/about" component={AboutPage} />
                        <Route
                            path="/development"
                            component={DevelopmentPage}
                        />
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
