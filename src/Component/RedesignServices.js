import { Card, CardContent } from '@mui/material';
import React from 'react';

const Redesign = [
    {
        id: 1,
        Service: 'Enhanced User Experience (UX)',
        Description: 'We evaluate the current flow of your website to create a streamlined, intuitive experience for your visitors. The goal is to ensure your users can easily navigate your site and find the information they need, boosting engagement and satisfaction.'
    },
    {
        id: 2,
        Service: 'Responsive Design for All Devices',
        Description: 'In today’s mobile-first world, having a responsive website is essential. Our redesigns are fully responsive, providing an optimal viewing experience on desktops, tablets, and smartphones. This approach enhances accessibility and helps your site rank better.'
    },
    {
        id: 3,
        Service: 'SEO Optimization',
        Description: 'We build SEO-friendly websites to help your site rank higher in search results. This includes optimizing meta tags, improving site speed, and structuring content to meet search engine requirements. SEO is vital to making your website more discoverable to potential customers.'
    },
    {
        id: 4,
        Service: 'Visual Appeal and Brand Consistency',
        Description: 'We create a design that reflects your brand’s personality and captivates visitors. Our team ensures that the redesigned site not only looks modern but also aligns with your branding guidelines, color schemes, and overall vision.'
    },
    {
        id: 5,
        Service: 'Improved Website Performance',
        Description: 'Website speed and performance directly impact user experience and SEO. We optimize your website’s code, images, and other elements to ensure it loads quickly, giving users a seamless browsing experience and reducing bounce rates.'
    },
    {
        id: 6,
        Service: 'Conversion Rate Optimization (CRO)',
        Description: 'Redesigning your website provides a great opportunity to enhance elements that lead to conversions, such as forms, call-to-action buttons, and contact options. Our goal is to turn your website visitors into loyal customers.'
    }
]

const RedesignServices = () => {
    return (
        <div className='lg:grid lg:grid-cols-3 lg:gap-8 '>
            {Redesign.map(item => (
                <div key={item.id} className='mb-4'>
                    <Card
                        sx={{
                            boxShadow: 3,
                            borderRadius: 2,
                            padding: 0,
                            backgroundColor: 'transparent',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <CardContent className="card-content">
                            <div className='text-xl font-bold pb-5'>{item.Service}</div>
                            <div>{item.Description}</div>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    )
}

export default RedesignServices