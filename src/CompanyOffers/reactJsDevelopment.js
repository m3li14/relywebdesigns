import React from 'react'
import { Divider } from '@mui/material';
import { BsQuestionDiamond } from 'react-icons/bs'
import ReactWebDesign from '../Images/ReactWebDesign.svg'
import { Helmet } from 'react-helmet';
import CompanyName from '../Component/CompanyName';

export default function reactJsDevelopment() {
    return (
        <div>
            <Helmet>
                <title data-react-helmet="true">Highlights of custom developing our services in React </title>
                <meta data-react-helmet="true" name="description" content="Web Design Expressions works with react to build affordable, custom websites that maintain and develop a professional aesthetic for any size company" />
                <meta data-react-helmet="true" property="og:title" content="Web Design Expressions & using react to develop your web service needs" />
                <meta data-react-helmet="true" property="og:title" content="Professional affordable react web development service" />
                <meta data-react-helmet="true" property="og:type" content="Web Design Company" />
                <meta data-react-helmet="true" property="og:url" content="https://webdesignexpressions.net" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.netAssets/FB-React-Web-Design.jpg" />
                <meta data-react-helmet="true" property="og:description" content="Our company builds custom affordable websites in react, that maintain and develop a professional aesthetic for any size company" />

            </Helmet>
            <div className='container mx-auto custom-font font-bold text-[#1B3E5D]'>
                <div className='pt-10 px-10'>
                    <div><h1 className='text-2xl pb-5'>React Web Design </h1></div>
                    <Divider />

                    <div className='mt-5 lg:float-right lg:w-1/3 mx-10'><img src={ReactWebDesign} alt='Stunning affordable React Web Design' title='React Web Design: Versatile, Powerful, and Affordable' /></div>
                    <div className='py-5'>At <CompanyName />, we understand that when it comes to designing a website, there are numerous options professionals use. However, when it comes to delivering versatility, quality, and consistency to a project, React stands out as the industry-leading tool we rely on. It balanced affordability with professional, polished looking websites.</div>
                    <div className='pb-5'>With React, we have the power to handle a wide range of tasks and services, from creating simple pages to developing intricate designs and components. By incorporating the highest standards, quality, and style of modern web design strategies, we ensure that our customers receive nothing but the best experience and designs.</div>
                    <div className='pb-5'>Here are some key features that make React an exceptional choice for our clients and agents:</div>
                    <div className='pb-5'>Improved Performance: React utilizes a virtual DOM (Document Object Model) that minimizes the need for extensive DOM manipulation, resulting in significantly enhanced performance efficiency.</div>
                    <div className='pb-5'>Reusable Components: With React, we can create reusable components that can be easily shared and maintained. This capability reduces the amount of code that needs to be written, streamlining the development process and saving valuable time and resources.</div>
                    <div className='pb-5'>Strong Community Support: React boasts a vibrant and active community of developers. This extensive network makes it effortless to find assistance and access valuable resources whenever needed, ensuring smooth project execution and quick issue resolution.</div>
                    <div className='pb-5'>SEO Friendly: We understand the importance of search engine optimization for businesses aiming to improve their online visibility. React enables us to optimize applications for search engines, ensuring that our clients' websites rank higher in search results and attract more organic traffic.</div>
                    <div className='pb-5'>Cross-Platform Compatibility: React is a versatile framework that empowers us to build applications not only for the web but also for mobile and desktop platforms. This cross-platform compatibility makes React an ideal choice for developers seeking to reach a broader audience and maximize their app's accessibility.</div>
                    <div className='pb-5'>At <CompanyName />, we harness the power of React to create stunning websites that excel in performance, usability, and visual appeal. Our expertise combined with the exceptional features offered by React enables us to deliver unparalleled web design solutions for our valued clients.</div>




                </div>


            </div>



            <div className='bg-[#1B3E5D] text-white custom-font font-bold'>
                <div className='container mx-auto p-10'>
                    <div className='pr-20'>
                        <BsQuestionDiamond color='#3D9798' size={32} className='lg:float-left animate-pulse' />
                        <div className='pl-5'><h2 className='text-2xl text-[#C13E39] pb-5 '> &nbsp; How much does it cost to hire a React/web developer? </h2></div>
                        <div>The cost of building a simple website generally costs between $2300-$10000. The total cost depends on many factors some of which include project size, complex features, design and intergration.</div>


                    </div>
                </div>
            </div>
        </div>
    )
}
