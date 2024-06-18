import { CompanyName } from '../Component/CompanyName';
import Search from '../Images/Search.svg';

function SEO() {
    return (
        <div className='md:flex'>
            <div className='float-left mr-5'>
                <div className='py-5'>
                    <img src={Search} alt='affordable search engine optimization services' title='Affordable Search Engine Optimization Services for Local Businesses' />
                </div>
            </div>
            <div>Website traffic is everything. <CompanyName /> has years of experience optimizing your site for all of the leading search engines. <br /><br />
                We provide detailed search engine analytics for your site along with solutions to improve site visibility/traffic.
            </div>
        </div>
    )
}
export default SEO;