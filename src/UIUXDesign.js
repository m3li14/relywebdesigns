import React from 'react'
import WhyChoose from './Component/WhyChoose';
import PageHeader from './Component/PageHeader';
import CompanyName from './Component/CompanyName';
import { Card, CardContent } from '@mui/material';
import UIUXDesignImage from './Images/UIUXDesign.webp';
import Action from './Component/Action';



const UIUX = [
    {
        id: 1,
        Service: 'User Research & Strategy',
        Description: 'Our process starts with understanding your audience. We conduct deep research to uncover user needs and behaviors, crafting a UX strategy tailored to meet their expectations. This ensures a seamless user experience on your website.'
    },
    {
        id: 2,
        Service: 'Wireframing & Prototyping',
        Description: 'Next, we develop wireframes and prototypes, which provide a visual structure of the site. This step allows us to focus on usability, ironing out issues early and aligning with your vision before the final design.'
    },
    {
        id: 3,
        Service: 'Visually Compelling UI Design',
        Description: 'Our UI design aligns with your brand, creating a visually stunning, responsive interface. Every detail, from colors to typography, is crafted to enhance appeal and functionality across all devices.'
    },
    {
        id: 4,
        Service: 'Accessibility & Inclusivity',
        Description: 'We at Rely Designs prioritize accessibility, ensuring all users can interact comfortably. By following established standards, we make your website inclusive, from color contrast to screen-reader compatibility.'
    },
    {
        id: 5,
        Service: 'Usability Testing & Iteration',
        Description: 'To perfect your design, we perform usability testing. Using A/B testing, heatmaps, and user feedback, we refine the UI/UX continually, enhancing engagement, reducing bounce rates, and boosting conversions.'
    },
    {
        id: 6,
        Service: 'Data-Driven Improvements',
        Description: 'User preferences evolve, and we keep your site updated. We analyze performance with analytics and feedback, making informed adjustments to keep your website aligned with user needs and trends.'
    }
];


const UIUXDesign = () => {
    return (
        <div>
            <div><PageHeader pageTitle="UI/UX Design Services" /></div>
            <div className='lg:float-right lg:w-7/12 lg:ml-10 mb-10'>
                <img className='mx-auto' alt='affordable search engine optimization' src={UIUXDesignImage} title='Affordable Web Development Services and SEO for Startups and Entrepreneurs' />
            </div>
            <div className='mx-16'>
                <div className='text-2xl font-bold'>Enhance User Engagement with Premium UI/UX Design Services</div>
                <div className='py-4'>In today's digital-first world, user experience (UX) and user interface (UI) design play a pivotal role in how visitors perceive and interact with your brand online. At <CompanyName />, we believe that UI/UX design is more than just aesthetics—it's about creating a seamless and enjoyable journey for every visitor. As part of our What We Offer services, our UI/UX design solutions focus on understanding your users, crafting designs that engage, and ultimately helping your business stand out in a crowded digital landscape.</div>
                <div className='text-2xl font-bold'>What is UI/UX Design and Why is it Crucial?</div>
                <div className='py-4'>UI/UX design is a blend of visual design, usability, and functionality that ensures your website is not only beautiful but also easy to navigate and highly effective. UI design addresses the visual elements—buttons, layout, colors—while UX design focuses on the overall interaction experience and journey of the user. Together, they make sure that visitors have an enjoyable, efficient, and intuitive experience on your site.</div>
                <div>A well-designed UI/UX not only captures attention but retains it, making it easy for your audience to find what they need, interact with your content, and ultimately take action, whether it's filling out a form, making a purchase, or engaging with your services.</div>
                <div className='clear-both'><Action /></div>
                <div className='text-2xl font-bold pb-4'>How <CompanyName /> Approaches UI/UX Design</div>
                <div>At <CompanyName />, we go beyond templates and generic designs to craft unique, brand-specific solutions that resonate with your audience. Here's how we ensure your website is designed with precision, purpose, and lasting impact:</div>

            </div>

            <div className='mx-16 my-8'>
                <div className='lg:grid lg:grid-cols-3 lg:gap-8 '>
                    {UIUX.map(item => (
                        <div key={item.id} className='mb-4'>
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
                                <CardContent className="card-content">
                                    <div className='text-xl font-bold pb-5'>{item.Service}</div>
                                    <div>{item.Description}</div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>


            </div>

            <div className='mx-16'>
                <div className='text-2xl font-bold pb-4'>Transform Your Website with <CompanyName />'s UI/UX Expertise</div>
                <div className='pb-8'>A user-centric website is essential for standing out in today's competitive online environment. Our team at <CompanyName /> is dedicated to helping you create a website that is not only visually appealing but intuitive, accessible, and impactful. With our UI/UX design services, we bridge the gap between your brand and your audience, offering them a meaningful experience that leads to increased engagement and conversions.</div>
                <div><span className='font-bold'>Ready to enhance your website's user experience?</span> Reach out to us today to discuss how our UI/UX design solutions can elevate your brand and help you achieve your digital goals.</div>
            </div>

            <div><WhyChoose /></div>
        </div>
    )
}

export default UIUXDesign