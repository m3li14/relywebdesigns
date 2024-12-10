import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
import CompanyName from './CompanyName';
import Greeting from './Greeting';
import CustomWebDesign from '../Images/CustomWebDesign.webp';
import WebsiteRedesign from '../Images/WebsiteRedesign.webp';
import SearchEngineOptimization from '../Images/SearchEngineOptimization.webp';
import WebDevelopment from '../Images/WebDevelopment.webp';
import EcommerceImage from '../Images/E-commerceSolutions.webp';
import UIUXDesign from '../Images/UIUXDesign.webp';

import WebIcon from '@mui/icons-material/Web';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CodeIcon from '@mui/icons-material/Code';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DesignServicesIcon from '@mui/icons-material/DesignServices';




const Offers = [
    {
        OfferImage: CustomWebDesign,
        Offername: 'Custom Web Design',
        OfferDescription: 'We craft visually appealing, responsive, and engaging websites that reflect your unique brand identity and resonate with your target audience. Our designs are thoughtfully built with user experience in mind to ensure seamless navigation across all devices.',
        OfferAlt: 'Team of web designers collaborating on custom website design project using visual planning techniques',
        OfferTitle: 'Custom Web Design Services | Professional Website Design and Development Solutions',
        OfferLink: '/CustomWebDesign',
        CTA: 'Custom Design',
        OfferIcon: WebIcon,
    },
    {
        OfferImage: WebsiteRedesign,
        Offername: 'Website Redesign',
        OfferDescription: 'Give your website a fresh look and improved functionality. We revamp outdated sites to improve user experience, mobile responsiveness, and search engine rankings while preserving the core elements of your brand',
        OfferAlt: 'Team collaborating on website redesign project, connecting elements to improve user experience and website functionality',
        OfferTitle: 'Professional Website Redesign Services | Modern Web Design & User Experience Optimization',
        OfferLink: '/Redesign',
        CTA: 'Redesign',
        OfferIcon: AutoFixHighIcon,
    },
    {
        OfferImage: SearchEngineOptimization,
        Offername: 'Search Engine Optimization',
        OfferDescription: 'We create visually striking, user-friendly websites enhanced with SEO to drive visibility and growth. Our team combines modern web design with ongoing optimization, monitoring, and keyword updates to keep your site ranking high.',
        OfferAlt: 'Digital marketing expert analyzing SEO performance and website traffic metrics on tablet for search ranking optimization',
        OfferTitle: 'Professional SEO Services | Search Engine Optimization & Website Traffic Analysis',
        OfferLink: '/searchEngineOptimization',
        CTA: 'Improve SEO',
        OfferIcon: TrendingUpIcon,
    },
    {
        OfferImage: WebDevelopment,
        Offername: 'Web Development',
        OfferDescription: 'Transform your small business with custom web design. Tailored solutions outperform templates, driving growth, enhancing visibility, and delivering success with affordable, professional strategies.',
        OfferAlt: 'Professional web developer coding custom website  for small business web development solutions',
        OfferTitle: 'Professional Web Development Services | Custom Website Programming Solutions for Small Business',
        OfferLink: '/CustomWebDevelopment',
        CTA: 'Web Dev',
        OfferIcon: CodeIcon,
    },
    {
        OfferImage: EcommerceImage,
        Offername: 'E-commerce Solutions',
        OfferDescription: 'We build secure, scalable e-commerce websites that enhance customer experience and streamline operations. we integrate the best tools for efficient product management, payments, and shipping.',
        OfferAlt: 'Shopping cart with parcels on a laptop keyboard, symbolizing secure e-commerce solutions and home delivery services',
        OfferTitle: 'E-commerce Solutions | Scalable Online Shopping Platforms with Secure Payments and Home Delivery',
        OfferLink: '/Ecommerce',
        CTA: 'E-commerce',
        OfferIcon: ShoppingCartIcon,
    },
    {
        OfferImage: UIUXDesign,
        Offername: 'UI/UX Design',
        OfferDescription: 'We craft engaging, intuitive, and visually captivating user experiences that make your website memorable, accessible, and effective, fostering stronger connections with your audience and driving conversions.',
        OfferAlt: 'Developer team brainstorming UX/UI design with a mind map, planning intuitive mobile app interfaces and user experiences',
        OfferTitle: 'UI/UX Design | Crafting Intuitive and Engaging User Experiences for Mobile Apps and Websites',
        OfferLink: '/UIUXDesign',
        CTA: 'UI/UX',
        OfferIcon: DesignServicesIcon,
    },
];


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

const WeOffer = ({ offer }) => (
    <div className='lg:w-1/3 m-5'>
        <Card
            sx={{
                boxShadow: 3,
                borderRadius: 2,
                padding: 0,
                backgroundColor: 'transparent',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 0, 0, 0.2)',
            }}
        >
            <CardMedia
                component="img"
                // height="140"
                image={offer.OfferImage}
                alt={offer.OfferAlt}
                width={'100%'}
                height={'auto'}
                title={`${offer.OfferTitle}`}


            />
            <div className='border-b-4 border-[#C13E39]'></div>
            <CardContent className="card-content">
                <div className=''>
                    <div className='text-xl pb-4'>
                        <h2>{offer.Offername}</h2>
                    </div>
                </div>

                <Typography variant="body2">
                    {offer.OfferDescription}
                </Typography>
            </CardContent>
            <CardActions>
                <div className="mx-auto mb-5">
                    <ThemeProvider theme={theme}>
                        <Button className="mx-auto" fullWidth variant="contained" id="btnSubmit" color="secondary" style={{ color: 'inherit' }} size='large' title={`${offer.Offername}`} href={offer.OfferLink}>
                            <b>{offer.CTA}</b>&nbsp;&nbsp;{React.createElement(offer.OfferIcon)}
                        </Button>
                    </ThemeProvider>
                </div>

            </CardActions>
        </Card>



    </div>
);

const WeOffersList = () => {
    // Repeat Offers until we have at least 3 items (if needed)
    const repeatOffers = Offers.length >= 3 ? Offers : [...Offers, ...Offers.slice(0, 3 - Offers.length)];

    // Split offers into chunks of 3
    const offerChunks = [];
    for (let i = 0; i < repeatOffers.length; i += 3) {
        offerChunks.push(repeatOffers.slice(i, i + 3));
    }

    return (
        <div className=''>
            <div className='px-10'>
                <div className='text-center pb-5 text-3xl font-bold'>What We Offer</div>
                <div className=''><Greeting />, At <CompanyName /> we specialize in creating stunning, high-performance websites tailored to your business needs. Our goal is to help you establish a powerful online presence that drives results and engages your audience. Here's what we offer:</div>

            </div>

            {offerChunks.map((chunk, index) => (
                <div key={index} className='lg:flex lg:flex-row lg:gap-5 text-center font-bold lg:w-full'>
                    {chunk.map((offer, index) => (
                        <WeOffer key={index} offer={offer} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default WeOffersList;
