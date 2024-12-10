import React from 'react'
import { Link } from '@mui/material'
import CompanyName from './Component/CompanyName'

import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import PageHeader from './Component/PageHeader';
import SEO1 from './Images/SEO1.webp';
import SEO2 from './Images/SEO2.webp';
import SEO3 from './Images/SEO3.webp';
import SEO4 from './Images/SEO4.webp';
import SEO5 from './Images/SEO5.webp';
import SearchEngineOptimization from './Images/SearchEngineOptimization.webp';
import SEOExcellence from './Images/SEOExcellence.webp'
import SEOInfo from './Component/SEOInfo'
import WhyChoose from './Component/WhyChoose'
import Action from './Component/Action';




export default function searchEngineOptimization() {



    return (
        <div>
            <Helmet>
                <title data-react-helmet="true">We offer affordable search engine optimization services</title>

                <meta data-react-helmet="true" name="description" content="Our professional services can help your website rank higher in searches by developing SEO. Contact us today to increase your online presence affordably" />
                <meta data-react-helmet="true" property="og:title" content="Our web development/design company provides SEO services" />
                <meta data-react-helmet="true" property="og:type" content="Web Design Company" />
                <meta data-react-helmet="true" property="og:url" content="https://webdesignexpressions.net/" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/Assets/WebDesign.jpg" />
                <meta data-react-helmet="true" property="og:description" content="Improve your website search rank with Web Design Expressions professional SEO services. an affordable way to increase search visibility" />

            </Helmet>



            <div><PageHeader pageTitle="Search Engine optimization" /></div>



            <div className='lg:float-right lg:w-7/12 lg:ml-10 mb-10'>
                <img className='mx-auto' alt='affordable search engine optimization' src={SearchEngineOptimization} title='Affordable Web Development Services and SEO for Startups and Entrepreneurs' />
            </div>
            <div className='mx-16'>
                <div className='text-2xl font-bold pb-4'>Boost Traffic with <CompanyName /></div>
                <div className='pb-4'>At <CompanyName />, we design visually appealing and user-friendly websites. Sites can contain the most modern/cutting-edge development techniques, but that alone is not enough to drive traffic or gain customers. For that, the site needs to be optimized to show up in online searches using SEO or search engine optimization.</div>
                <div className='pb-4'>Search Engine optimization is the process of optimizing your website in order to improve its ranking on search engines such as Google, Bing, and Yahoo to name a few. Search engines use an algorithm to &quot;rank&quot; sites when users search for specific information. These appear on the SERPs or search engine results page. By using a combination of web development techniques, we can help your website rise through the ranks.</div>
                <div className='pb-4'>Our company not only designs and develops sites, but also provides ongoing maintenance and monitoring to ensure websites remains optimized for the target searches. <CompanyName /> uses tools like Google analytics to track your websites performance. Search patterns and keywords can change, so our design team identifies the most searched keywords in your field and makes adjustments that fit the content.</div>

                <div className=''><CompanyName /> understands that every business is unique, and may have different goals so we work closely with our clients to create a customized SEO strategy that meets their specific needs.</div>


            </div>


            <div className='mx-16 clear-both'><Action /></div>


            <div className='mx-auto'>

                <div className=''>





                    <div className='lg:flex lg:gap-5'>
                        <div className='lg:w-7/12'>
                            <img className='mx-auto' alt='affordable search engine optimization' src={SEOExcellence} title='Affordable Web Development Services and SEO for Startups and Entrepreneurs' />


                        </div>
                        <div className='lg:w-5/12'>
                            <div className='mx-10'>
                                <div className='text-2xl font-bold lg:pt-0 pt-8'>The Right Partner for Custom Web Development and SEO Excellence:</div>
                                <div className='py-5'>Selecting the right partner for affordable search engine optimization and professional web development, including custom web development, is critical to achieving online success. It's essential to collaborate with a company that has a proven track record in delivering results within budget constraints. Look for <Link href='/Testimonials' className='custom-font' aria-label='Customer Testimonials: Hear What Our Clients Have to Say' title='Customer Testimonials: Hear What Our Clients Have to Say' >testimonials</Link> and case studies that demonstrate the company's ability to drive organic traffic, improve search engine rankings, and provide custom web development solutions.</div>
                                <div>A reputable partner will also take the time to understand your business goals, target audience, and unique value proposition. This understanding will guide the creation of a tailored SEO and web development strategy that aligns with your objectives, ensuring a comprehensive approach that encompasses both custom web development and effective SEO practices.</div>
                            </div>

                        </div>


                    </div>

                </div>




            </div>



            <div className='mx-auto'>

                <div>
                    <div className='text-2xl font-bold pt-8 pb-4 mx-16'>Why are (SEO) services often associated with higher costs? </div>

                    <div className='mx-16'>
                        <div>SEO services are essential, especially for small-business. Search Engine Optimization is needed to make a website discoverable and should be thought of as part of the cost of creating/operating a website. This does not mean SEO services aren't affordable.</div>
                        <div className='pt-5'>There are several factors contributing to the expense of SEO services, which include:</div>

                    </div>

                    <motion.div className='lg:flex mt-12' style={{ display: 'flex', justifyContent: 'center' }}>
                        <motion.div
                            className='lg:w-1/5 mx-auto text-center'
                            initial={{ x: -100 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <img src={SEO1} alt='affordable search engine optimization' title='Affordable Search Engine Optimization Solutions: Boosting Your Online Presence' />
                        </motion.div>
                        <motion.div
                            className='lg:w-1/5 mx-auto text-center'
                            initial={{ x: -100 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}

                        >
                            <img src={SEO2} alt='affordable search engine optimization services' title='Affordable SEO Services: Elevating Your Brands Visibility' />
                        </motion.div>
                        <motion.div
                            className='lg:w-1/5 mx-auto text-center'
                            initial={{ x: -100 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.9, delay: 0.4 }}

                        >
                            <img src={SEO3} alt='affordable search engine optimization professional' title='Affordable Search Engine Optimization Company: Your Path to Digital Success' />
                        </motion.div>
                        <motion.div
                            className='lg:w-1/5 mx-auto text-center'
                            initial={{ x: -100 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1.1, delay: 0.6 }}

                        >
                            <img src={SEO4} alt='affordable search engine optimization service' title='Affordable SEO Web Design: Crafting Digital Experiences that Convert' />
                        </motion.div>
                        <motion.div
                            className='lg:w-1/5 mx-auto text-center'
                            initial={{ x: -100 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1.3, delay: 0.8, ease: 'linear' }}

                        >
                            <img src={SEO5} alt='affordable seo web design' title='Affordable Professional Web Design with SEO Excellence: Unleash Your Online Potential' />
                        </motion.div>
                    </motion.div>


                </div>

            </div>

            {/* <div><SEOfactors /></div> */}
            <div><SEOInfo /></div>

            <div className='mx-16'>
                <div className='pb-5'>While SEO services can be costly, it's essential to weigh the potential benefits against the costs. Consider the expertise, track record, and reputation of SEO web agencies or professionals before making a decision. Investing in affordable web design services that include SEO and even React web development services can help create a holistic online presence that attracts organic traffic and enhances your business's growth potential. The planning phase of the site development is a required stop to keep the site design affordable, discoverable and functional. Choosing the right web design company to develop the site and services should not be rushed.</div>

            </div>

            <div><WhyChoose /></div>
        </div >
    )
}