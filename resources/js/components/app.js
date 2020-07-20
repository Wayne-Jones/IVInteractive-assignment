import React from 'react';
import ReactDOM from 'react-dom';
import {Grid} from '@material-ui/core';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';
import Gallery from './Gallery';

function App() {
    return (
        <>
            <Grid container className="wrapper">
                <Header/>
                <Gallery/>
                <Form />
                <Footer />
            </Grid>
        </>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
