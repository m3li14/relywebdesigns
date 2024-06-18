import React from 'react'
import { CompanyName } from '../Component/CompanyName';
import HostingImage from '../Images/server.svg';


function HostingServices() {
    return (
        <div className='md:flex'>

            <div className='float-left mr-5'>
                {/* <div className='mb-5'><Divider className='dark:bg-white bg-[#C13E39]' /></div> */}
                <div className='py-5'>
                    <img src={HostingImage} alt='affordable web developer, Custom Web Solutions' title='Affordable Domain & Hosting' />
                </div>

            </div>
            <div>We include hosting and domain services in the launch of all our development/design projects. <br /><br />
                <CompanyName /> also offers individual hosting and domain services as needed.<br /><br />
                Our company constantly evaluates all services for quality and support availability. We update our hosting/domain partners and providers accordingly to ensure the best service for our clients.
            </div>
        </div>
    )
}
export default HostingServices;