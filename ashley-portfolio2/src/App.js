import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import AboutPage from "./Components/about/about";
import DesignPage from "./Components/design/design";
import DevelopmentPage from "./Components/development/development";
import "./Less/App.less";

function App(props) {
    const { location } = props;
    function hideAbout() {
        if (!location.pathname.match("/")) {
            return <Link to="/about">About Me</Link>;
        }
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Link to="/design">Instructional Design</Link>
                <Link to="/development">Development</Link>
                {hideAbout()}
                {/* <Link to="/about">About Me</Link> */}
                <Switch>
                    <Route exact path="/design" component={DesignPage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route
                        exact
                        path="/development"
                        component={DevelopmentPage}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
// <AboutPage />
//<DesignPage />
//<DevelopmentPage />
