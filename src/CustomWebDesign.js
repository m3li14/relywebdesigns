import React, { useState } from 'react';
import PageHeader from './Component/PageHeader';
import CustomWebDesignImage from './Images/CustomWebDesign.webp';
import CompanyName from './Component/CompanyName';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WhyChoose from './Component/WhyChoose';
import Action from './Component/Action';
import CustomBenefits from './Component/CustomBenefits';



const CustomdesignProcess = [
    {
        id: 1,
        Process: 'Tailored to Your Needs',
        Description: 'A custom-designed website allows you to have complete control over the look, feel, and functionality of your site. From the layout to the features, everything can be personalized to suit your business and your customers expectations.Whether you need an e- commerce platform, a portfolio site, or a blog, we ensure that every element is built to enhance user experience and achieve your objectives.'
    },
    {
        id: 2,
        Process: 'Stronger Branding and Identity',
        Description: 'A custom web design ensures that your website stands out from the competition. By aligning your site with your brand’s colors, fonts, imagery, and messaging, you reinforce your business identity and create a consistent experience across all digital touchpoints. Your website will resonate with your target audience, giving you an edge in a crowded marketplace.'
    },
    {
        id: 3,
        Process: 'Scalability and Flexibility',
        Description: 'As your business grows, so too should your website. Custom web development provides the flexibility to add new features, pages, and functionalities as your business evolves. Whether you want to integrate a booking system, add an online store, or include more sophisticated content, a custom website can scale with you. Unlike templates, which can be restrictive, custom web design allows you to adapt your website to future needs.'
    },
    {
        id: 4,
        Process: 'Improved Performance and Speed',
        Description: 'Website performance is a critical factor in retaining visitors. A slow-loading site can frustrate users and lead to high bounce rates. Custom web design prioritizes fast load times and optimized performance, ensuring that your website runs smoothly on all devices. From streamlined coding to optimized images and resources, we make sure your website is built for speed and efficiency.'
    },
    {
        id: 5,
        Process: 'Better Security',
        Description: 'When you choose a template or a DIY website builder, you’re relying on a system that many other businesses are using. This increases the likelihood of vulnerabilities that hackers can exploit. A custom-built website offers better security because it’s less predictable and more difficult to breach. We implement robust security measures, including SSL certificates, secure coding practices, and regular updates, to ensure your site is protected from cyber threats.'
    },

    {
        id: 6,
        Process: "SEO-Friendly",
        Description: "Having a visually stunning website is only half the battle; the other half is ensuring people can find it. At Rely Designs, we design custom websites with SEO (Search Engine Optimization) best practices in mind. From clean code to optimized metadata, we make sure your website is built to rank well on search engines. A high-ranking website increases visibility and drives organic traffic, helping you reach more potential customers.",

    }

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

const CustomWebDesign = () => {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };



    return (
        <div>
            <div><PageHeader pageTitle="Custom Web Design" /></div>


            <div className='lg:float-right lg:w-7/12 lg:ml-10 mb-10'>
                <img className='mx-auto' alt='Team of web designers collaborating on custom website design project using visual planning techniques' src={CustomWebDesignImage} title='Custom Web Design Services | Professional Website Design and Development Solutions' />
            </div>

            <div className=''>
                <div className='mx-16'>
                    <div className='text-2xl font-bold'>Custom Web Design Services for Your Business</div>
                    <div className='py-4'>
                        In today's digital-first world, your website is often the first interaction potential customers will have with your brand. That's why it's crucial to make a lasting impression right from the start. At <CompanyName />, we specialize in custom web design services that deliver tailored solutions to meet your business's unique needs. Whether you're a startup, an established business, or an entrepreneur looking to upgrade your online presence, our custom-designed websites are created to help you stand out and achieve your goals.
                    </div>

                    <div className='text-2xl font-bold'>Why Choose Custom Web Design?</div>
                    <div className='py-4'>
                        Many businesses opt for ready-made templates or DIY website builders to save money, but this often leads to a generic and uninspiring online presence. A cookie-cutter website can leave your customers wondering if your business is as unique as the site itself.
                    </div>
                    <div>
                        With custom web design, your website is built specifically for your business, ensuring it reflects your brand's identity, values, and goals. It's not just about aesthetics; a custom website is crafted to perform well, deliver exceptional user experiences, and help you drive conversions. At <CompanyName />, we believe that every business deserves a website that's as unique as the products and services they offer.
                    </div>

                    <div className='clear-both'><Action /></div>

                    <div className='text-2xl font-bold py-4'>The Benefits of Custom Web Design</div>
                    <div>

                        {CustomdesignProcess.map((Process, index) => (
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



            </div>


            <div className='mx-16'>
                <div className='text-2xl font-bold py-4'>Our Custom Web Design Process</div>
                <div>
                    Creating a website that perfectly aligns with your business goals requires careful planning and collaboration. At <CompanyName />, we follow a step-by-step process to ensure every aspect of your custom website meets your expectations.
                </div>


            </div>
            <div><CustomBenefits /></div>
            <div><WhyChoose /></div>


        </div>
    )
}

export default CustomWebDesign