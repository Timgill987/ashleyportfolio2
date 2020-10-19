import React, { useState, useEffect, useHistory } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import AboutPage from "./Components/about/about";
import DesignPage from "./Components/design/design";
import DevelopmentPage from "./Components/development/development";
import "./Less/App.less";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        };
    }
    clickOn = () => {
        this.setState({ isActive: true });
    }
    clickOff= () => {
        this.setState({ isActive: false });
    }
    render() {
        //let [isActive, setIsActive] = useState(false);

        return (
            <div className="App">
                <BrowserRouter>
                    <Link to="/design" onClick={this.clickOn}>
                        Instructional Design
                    </Link>
                    <Link to="/development" onClick={this.clickOn}>
                        Development
                    </Link>
                    {this.state.isActive ? (
                        <Link to="/about" onClick={this.clickOff}>
                            About Me
                        </Link>
                    ) : null}
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
