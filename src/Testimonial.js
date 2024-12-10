import React, { useState } from 'react';
import testimonialsData from './Component/Testimonials.json';
import { Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Helmet } from 'react-helmet';
import PageHeader from './Component/PageHeader';
import CompanyName from './Component/CompanyName';
import FavoriteIcon from '@mui/icons-material/Favorite';

// Custom styled components
const TransparentAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1f2937' : 'transparent',
    color: theme.palette.mode === 'dark' ? '#ffffff' : 'inherit',
}));

const TransparentAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1f2937' : 'transparent',
    color: theme.palette.mode === 'dark' ? '#ffffff' : 'inherit',
}));

const TransparentAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1f2937' : 'transparent',
    color: theme.palette.mode === 'dark' ? '#ffffff' : 'inherit',
}));

const CustomExpandMoreIcon = styled(ExpandMoreIcon)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? '#F13030' : '#F13030',
}));

const theme = createTheme({
    palette: {
        primary: {
            main: "#99aab5",
        },
        secondary: {
            main: "#C13E39",
        },
    },
});

const Testimonials = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>

            <Helmet>
                <title data-react-helmet="true">Client testimonials of previous Web Design Expressions services</title>
                <meta data-react-helmet="true" name="description" content="Clients on our custom web design & development services. How an affordable option helped improve their small business." />
                <meta data-react-helmet="true" property="og:title" content="Web Design Expressions previous web sites client testimonials " />
                <meta data-react-helmet="true" property="og:type" content="Web Design Company" />
                <meta data-react-helmet="true" property="og:url" content="https://webdesignexpressions.net/" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/Assets/Testimonial.jpg" />
                <meta data-react-helmet="true" property="og:description" content="Testimonials from both previous and current small businesses Web Design Expressions has provided affordable development services to" />

            </Helmet>

            <div className=''><PageHeader pageTitle="Testimonial" /></div>
            <div className='mx-16'>


                <div className='lg:flex lg:gap-5'>
                    <div className="font-bold lg:w-7/12">
                        <div className="pb-5">The Biggest Reward We Can Receive is Customer Satisfaction.</div>
                        <div className="pb-5">It keeps us motivated to keep improving our web design services.</div>
                        <div><CompanyName /> Thanks to our previous and current clients for these testimonials.</div>
                    </div>
                    <div className='lg:w-5/12'>
                        <div className='text-6xl font-bold Company-Main-Font p-10'>Thank You<sup><FavoriteIcon className='text-[#C13E39]' /></sup></div>
                    </div>
                </div>



                {testimonialsData.map((testimonial, index) => (
                    <TransparentAccordion className='my-5'
                        key={index}
                        expanded={expanded === `panel${index}`}
                        onChange={handleChange(`panel${index}`)}
                    >
                        <TransparentAccordionSummary
                            expandIcon={<CustomExpandMoreIcon />}
                            aria-controls={`panel${index}bh-content`}
                            id={`panel${index}bh-header`}
                        >
                            <div className="font-bold">{testimonial.companyName}</div>
                        </TransparentAccordionSummary>
                        <TransparentAccordionDetails>
                            <div className="lg:flex">
                                <div className="lg:w-1/3">
                                    <div className="lg:float-left lg:mr-5 mb-5">
                                        <img
                                            src={testimonial.image}
                                            alt={`${testimonial.companyName}`}
                                            title={`${testimonial.companyName}`}
                                            className="rounded-xl shadow shadow-blue-900/75 mx-auto"
                                        />
                                    </div>
                                </div>
                                <div className="lg:w-2/3">
                                    <div className="lg:float-right">
                                        <div className="darkMode">
                                            {testimonial.testimonial}
                                        </div>
                                    </div>
                                    <div className="pt-5 lg:float-right">
                                        <ThemeProvider theme={theme}>
                                            <Button
                                                className="mx-auto"
                                                size="large"
                                                variant="contained"
                                                color="secondary"
                                                style={{ color: '#ffffff' }}
                                                title={`Visit ${testimonial.companyName}`}
                                                href={testimonial.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <b>{testimonial.companyName}</b>&nbsp;&nbsp; <ExitToAppIcon />
                                            </Button>
                                        </ThemeProvider>
                                    </div>
                                </div>
                            </div>
                        </TransparentAccordionDetails>
                    </TransparentAccordion>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
