import React from 'react'
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import CompanyName from './CompanyName';
import SocialMedia from './socialMedia';
import '../App.css';
// import HiddenRecaptcha from './reCaptcha';


const today = new Date();


function Footer() {

    return (
        <div className='mt-5 clear-both'>
            <Divider className='bg-[#C13E39]' />
            <div className='lg:flex lg:gap-5'>
                <div className='lg:w-1/2'>
                    <div className='pt-3 custom-font'><Link href='/Home' className=' dark:text-white text-[#B93656] hover:text-[#B93656] custom-font font-bold custom-link pb-5' style={{ color: '#C13E39', textDecoration: 'none', fontWeight: 'bold' }} exact="true">&copy; {today.getFullYear()} - <CompanyName /></Link></div>

                </div>
                <div className='lg:w-1/2'>
                    <div className='float-right text-right'>
                        <SocialMedia />
                    </div>
                </div>
            </div>





            {/* <HiddenRecaptcha /> */}
        </div>
    )
}

export default Footer