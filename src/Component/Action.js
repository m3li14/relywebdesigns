import React, { useState } from 'react';
import { Button, ThemeProvider, createTheme, Dialog, DialogContent } from '@mui/material';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import QuoteCalculator from './Quote';
import EmailIcon from '@mui/icons-material/Email';


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

const Action = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='lg:flex lg:gap-8'>

            <div className='lg:w-1/2 mx-auto my-10'>
                <div>
                    <ThemeProvider theme={theme}>
                        <Button className='' fullWidth variant="contained" id="btnSubmit" color="secondary" style={{ color: 'inherit' }} size='large' aria-label='ContactRely Designs, the Web design and SEO company' title="Contact Rely Designs, the Web design and SEO company" href='/Contact'>
                            <EmailIcon />&nbsp;&nbsp;<b>Contact us</b>
                        </Button>
                    </ThemeProvider>
                </div>
            </div>
            <div className='lg:w-1/2 mx-auto my-10'>
                <div>
                    <ThemeProvider theme={theme}>
                        <Button fullWidth variant="contained" id="btnSubmit" color="secondary" style={{ color: 'inherit' }} size='large' title="Request a Quote" onClick={handleOpen}>
                            <RequestQuoteIcon />&nbsp;&nbsp;<b>Request a Quote</b>
                        </Button>
                    </ThemeProvider>

                    <ThemeProvider theme={theme}>
                        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm" color='inherit'>
                            <DialogContent color='inherit'>
                                <div>
                                    <QuoteCalculator />
                                </div>
                            </DialogContent>
                        </Dialog>
                    </ThemeProvider>
                </div>
            </div>

        </div>
    )
}

export default Action