import React from 'react';
import CompanyName from '../Component/CompanyName';
import WPImage from '../Images/wordpress.svg';

export default function WordPressASP() {
    return (
        <div className='md:flex'>
            <div className='float-left mr-5'>
                <div className='py-5'>
                    <img src={WPImage} alt='affordable custom web site design' title='Professional Web Design Company with Responsive Designs' />
                </div>
            </div>

            <div><CompanyName /> connects you to your site via the content management tool WordPress allowing you access to manage/edit your site at any time. <br /><br />
                Websites we design use ASP.NET environment to perform tasks on the server-side and proves to be the most compatible on different types of devices.
            </div>
        </div>
    )
}
