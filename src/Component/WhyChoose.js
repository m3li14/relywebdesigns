import React from 'react'
import CompanyName from './CompanyName';
import EmailIcon from '@mui/icons-material/Email';
import { Divider, ThemeProvider, createTheme, Button } from '@mui/material';
import { BsPatchQuestionFill } from "react-icons/bs";


const theme = createTheme({
    palette: {
        primary: {
            main: "#99aab5", // custom primary color
        },
        secondary: {
            main: "#C13E39", // custom secondary color
        },
    },
});

const WhyChoose = () => {
    return (
        <div className='mx-16'>
            <div className='my-5'><Divider /></div>
            <div className='text-2xl font-bold pb-5'>Why Choose <CompanyName /> for Your Website?</div>
            <div>
                <span className='float-left pr-2'><BsPatchQuestionFill size={70} /></span> When it comes to establishing or elevating your online presence, <CompanyName /> is the web design company dedicated to creating powerful, visually captivating, and high-performing websites. Our team specializes in Custom Web Design, Website Redesign, Search Engine Optimization (SEO), Web Development, E-commerce Solutions, and UI/UX Design—essential services for businesses looking to excel online. Here’s why we’re the ideal partner for your digital success:
            </div>

            <div className='pt-5'>
                <div className='text-lg font-bold pb-2'><span className='text-5xl text-[#C13E39]'>1. </span>Custom Web Design That Stands Out</div>
                <div>At <CompanyName />, we understand that your website is the face of your brand. Our custom web design services provide unique and visually compelling websites tailored to reflect your business identity, attract your target audience, and make a lasting impression. By focusing on your specific goals, we create designs that are modern, user-friendly, and fully aligned with your brand's values.</div>
            </div>
            <div className='pb-5'>
                <div className='text-lg font-bold pb-2'><span className='text-5xl text-[#C13E39]'>2. </span>Comprehensive Website Redesign for an Enhanced User Experience</div>
                <div>Outdated websites can turn away potential clients. Our website redesign services give your site a fresh, modern look with optimized functionality. We improve user experience (UX), mobile responsiveness, and overall performance, helping your site rank higher in search engine results and engaging visitors with a seamless, enjoyable experience.</div>

            </div>
            <div className='pb-5'>
                <div className='text-lg font-bold pb-2'><span className='text-5xl text-[#C13E39]'>3. </span>Strategic Search Engine Optimization (SEO) to Boost Visibility</div>
                <div>Building a great website is only part of the journey. With our SEO services, we optimize your site to rank higher on search engines like Google, increasing organic traffic and reaching more potential customers. Using the latest SEO practices, we enhance your website’s visibility, ensuring you stand out in an increasingly competitive digital landscape.</div>

            </div>
            <div className='pb-5'>
                <div className='text-lg font-bold pb-2'><span className='text-5xl text-[#C13E39]'>4. </span>Expert Web Development for Performance and Scalability</div>
                <div>Our web development services prioritize fast load times, security, and scalable architecture to support your website’s growth. We use the latest technologies and follow best practices to ensure your site remains robust and performs at its best, accommodating everything from simple business sites to complex, data-driven web applications.</div>

            </div>
            <div className='pb-5'>
                <div className='text-lg font-bold pb-2'><span className='text-5xl text-[#C13E39]'>5. </span>E-commerce Solutions Tailored for Your Business Growth</div>
                <div>For businesses entering the world of online retail, our e-commerce solutions offer a customized approach to help you sell products or services seamlessly. We handle everything from product catalog design to secure payment integration, creating a streamlined shopping experience that encourages conversions and maximizes revenue.</div>

            </div>
            <div className='pb-5'>
                <div className='text-lg font-bold pb-2'><span className='text-5xl text-[#C13E39]'>6. </span>UI/UX Design That Captivates and Engages</div>
                <div>Engaging users from the moment they land on your site is crucial. Our UI/UX design team focuses on creating intuitive, aesthetically pleasing layouts that guide visitors naturally through your site, enhancing usability and increasing user retention. By prioritizing user experience, we help you build trust and keep your audience engaged.</div>

            </div>
            <div className='pb-5'>
                <div className='text-lg font-bold pb-2'><span className='text-5xl text-[#C13E39]'>7. </span>End-to-End Support and Ongoing Maintenance</div>
                <div><CompanyName /> provides comprehensive support, from project planning to post-launch maintenance. We don’t just build your site and walk away; we monitor performance, make updates as needed, and optimize your site for changing search trends and business goals. With our dedicated support, your website remains an effective, up-to-date tool for growth.</div>

            </div>
            <div className='pb-5'>
                <div className='text-lg font-bold pb-2'><span className='text-5xl text-[#C13E39]'>8. </span>A Proven Track Record of Success</div>
                <div>With a portfolio that spans a wide range of industries, <CompanyName /> has a track record of creating successful websites that deliver results. We’re committed to understanding your business and providing solutions that drive meaningful growth and engagement.</div>

            </div>
            <div className='text-lg font-bold pb-2'>Ready to Grow Your Business Online?</div>
            <div className=''>
                <div>
                    Choosing <CompanyName /> means partnering with experts who are passionate about your success. Contact us today to discuss how we can help you create a powerful online presence that resonates with your audience and achieves your business goals.
                </div>
                <div className='my-8'>
                    <ThemeProvider theme={theme}>
                        <Button fullWidth variant="contained" id="btnSubmit" color="secondary" style={{ color: 'inherit' }} size='large' aria-label='Contact Web Design Expressions, the Web design and SEO company' title="Contact Web Design Expressions, the Web design and SEO company" href='/Contact'>
                            <EmailIcon />&nbsp;&nbsp;<b>Contact us</b>
                        </Button>
                    </ThemeProvider>
                </div>
            </div>

        </div >
    )
}

export default WhyChoose