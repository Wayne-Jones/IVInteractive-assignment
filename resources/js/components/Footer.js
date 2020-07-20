import React from 'react';
import { Grid } from '@material-ui/core';
import footerImgUrl from "../assets/footerImg.png";

const Footer = () => {
    return (
        <Grid container className="footer">
            <Grid container item xs={12} spacing={3}>
                <Grid container item xs={10}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </Grid>
                <Grid container item xs={2}>
                    <img src={footerImgUrl}/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Footer;
