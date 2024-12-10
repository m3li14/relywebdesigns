import React, { useState } from 'react';
import PageHeader from './Component/PageHeader';
import Action from './Component/Action';
import CompanyName from './Component/CompanyName';
import EcommerceImage from './Images/E-commerceSolutions.webp';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import BuildIcon from '@mui/icons-material/Build';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ECommerceBenefits from './Component/ECommerceBenefits';
import WhyChoose from './Component/WhyChoose';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { styled } from '@mui/material/styles';



const Ecommerce = () => {


    const ECommerceProcess = [
        {
            id: 1,
            Process: 'Consultation and Planning',
            Description: 'We start by understanding your business goals, target audience, and unique requirements. Through a collaborative approach, we develop a comprehensive strategy to build an online store tailored to your vision.'
        },
        {
            id: 2,
            Process: 'Design and Development',
            Description: 'Our team of expert designers and developers brings your store to life. We focus on creating a visually appealing, user-friendly interface while ensuring the backend is robust and efficient.'
        },
        {
            id: 3,
            Process: 'Product Setup and Optimization',
            Description: 'We help you showcase your products effectively with high-quality images, detailed descriptions, and optimized categories. This ensures that your customers can easily find what they’re looking for and make informed purchasing decisions.'
        },
        {
            id: 4,
            Process: 'Testing and Launch',
            Description: 'Before going live, we rigorously test every aspect of your e-commerce site, from functionality to security. Once everything is flawless, we launch your store and ensure it’s ready to handle your customers seamlessly.'
        },
        {
            id: 5,
            Process: 'Ongoing Support and Maintenance',
            Description: 'An e-commerce site requires continuous updates and maintenance to keep up with market trends and customer demands. Our team provides ongoing support to ensure your store remains up-to-date and performs optimally.'
        },

    ]

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


    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <div><PageHeader pageTitle="E-Commerce Solutions Tailored to Grow Your Business" /></div>


            <div className='lg:float-right lg:w-7/12 lg:ml-10 mb-10'>
                <img className='mx-auto' alt='custom web design solutions for small businesses' src={EcommerceImage} title='Custom Web Design Solutions for Small Businesses and Startups' />
            </div>

            <div className=''>
                <div className='mx-16'>
                    <div className='text-xl font-bold'>E-Commerce Solutions That Drive Your Online Sales</div>
                    <div className='py-4'>
                        In the digital age, e-commerce is no longer just an option—it's a necessity. At <CompanyName />, we specialize in providing custom e-commerce solutions that empower businesses to thrive in the competitive online marketplace. Whether you're starting a new online store or looking to improve an existing one, we deliver tailored strategies and cutting-edge technologies to help you increase sales, improve user experience, and grow your business.
                    </div>

                    <div className='text-xl font-bold'>Why Invest in E-Commerce Solutions?</div>
                    <div className='pt-4'>
                        The way people shop has changed. Consumers now expect a seamless and convenient online shopping experience, with fast-loading pages, intuitive navigation, and secure payment options. If your website doesn't deliver on these expectations, you could be losing potential customers to competitors.
                    </div>


                    <div className='clear-both'><Action /></div>

                    <div>
                        At <CompanyName />, we design and develop e-commerce platforms that are more than just online stores—they're powerful sales tools. Our e-commerce solutions are built to:
                    </div>

                    <div>
                        <List>
                            <ListItem>
                                <Avatar sx={{ backgroundColor: 'transparent', marginRight: 2, color: 'inherit' }}>
                                    <AccessibilityNewIcon />
                                </Avatar>
                                <ListItemText
                                    primary={
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            Enhance customer experience
                                        </Typography>
                                    }
                                    secondary="Deliver intuitive, user-friendly interfaces that keep customers engaged."
                                />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <Avatar sx={{ backgroundColor: 'transparent', marginRight: 2, color: 'inherit' }}>
                                    <BuildIcon />
                                </Avatar>
                                <ListItemText
                                    primary={
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            Streamline your operations
                                        </Typography>
                                    }
                                    secondary="Integrate tools to automate processes, saving time and reducing errors."
                                />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <Avatar sx={{ backgroundColor: 'transparent', marginRight: 2, color: 'inherit' }}>
                                    <TrendingUpIcon />
                                </Avatar>
                                <ListItemText
                                    primary={
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            Drive more traffic and conversions
                                        </Typography>
                                    }
                                    secondary="Optimize for SEO and performance to attract visitors and boost sales."
                                />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <Avatar sx={{ backgroundColor: 'transparent', marginRight: 2, color: 'inherit' }}>
                                    <ExpandMoreIcon />
                                </Avatar>
                                <ListItemText
                                    primary={
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            Adapt to your business’s growth
                                        </Typography>
                                    }
                                    secondary="Scale your e-commerce platform seamlessly to meet growing demands."
                                />
                            </ListItem>
                        </List>
                    </div>

                    <div className='text-2xl font-bold py-4'>The Benefits of Our E-Commerce Solutions</div>

                    <div><ECommerceBenefits /></div>

                    <div className='text-2xl font-bold py-4'>Our E-Commerce Development Process</div>

                    {ECommerceProcess.map((Process, index) => (
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
                                <div className="font-bold"><span className='text-5xl text-[#C13E39]'>{Process.id}. </span>{Process.Process}</div>
                            </TransparentAccordionSummary>
                            <TransparentAccordionDetails>
                                {Process.Description}
                            </TransparentAccordionDetails>
                        </TransparentAccordion>
                    ))}

                </div>



            </div>


            <div><WhyChoose /></div>
        </div>
    )
}

export default Ecommerce