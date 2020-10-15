import React from 'react';
import '../../Less/App.less'
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

function DevelopmentPage() { //setting card placeholders for now.
  return (
    <div className="development">
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
