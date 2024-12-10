import { React } from 'react'
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import YouTubeIcon from '@material-ui/icons/YouTube';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PaymentsIcon from '@mui/icons-material/Payments';
import ShareIcon from '@mui/icons-material/Share';
// import { motion } from 'framer-motion';
// import Fade from '@mui/material/Fade';



export const SocialMedia = () => {

    const handleClick = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'Web Design Expressions',
                    text: 'Check out Web Design Expressions!',
                    url: 'https://webdesignexpressions.net/'
                });
            } else {
                fallbackShare();
            }
        } catch (error) {
            console.log('Error sharing:', error);
        }
    };

    const fallbackShare = () => {
        const shareUrl = 'https://webdesignexpressions.net/';
        if (navigator.clipboard) {
            navigator.clipboard.writeText(shareUrl);
            alert('Website link copied to clipboard!');
        } else {
            alert('Your device or browser does not support sharing.');
        }
    };



    return (
        <div className='print:hidden'>
            <div className='flex'>

                <div className='py-3'>

                    <a href='tel:9494197273' title='Call Web Design Expressions' rel='noreferrer noopener' target='_blank' style={{ paddingLeft: '5px', display: 'block' }}>
                        <PhonelinkRingIcon fontSize='medium' color='inherit' />
                    </a>

                </div>


                <div className='py-3'>

                    <a color='inherit' href='https://api.whatsapp.com/send?phone=12017010718' title='Chat/call Web Design Expressions on whatsapp' rel='noreferrer noopener' target='_blank' style={{ paddingLeft: '5px', display: 'block' }}>
                        <WhatsAppIcon fontSize='medium' />
                    </a>

                </div>

                {/* <div className='py-3'>
                    
                        <a className='text-[#1B3E5D] hover:text-[#C13E39]' href='https://www.facebook.com/designexpressions' title='Web Design Expressions facebook page' rel='noreferrer noopener' target='_blank' style={{ paddingLeft: '5px', display: 'block' }}>
                            <FacebookIcon fontSize='medium' />
                        </a>
                    
                </div> */}

                {/* <div className='py-3'>
                    
                        <a className='text-[#1B3E5D]  hover:text-[#C13E39]' href='https://www.instagram.com/webdesignexpressions' title='Web Design Expressions Instagram page' rel='noreferrer noopener' target='_blank' style={{ paddingLeft: '5px', display: 'block' }}>
                            <InstagramIcon fontSize='medium' />
                        </a>
                    
                </div> */}


                <div className='py-3'>

                    <button
                        color='inherit'
                        onClick={handleClick}
                        style={{ paddingLeft: '5px' }}
                        title='Share Web Design Expressions'
                    >
                        <ShareIcon fontSize='medium' />
                    </button>

                </div>



                <div className='py-3'>

                    <a color='inherit' href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=DX7EDJDK3YYF8" target="_blank" rel="noopener noreferrer" title="Make a Secure Online Payment to Web Design Expressions" style={{ paddingLeft: '5px', display: 'block' }}>
                        <PaymentsIcon fontSize='medium' />
                    </a>

                </div>

            </div>

            {/* <motion.div
                className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-[#1B3E5D] py-1 rounded-l-2xl border-2 border-[#ffffff]"

            >

                <div className='my-2 py-2 hover:bg-[#1B3E5D] hover:rounded-l-2xl hover:translate-x-[-20px]'>
                    <Fade direction="down" in={true} timeout={1000} mountOnEnter unmountOnExit>
                        <a className='text-[#FFFFFF] hover:text-[#C13E39]' href='https://www.facebook.com/relywebdesigns' title='Web Design Expressions facebook page' rel='noreferrer noopener' target='_blank' style={{ paddingLeft: '5px', display: 'block' }}>
                            <FacebookIcon fontSize='medium' />
                        </a>
                    </Fade>
                </div>

                <div className='my-2 py-2 hover:bg-[#1B3E5D] hover:rounded-l-2xl hover:translate-x-[-20px]'>
                    <Fade direction="down" in={true} timeout={1500} mountOnEnter unmountOnExit>
                        <a className='text-[#FFFFFF]  hover:text-[#C13E39]' href='https://www.instagram.com/webdesignexpressions' title='Web Design Expressions Instagram page' rel='noreferrer noopener' target='_blank' style={{ paddingLeft: '5px', display: 'block' }}>
                            <InstagramIcon fontSize='medium' />
                        </a>
                    </Fade>
                </div>

                <div className='my-2 py-2 hover:bg-[#1B3E5D] hover:rounded-l-2xl hover:translate-x-[-20px]'>
                    <Fade direction="down" in={true} timeout={2000} mountOnEnter unmountOnExit>
                        <button
                            className='text-[#FFFFFF] hover:text-[#C13E39]'
                            onClick={handleClick}
                            style={{ paddingLeft: '5px' }}
                        >
                            <ShareIcon fontSize='medium' />
                        </button>
                    </Fade>
                </div>

                <div className='my-2 py-2 hover:bg-[#1B3E5D] hover:rounded-l-2xl hover:translate-x-[-20px]'>
                    <Fade direction="down" in={true} timeout={2500} mountOnEnter unmountOnExit>
                        <a className='text-[#FFFFFF] hover:text-[#C13E39]' href='tel:9494197273' title='Call Web Design Expressions' rel='noreferrer noopener' target='_blank' style={{ paddingLeft: '5px', display: 'block' }}>
                            <PhonelinkRingIcon fontSize='medium' />

                        </a>
                    </Fade>
                </div>

                <div className='my-2 py-2 hover:bg-[#1B3E5D] hover:rounded-l-2xl hover:translate-x-[-20px]'>
                    <Fade direction="down" in={true} timeout={3000} mountOnEnter unmountOnExit>
                        <a className='text-[#FFFFFF] hover:text-[#C13E39]' href='https://api.whatsapp.com/send?phone=12017010718' title='Chat/call Web Design Expressions on whatsapp' rel='noreferrer noopener' target='_blank' style={{ paddingLeft: '5px', display: 'block' }}>
                            <WhatsAppIcon fontSize='medium' />
                        </a>
                    </Fade>
                </div>

                <div className='my-2 py-2 hover:bg-[#1B3E5D] hover:rounded-l-2xl hover:translate-x-[-20px]'>
                    <Fade direction="down" in={true} timeout={3500} mountOnEnter unmountOnExit>
                        <a className='text-[#FFFFFF] hover:text-[#C13E39]' href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=DX7EDJDK3YYF8" target="_blank" rel="noopener noreferrer" title="Make a Secure Online Payment to Web Design Expressions" style={{ paddingLeft: '5px', display: 'block' }}>
                            <PaymentsIcon fontSize='medium' />
                        </a>
                    </Fade>
                </div>
            </motion.div> */}

        </div>

    )
}
export default SocialMedia;