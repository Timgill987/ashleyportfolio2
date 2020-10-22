import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";


function DevelopmentPage(props) {
    //setting card placeholders for now.
    const { push } = props.history;
    return (
        <div className="development">
            <h1>DevelopmentPage</h1>
            {/* <header>
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
            </Grid> */}
        </div>
    );
}

export default DevelopmentPage;
