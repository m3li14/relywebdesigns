import React from 'react'
import Requirements from '../Images/Requirements.svg';
import { Link } from '@mui/material';

export default function WebsiteRequirements() {
    return (
        <div>
            <div className='lg:float-right lg:ml-10 lg:w-1/2'>
                <img className='mx-auto' src={Requirements} alt='search engine optimization, web hosting, and content management' title='Building Your Dream Website: Our Comprehensive Web Development Services' />
            </div>
            <div>
                As a company that specializes in website development, we offer a wide range of
                services to help you create a successful online presence. We understand that building
                a website can be a daunting task, which is why we offer all the necessary services you
                need to get started.
            </div>
            <div className='pt-5'>
                Our services include domain registration, search engine
                optimization, web hosting, and website builders or CMSs such as WordPress. We can help
                you choose the best options that suit your needs and budget. In addition to these
                services, we also offer website content management services. We have experience in
                content to help create unique, high-quality content for your website, including text,
                images, and videos.
            </div>

            <div className='pt-5'>
                We pride ourselves on providing excellent customer service, and
                we're always available to answer any questions you may have along the way. With our
                help, you can have a professional-looking website that meets your specific goals and
                serves your audience. Whether you're starting a blog, launching an online store, or
                promoting your business, we have the expertise and resources to help you succeed
                online.
            </div>

            <div className='pt-5'><Link href='/Contact' aria-label='Contact Web Design Expressions, Affordable website design services' title='Contact Web Design Expressions, Affordable website design services'> Contact us</Link> today to learn more about our services and how we can help you build your dream website.</div>
        </div>
    )
}
