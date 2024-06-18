import React from 'react'
import Traffic from '../Images/Traffic.svg';
import Link from '@mui/material/Link';

export default function WebSiteTraffic() {
    return (
        <div>


            <div className='lg:float-right lg:ml-10 lg:w-1/2'>
                <img className='mx-auto' src={Traffic} alt='supercharge website traffic with search engine optimization' title='Drive More Website Traffic: Our Digital Marketing Services' />
            </div>
            <div className='pb-5'>
                As a company that specializes in digital marketing, we can help you get more traffic to your website through a variety of strategies and techniques. Here are some of the services we offer:
            </div>
            <div className='pb-5'>
                <Link href='/CompanyOffers/searchEngineOptimization' className='custom-font' aria-label='Affordable Search engine optimization (SEO) services' title='Affordable Search engine optimization (SEO) services' >Search engine optimization (SEO)</Link>: We can optimize your website's content and structure to improve its visibility and ranking on search engines like Google. This can lead to more organic traffic to your website.
            </div>

            <div className='pb-5'>
                Pay-per-click (PPC) advertising: We can create and manage PPC campaigns on platforms
                like Google Ads and Facebook Ads to drive targeted traffic to your website. This can
                be an effective way to get more traffic quickly, especially for new websites or
                businesses.
            </div>

            <div className='pb-5'>
                Social media marketing: We can help you develop and execute a social media strategy to drive traffic to your website through platforms like Facebook, Twitter, and Instagram.
            </div>

            <div className='pb-5'>
                <Link href='/CompanyOffers/Marketing' className='custom-font' aria-label='' title='' >Content marketing</Link>: We can help you create high-quality content that attracts and engages your target audience, which can lead to more traffic and higher engagement on your website.
            </div>

            <div className='pb-5'>
                Email marketing: We can help you build and execute an email marketing campaign to promote your website and drive traffic through newsletters, promotions, and other email content.
            </div>

            <div className='pb-5'>
                Overall, there are many strategies and techniques we can use to help you get more traffic to your website. We'll work with you to develop a customized plan that fits your goals and budget, and we'll provide ongoing support and analysis to ensure your success. Contact us today to learn more about how we can help you get more traffic to your website.
            </div>





        </div>
    )
}
