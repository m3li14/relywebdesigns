import React from 'react';
import { CardContent } from '@mui/material';

import { GrUserExpert } from "react-icons/gr";
import { IoMdClock } from "react-icons/io";
import { PiStrategy } from "react-icons/pi";
import { FaRankingStar } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";



const SEOInfo = () => {

    const steps = [
        {
            id: 1,
            title: 'Expertise and Skill',
            color: '#C13E39',
            icon: GrUserExpert,
            description: 'Effective SEO services require a deep understanding of search engine algorithms, industry trends, and various techniques. Some include keyword research, content optimization, technical SEO, and link building. SEO professionals that specialize in SEO web development can offer these services due to their extensive knowledge and experience. Their high quality services are paramount to getting a small business site traffic and in long term provides affordability through added users/customers.'
        },
        {
            id: 2,
            title: 'Time and Effort',
            color: '#C13E39',
            icon: IoMdClock,
            description: 'SEO services is an active process that demands continuous optimization, monitoring, and analysis. The website development/design involves tasks such as conducting thorough keyword research, optimizing on-page elements, crafting high-quality content, building authoritative backlinks, monitoring website performance, and staying up-to-date with algorithm changes for the company. The time and effort invested by SEO professional web developers significantly contribute to the overall cost of the service.'
        },
        {
            id: 3,
            title: 'Customization and Strategy',
            color: '#C13E39',
            icon: PiStrategy,
            description: 'Effective SEO strategies need to be tailored to the specific goals, target audience, and competition of each business and service. Developing a customized SEO strategy involves conducting in-depth research and analysis, which may add to the cost of services. In order to keep it affordable, it is important to include a targeted user base for the services to be developed. An SEO web agency adept at creating personalized strategies ensures that your website is optimized to its fullest potential while also keeping the service affordable and in conjunction with its design and development.'
        },
        {
            id: 4,
            title: 'Competitiveness',
            color: '#C13E39',
            icon: FaRankingStar,
            description: 'Designing and developing in industries or markets with high levels of competition require more extensive optimization efforts to achieve and maintain higher rankings. This often entails additional services such as content creation, advanced link building, and continuous monitoring, which can contribute to higher costs for SEO services. It is important to understand your market in order to keep the services you need and pause the others to keep it affordable.'
        },
        {
            id: 5,
            title: 'Tools and Resources',
            color: '#C13E39',
            icon: FaTools,
            description: 'SEO professionals rely on a variety of tools and resources to conduct research, track performance, analyze data, and implement optimization strategies effectively in their website development. These tools often come with subscription costs, which are factored into the overall expense of providing SEO services.'
        },
        {
            id: 6,
            title: 'Return on Investment (ROI)',
            color: '#C13E39',
            icon: FaMoneyBillTrendUp,
            description: 'It is crucial to consider the long-term benefits of SEO web development, including increased organic traffic, heightened online visibility, and improved conversions for a small business. When implemented effectively, SEO services can generate substantial returns. The pricing of SEO services may reflect the potential value it brings to businesses in terms of long-term online presence and visibility. The planning phase of the site development is a required stop to keep the site design affordable, discoverable and functional. Choosing the right web design company to develop the site and services should not be rushed.'
        }
    ];



    return (
        <div className="w-full p-6 mx-auto"
            sx={{
                boxShadow: 3,
                borderRadius: 2,
                padding: 0,
                backgroundColor: 'transparent',
                backdropFilter: 'blur(10px)',
                // border: '1px solid rgba(0, 0, 0, 0.2)',
            }}
        >

            <CardContent>
                <div className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5" />
                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <div key={step.id} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                <div className="lg:w-10/12 flex items-center justify-center">

                                    <div className="p-4 rounded-lg shadow-md ">
                                        <div className="p-5 float-left">
                                            {step.icon && <step.icon size={80} />}

                                        </div>
                                        <div className="text-2xl font-bold pb-4">{step.title}</div>
                                        <div className="">{step.description}</div>
                                    </div>
                                </div>

                                <div className="lg:w-2/12">

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </div>
    );
};
export default SEOInfo;


