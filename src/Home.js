import React from 'react'
import { CompanyName } from './Component/CompanyName'
import Link from '@mui/material/Link';
import Greeting from './Component/Greeting';
import { Divider } from '@mui/material';
import TextSlide from './Component/TextSlide';
import One from './Images/Relywebdesign-1.webp'
import Two from './Images/Relywebdesign-2.webp'
import Three from './Images/Relywebdesign-3.webp'
import Four from './Images/Relywebdesign-4.webp'
import Five from './Images/Relywebdesign-5.webp'
import Six from './Images/Relywebdesign-6.webp'
import Seven from './Images/Relywebdesign-7.webp'
import PreviousProjects from './Component/PreviousProjects';
import Offer from './offer';
import { Helmet } from 'react-helmet';
import './App.css';
import USAEvents from './Events/USAEvents';
import Logo from './Images/Logo.png'
// import Header from './Component/Header';
import PageSpeedInsights from './Component/PageSpeedInsights';


export default function Home() {

    const slides = [
        {
            title: 'Affordable, Professional Web Design Agency',
            paragraph: "We take pride in being an affordable web design agency, never compromising on quality to fulfill our customers' needs. Our objective is to provide small businesses with professional web design services, enabling them to receive an impressive website that attracts customers and fuels growth. All this without straining your finances. With our cost-effective web design solutions, establish a robust online presence at a reasonable price.",
            imageSrc: One,
            alt: "professional web design company with responsive designs",
            imagetitle: "Affordable Web Design Company for Small Business Owners",
        },
        {
            title: 'Professional Web Development Company Services',
            paragraph: "Alongside web design, we extend a wide array of web development services to bring your website to life.\n\nOur skilled team employs the latest technologies and best practices to craft functional and responsive websites. Whether you require a straightforward informational site or a complex e-commerce platform, we possess the expertise to meet your requirements.",
            imageSrc: Two,
            alt: "Professional Website Design Services for Businesses",
            imagetitle: "Professional Web Design Company with Responsive Designs",
        },
        {
            title: 'Boost Your Online Visibility with Search Engine Optimization',
            paragraph: 'A well-designed website is just the initial step. To ensure your target audience discovers your site, we offer search engine optimization (SEO) services. Our SEO experts optimize your website to enhance its visibility in search engine rankings. By targeting relevant keywords and implementing effective SEO strategies, we drive organic traffic to your site, augmenting your online presence.',
            imageSrc: Three,
            alt: "affordable web design companies usa",
            imagetitle: "Affordable Web Development Agency for Custom Website Projects",
        },
        {
            title: 'Unlock the Power of React Web Development',
            paragraph: "If you seek advanced functionality and interactivity, our React web development services are the epitome of modern solutions. React, a potent JavaScript library, empowers the creation of dynamic and responsive user interfaces. Our professional team specializes in React web development, constructing engaging and user-friendly websites that leave a lasting impression on your visitors.",
            imageSrc: Four,
            alt: "custom web design, web design agency, USA",
            imagetitle: "Best Affordable Web Development Company",
        },
        {
            title: 'Partner with Us for Small Business Website Design Services',
            paragraph: "We comprehend the unique challenges faced by small businesses, and our mission is to support your growth. Our tailored small business website design services align with your specific goals and budget. Whether you're a startup or an established business, we collaborate closely with you to fashion a website that showcases your products or services, connecting you with your target audience and expanding your customer base.",
            imageSrc: Five,
            alt: "web design company usa",
            imagetitle: "Affordable Web Developer Offering Custom Web Solutions",
        },
        {
            title: 'Affordable, Custom, and Professional',
            paragraph: 'When it comes to website design, we offer affordability, customization, and professionalism. Our team of experts is fervent about creating websites that align with your goals, needs, and budget. Through our custom website design and development services, you can acquire a website that embodies your brand, engages your customers, and propels your business forward. Choose Us for Your Website Design Needs',
            imageSrc: Six,
            alt: "affordable web development services",
            imagetitle: "Custom and creative web design USA",
        },
        {
            title: 'Ready to take your online presence to the next level?',
            paragraph: "Get in touch with us today for affordable website design services that deliver exceptional results. Let's collaborate and create a website that distinguishes you from the competition, propelling your success.",
            imageSrc: Seven,
            alt: "website design company in usa",
            imagetitle: "Modern customized web design USA",
        },
    ];


    return (
        <div>
            <Helmet>
                <title data-react-helmet="true">Affordable Professional Web Design, web development company, USA</title>
                <meta data-react-helmet="true" name="description" content="Professional web design company offering custom development services while maintaining affordability." />
                <meta data-react-helmet="true" property="og:title" content="Web Design Expressions web development company you can rely on" />
                <meta data-react-helmet="true" property="og:type" content="Web Design Company" />
                <meta data-react-helmet="true" property="og:url" content="https://webdesignexpressions.net/" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/Assets/Home.jpg" />
                <meta data-react-helmet="true" property="og:description" content="Web Design Expressions is a company committed to creating affordable, professional and appealing websites" />

            </Helmet>
            <div>
                {/* <Header /> */}

                <div className='container mx-auto'>

                    <div className='px-10 lg:py-5  custom-font font-bold text-[#1B3E5D] bg-white'>
                        <div className='lg:float-right lg:ml-10 mb-5'>
                            <div><USAEvents /></div>
                            <div>
                                <img src={Logo} width={'100%'} height={'auto'} alt='affordable custom website design, professional web design' title='Affordable Professional Website Design Services for Businesses, Affordable web design USA' className='mx-auto' />
                            </div>
                        </div>
                        <div className='pb-5'><Greeting />, <CompanyName /> is a devoted partnership of designers, marketers/developers, committed to creating affordable, professional and appealing websites. Our  design studio works with a variety of different companies and industries both domestic and international.</div>
                        <div className='pb-5'>We are a developer that is committed to a unique, personalized experience for our clients through a custom website that suits their needs.</div>
                        <div className='pb-5'>Our dedicated team provides a variety of products/services to optimize the design and functionality and maintenance  of a website . The websites we design undergo extensive testing and <Link href='/CompanyOffers/searchEngineOptimization' className='custom-font' aria-label='Affordable Search engine optimization (SEO) services' title='Affordable Search engine optimization (SEO) services' >search engine optimization (SEO)</Link> to keep them updated and modernized.</div>
                        <div className='pb-5'>At <CompanyName />, we offer a more focused, attentive environment that is free from mainstream constraints while preserving security and quality.</div>
                        <div className='pb-5'>Let's start by defining your needs, how to connect you with your target audience, and how to set your company apart.</div>
                        <div className='pb-5'>Together, we can create a cohesive and optimized website design that connects and inspires.</div>
                        <Divider />

                        <div className='lg:flex lg:gap-5'>
                            <div className='lg:w-1/2'>
                                <div className='py-5'>We provide <Link href='/CustomWebDevelopment' className='custom-font' aria-label='Custom Web Development Company' title='Affordable custom Web Development' >custom, web development</Link> and design in HTML, CSS. <Link href='/CompanyOffers/reactJsDevelopment' className='custom-font' aria-label='custom react web development' title='React Web Design' >REACT</Link>/ JavaScript. Services our company provides include <Link href='/CompanyOffers/WPASP' className='custom-font' aria-label='WordPress' title='Wordpress web development' >WordPress</Link>, <Link href='/CompanyOffers/WebsiteHosting' className='custom-font' aria-label='custom website design services, Hosting, USA' title='Hosting Services, USA based hosting' >Hosting</Link>, <Link href='/CompanyOffers/Marketing' className='custom-font' aria-label='Advertising' title='Professional SEO, PPC' >Advertising</Link>, Search Engine Optimization, content management and more. < CompanyName /> affordably builds all types of websites.</div>
                            </div>
                            <div className='lg:w-1/2'>
                                <div className='py-5'><PageSpeedInsights /></div>
                            </div>
                        </div>




                    </div>

                </div>

                <div className='bg-[#1B3E5D] text-white border-b-4 border-white'><TextSlide slides={slides} /></div>

                <div>
                    <div><Offer /></div>
                    <div>
                        <PreviousProjects />
                    </div>
                </div>
            </div >
        </div>
    )
}
