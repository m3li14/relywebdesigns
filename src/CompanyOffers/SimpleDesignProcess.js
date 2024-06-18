import { CompanyName } from '../Component/CompanyName';
import DesignProcessImage from '../Images/design.svg'

function SimpleDesignProcess() {
    return (
        <div className='md:flex'>
            <div className='float-left mr-5'>
                <div className='py-5'>
                    <img src={DesignProcessImage} alt='affordable web design agency' title='Professional Web Development in USA: Quality and Affordability' />
                </div>
            </div>
            <div><CompanyName /> prioritizes ease of use and convenience for our clients. Whether it be developing a brand-new site or improving/maintaining an existing site, our company strives to provide a straightforward, efficient experience to web design.<br /><br />
                Our design process is designed to streamline development establishing a seamlessly running website that is live in a prompt timeline.
            </div>
        </div>
    )
}
export default SimpleDesignProcess;