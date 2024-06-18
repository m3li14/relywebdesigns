import React from 'react';
import { CompanyName } from '../Component/CompanyName';
import MarktingImage from '../Images/markting.svg';

export default function ContentMarketing() {
    return (
        <div className='md:flex'>
            <div className='float-left mr-5'>
                <div className='py-5'>
                    <div><img src={MarktingImage} alt='affordable web design, seo, usa' title='Affordable Search Engine Optimisation Services for Local Businesses' /></div>
                </div>
            </div>
            <div>We improve the appearance, readability, and accessibility of all content to keep a user engaged and easily find what they are looking for. <br /><br />
                Content really is king in any web design/development endeavor and <CompanyName /> puts your content on the forefront.
            </div>
        </div>
    )
}
