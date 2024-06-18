import React from 'react'
import { Helmet } from 'react-helmet';
import Button from '@mui/material/Button';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ContactForm from './Component/Formik';
import "@lottiefiles/lottie-player";
import { Divider } from '@mui/material'
import { CompanyName } from './Component/CompanyName';

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

export default function Contact() {
    return (
        <div>
            <Helmet>
                <title data-react-helmet="true">Contact Web Design Expressions for affordable custom websites, USA </title>

                <meta data-react-helmet="true" name="description" content="Contact Web Design Expressions for affordable & professional web development services, custom React, SEO, Hosting" />

                <meta data-react-helmet="true" property="og:title" content="Contact Web Design Expressions, webdesignexpressions.net" />
                <meta data-react-helmet="true" property="og:type" content="Web Design Company" />
                <meta data-react-helmet="true" property="og:url" content="https://webdesignexpressions.net/Contact" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/Assets/WebDesign.jpg" />
                <meta data-react-helmet="true" property="og:description" content="For affordable and professional development services contact Web Design Expressions" />

            </Helmet>

            <div className='container mx-auto custom-font font-bold text-[#1B3E5D]'>

                <div className='pt-10 px-10'>
                    <div><h1 className='text-2xl pb-5'>Contact <CompanyName /></h1></div>
                    <Divider />
                    <div className='lg:flex lg:gap-5'>

                        <div className='lg:w-1/2'>
                            <div className='px-5'>
                                <ContactForm />

                            </div>

                        </div>

                        <div className='lg:w-1/2'>

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
                                    <Button fullWidth variant="contained" id="btnSubmit" color="secondary" style={{ color: '#b3cbff' }} title="Call for afforable/quality web design" href="tel:9494197273" label=""><PhonelinkRingIcon></PhonelinkRingIcon>&nbsp;&nbsp;<b>Call Now</b> </Button>
                                </ThemeProvider>
                            </div>

                            <div className='pt-5 px-5'>
                                <ThemeProvider theme={theme}>
                                    <Button fullWidth variant="contained" id="btnSubmit" color="secondary" style={{ color: '#b3cbff' }} title="Chat/call on whatsapp for your web design needs" href="https://api.whatsapp.com/send?phone=12017010718" label=""><WhatsAppIcon></WhatsAppIcon>&nbsp;&nbsp;<b>Chat Now</b> </Button>
                                </ThemeProvider>
                            </div>

                        </div>

                    </div>


                </div>

            </div>


        </div>
    )
}
