import React from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from '@mui/system';
import WebDesignServices from './Component/WebDesignServices';
import WebDesignCost from './Component/WebDesignCost';
import WebSiteTraffic from './Component/WebSiteTraffic';
import WebsiteRequirements from './Component/WebsiteRequirements';
import WebsiteReact from './Component/WebsiteReact';
import { Helmet } from 'react-helmet';
import { Divider } from '@mui/material';

export default function FAQ() {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    // Custom styles
    const TransparentAccordion = styled(Accordion)(({ theme }) => ({
        backgroundColor: 'transparent',
        color: '#1B3E5D',
    }));

    const TransparentAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
        backgroundColor: 'transparent',
        color: '#1B3E5D',
    }));

    const TransparentAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
        backgroundColor: 'transparent',
        color: '#1B3E5D',
    }));

    return (
        <div className='mx-auto'>

            <Helmet>
                <title data-react-helmet="true">How Web Design Expressions develops custom websites affordably</title>
                <meta data-react-helmet="true" name="description" content="Our agency provides many development services that customize your site and maintains its functionality. To keep it affordable, we deploy a variety of techniques" />
                <meta data-react-helmet="true" property="og:title" content="How our company provides custom websites services" />
                <meta data-react-helmet="true" property="og:type" content="Web Design Company" />
                <meta data-react-helmet="true" property="og:url" content="https://webdesignexpressions.net/" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/Assets/WebDesign.jpg" />
                <meta data-react-helmet="true" property="og:description" content="Our company offers professional web design services. We utilize many tools for maintaining and optimizing small business solutions" />

            </Helmet>


            <div className='p-5 mx-10 custom-font font-bold text-[#1B3E5D]'>
                <div><h1 className='text-2xl pb-5'>Frequently Asked Questions</h1></div>
                <Divider />

                <div className='pb-10 pt-5'>
                    The most effective factor in building and maintaining a sucecessful website starts with the knowledge and planning of what will drive your specific need. Before development, here are some questions to consider for your custom design.
                </div>

                <TransparentAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="text-[#1B3E5D]">
                    <TransparentAccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <div className="font-bold text-[#1B3E5D]">What does a web design company do?</div>
                    </TransparentAccordionSummary>
                    <TransparentAccordionDetails>
                        <div>

                            <div>
                                <div>
                                    <div className='text-[#1B3E5D]'>
                                        <WebDesignServices />
                                    </div>
                                </div>
                            </div>


                        </div>
                    </TransparentAccordionDetails>
                </TransparentAccordion>


                <TransparentAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="text-[#1B3E5D]">
                    <TransparentAccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <div className="font-bold text-[#1B3E5D]">How much does it cost to build a website?</div>
                    </TransparentAccordionSummary>
                    <TransparentAccordionDetails>
                        <div>

                            <div>
                                <div>
                                    <div className='text-[#1B3E5D]'>
                                        <WebDesignCost />
                                    </div>
                                </div>
                            </div>


                        </div>
                    </TransparentAccordionDetails>
                </TransparentAccordion>




                <TransparentAccordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="text-[#1B3E5D]">
                    <TransparentAccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <div className="font-bold text-[#1B3E5D]">How can I get my website more traffic?</div>
                    </TransparentAccordionSummary>
                    <TransparentAccordionDetails>
                        <div>

                            <div>
                                <div>
                                    <div className='text-[#1B3E5D]'>
                                        <WebSiteTraffic />
                                    </div>
                                </div>
                            </div>


                        </div>
                    </TransparentAccordionDetails>
                </TransparentAccordion>




                <TransparentAccordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="text-[#1B3E5D]">
                    <TransparentAccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <div className="font-bold text-[#1B3E5D]">What is required to build a website?</div>
                    </TransparentAccordionSummary>
                    <TransparentAccordionDetails>
                        <div>

                            <div>
                                <div>
                                    <div className='text-[#1B3E5D]'>
                                        <WebsiteRequirements />
                                    </div>
                                </div>
                            </div>


                        </div>
                    </TransparentAccordionDetails>
                </TransparentAccordion>


                <TransparentAccordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className="text-[#1B3E5D]">
                    <TransparentAccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5bh-content"
                        id="panel5bh-header"
                    >
                        <div className="font-bold text-[#1B3E5D]">What is the difference in a React website?</div>
                    </TransparentAccordionSummary>
                    <TransparentAccordionDetails>
                        <div>

                            <div>
                                <div>
                                    <div className='text-[#1B3E5D]'>
                                        <WebsiteReact />
                                    </div>
                                </div>
                            </div>


                        </div>
                    </TransparentAccordionDetails>
                </TransparentAccordion>
            </div>
        </div>
    )
}
