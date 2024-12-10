import React from 'react';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Grid, Typography, ThemeProvider, createTheme } from '@mui/material';
import { FaUser, FaPhone, FaEnvelope, FaCommentDots } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "@lottiefiles/lottie-player";
import CompanyName from './Component/CompanyName';
import PageHeader from './Component/PageHeader';
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';

// reCAPTCHA
// 6Ld_2_sSAAAAAJbIESFmlSdYCPbM41B12fTdVf3i

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

const Contact = () => {

    const formik = useFormik({
        initialValues: {
            fullname: '',
            phonenumber: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            fullname: Yup.string().required('Full Name is required'),
            phonenumber: Yup.string().required('Phone Number is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            message: Yup.string().required('Message is required'),
        }),
        onSubmit: (values, { resetForm }) => {
            emailjs.sendForm('service_jgu8a5r', 'template_wtutmlg', '#contactForm', 'SqhtzwskGNPLF05Ug')
                .then((result) => {
                    console.log(result.text);
                    alert('Message sent successfully!');
                    resetForm();
                }, (error) => {
                    console.log(error.text);
                    alert('Failed to send the message, please try again.');
                });
        },
    });



    return (
        <div className="">

            <Helmet>
                <title data-react-helmet="true">Contact Web Design Expressions for affordable custom websites, USA </title>

                <meta data-react-helmet="true" name="description" content="Contact Web Design Expressions for affordable & professional web development services, custom React, SEO, Hosting" />

                <meta data-react-helmet="true" property="og:title" content="Contact Web Design Expressions, webdesignexpressions.net" />
                <meta data-react-helmet="true" property="og:type" content="Web Design Company" />
                <meta data-react-helmet="true" property="og:url" content="https://webdesignexpressions.net/Contact" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/Assets/WebDesign.jpg" />
                <meta data-react-helmet="true" property="og:description" content="For affordable and professional development services contact Web Design Expressions" />

            </Helmet>

            <PageHeader pageTitle={<><span>Contact </span><CompanyName /></>} />
            <div className="mx-16">



                <div className='lg:flex lg:gap-5'>
                    <div className='lg:w-9/12'>
                        <div>
                            <ThemeProvider theme={theme}>
                                <Container maxWidth="md">
                                    <form id="contactForm" onSubmit={formik.handleSubmit}>
                                        <Grid container spacing={2}>

                                            <Grid item xs={12}>
                                                <div className="relative">
                                                    <Typography variant="subtitle1">
                                                        Full Name
                                                    </Typography>
                                                    <TextField
                                                        fullWidth
                                                        variant="outlined"
                                                        id="fullname"
                                                        name="fullname"
                                                        value={formik.values.fullname}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                                                        helperText={formik.touched.fullname && formik.errors.fullname}
                                                        InputProps={{
                                                            startAdornment: <FaUser className="mr-2 text-[#B83855]" />,
                                                            sx: { backgroundColor: '#F4F6F6' },
                                                        }}
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <div className="relative">
                                                    <Typography variant="subtitle1" >
                                                        Phone Number
                                                    </Typography>
                                                    <TextField
                                                        fullWidth
                                                        variant="outlined"
                                                        id="phonenumber"
                                                        name="phonenumber"
                                                        value={formik.values.phonenumber}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        error={formik.touched.phonenumber && Boolean(formik.errors.phonenumber)}
                                                        helperText={formik.touched.phonenumber && formik.errors.phonenumber}
                                                        InputProps={{
                                                            startAdornment: <FaPhone className="mr-2 text-[#B83855]" />,
                                                            sx: { backgroundColor: '#F4F6F6' },
                                                        }}
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <div className="relative">
                                                    <Typography variant="subtitle1" >
                                                        Email
                                                    </Typography>
                                                    <TextField
                                                        fullWidth
                                                        variant="outlined"
                                                        id="email"
                                                        name="email"
                                                        value={formik.values.email}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                                        helperText={formik.touched.email && formik.errors.email}
                                                        InputProps={{
                                                            startAdornment: <FaEnvelope className="mr-2 text-[#B83855]" />,
                                                            sx: { backgroundColor: '#F4F6F6' },
                                                        }}
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <div className="relative">
                                                    <Typography variant="subtitle1" >
                                                        Message
                                                    </Typography>
                                                    <TextField
                                                        fullWidth
                                                        variant="outlined"
                                                        id="message"
                                                        name="message"
                                                        value={formik.values.message}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        error={formik.touched.message && Boolean(formik.errors.message)}
                                                        helperText={formik.touched.message && formik.errors.message}
                                                        multiline
                                                        rows={4}
                                                        InputProps={{
                                                            startAdornment: <FaCommentDots className="mr-2 text-[#B83855]" />,
                                                            sx: { backgroundColor: '#F4F6F6' },
                                                        }}
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button
                                                    color="secondary"
                                                    variant="contained"
                                                    type="submit"
                                                    fullWidth
                                                    startIcon={<IoMdSend size={20} />}
                                                >
                                                    Send
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Container>
                            </ThemeProvider>
                        </div>
                    </div>
                    <div className='lg:w-3/12'>
                        <div>

                            <lottie-player
                                autoplay
                                loop
                                // hover
                                // mode="bounce"
                                src="https://assets9.lottiefiles.com/packages/lf20_u25cckyh.json"
                                style={{ width: '220px', height: 'auto', margin: 'auto' }}
                            >
                            </lottie-player>
                        </div>
                        <div className='px-5 pt-5'>
                            Our custom development services and designs are provided affordably while maintaining professional quality. If you have questions or comments, feel free to contact us.
                        </div>

                        <div className='pt-5 px-5'>
                            <ThemeProvider theme={theme}>
                                <Button fullWidth variant="contained" id="btnSubmit" color="secondary" title="Call for afforable/quality web design" href="tel:9494197273" label=""><PhonelinkRingIcon></PhonelinkRingIcon>&nbsp;&nbsp;<b>Call Now</b> </Button>
                            </ThemeProvider>
                        </div>

                        <div className='pt-5 px-5'>
                            <ThemeProvider theme={theme}>
                                <Button fullWidth variant="contained" id="btnSubmit" color="secondary" title="Chat/call on whatsapp for your web design needs" href="https://api.whatsapp.com/send?phone=12017010718" label=""><WhatsAppIcon></WhatsAppIcon>&nbsp;&nbsp;<b>Chat Now</b> </Button>
                            </ThemeProvider>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Contact