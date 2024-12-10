import React from 'react';
import PageHeader from './Component/PageHeader';
import CompanyName from './Component/CompanyName';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Button, createTheme, ThemeProvider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const today = new Date();
const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",   // Full weekday name (e.g., "Wednesday")
    day: "numeric",    // Day of the month (e.g., "4")
    month: "long",     // Full month name (e.g., "December")
    year: "numeric",   // Full year (e.g., "2024")
}).format(today);

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

const TermsofUse = () => {
    return (
        <div>
            <div><PageHeader pageTitle="Terms of Use" /></div>
            <div className='mx-16'>
                <div className='mb-4'>Effective Date: <em>{formattedDate}</em></div>
                <div>Welcome to <CompanyName />! By accessing or using our website, services, or products, you agree to comply with and be bound by these Terms of Use (the "Terms"). If you do not agree to these Terms, you must not use our website or services. Please read these Terms carefully.</div>
                <div className='py-4 font-bold'>1. Acceptance of Terms</div>
                <div>By accessing or using the <CompanyName /> website or any related services, you acknowledge that you have read, understood, and agree to these Terms. If you do not agree to these Terms, do not use our website or services.</div>
                <div className='py-4 font-bold'>2. Services Provided</div>
                <div><CompanyName /> provides web design and related services (collectively, the "Services"). These Terms apply to all users of our Services, including browsers, clients, vendors, merchants, and/or contributors of content.</div>
                <div className='py-4 font-bold'>3. Intellectual Property Rights</div>
                <div>All content on the <CompanyName /> website, including but not limited to text, graphics, logos, images, designs, videos, software, and source code (the "Content"), is the exclusive property of <CompanyName /> or its licensors and is protected by copyright, trademark, and other intellectual property laws.</div>
                <div>Prohibited Uses of Content</div>
                <div>You may not:</div>
                <div>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Copy, reproduce, distribute, publish, display, modify, or create derivative works of our Content without prior written consent from Web Design Expressions." />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Use any images, logos, or design elements from our website for commercial or non-commercial purposes." />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Frame or embed any part of the website or Content in another website without explicit written permission." />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Use automated tools (e.g., bots, scrapers) to access, download, or copy Content." />
                            </ListItemButton>
                        </ListItem>



                    </List>
                </div>
                <div className='py-4 font-bold'>4. User Responsibilities</div>
                <div>You agree not to use the <CompanyName /> website or Services for any unlawful purpose or in a way that violates these Terms. Specifically, you agree not to:</div>
                <div>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Engage in unauthorized access, tampering, or hacking of our website or servers." />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Upload or distribute malicious code or other harmful materials." />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Misrepresent yourself or provide false information." />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Use the website for any activity that infringes on the intellectual property rights of Web Design Expressions or any third party." />
                            </ListItemButton>
                        </ListItem>



                    </List>
                </div>
                <div className='py-4 font-bold'>5. Account Registration</div>
                <div>If you register for an account, you agree to:</div>
                <div>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Provide accurate, current, and complete information." />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Maintain the confidentiality of your account credentials." />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Notify Web Design Expressions immediately of any unauthorized use of your account." />
                            </ListItemButton>
                        </ListItem>





                    </List>
                </div>
                <div className='py-4 font-bold'>6. Third-Party Links</div>
                <div>Our website may contain links to third-party websites. These links are provided for convenience and do not signify our endorsement of the content on those websites. <CompanyName /> is not responsible for any third-party content or practices.</div>
                <div className='py-4 font-bold'>7. Prohibition Against Copying Designs</div>
                <div>You are expressly prohibited from copying, imitating, or replicating any website designs, layouts, or features created by <CompanyName />, whether visible on our website or provided to clients as part of our services.</div>
                <div>If you are found to be using designs created by <CompanyName /> without proper authorization, we reserve the right to pursue legal action, including claims for damages, lost profits, and injunctions to prevent further infringement.</div>
                <div className='py-4 font-bold'>8. Disclaimer of Warranties</div>
                <div>Our website and Services are provided "as is" and "as available," without any warranties of any kind, either express or implied, including but not limited to:</div>
                <div>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Warranties of merchantability or fitness for a particular purpose." />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Warranties of non-infringement." />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Warranties that the website or services will be error-free or uninterrupted." />
                            </ListItemButton>
                        </ListItem>





                    </List>
                </div>
                <div className='py-4 font-bold'>9. Limitation of Liability</div>
                <div>To the fullest extent permitted by law, <CompanyName /> shall not be liable for any:</div>
                <div>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Direct, indirect, incidental, special, consequential, or punitive damages arising out of your use or inability to use our website or services." />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Loss of data, revenue, or profits, even if advised of the possibility of such damages." />
                            </ListItemButton>
                        </ListItem>


                    </List>
                </div>
                <div className='py-4 font-bold'>10. Indemnification</div>
                <div>You agree to indemnify, defend, and hold harmless <CompanyName /> and its affiliates, employees, and contractors from any claims, damages, or expenses (including attorney fees) arising from:</div>
                <div>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Your use of the website or Services." />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Your violation of these Terms." />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Your infringement of any intellectual property or other rights of <CompanyName/> or third parties." />
                            </ListItemButton>
                        </ListItem>


                    </List>
                </div>
                <div className='py-4 font-bold'>11. Termination</div>
                <div>We reserve the right to terminate or suspend your access to our website or Services, without notice or liability, for any reason, including violation of these Terms.</div>
                <div className='py-4 font-bold'>12. Governing Law and Dispute Resolution</div>
                <div>These Terms are governed by and construed in accordance with the laws of the United States. Any disputes arising out of or relating to these Terms shall be resolved in the federal or state courts located within the United States, and you consent to the jurisdiction of such courts.</div>
                <div className='py-4 font-bold'>13. Changes to Terms</div>
                <div><CompanyName /> reserves the right to update or modify these Terms at any time without prior notice. Your continued use of our website or services constitutes your acceptance of the revised Terms.</div>
                <div className='py-4 font-bold'>14. Contact Information</div>
                <div>If you have any questions about these Terms, please contact us at:</div>
                <div className='w-1/4 mx-auto'>
                    <div className='my-8'>
                        <ThemeProvider theme={theme}>
                            <Button className='' fullWidth variant="contained" id="btnSubmit" color="secondary" style={{ color: 'inherit' }} size='large' aria-label='ContactRely Designs, the Web design and SEO company' title="Contact Rely Designs, the Web design and SEO company" href='/Contact'>
                                <EmailIcon />&nbsp;&nbsp;<b>Contact us</b>
                            </Button>
                        </ThemeProvider>
                    </div>
                </div>
                <div><span className='font-bold'>Note:</span> By using this website, you agree to abide by these Terms of Use. Failure to comply may result in legal action.</div>


            </div>
        </div>
    )
}

export default TermsofUse