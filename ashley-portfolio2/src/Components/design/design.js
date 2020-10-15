import React from 'react';
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

import '../../Less/App.less'

function DesignPage() { //setting card placeholders for now.
  return (
    <div className="design">
    <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3}>
                    <CardContent>
        <p>DesignPage</p>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3}>
                    <CardContent>
        <p>DesignPage</p>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3}>
                    <CardContent>
        <p>DesignPage</p>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3}>
                    <CardContent>
        <p>DesignPage</p>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3}>
                    <CardContent>
        <p>DesignPage</p>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3}>
                    <CardContent>
        <p>DesignPage</p>
                    </CardContent>
                </Grid>
                </Grid>
    </div>
  );
}

export default DesignPage;
