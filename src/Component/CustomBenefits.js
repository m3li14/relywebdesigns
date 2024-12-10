import React from 'react';
import { CardContent } from '@mui/material';

import { GiStairsGoal } from "react-icons/gi";
import { SiMaterialdesign } from "react-icons/si";
import { SiTestcafe } from "react-icons/si";
import { MdOutlineSupportAgent } from "react-icons/md";


const CustomBenefits = () => {

    const Benefits = [
        {
            id: 1,
            title: 'Discovery and Consultation',
            color: '#C13E39',
            icon: GiStairsGoal,
            description: 'The first step in the custom web design process is understanding your business, your brand, and your goals. We take the time to listen to your needs and learn about your target audience. Whether you are launching a new business or refreshing an old website, we gather all the necessary information to create a clear project scope.'
        },
        {
            id: 2,
            title: 'Design and Development',
            color: '#C13E39',
            icon: SiMaterialdesign,
            description: 'Once we have a clear understanding of your needs, our design team will begin crafting wireframes and mockups for your approval. We’ll work closely with you to ensure the design aligns with your brand identity and vision. After finalizing the design, our development team begins the process of building the website. Using the latest technologies, we create a responsive, secure, and high-performance site.'
        },
        {
            id: 3,
            title: 'Testing and Launch',
            color: '#C13E39',
            icon: SiTestcafe,
            description: 'Before launching your new website, we conduct thorough testing to ensure it’s fully functional, bug-free, and optimized for all devices and browsers. We’ll check everything from load times to mobile responsiveness to ensure a seamless user experience. Once everything is tested and approved, we’ll launch your site and make it available to the public.'
        },
        {
            id: 4,
            title: 'Ongoing Support and Maintenance',
            color: '#C13E39',
            icon: MdOutlineSupportAgent,
            description: 'The work doesn’t end once your website is live. We offer ongoing support and maintenance to ensure your site stays up-to-date and continues to perform well. Whether you need updates, new features, or assistance with troubleshooting, we’re here to help.'
        }
    ];

    return (
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
                            {Benefits.map((step, index) => (
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
        </div>
    )
}

export default CustomBenefits