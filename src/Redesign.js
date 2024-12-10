import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import PageHeader from './Component/PageHeader';
import CompanyName from './Component/CompanyName';
import NeedRedesign from './Images/WebsiteRedesign.webp'
import RedesignServices from './Component/RedesignServices';
import WhyChoose from './Component/WhyChoose';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Action from './Component/Action';



const RedesignProcess = [
    {
        id: 1,
        Process: 'Initial Consultation and Website Audit',
        Description: 'We start by understanding your business goals and analyzing your current website. This includes an in-depth audit covering site structure, user experience, SEO, and performance to identify areas that need improvement.'
    },
    {
        id: 2,
        Process: 'Design and Wireframing',
        Description: 'We create wireframes to outline the layout and structure of the redesigned website. This step allows you to see a preliminary version of the website before we proceed with the full design, ensuring alignment with your vision.'
    },
    {
        id: 3,
        Process: 'Development and Testing',
        Description: 'Our developers bring the design to life, ensuring each element works flawlessly. The website is thoroughly tested on different devices and browsers to ensure compatibility, speed, and performance.'
    },
    {
        id: 4,
        Process: 'SEO and Content Optimization',
        Description: 'Content is optimized for SEO and tailored to engage your audience. We integrate keywords, enhance metadata, and implement internal linking to help your site rank higher in search engines.'
    },
    {
        id: 5,
        Process: 'Launch and Post-Launch Support',
        Description: 'Once everything is finalized, we launch your redesigned website. Our team provides post-launch support to handle any updates, bugs, or adjustments that may arise, ensuring smooth operation.'
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

const Redesign = () => {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <div><PageHeader pageTitle="Website Redesign Services" /></div>



            <div className='lg:float-right lg:w-7/12 lg:ml-10 mb-10'>
                <img className='mx-auto' alt='affordable website redesign services' src={NeedRedesign} title='Affordable Website Redesign Services for Startups and Entrepreneurs' />
            </div>
            <div className='mx-16'>
                <div className='text-2xl font-bold pb-4'>Your Website Might Need a Redesign</div>
                <div>In today's fast-paced digital world, your website is often the first point of contact between your business and potential customers. If your site feels outdated, doesn't perform well on mobile devices, or lacks SEO optimization, it may be time for a redesign. An updated, user-friendly website can boost your brand's visibility, engage customers, and help drive conversions.</div>
                <div className='py-4'>At <CompanyName />, we specialize in redesigning websites with a focus on visual appeal, usability, and modern functionality. Our team will work with you to refresh your site's design while maintaining its unique identity, ensuring it resonates with your target audience and meets your business goals.</div>
                <div>Moreover, we understand that a successful website redesign is not just about aesthetics—it's about improving overall performance. From faster load times to optimized content for SEO, we ensure that your site is not only visually appealing but also designed to rank higher in search engine results. This holistic approach helps you reach a wider audience and keep visitors engaged, ultimately turning them into loyal customers.</div>

            </div>

            <div className='mx-16 clear-both'><Action /></div>



            <div className='mx-16'>
                <div className='text-2xl font-bold pb-5'>What We Offer in Our Website Redesign Services</div>
                <div>Our comprehensive website redesign process is tailored to your needs, covering everything from visual design to technical enhancements and SEO improvements.</div>
            </div>


            <div className='mx-16 mt-10'>
                <RedesignServices />
            </div>

            <div className='mx-16 mt-10'>
                <div className='text-2xl font-bold pb-5'>Our Website Redesign Process</div>
                <div>Our website redesign process is carefully crafted to meet the unique needs of each client. Here's a closer look at how we work:</div>


                {RedesignProcess.map((Process, index) => (
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


            <div className=''><WhyChoose /></div>
        </div>
    )
}

export default Redesign