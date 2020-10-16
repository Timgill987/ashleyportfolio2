import React from "react";
import "../../Less/App.less";
import App from "../../App";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import AboutPage from "../about/about";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import DesignPage from "../design/design";

function DevelopmentPage(props) {
    //setting card placeholders for now.
    const { push } = props.history;
    return (
        <div className="development">
            <header>
                <button onClick={() => push("/")}>Back to Home</button>
                <div>
                </div>
            </header>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3}>
                    <CardContent>
                        <p>DevelopmentPage</p>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3}>
                    <CardContent>
                        <p>DevelopmentPage</p>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3}>
                    <CardContent>
                        <p>DevelopmentPage</p>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3}>
                    <CardContent>
                        <p>DevelopmentPage</p>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3}>
                    <CardContent>
                        <p>DevelopmentPage</p>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3}>
                    <CardContent>
                        <p>DevelopmentPage</p>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default DevelopmentPage;
