import React from 'react';
import { Grid } from '@material-ui/core';
import playIconUrl from "../assets/playIcon.png";
import circleIconUrl from "../assets/circleIcon.png";

const Gallery = () => {
    return (
        <Grid container className="gallery">
            <Grid container item xs={12} spacing={3}>
                    <Grid container item xs={12} md={6} lg={6}>
                        <Grid item className="galleryItem">
                            <Grid item className="iconWrapper" md={3} lg={2}>
                                <img src={playIconUrl}/>
                            </Grid>
                            <Grid item md={8} lg={6}>
                                <p>Text + Right Aligned Image in Two Lines</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} md={6} lg={6}>
                        <Grid item className="galleryItem">
                            <Grid item className="iconWrapper" md={3} lg={2}>
                                <img src={circleIconUrl}/>
                            </Grid>
                            <Grid item md={8} lg={6}>
                                <p>Text + Right Aligned Image</p>
                            </Grid>
                        </Grid>
                    </Grid>
            </Grid>
        </Grid>
    )
}

export default Gallery
