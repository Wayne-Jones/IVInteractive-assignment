import React, {useState} from 'react';
import { Grid } from '@material-ui/core';
const axios = require('axios');


const Form = () => {
    const inquiryOptions = ['Exchanges', 'Purchase Question', 'Billing', 'Quotes', 'Refunds'];
    const submitForm = (e) => {
        e.preventDefault();
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let inquiry = document.getElementById('inquiry');
        let inquirySelection = inquiry.options[inquiry.selectedIndex].value;
        let message = document.getElementById('message').value;
        axios.post('http://localhost:8000/processForm', {
            name: name,
            email: email,
            phone: phone,
            inquiry: inquirySelection,
            message: message
        })
        .then((res)=> {
            console.log(res.data);
        })
        .catch((err) => {
            console.error(err);
            console.error(err.response.data);
        });
    }

    return (
        <Grid container className="form">
            <form onSubmit={(e) => submitForm(e)}>
                <Grid container spacing={3}>
                    <Grid container item xs={12} spacing={3}>
                        <Grid item xs={6}>
                            <label htmlFor="name">Name <span>*</span></label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" aria-placeholder="Enter your name"></input>
                        </Grid>
                        <Grid item xs={6}>
                            <label htmlFor="email">Email <span>*</span></label>
                            <input type="text" id="email" name="email" placeholder="Enter your email" aria-placeholder="Enter your email"></input>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        <Grid item xs={6}>
                            <label htmlFor="phone">Phone <span>*</span></label>
                            <input type="text" id="phone" name="phone" placeholder="Enter your phone number" aria-placeholder="Enter your phone number"></input>
                        </Grid>
                        <Grid item xs={6}>
                            <label htmlFor="inquiry">Subject of Inquiry</label>
                            <select id="inquiry" defaultValue="">
                                <option value="" disabled>— Please select one —</option>
                                {inquiryOptions.map((option, index) =>{
                                    return <option value={option} key={index}>{option}</option>
                                })}
                            </select>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" name="message"></textarea>
                    </Grid>
                    <Grid container item xs={12}>
                        <Grid item xs={6}>
                            <Grid item xs={5}>
                                <button type="submit">SUBMIT</button>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <p><span>* Required Fields.</span> Please be aware that we cannot ensure that communications sent over the Internet are secure. This includes correspondence sent through this form or by email. If you are uncomfortable with such risks, you may contact us by phone instead of using this form.</p>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    )
}

export default Form;
