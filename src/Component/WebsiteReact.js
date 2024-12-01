import React from 'react'
import ReactWebsite from '../Images/ReactWebsite.svg';
import CompanyName from './CompanyName';
import Link from '@mui/material/Link';

export default function WebsiteReact() {
    return (
        <div>
            <div className='lg:float-right lg:ml-10 lg:w-1/2'>
                <img className='mx-auto' src={ReactWebsite} alt='custom web services, affordable, efficient, and seamless' title='Efficient Web Development with React: Affordable & Modern Solutions' />
            </div>
            <div>
                React is a popular library for building user interfaces in web development. The key difference, and the reason we at <CompanyName /> choose React when building websites is,  compared to a traditional websites, React applications are built using component-based elements, which is efficient and modular. Our web development services are tuned to allow affordability for small businesses and provide your company with custom design and functionality you require.
            </div>
            <div className='pt-5'>
                Another important difference of React development services, is that it is a single-page application, meaning <CompanyName /> can dynamically update the content on your site without requiring a full page refresh. Our company constantly searches for the most updated, optimized development techniques for our customers in order to provide both affordable and quality sites for any small business.
            </div>
            <div className='pt-5'>
                As the website no longer requires a reload every time the user interacts, it results in a smoother and faster user experience for our customers.<br />
                This not only improves the performance of your site, but retains users, improves design/functionality and optimizes our work in web development in a budget friendly way.
            </div>
            <div className='pt-5'>
                Overall, <CompanyName /> uses React in web development and other services to offer a more efficient, flexible, and modern approach to web design compared to traditional web applications. React a popular choice for many developers and companies for a reason, and our company fully understands that reason.
            </div>
            <div className='pt-5'>
                <Link href='/Contact' aria-label='Contact Web Design Expressions, the Web design and SEO company' title='Contact Web Design Expressions, Web design SEO company'> Contact us</Link> today to get affordable, professional web development for your next project.
            </div>
        </div>
    )
}
