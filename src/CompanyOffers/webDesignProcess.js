import { Divider, Link } from '@mui/material'
import React from 'react'
import DesignProcess from '../Images/DesignProcess.svg'
import { CompanyName } from '../Component/CompanyName'
import { BsQuestionDiamond } from 'react-icons/bs'
import Process from '../Images/WebDesignProcess1.svg'
import Process2 from '../Images/WebDesignProcess2.svg'
import { Helmet } from 'react-helmet'


export default function WebDesignProcess() {
    return (
        <div>
            <Helmet>
                <title data-react-helmet="true">Custom affordable website design and development services</title>
                <meta data-react-helmet="true" name="description" content="Web Design Expressions makes the design process easy, so we can focus on the development of your website and its services." />

                <meta data-react-helmet="true" property="og:title" content="Professional web design process to suit small business needs" />
                <meta data-react-helmet="true" property="og:type" content="Web Design Company" />
                <meta data-react-helmet="true" property="og:url" content="https://webdesignexpressions.net/" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/Assets/DesignProcess.jpg" />
                <meta data-react-helmet="true" property="og:description" content="At Web Design Expressions, we are a company of experienced web developers who specialize in web design/development services." />

            </Helmet>

            <div className='container mx-auto custom-font font-bold text-[#1B3E5D]'>
                <div className='p-10'>
                    <div><h1 className='text-2xl pb-5'>Design Process</h1></div>
                    <Divider />


                    <div className='pt-5'><img src={DesignProcess} alt='collaborative web design vision to reality' className='float-right w-96' title='Creating Visually Appealing Websites: A Collaborative Process' /></div>
                    <div className='pb-5'>Designing a website involves a series of processes to insure the design team creates the proper vision of the hiring company/individual. To better understand the objectives of the website and what development is required, it usually begins with a client/designer consultation.</div>
                    <div className='pb-5'>From there, with collaboration from all parties, the design team will create a plan/outline for the structure and content of the site.</div>
                    <div className='pb-5'>Then comes the design phase. This is where the look and feel of the website is developed and may involve creating wire-frames prototypes, or mock-ups to visualize the layout and user flow of the site. The design may also include the creation of custom graphics and selection of colors, fonts, and other visual elements that are compatible with the company/individual.</div>
                    <div className='pb-5'>When the design is approved by the client,  development on the site can begin. The website is designed using programming languages that include but are not limited to HTML, CSS, JavaScript, PHP, Bootstrap, C# and React.</div>
                    <div className='pb-5'>The development phase may also include the integration of various design features and functionalities such as forms, search, e-commerce and company/user logins to list a few.</div>
                    <div className='pb-5'>Finally, the website is tested and launched. This includes <Link href='/CompanyOffers/searchEngineOptimization' aria-label='Affordable Search engine optimization (SEO) services' title='Affordable Search engine optimization (SEO) services'>search engine optimization (SEO)</Link> which enhances the ranking of the website and increases traffic. Testing is also done on multiple devices and browsers to ensure that the site is fully functional and user-friendly across all platforms.</div>
                    <div className='pb-5'>Once the site is live, it may require ongoing maintenance and updates to keep it functioning properly and secure.</div>
                    <div className='pb-5'>Overall, the web design process is a collaborative effort between the client and the design team. The main goal is creating a visually appealing and functional website that meets the needs and objectives of the client.</div>


                    <Divider />
                    <div><h2 className='text-2xl py-5'>Why use <CompanyName /></h2></div>
                    <div className='lg:float-right'><img src={Process} alt='expert web development custom & affordable' title='Custom & Affordable Web Solutions: Empowering Your Online Presence' /></div>
                    <div><h3 className='text-xl pb-5'>Expertise:</h3></div>
                    <div className='pb-5'>Our company has a team of experienced web developers who have a track record of promptly delivering high-quality projects.</div>
                    <div><h3 className='text-xl pb-5'>Custom solutions:</h3></div>
                    <div className='pb-5'><CompanyName /> offers custom web development solutions that are tailored to the specific needs and goals of each client.</div>
                    <div><h3 className='text-xl pb-5'>Innovation:</h3></div>
                    <div className='pb-5'>Your company stays up-to-date on the latest web development technologies and trends, Our company continuously strives for ways to improve the development process and improve on results.</div>
                    <div><h3 className='text-xl pb-5'>Strong communication:</h3></div>
                    <div className='pb-5'><CompanyName /> values open and honest communication with clients, and works closely to insure needs and expectations are met.</div>
                    <div className='lg:float-left lg:mr-5'><img src={Process2} alt='web development flexible & affordable solutions' title='Flexible & Cost-Effective Web Development Solutions' /></div>
                    <div><h3 className='text-xl pb-5'>Flexibility:</h3></div>
                    <div className='pb-5'>Developers at <CompanyName /> are able to adapt to changes in project scope and timeline, which opens up the design to a variety of possibilities.</div>
                    <div><h3 className='text-xl pb-5'>Cost-effective:</h3></div>
                    <div className='pb-5'>We offer competitive pricing and work with clients to find cost-effective solutions that meet their budget while providing quality development.</div>
                    <div><h3 className='text-xl pb-5'>Satisfied clients:</h3></div>
                    <div>Our <Link href='/Testimonial' aria-label="Web Design Expressions Testimonials" title='View what customers of Web Design Expressions'> Testimonial</Link> page lists satisfied clients with successful projects. Working with <CompanyName /> for web development means working with a team of experts who are dedicated to delivering high-quality, custom solutions that meet the needs and goals of each client.</div>

                </div>


            </div>

            <div className='bg-[#1B3E5D] text-white custom-font font-bold'>
                <div className='container mx-auto p-10'>
                    <div className='pr-20'>
                        <BsQuestionDiamond color='#3D9798' size={32} className='lg:float-left animate-pulse' />
                        <div className='pl-5'><h2 className='text-2xl text-[#C13E39] pb-5 '> &nbsp; What are custom web designs?</h2></div>
                        <div>A website that is fully built from the ground up by a developer can be fully customized and tailored to the needs of the site owner. This grants the ability to design content, media, functionality and marketing in the desired way, without breaking any components within.</div>

                    </div>
                </div>
            </div>
        </div>
    )
}
