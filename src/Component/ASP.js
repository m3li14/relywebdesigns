import React from 'react'
import { CompanyName } from './CompanyName';
import Link from '@mui/material/Link';
import ASPnet from '../Images/ASP.svg';

export default function ASP() {
    return (
        <div>
            <div>
                ASP.NET is one of the most powerful frameworks <CompanyName /> uses for connecting web applications to users. It allows a developer to create dynamic and feature-rich websites that connect internationally. Not only does it insure a seamless workflow, it affordably allows for responsive website control. Building and maintaining a multi-functional visually appealing site can be cumbersome and overwhelming. The tools <CompanyName /> uses for web design is client focused.  We chose these specific resources in order to implement an organized and easy-to-use environment.
            </div>
            <div className='text-2xl pt-5'><h2>Features of ASP.NET</h2></div>
            <div className='mt-5 lg:float-right lg:w-1/3 mx-10'><img src={ASPnet} alt='responsive websites, connecting clients, developers, and users' title='ASP.NET: Powerful Web Applications for Your Needs' /></div>
            <div className='pt-5'>
                Large set of Libraries/web application tools from .NET Wide range of resources that utilized existing code
            </div>

            <div className='pt-5'>
                Web Forms development model
            </div>

            <div className='pt-5'>
                Model-View-Controller Modern model simplifying layer access controls
            </div>

            <div className='pt-5'>
                Web API Versatile HTTP for Mobile/browser/tablets
            </div>

            <div className='pt-5'>
                Entity/LINQ/ADO.NET Connecting data access, querying
            </div>

            <div className='pt-5'>
                On the whole,  ASP.NET is a powerful and versatile platform that connects clients, developers and users to the content that maters to them.
            </div>

            <div className='pt-5'>
                To find out more, or if you have any questions feel free to <Link href='/Contact' aria-label='Contact Web Design Expressions, the Web design and SEO company' title='Contact Web Design Expressions, Web design SEO company'> Contact us</Link>
            </div>

        </div>
    )
}
