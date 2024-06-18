import React from 'react'
import { CompanyName } from '../Component/CompanyName';
import ReactImage from '../Images/react.svg'
import { Divider } from '@mui/material';
// import 'tailwindcss/tailwind.css'




function ReactWebDesign() {
    return (
        <div className='md:flex'>

            <div className='float-left mr-5'>
                {/* <div className='mb-5'><Divider className='dark:bg-white bg-[#C13E39]' /></div> */}
                <div className='py-5'>
                    <img src={ReactImage} alt='affordable web design agency, web development services' title='Custom Professional Web Design Solutions' />
                </div>

            </div>

            <div>
                <CompanyName /> uses react due to its versatility, performance and simple component structure.<br /><br />
                Web designing in react makes it easy to alter, adjust and update each individual aspects of your website.<br /><br />
                The react library is currently the most used framework in the world to build functional, great looking websites without sacrificing performance.

            </div>


        </div>
    )
}
export default ReactWebDesign;