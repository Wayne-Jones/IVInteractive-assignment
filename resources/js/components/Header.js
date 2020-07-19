import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Header = () => {
    return (
        <Grid item xs={12} className="header">
           <Typography variant="h5">Contact Form Demo Project</Typography> 
        </Grid>
    )
}

export default Header;
