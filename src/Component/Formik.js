import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import emailjs from 'emailjs-com';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#99aab5", // custom primary color
        },
        secondary: {
            main: "#C13E39", // custom secondary color
        },
    },
});


const ContactForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        event.preventDefault();

        // Send the email

        emailjs.sendForm('service_jgu8a5r', 'template_wtutmlg', event.target, 'rTqkohLmFs0O_rtnF')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        // Reset the form
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
    };


    return (
        <form autoComplete="off" onSubmit={handleSubmit}>

            <div >
                <TextField
                    className="dark:text-white"
                    variant="standard"
                    fullWidth
                    label="Name"
                    name="name"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    type="text"
                />
                <TextField
                    className="dark:text-white"
                    variant="standard"
                    fullWidth
                    label="Phone"
                    name="phone"
                    required
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    type="tel"
                />
                <TextField
                    className="dark:text-white"
                    variant="standard"
                    fullWidth
                    label="Email"
                    name="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                />
                <TextField
                    className="dark:text-white"
                    fullWidth
                    variant="standard"
                    label="Message"
                    name="message"
                    required
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    multiline
                    rows={9}
                />
                <div className='pt-5'>
                    <ThemeProvider theme={theme}>
                        <Button
                            fullWidth
                            variant="contained"
                            // onClick={handleRecaptchaVerify}
                            type="submit"
                            color="secondary"
                            style={{ color: '#b3cbff' }}
                        >
                            <SendIcon />
                            &nbsp;&nbsp;
                            <b>Submit</b>
                        </Button>
                    </ThemeProvider>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;