import React from 'react';
import { CardContent } from '@mui/material';
import { SiAltiumdesigner } from "react-icons/si";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdMobileFriendly } from "react-icons/md";
import { GiSecurityGate } from "react-icons/gi";
import { LuScaling } from "react-icons/lu";
import { TbSeo } from "react-icons/tb";
import { MdOutlineInventory } from "react-icons/md";








const ECommerceBenefits = () => {

    const EBenefits = [
        {
            id: 1,
            title: 'Custom Design for Your Brand',
            color: '#C13E39',
            icon: SiAltiumdesigner,
            description: 'Your e-commerce site should reflect your brand’s personality and values. We create visually stunning and fully customized designs that not only attract visitors but also build trust and credibility. With a unique, professional look, your store will stand out in the crowded digital marketplace.'
        },
        {
            id: 2,
            title: 'Seamless User Experience (UX)',
            color: '#C13E39',
            icon: IoBagCheckOutline,
            description: 'User experience is critical in e-commerce. From intuitive navigation to quick checkout processes, we optimize every aspect of your online store to ensure your customers can shop effortlessly. A smooth shopping journey translates into increased customer satisfaction and repeat sales.'
        },
        {
            id: 3,
            title: 'Mobile-Optimized Stores',
            color: '#C13E39',
            icon: MdMobileFriendly,
            description: 'With more than half of all online shopping done on mobile devices, a mobile-friendly store is a must. Our e-commerce websites are fully responsive, ensuring that your customers can browse and purchase from any device—be it a smartphone, tablet, or desktop.'
        },
        {
            id: 4,
            title: 'Robust Security',
            color: '#C13E39',
            icon: GiSecurityGate,
            description: 'When it comes to online shopping, security is non-negotiable. Our e-commerce solutions are built with robust security measures, including SSL encryption, secure payment gateways, and compliance with PCI DSS standards. This protects your customers sensitive data and builds trust in your brand.'
        },
        {
            id: 5,
            title: 'Scalability for Growth',
            color: '#C13E39',
            icon: LuScaling,
            description: 'Your business isn’t static, and neither should your e-commerce platform be. Our solutions are designed to grow with you. Whether you’re adding new products, expanding to new markets, or scaling operations, our platforms can adapt to meet your evolving needs.'
        },
        {
            id: 6,
            title: 'Search Engine Optimization (SEO)',
            color: '#C13E39',
            icon: TbSeo,
            description: 'What good is a beautifully designed store if nobody can find it? We integrate SEO best practices into every e-commerce solution we build. From optimized product pages to faster loading times, we ensure your store ranks higher in search engine results, driving more organic traffic and increasing your sales potential.'
        },
        {
            id: 7,
            title: 'Custom Features and Integrations',
            color: '#C13E39',
            icon: MdOutlineInventory,
            description: 'Every business is unique, and so are its requirements. Whether it’s integrating with a specific inventory management system, offering personalized recommendations, or enabling subscription-based services, we create custom functionalities that align with your business model.'
        }

    ]

    return (
        <div>
            <div>
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
                                {EBenefits.map((step, index) => (
                                    <div key={step.id} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                        <div className="lg:w-10/12flex items-center justify-center">

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
            </div>
        </div>
    )
}

export default ECommerceBenefits