import React from "react";
import './App.css';
import { styled } from '@mui/system';
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CompanyName } from "./Component/CompanyName";
import { Helmet } from "react-helmet";
import egyfin from './Images/egyfin.webp';
import circletestprep from "./Images/circletestprep.webp";
import NationalSaveTheSeaTurtleFoundation from "./Images/National-Save-The-Sea-Turtle-Foundation.webp";
import MathTutoring from "./Images/Math-Tutoring.webp";
import CambridgeCabCompany from "./Images/CambridgeCabCompany.webp";
import HuishMarine from "./Images/HuishMarine.webp";
import OnSoft from "./Images/OnSoft.webp";
import Shuyangsunshinedryflower from "./Images/shuyangsunshinedryflower.webp";
import ShenShen from "./Images/ShenShen.webp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from '@mui/material/Button';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import allyachtregistries from './Images/allyachtregistries.webp';
import { Divider } from '@mui/material';

const Testimonial = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    // Custom styles
    const TransparentAccordion = styled(Accordion)(({ theme }) => ({
        backgroundColor: 'transparent',
    }));

    const TransparentAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
        backgroundColor: 'transparent',
    }));

    const TransparentAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
        backgroundColor: 'transparent',
    }));

    const theme = createTheme({
        palette: {
            primary: {
                main: "#99aab5", // custom primary color
            },
            secondary: {
                main: "#C13E39", // custom secondary color
            },
        },
    });

    return (
        <div className='container mx-auto mt-5'>

            <Helmet>
                <title data-react-helmet="true">Client testimonials of previous Rely Web Designs services</title>
                <meta data-react-helmet="true" name="description" content="Clients on our custom web design & development services. How an affordable option helped improve their small business." />
                <meta data-react-helmet="true" property="og:title" content="Web Design Expressions previous web sites client testimonials " />
                <meta data-react-helmet="true" property="og:type" content="Web Design Company" />
                <meta data-react-helmet="true" property="og:url" content="https://webdesignexpressions.net/" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/Assets/Testimonial.jpg" />
                <meta data-react-helmet="true" property="og:description" content="Testimonials from both previous and current small businesses Web Design Expressions has provided affordable development services to" />

            </Helmet>


            <div className='p-5 mx-5 custom-font font-bold text-[#1B3E5D]'>
                <div><h1 className='text-2xl pb-5'>Testimonial</h1></div>
                <Divider />
                <div className="pt-5">
                    <div

                        style={{ paddingBottom: "20px" }}
                        variant="overline"
                        display="block"
                        paragraph
                    >
                        <h2 className="text-xl custom-font font-bold">The Biggest Reward We Can Receive is Customer Satisfaction. It keeps us motivated to keep
                            improving our web design services. <CompanyName /> Thanks to our previous and
                            current clients for these testimonials.</h2>
                    </div>
                </div>

                <div>
                    <TransparentAccordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')} className="dark:bg-[#99aab5]">
                        <TransparentAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel10bh-content" id="panel10bh-header">
                            <div className="font-bold text-[#1B3E5D]">ALL YACHT REGISTRIES</div>
                        </TransparentAccordionSummary>
                        <TransparentAccordionDetails>
                            <div className="lg:flex">
                                <div className="lg:w-1/3">
                                    <div className="lg:float-left lg:mr-5 mb-5">
                                        <img
                                            src={allyachtregistries}
                                            alt="experience effortless yacht documentation with our expert web design services"
                                            title="Professional Yacht Documentation Website"
                                            className="rounded-xl shadow shadow-blue-900/75 mx-auto"
                                        />
                                    </div>
                                </div>
                                <div className="lg:w-2/3">
                                    <div className="lg:float-right">
                                        <div className="text-[#1B3E5D]">
                                            <div>Working with <CompanyName /> has been an absolute pleasure. As a full service Yacht Registry Company, we were looking for a web design partner that could deliver a website that is not only affordable but also responsive and user-friendly. They exceeded our expectations on all fronts.</div>
                                            <div className="pb-5">From the very beginning, the team at <CompanyName /> provided exceptional support and guidance throughout the entire web design process. They took the time to understand our unique needs and industry requirements, which allowed them to create a website perfectly tailored to our business.</div>
                                            <div className="pb-5">One aspect that truly impressed us was their expertise in Search Engine Optimization (SEO). They took the time to explain how SEO works and how it can significantly impact our online presence and visibility. Their insights were invaluable, helping us create content that resonates with our target audience and improves our search engine rankings.</div>
                                            <div>We highly recommend <CompanyName /> to any business looking for a top-notch web design partner. Their affordable solutions, responsive designs, and outstanding support have made them an indispensable asset to our Yacht Registry Company. We look forward to continuing our collaboration with them in the future.</div>

                                        </div>

                                    </div>
                                    <div className="pt-5 lg:lg:float-right">
                                        <ThemeProvider theme={theme}>
                                            <Button className="mx-auto" size='large' variant="contained" id="btnSubmit" color="secondary" style={{ color: '#ffffff' }} title="visit All Yacht Registries" href="https://allyachtregistries.com/" target="_blank" rel="noopener noreffer">


                                                <b>Visit ALL YACHT REGISTRIES</b>&nbsp;&nbsp; <ExitToAppIcon />
                                            </Button>
                                        </ThemeProvider>
                                    </div>
                                </div>


                            </div>




                        </TransparentAccordionDetails>
                    </TransparentAccordion>




                    <TransparentAccordion>
                        <TransparentAccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <div className="font-bold text-[#1B3E5D]">SHEN SHEN ICE CREAM</div>
                        </TransparentAccordionSummary>
                        <TransparentAccordionDetails>
                            <div className="lg:lg:flex">
                                <div className="lg:lg:w-1/3">
                                    <div className="lg:lg:float-left lg:mr-5 mb-5">
                                        <img
                                            src={ShenShen}
                                            alt="affordable web design company, ice cream website"
                                            title="Affordable and Responsive Ice Cream Website with React"
                                            className="rounded-xl shadow shadow-blue-900/75 mx-auto"
                                        />
                                    </div>
                                </div>
                                <div className="lg:lg:w-2/3">
                                    <div className="lg:lg:float-right">
                                        <div className="text-[#1B3E5D]">
                                            I highly recommend <CompanyName />, a professional web development company that offers affordable and top-quality web design services. They specialize in using React web development to create visually stunning and fully functional websites. Throughout the entire process, <CompanyName /> kept me informed about the progress of my website. They were very professional and ensured that all of my requirements were met. They even provided search engine optimization and web hosting services, which made the entire experience hassle-free. I am extremely satisfied with the final product that <CompanyName /> delivered. They created a website that exceeded my expectations, and I couldn't have asked for more. If you're looking for affordable professional web design services, look no further than <CompanyName />.
                                        </div>
                                        <div className="pt-5 lg:lg:float-right">
                                            <ThemeProvider theme={theme}>
                                                <Button className="mx-auto" size='large' variant="contained" id="btnSubmit" color="secondary" style={{ color: '#ffffff' }} title="visit Shen Shen Ice Cream" href="https://shenshen.webdesignexpressions.net/" target="_blank" rel="noopener noreffer">


                                                    <b>Visit SHEN SHEN ICE CREAM</b>&nbsp;&nbsp; <ExitToAppIcon />
                                                </Button>
                                            </ThemeProvider>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </TransparentAccordionDetails>
                    </TransparentAccordion>

                    <TransparentAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="dark:bg-[#99aab5]">
                        <TransparentAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                            <div className="font-bold text-[#1B3E5D]">FINEGYPT</div>
                        </TransparentAccordionSummary>
                        <TransparentAccordionDetails>
                            <div className="lg:flex">

                                <div className="lg:w-1/3">
                                    <div className="lg:float-left lg:mr-5 mb-5">
                                        <img
                                            src={egyfin}
                                            alt="web design company creating a captivating website for hardwood floors"
                                            title="Crafting Exquisite Hardwood Floors Website"
                                            className="rounded-xl shadow shadow-blue-900/75 mx-auto"
                                        />
                                    </div>
                                </div>
                                <div className="lg:w-2/3">
                                    <div className="lg:float-right">
                                        <div className="text-[#1B3E5D]">
                                            I asked <CompanyName /> to build my web site for my company. I talked with <CompanyName /> much about Search Engine Optimization, and they assured me that we would get traffic to our site. They were right. Our site brought many phone calls and emails. I recommend <CompanyName /> to anyone wanting to build their business, and give them a 5-star rating for hosting, Search Engine Optimization, and design. Thank you.
                                        </div>
                                    </div>
                                    <div className="pt-5 lg:float-right">
                                        <ThemeProvider theme={theme}>
                                            <Button size='large' variant="contained" id="btnSubmit" color="secondary" style={{ color: '#ffffff' }} title="visit Math Tutor" href="https://finegypt.webdesignexpressions.net/" target="_blank" rel="noopener noreffer">


                                                <b>Visit FINEGYPT</b>&nbsp;&nbsp; <ExitToAppIcon />
                                            </Button>
                                        </ThemeProvider>
                                    </div>

                                </div>



                            </div>
                        </TransparentAccordionDetails>
                    </TransparentAccordion>

                    <TransparentAccordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="dark:bg-[#99aab5]">
                        <TransparentAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
                            <div className="font-bold text-[#1B3E5D]">CAMBRIDGE CAB COMPANY</div>
                        </TransparentAccordionSummary>
                        <TransparentAccordionDetails>
                            <div className="lg:flex">

                                <div className="lg:w-1/3">
                                    <div className="lg:float-left lg:mr-5 mb-5">
                                        <img
                                            src={CambridgeCabCompany}
                                            alt="web design company creating a modern and efficient taxi cab website"
                                            title="Revolutionizing Taxi Cab Website Design"
                                            className="rounded-xl shadow shadow-blue-900/75 mx-auto"
                                        />
                                    </div>
                                </div>
                                <div className="lg:w-2/3">
                                    <div className="lg:float-right text-[#1B3E5D]">
                                        Since <CompanyName /> built my web site, I have received phone calls and reservations from the web site which has greatly increased my business. They have proved to me that they are extremely knowledgeable in Search Engine Optimization. Their company team is professional, fast to respond to my change requests, and offer quality hosting. Best of all, their fees are very reasonable. I’m very happy with <CompanyName /> and I highly recommend them to anyone looking for really personal service from a Web Site Company.
                                    </div>
                                </div>



                            </div>
                        </TransparentAccordionDetails>
                    </TransparentAccordion>

                    <TransparentAccordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="dark:bg-[#99aab5]">
                        <TransparentAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
                            <div className="font-bold text-[#1B3E5D]">NATIONAL SAVE THE SEA TURTLE FOUNDATION</div>
                        </TransparentAccordionSummary>
                        <TransparentAccordionDetails>

                            <div className="lg:flex">
                                <div className="lg:w-1/3">

                                    <div className="lg:float-left lg:mr-5 mb-5">
                                        <img
                                            src={NationalSaveTheSeaTurtleFoundation}
                                            alt="empowering non-profit organizations with impactful web solutions"
                                            title="Empowering Non-Profit Web Design Solutions"
                                            className="rounded-xl shadow shadow-blue-900/75 mx-auto"
                                        />
                                    </div>

                                </div>
                                <div className="lg:w-2/3">
                                    <div className="lg:float-right text-[#1B3E5D]">
                                        The National Save the Sea Turtle Foundation and its staff highly recommend <CompanyName /> for anyone who wants a professional web designer, who is prompt, creative, and dependable. Their ideas and input helped us create an impressive website that has given us international exposure and attention. Their staff is professional and a pleasure to deal with and will bring your message to the public.
                                    </div>

                                    <div className="pt-5 lg:float-right">
                                        <ThemeProvider theme={theme}>
                                            <Button size='large' variant="contained" id="btnSubmit" color="secondary" style={{ color: '#ffffff' }} title="visit Math Tutor" href="https://savetheseaturtle.org/" target="_blank" rel="noopener noreffer">


                                                <b>Visit National Save the Sea Turtle Foundation</b>&nbsp;&nbsp; <ExitToAppIcon />
                                            </Button>
                                        </ThemeProvider>
                                    </div>
                                </div>
                            </div>


                        </TransparentAccordionDetails>
                    </TransparentAccordion>

                    <TransparentAccordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className="dark:bg-[#99aab5]">
                        <TransparentAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5bh-content" id="panel5bh-header">
                            <div className="font-bold text-[#1B3E5D]">Huish Marine Group</div>
                        </TransparentAccordionSummary>
                        <TransparentAccordionDetails>

                            <div className="lg:flex">
                                <div className="lg:w-1/3">
                                    <div className="lg:float-left lg:mr-5 mb-5">
                                        <img
                                            src={HuishMarine}
                                            alt="yacht broker Web design"
                                            title="Elevating Yacht Broker Websites"
                                            className="rounded-xl shadow shadow-blue-900/75 mx-auto"
                                        />
                                    </div>

                                </div>
                                <div className="lg:w-2/3">
                                    <div className="lg:float-right text-[#1B3E5D]">
                                        When I mentioned to an associate that I was opening a new company and was thinking about building a website, she referred <CompanyName /> to me without a moment’s hesitation. After a few conversations and emails describing what I was hoping to achieve, <CompanyName /> presented me with an outline that incorporated their expertise & knowledge of web design with many yacht industry marketing features that would make my website stand-out. We’re still adding features to the website and making our updates as things change, and I am very pleased with the way it is progressing.
                                    </div>
                                </div>
                            </div>



                        </TransparentAccordionDetails>
                    </TransparentAccordion>

                    <TransparentAccordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className="dark:bg-[#99aab5]">
                        <TransparentAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel6bh-content" id="panel6bh-header">
                            <div className="font-bold text-[#1B3E5D]">ONSOFT</div>
                        </TransparentAccordionSummary>
                        <TransparentAccordionDetails>
                            <div className="lg:flex">
                                <div className="lg:w-1/3">
                                    <div className="lg:float-left lg:mr-5 mb-5">
                                        <img
                                            src={OnSoft}
                                            alt="crafting high-quality and user-friendly websites for software companies"
                                            title="Creating Striking Software Company Logos"
                                            className="rounded-xl shadow shadow-blue-900/75 mx-auto"
                                        />
                                    </div>
                                </div>
                                <div className="lg:w-2/3">
                                    <div className="lg:float-right text-[#1B3E5D]">
                                        I wanted a logo for my car rental software. <CompanyName /> had designers that worked closely with me to understand the nature of my business and demonstrated many ideas to me. I was really pleased by their use of images and designs to communicate a lot of things about my business in graphics. My logo now tells me a lot about what my company does. I was so pleased.
                                    </div>
                                </div>
                            </div>



                        </TransparentAccordionDetails>
                    </TransparentAccordion>

                    <TransparentAccordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} className="dark:bg-[#99aab5]">
                        <TransparentAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel7bh-content" id="panel7bh-header">
                            <div className="font-bold text-[#1B3E5D]">SHUYANG SUNSHINE DRY FLOWER</div>
                        </TransparentAccordionSummary>
                        <TransparentAccordionDetails>

                            <div className="lg:flex">
                                <div className="lg:w-1/3">
                                    <div className="lg:float-left lg:mr-5 mb-5">
                                        <img
                                            src={Shuyangsunshinedryflower}
                                            alt="visually enchanting websites for dry flower companies"
                                            title="Crafting Stunning Dry Flower Company Websites"
                                            className="rounded-xl shadow shadow-blue-900/75 mx-auto"
                                        />
                                    </div>
                                </div>
                                <div className="lg:w-2/3">
                                    <div className="lg:float-right text-[#1B3E5D]">
                                        <CompanyName /> have professional designers who have wonderful ideas in design. They made us a beautiful web site. We were pleased with the cooperation we received when asking for changes to our site. We were treated with patience, understanding, and prompt service. Our designer was available whenever we needed him. We highly recommend <CompanyName /> to anyone wanting a web site. Do not hesitate to hire <CompanyName />, we know you will be happy.
                                    </div>
                                </div>
                            </div>



                        </TransparentAccordionDetails>
                    </TransparentAccordion>

                    <TransparentAccordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} className="dark:bg-[#99aab5]">
                        <TransparentAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel8bh-content" id="panel8bh-header">
                            <div className="font-bold text-[#1B3E5D]">MATH TUTOR</div>
                        </TransparentAccordionSummary>
                        <TransparentAccordionDetails>
                            <div className="lg:flex">
                                <div className="lg:w-1/3">
                                    <div className="lg:float-left lg:mr-5 mb-5">
                                        <img
                                            src={MathTutoring}
                                            alt="Creating engaging and effective websites for math tutor companies"
                                            title="Affordable Math Tutor Web Solutions"
                                            className="rounded-xl shadow shadow-blue-900/75 mx-auto"
                                        />
                                    </div>
                                </div>
                                <div className="lg:w-2/3">
                                    <div className="lg:float-right">
                                        <div className="text-[#1B3E5D]">
                                            I owe the success of my tutoring business to <CompanyName />! They put together a first-class website and, within a few months, the phone started ringing... and ringing! It was like magic. They are true professionals and a pleasure to deal with.
                                        </div>
                                        <div className="pt-5 lg:float-right">
                                            <ThemeProvider theme={theme}>
                                                <Button size='large' variant="contained" id="btnSubmit" color="secondary" style={{ color: '#ffffff' }} title="visit Math Tutor" href="https://mathtutoring.webdesignexpressions.net/" target="_blank" rel="noopener noreffer">


                                                    <b>Visit Math Tutor</b>&nbsp;&nbsp; <ExitToAppIcon />
                                                </Button>
                                            </ThemeProvider>
                                        </div>
                                    </div>
                                </div>


                            </div>







                        </TransparentAccordionDetails>
                    </TransparentAccordion>

                    <TransparentAccordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} className="dark:bg-[#99aab5]">
                        <TransparentAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel9bh-content" id="panel9bh-header">
                            <div className="font-bold text-[#1B3E5D]">SAT PREP OF AVENTURA AND HOLLYWOOD</div>
                        </TransparentAccordionSummary>
                        <TransparentAccordionDetails>
                            <div className="lg:flex">
                                <div className="lg:w-1/3">
                                    <div className="lg:float-left lg:mr-5 mb-5">
                                        <img
                                            src={circletestprep}
                                            alt="crafting powerful websites for sat Prep companies"
                                            title="Elevating SAT Prep Company Websites"
                                            className="rounded-xl shadow shadow-blue-900/75 mx-auto"
                                        />
                                    </div>
                                </div>
                                <div className="lg:w-2/3">
                                    <div className="lg:float-right">
                                        <div className="text-[#1B3E5D]">
                                            <CompanyName /> developed a clean and classy website for my little business and made it look like a big company! Best of all, when I needed to change some of the text and some of the pages, they made the changes quickly. Their suggestions and ideas were excellent, and now I have a thriving company that's getting bigger by the week!
                                        </div>

                                    </div>
                                </div>


                            </div>




                        </TransparentAccordionDetails>
                    </TransparentAccordion>
                </div>
            </div>



        </div >
    );
}
export default Testimonial;