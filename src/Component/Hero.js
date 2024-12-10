import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CompanyName from './CompanyName';
import CustomOptimized from '../Images/fullyoptimizedwebsite.webp';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import QuoteCalculator from './Quote';
// import KeywordsFactory from './Keywords';




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

const Hero = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='lg:flex lg:gap-10 mb-8'>

            <div className='lg:w-7/12'>
                <div className='pt-12 px-6'>
                    <div>
                        <div className='pb-6 text-5xl font-bold'>
                            <h1>Get affordable custom web design and fully optimized websites</h1>
                        </div>

                        <div className='text-[#C13E39] Company-Main-Font py-8 text-5xl font-bold'><CompanyName /></div>
                        <div className='p-2 text-5xl font-bold'>Today!</div>
                        <div className='lg:w-1/2 my-12'>
                            <ThemeProvider theme={theme}>
                                <Button fullWidth variant="contained" id="btnSubmit" color="secondary" style={{ color: 'inherit', fontWeight: 'bold' }} size='large' title="Request a Quote for Custom Web Solutions" onClick={handleOpen}>
                                    <RequestQuoteIcon />&nbsp;&nbsp;Request a Quote
                                </Button>
                            </ThemeProvider>
                        </div>
                        <div className='lg:text-left text-center'>

                            <div>your partner for professional, engaging, and high-performance web design!</div>
                        </div>

                    </div>

                    <ThemeProvider theme={theme}>
                        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm" elevation="24"
                            sx={{
                                '& .MuiPaper-root': {
                                    backgroundColor: '#c7d5e0',
                                    color: '#171a21',
                                },
                            }}>
                            <DialogContent>
                                <div>
                                    <QuoteCalculator />
                                </div>
                            </DialogContent>
                        </Dialog>
                    </ThemeProvider>
                </div>
            </div>

            <div className='lg:w-5/12 pt-8 lg:pb-0 pb-8'>
                <div>
                    <img loading="eager" style={{ width: '100%', height: 'auto' }} src={CustomOptimized} alt='Happy business team smiling during a presentation, representing affordable custom web design and fully optimized websites.' title='Affordable Custom Web Design and Fully Optimized Websites' />
                </div>
            </div>
        </div>
    );
};

export default Hero;
