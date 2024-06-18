import React from 'react'
import { Divider } from '@mui/material';
import { GiUsaFlag } from 'react-icons/gi';
import Hosting from '../Images/Hosting.svg';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BsQuestionDiamond } from 'react-icons/bs';
import { CompanyName } from '../Component/CompanyName';
import { Helmet } from 'react-helmet';


const theme = createTheme({
    palette: {
        primary: {
            main: "#23272a", // custom primary color
        },
        secondary: {
            main: "#C13E39", // custom secondary color
        },
    },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#1B3E5D',
        color: '#ffffff',
        fontWeight: 'bold',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
}

const rows = [
    // createData('Websites', 1, 1, 1),
    createData('Server Power', 'Normal', 'Super', 'Turbo'),
    createData('Monthly Traffic', 'Unlimited', 'Unlimited', 'Unlimited'),
    createData('Disk Space', 'Unlimited', 'Unlimited', 'Unlimited'),
    createData('E-mail', 'Unlimited Accounts', 'Unlimited Accounts', 'Unlimited Accounts'),
    createData('ASP.NET application pool', '300 MB Site Memory Allocation', '500 MB Site Memory Allocation', '800 MB Site Memory Allocation'),
    createData('Uptime Guarantee', <CheckIcon />, <CheckIcon />, <CheckIcon />),
    createData('180 Days Risk Free', <CheckIcon />, <CheckIcon />, <CheckIcon />),
    createData('Plesk Control Panel', <CheckIcon />, <CheckIcon />, <CheckIcon />),
    createData('Let´s Encrypt Support', <CheckIcon />, <CheckIcon />, <CheckIcon />),
    createData('ASP.NET', <CheckIcon />, <CheckIcon />, <CheckIcon />),
    createData('IIS', <CheckIcon />, <CheckIcon />, <CheckIcon />),
    createData('PHP', <CheckIcon />, <CheckIcon />, <CheckIcon />),
    createData('SQL Databases', '10', 'Unlimited', 'Unlimited'),
    createData('Unlimited Database Size', <CheckIcon />, <CheckIcon />, <CheckIcon />),
    createData('MS SQL Version 2019', <CheckIcon />, <CheckIcon />, <CheckIcon />),
    createData('MS SQL Version 2019', <RemoveIcon />, <CheckIcon />, <CheckIcon />),
    createData('FREE Domain', <RemoveIcon />, <CheckIcon />, <CheckIcon />),
    createData('Search Engine Submission', <RemoveIcon />, <CheckIcon />, <CheckIcon />),


    createData('', <ThemeProvider theme={theme}><Button variant='contained' size='large' color="secondary">Add to Cart</Button></ThemeProvider>, <ThemeProvider theme={theme}><Button variant='contained' size='large' color="secondary">Add to Cart</Button></ThemeProvider>, <ThemeProvider theme={theme}><Button variant='contained' size='large' color="secondary">Add to Cart</Button></ThemeProvider>),
];

export default function WebsiteHosting() {
    return (
        <div>
            <Helmet>
                <title data-react-helmet="true">Our hosting services beyond custom web development/design</title>

                <meta data-react-helmet="true" name="description" content="Our Company offers hassle free, professional and affordable USA based hosting to meet your company needs. Part of many services we offer" />

                <meta data-react-helmet="true" property="og:title" content="Hosting and support our company provides for a reliable stable site." />
                <meta data-react-helmet="true" property="og:type" content="Web Design Company" />
                <meta data-react-helmet="true" property="og:url" content="https://webdesignexpressions.net/" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/Assets/WebDesign.jpg" />
                <meta data-react-helmet="true" property="og:description" content="USA based hosting offered by professional web development service provider. Never worry about your company site again" />

            </Helmet>
            <div className='container mx-auto custom-font font-bold text-[#1B3E5D]'>
                <div className='pt-10 px-10'>
                    <div className='text-2xl pb-5'><h1>Hosting Services</h1></div>
                    <Divider />

                    <div className='mt-5 lg:float-right lg:w-1/3 mx-10'><img src={Hosting} alt='website hosting and domain names' title='Hosting Services: Powering Your Website Worldwide' /></div>
                    <div className='pt-5'>
                        All websites need a few things in order to load and function correctly for users. The main requirements to launch a website is content, domain and provided hosting.
                    </div>
                    <div className='pt-5'>
                        Website hosting is file storage, security and bandwidth on a server, maintained by a web hosting service provider.
                    </div>
                    <div className='pt-5'>
                        A domain name is the website address users input or search to find your website. Examples include sites usually ending in .com/.org or .net.
                    </div>
                    <div className='pt-5'>
                        The domain directs users to the content inside your stored/hosted files that include your shop, blog, videos, photos, portfolio, and anything else you want your website to include.
                    </div>
                    <div className='pt-5'>
                        Hosting plays an important part of how a website goes from files on a desktop/server, to readable and functional webpages people can access worldwide.
                    </div>

                    <div className='py-5'>
                        There are several hosting options explained below to help you choose what&apos;s right for you or your company.
                    </div>

                    <Divider />
                    <div className='lg:flex pt-5'>
                        <div className='lg:w-2/3 lg:float-left'><h4 className='lg:text-2xl'>Hosting plans and details:</h4></div>
                        <div className='lg:w-1/3 '>
                            <div className='lg:float-right mt-5 flex animate-bounce underline underline-offset-8 decoration-[#b22234]'>USA based hosting <GiUsaFlag size={40} className="ml-3" /></div>
                        </div>
                    </div>


                    <div>
                        <TableContainer sx={{ maxHeight: '100%', overflowX: 'auto' }}>
                            <Table aria-label="customized table" stickyHeader sx={{ minWidth: 400 }}>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell></StyledTableCell>
                                        <StyledTableCell align="center" className='border-r-4'><div>Web Hosting 1</div></StyledTableCell>
                                        <StyledTableCell align="center" className='border-r-4'><div>Web Hosting 2</div></StyledTableCell>
                                        <StyledTableCell align="center" className=''><div>Web Hosting 3</div></StyledTableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.name}>
                                            <StyledTableCell component="th" scope="row" className='text-[#002984]'>
                                                <div variant='overline'>{row.name}</div>
                                            </StyledTableCell>
                                            <StyledTableCell align="center" className='border-r-4'><div variant='overline'>{row.calories} </div></StyledTableCell>
                                            <StyledTableCell align="center" className='border-r-4'><div variant='overline'>{row.fat}</div></StyledTableCell>
                                            <StyledTableCell align="center"><div variant='overline'>{row.carbs}</div></StyledTableCell>

                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>



                    <div className='pt-5'><h4 className='lg:text-2xl'>Top Features</h4></div>

                    <div className='lg:flex gap-5'>

                        <div className='lg:w-1/2'>
                            <div className='mt-5'><CheckIcon /> 100% Uptime Guarantee </div>
                            <div><CheckIcon /> Unmetered Bandwidth Servers</div>
                            <div><CheckIcon /> Enterprise Level SSD - SAN Storage + Cache Boost</div>
                            <div><CheckIcon /> 24/7 Tech Support</div>
                        </div>
                        <div><Divider className='mb-5' orientation='vertical' /></div>
                        <div className='lg:w-1/2'>
                            <div className='mt-5'><CheckIcon /> Unlimited E-mail Accounts</div>
                            <div><CheckIcon /> SAS 70 Type II Data Centers</div>
                            <div><CheckIcon /> N+1 Redundancy with 100% Network SLA</div>
                            <div><CheckIcon /> Cutting Edge Cloud Platform</div>
                        </div>

                    </div>

                    <div className='pt-5'><h4 className='lg:text-2xl'>What&apos;s included in our hosting:</h4></div>

                    <div className='lg:flex gap-5'>
                        <div className='lg:w-1/2'>
                            <div className='py-5'>General</div>
                            <Divider />
                            <div className='pt-5' ><CheckIcon /> e-Commerce ready </div>
                            <div><CheckIcon /> Plesk control panel</div>
                            <div><CheckIcon /> 100% Uptime Guarantee</div>
                            <div><CheckIcon /> 24/7 Tech Support</div>
                            <div><CheckIcon /> 24/7 Server & Network monitoring</div>
                            <div><CheckIcon /> Automatic Backups</div>
                            <div><CheckIcon /> Search Engine Submission Tool</div>
                            <div><CheckIcon /> Intuitive Web Control Panel & Site Administration</div>
                        </div>
                        <div><Divider className='mb-5' orientation='vertical' /></div>
                        <div className='lg:w-1/2'>
                            <div className='py-5'>E-mail</div>
                            <Divider />
                            <div className='pt-5'><CheckIcon /> Unlimited E-mail Accounts</div>
                            <div><CheckIcon /> Unlimited Auto responders & Vacation messages</div>
                            <div><CheckIcon /> Unlimited Aliases & Mail Forwarding</div>
                            <div><CheckIcon /> Support for disk quota</div>
                            <div><CheckIcon /> Anti-spam (SpamAssassin) & Anti-virus (DrWeb)</div>
                            <div><CheckIcon /> Mailing list support</div>
                            <div><CheckIcon /> Secure WebMail Login</div>
                            <div><CheckIcon /> Email from Web Application</div>
                            <div><CheckIcon /> Web Mail Interface</div>
                            <div><CheckIcon /> Web Calendar</div>
                            <div><CheckIcon /> Task List </div>
                            <div><CheckIcon /> Catch All Email Support</div>
                            <div><CheckIcon /> POP3/IMAP access</div>
                            <div><CheckIcon /> Secure IMAP/POP3</div>
                            <div><CheckIcon /> SMTP support w/ Authentication</div>
                        </div>
                    </div>




                </div>

            </div>


            <div className='bg-[#1B3E5D] text-white custom-font font-bold mt-5'>
                <div className='container mx-auto p-10'>
                    <div className='pr-20'>
                        <BsQuestionDiamond color='#3D9798' size={32} className='lg:float-left animate-pulse' />
                        <div className='pl-5'><h2 className='text-2xl text-[#C13E39] pb-5 '> &nbsp; Is it expensive to host your own website? </h2></div>
                        <div>
                            Hosting your own website offers control and flexibility, but can come with significant expenses and workloads. From domain name registration, to server costs, website development, maintenance, security, and search engine optimization services, the overall expense can vary depending on your needs. At <CompanyName />, we offer high quality, affordable, U.S. based hosting to suit your needs. Our company handles all hosting needs to keep your website functional, safe, and reachable to all your users. We at <CompanyName /> not only provide carefree hosting for peace of mind, but also specialize in custom, affordable website design services.  From site planning/building, to design, hosting, search engine optimization, testing and maintenance. <CompanyName /> is your one stop shop for your web development service needs without breaking the bank.
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}
