import React, { useState, useEffect } from 'react';
import Insights from '../Images/Insights.svg'

function PageSpeedInsights() {

    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercentage((prevPercentage) => (prevPercentage >= 100 ? 100 : prevPercentage + 1));
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>




            <div className='lg:flex mx-auto'>
                <div className='lg:w-1/4'>
                    <div className='text-center mt-2'>
                        <div className="relative">
                            <img src={Insights} alt='representing custom professional diagnose for performance' title='Professional Diagnose: Unleashing Optimal Performance' className='rounded-full border-2 border-[#1B3E5D] mx-auto' />
                            <div
                                className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-xl font-bold"
                                style={{ transform: 'translate(-50%, -50%)', top: '50%', left: '50%' }}
                            >
                                {percentage}%
                            </div>
                        </div>

                    </div>
                    <div className='text-center pt-2'>Performance</div>
                </div>
                <div className='lg:w-1/4'>
                    <div className='text-center mt-2'>
                        <div className="relative">
                            <img src={Insights} alt='illustrating custom professional diagnose for accessibility' title='Professional Diagnose: Ensuring Seamless Accessibility' className='rounded-full border-2 border-[#1B3E5D] mx-auto' />
                            <div
                                className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-xl font-bold"
                                style={{ transform: 'translate(-50%, -50%)', top: '50%', left: '50%' }}
                            >
                                {percentage}%
                            </div>
                        </div>
                    </div>
                    <div className='text-center pt-2'>Accessibility</div>
                </div>
                <div className='lg:w-1/4'>
                    <div className='text-center mt-2'>
                        <div className='relative'>
                            <img src={Insights} alt='depicting custom professional diagnose for best practices' title='Professional Diagnose: Complying with Best Practices' className='rounded-full border-2 border-[#1B3E5D] mx-auto' />
                            <div
                                className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-xl font-bold"
                                style={{ transform: 'translate(-50%, -50%)', top: '50%', left: '50%' }}
                            >
                                {percentage}%
                            </div>
                        </div>

                    </div>
                    <div className='text-center pt-2'>Best Practices</div>
                </div>
                <div className='lg:w-1/4'>
                    <div className='text-center mt-2'>
                        <div className='relative'>
                            <img src={Insights} alt='showcasing custom professional diagnose for seo' title='Professional Diagnose: Maximizing SEO Efficiency' className='rounded-full border-2 border-[#1B3E5D] mx-auto' />
                            <div
                                className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-xl font-bold"
                                style={{ transform: 'translate(-50%, -50%)', top: '50%', left: '50%' }}
                            >
                                {percentage}%
                            </div>
                        </div>

                    </div>
                    <div className='text-center pt-2'>SEO</div>
                </div>
            </div>
        </div>
    )
}

export default PageSpeedInsights