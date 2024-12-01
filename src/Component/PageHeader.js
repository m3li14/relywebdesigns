import React from 'react';
import { Divider } from '@mui/material'

const PageHeader = ({ pageTitle }) => {
    return (
        <header className=''>
            <div className='mx-16'><h1 className='lg:text-5xl text-xl lg:Company-Main-Font lg:font-normal font-bold pt-8'>{pageTitle}</h1></div>
            <div className='py-4'><Divider /></div>
        </header>
    );
};


export default PageHeader