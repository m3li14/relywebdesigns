import React from 'react'
import WordPress from '../Component/WordPress';
import ASP from '../Component/ASP';
import { Helmet } from 'react-helmet'
import { Divider } from '@mui/material';

export default function WPASP() {
    return (
        <div>
            <Helmet>
                <title data-react-helmet="true">Our company WordPress integration in client development</title>

                <meta data-react-helmet="true" name="description" content="WordPress for our customers proves to be reliable, professional and affordable. WordPress website maintenance allows for user control for any company" />
                <meta data-react-helmet="true" property="og:title" content="Rely Design services includes WordPress for clients" />
                <meta data-react-helmet="true" property="og:type" content="Web Design Company" />
                <meta data-react-helmet="true" property="og:url" content="https://webdesignexpressions.net/" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/Assets/WebDesign.jpg" />
                <meta data-react-helmet="true" property="og:description" content="Many business use WordPress for good reason. Professional site maintenance that allows for custom development for designers and company clients" />

            </Helmet>
            <div className='container mx-auto custom-font font-bold text-[#1B3E5D]'>
                <div className='pt-10 px-10'>
                    <div className='text-2xl pb-5'><h1>WordPress</h1></div>
                    <Divider />


                    <div className='py-5'>
                        <WordPress />
                    </div>
                    <Divider />
                    <div className='text-2xl pt-5'><h2>ASP.net</h2></div>
                    <div className='pt-5'>
                        <ASP />
                    </div>
                </div>
            </div>
        </div>
    )
}
