import React from 'react'
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import ReactWebDesign from './CompanyOffers/ReactWebDesign';
import SimpleDesignProcess from './CompanyOffers/SimpleDesignProcess';
import HostingServices from './CompanyOffers/HostingServices';
import SEO from './CompanyOffers/SEO';
import WordPressASP from './CompanyOffers/WordPressASP';
import ContentMarketing from './CompanyOffers/ContentMarketing';
import Card from '@mui/material/Card';

import './motion.css';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, Link } from '@mui/material';
import ReadMoreIcon from '@mui/icons-material/ReadMore';


const Offers = [
    {
        id: '1',
        main: 'Web Design in React',
        text: <ReactWebDesign />,
        Title: 'Our Designs in React',
        url: '/CompanyOffers/reactJsDevelopment',
        ButtonTitle: 'React web development services'
    },
    {
        id: '2',
        main: 'Hosting/Domain services',
        text: <HostingServices />,
        Title: 'Our Hosting Services',
        url: '/CompanyOffers/WebsiteHosting',
        ButtonTitle: 'Hosting/Domain services'
    },
    {
        id: '3',
        main: 'Simple design process',
        text: <SimpleDesignProcess />,
        Title: 'Our Design Process',
        url: '/CompanyOffers/webDesignProcess',
        ButtonTitle: 'Simple design process'
    },
    {
        id: '4',
        main: 'Search Engine Optimization SEO',
        text: <SEO />,
        Title: 'Our SEO services',
        url: '/CompanyOffers/searchEngineOptimization',
        ButtonTitle: 'Affordable Search engine optimization (SEO) services'
    },
    {
        id: '5',
        main: 'WordPress and ASP.NET',
        text: <WordPressASP />,
        Title: 'Our WordPress benifits',
        url: '/CompanyOffers/WPASP',
        ButtonTitle: 'custom wordpress & ASP.net web development agency'
    },
    {
        id: '6',
        main: 'Content Marketing',
        text: <ContentMarketing />,
        Title: 'Our Content Marketing',
        url: '/CompanyOffers/Marketing',
        ButtonTitle: 'Content Marketing'
    },

];

const theme = createTheme({
    palette: {
        primary: {
            main: "#23272a", // custom primary color
        },
        secondary: {
            main: "#C13E39", // custom secondary color
        },
    },
});

function Offer() {

    const [width, setWidth] = useState(0);
    const carousel = useRef();
    useEffect(() => {
        // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);
    // console.log(images)
    return (
        // className='bg-gradient-to-b from-white/25 to-blue-900/25 rounded-xl m-10 p-5 dark:text-white dark:bg-black/75'
        <div className='mt-5 mb-5 '>
            <div className='text-3xl my-5 text-center text-[#1B3E5D] custom-font font-bold'>WHAT WE OFFER</div>
            <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
                <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='inner-carousel '>
                    {Offers.map((offer) => {
                        return (
                            <motion.div className='flex lg:min-w-[50%] sm: min-w-[100%] p-2 ' key={offer.id}>
                                <Card className='p-10 shadow shadow-blue-900/75 dark:shadow dark:shadow-white/75 dark:text-white dark:bg-[#434242]/75'>
                                    <div>
                                        <div className='text-2xl pb-5 text-[#1B3E5D] custom-font font-bold'>{offer.main}</div>

                                        <div className='text-[#1B3E5D] '>{offer.text}</div>
                                        <div className='text-right pt-5'>
                                            <ThemeProvider theme={theme}>
                                                <Link href={offer.url} title={`${offer.ButtonTitle}`} className='text-[#1B3E5D] '>
                                                    <Button color="secondary" variant="contained" endIcon={<ReadMoreIcon color='primary' />}>
                                                        {offer.Title}
                                                    </Button>
                                                </Link>

                                            </ThemeProvider>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}

                </motion.div>
            </motion.div>

        </div >
    )
}
export default Offer;