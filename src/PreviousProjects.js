
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import allyachtregistries from './Images/allyachtregistries.webp';
import ImmigrationPlus from './Images/ImmigrationPlus.webp'
import yachttransportlines from './Images/yachttransportlines.webp';
import urdelawaretaxiservices from './Images/urdelawaretaxiservices.webp';
import travelsaver from './Images/travelsaver.webp';
import turtleStore from './Images/theSeaTurtleStore.webp';
import circletestprep from './Images/circletestprep.webp';
import arescustomyachts from './Images/arescustomyachts.webp';
import egyfin from './Images/egyfin.webp';
// import BostonianLimousine from './Images/Bostonian-Limousine.jpg';
import MathTutoring from './Images/Math-Tutoring.webp';
import NationalSaveTheSeaTurtleFoundation from './Images/National-Save-The-Sea-Turtle-Foundation.webp';
import WellFoundYachts from './Images/WellFound-Yachts.webp';
import ShenShen from './Images/ShenShen.webp';
import { Helmet } from 'react-helmet';
import { Link } from '@mui/material';
import PhuketTaxiServices from './Images/PhuketTaxiServices.webp';
import Donatetheboattocharity from './Images/donatetheboattocharity.webp';
import { Divider } from '@mui/material';
import projects from './Component/Projects.json'


function PreviousProjects() {



    return (

        <div className='container mx-auto'>
            <Helmet>
                <title data-react-helmet="true">Web Design Expressions previous and current custom projects</title>

                <meta data-react-helmet="true" name="description" content="Web Design Expressions proves custom websites can be affordable & professional. Our work in development services has given our small business clients value they can rely on" />

                <meta data-react-helmet="true" property="og:title" content="previous and current projects" />
                <meta data-react-helmet="true" property="og:type" content="Web Design Company" />
                <meta data-react-helmet="true" property="og:url" content="https://webdesignexpressions.net/" />
                <meta data-react-helmet="true" property="og:image" content="https://webdesignexpressions.net/Assets/PreviousProjects.jpg" />
                <meta data-react-helmet="true" property="og:description" content="Web Design Expressions provides affordable & professional custom websites. We develop web services for our small business clients adding value they can rely on." />

            </Helmet>
            <div className='p-10'>

                <div><h1 className='text-2xl pb-5 text-[#1B3E5D] custom-font font-bold'>Our Projects</h1></div>
                <Divider />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                    {projects.map((project) => (
                        <div key={project.ID}>

                            <div>
                                <Link href={project.ProjectURL} target='_blank' rel='noopener noreferrer'>
                                    <img src={project.ProjectImage} alt='' title='' className='shadow-md rounded-xl' />
                                </Link>
                            </div>

                            <div className='pt-2 text-center'>
                                <Typography variant="overline" gutterBottom >
                                    <Link href={project.ProjectURL} style={{ textDecoration: 'none' }} target='_blank' rel='noreferrer noopener'><Typography variant="overline" gutterBottom>{project.ProjectName || 'Untitled Project'}</Typography></Link></Typography></div>


                        </div>

                    ))}
                </div>


                <Grid container spacing={3} className='pt-5'>



                    <Grid item xl={4} lg={4} md={6} xs={12} sm={12}>

                        <Link href='https://allyachtregistries.com/' target='_blank' rel='noreferrer noopener'>
                            <img

                                src={allyachtregistries}
                                alt='affordable web design'
                                title='All Yacht Registries, Florida, USA'
                                width={1920}
                                height={1281}
                                className='rounded-xl shadow shadow-blue-900/75 hover:mix-blend-multiply'
                            /></Link>
                        <div className='pt-3 text-center'><Typography variant="overline" gutterBottom ><Link href='https://allyachtregistries.com/' style={{ textDecoration: 'none' }} target='_blank' rel='noreferrer noopener'>All Yacht Registries</Link></Typography></div>

                    </Grid>



                    <Grid item xl={4} lg={4} md={6} xs={12} sm={12}>

                        <Link href='https://immigrationland.net/' target='_blank' rel='noreferrer noopener'>
                            <img

                                src={ImmigrationPlus}
                                alt='web design solutions'
                                title='Immigration Plus, California, USA'
                                width={1920}
                                height={1281}
                                className='rounded-xl shadow shadow-blue-900/75 hover:mix-blend-multiply'
                            /></Link>
                        <div className='pt-3 text-center'><Typography variant="overline" gutterBottom ><Link href='https://immigrationland.net/' style={{ textDecoration: 'none' }} target='_blank' rel='noreferrer noopener'>Immigration Plus</Link></Typography></div>

                    </Grid>


                    <Grid item xl={4} lg={4} md={6} xs={12} sm={12}>

                        <Link href='https://phukettaxi.webdesignexpressions.net/' target='_blank' rel='noreferrer noopener'>
                            <img

                                src={PhuketTaxiServices}
                                alt='professional design agency'
                                title='Phuket Taxi Services, Phuket, Thailand'
                                width={1920}
                                height={1281}
                                className='rounded-xl shadow shadow-blue-900/75 hover:mix-blend-multiply'
                            />
                        </Link>
                        <div className='pt-3 text-center'><Typography variant="overline" gutterBottom ><Link href='https://phukettaxi.webdesignexpressions.net/' style={{ textDecoration: 'none' }} target='_blank' rel='noreferrer noopener'>Phuket Taxi Services</Link></Typography></div>

                    </Grid>

                    <Grid item xl={4} lg={4} md={6} xs={12} sm={12}>

                        <Link href='https://savetheseaturtle.org/' target='_blank' rel='noreferrer noopener'>
                            <img

                                src={NationalSaveTheSeaTurtleFoundation}
                                alt='affordable web development services in USA'
                                title='National Save The Sea Turtle Foundation, Florida, USA'
                                width={1920}
                                height={1281}
                                className='rounded-xl shadow shadow-blue-900/75 hover:mix-blend-multiply'
                            />
                        </Link>
                        <div className='pt-3 text-center'><Typography variant="overline" gutterBottom ><Link href='https://savetheseaturtle.org/' style={{ textDecoration: 'none' }} target='_blank' rel='noreferrer noopener'>NATIONAL SAVE THE SEA TURTLE FOUNDATION</Link></Typography></div>

                    </Grid>

                    <Grid item xl={4} lg={4} md={6} xs={12} sm={12}>

                        <Link href='http://www.yachttransportlines.com/' target='_blank' rel='noreferrer noopener'>
                            <img

                                src={yachttransportlines}
                                alt='creative and affordable website design'
                                title='Yacht Transport Lines, Florida, USA'
                                width={1920}
                                height={1281}
                                className='rounded-xl shadow shadow-blue-900/75 hover:mix-blend-multiply'
                            />
                        </Link>
                        <div className='pt-3 text-center'><Typography variant="overline" gutterBottom ><Link href='http://www.yachttransportlines.com/' style={{ textDecoration: 'none' }} target='_blank' rel='noreferrer noopener'>Yacht Transport Lines</Link></Typography></div>

                    </Grid>


                    <Grid item xl={4} lg={4} md={6} xs={12} sm={12}>

                        <Link href='https://aresmarine.com/' target='_blank' rel='noreferrer noopener'>
                            <img

                                src={arescustomyachts}
                                alt='professional web development agency crafting engaging websites'
                                title='Ares Custom Yachts, Florida, USA'
                                width={1920}
                                height={1281}
                                className='rounded-xl shadow shadow-blue-900/75 hover:mix-blend-multiply'
                            />
                        </Link>
                        <div className='pt-3 text-center'><Typography variant="overline" gutterBottom><Link href='https://aresmarine.com/' style={{ textDecoration: 'none' }} target='_blank' rel='noreferrer noopener'>ARES CUSTOM YACHTS</Link></Typography></div>

                    </Grid>

                    <Grid item xl={4} lg={4} md={6} xs={12} sm={12}>
                        <Link href='https://shenshen.webdesignexpressions.net/' target='_blank' rel='noreferrer noopener'>
                            <img

                                src={ShenShen}
                                alt='expert web development agency'
                                title='ShenShen Ice Cream, Hurghada, Egypt'
                                width={1920}
                                height={1281}
                                className='rounded-xl shadow shadow-blue-900/75 hover:mix-blend-multiply'
                            />
                        </Link>
                        <div className='pt-3 text-center'><Typography variant="overline" gutterBottom ><Link href='https://shenshen.webdesignexpressions.net/' target='_blank' rel='noreferrer noopener'>Shen Shen Ice Cream</Link></Typography></div>

                    </Grid>

                    <Grid item xl={4} lg={4} md={6} xs={12} sm={12}>

                        <img

                            src={urdelawaretaxiservices}
                            alt='tailored web design services for you'
                            title='UR. TAXI SERVICE'
                            width={1920}
                            height={1281}
                            className='rounded-xl shadow shadow-blue-900/75 hover:mix-blend-multiply'
                        />
                        <div className='pt-3 text-center'><Typography variant="overline" gutterBottom >UR. TAXI SERVICE</Typography></div>

                    </Grid>


                    <Grid item xl={4} lg={4} md={6} xs={12} sm={12}>

                        <img

                            src={travelsaver}
                            alt='crafting a unique online identity'
                            title='Travel Saver, California, USA'
                            width={1920}
                            height={1281}
                            className='rounded-xl shadow shadow-blue-900/75 hover:mix-blend-multiply'
                        />
                        <div className='pt-3 text-center'><Typography variant="overline" gutterBottom >TRAVEL SAVER</Typography></div>

                    </Grid>

                    <Grid item xl={4} lg={4} md={6} xs={12} sm={12}>

                        <img

                            src={turtleStore}
                            alt='building your digital vision with experts'
                            title='The Sea Turtle Store, Florida, USA'
                            width={1920}
                            height={1281}
                            className='rounded-xl shadow shadow-blue-900/75 hover:mix-blend-multiply'
                        />
                        <div className='pt-3 text-center'><Typography variant="overline" gutterBottom >THE SEA TURTLE STORE</Typography></div>

                    </Grid>


                    <Grid item xl={4} lg={4} md={6} xs={12} sm={12}>

                        <img

                            src={circletestprep}
                            alt='personalized website design for success'
                            title='Circle Test Prep, Florida, USA'
                            width={1920}
                            height={1281}
                            className='rounded-xl shadow shadow-blue-900/75 hover:mix-blend-multiply'
                        />
                        <div className='pt-3 text-center'><Typography variant="overline" gutterBottom >CIRCLE TEST PREP</Typography></div>

                    </Grid>




                    <Grid item xl={4} lg={4} md={6} xs={12} sm={12}>
                        <Link href='https://finegypt.webdesignexpressions.net/' target='_blank' rel='noreferrer noopener'>
                            <img

                                src={egyfin}
                                alt='boosting small businesss online reach'
                                title='FinEgypt, Cairo, Egypt'
                                width={1920}
                                height={1281}
                                className='rounded-xl shadow shadow-blue-900/75 hover:mix-blend-multiply'
                            />
                        </Link>
                        <div className='pt-3 text-center'><Typography variant="overline" gutterBottom >FINEGYPT</Typography></div>

                    </Grid>


                    <Grid item xl={4} lg={4} md={6} xs={12} sm={12}>

                        <Link href='https://donatetheboattocharity.com/' target='_blank' rel='noreferrer noopener'>
                            <img

                                src={Donatetheboattocharity}
                                alt='enhancing visibility with SEO services'
                                title='Donate Your Boat to Charity, Boston, USA'
                                width={1920}
                                height={1281}
                                className='rounded-xl shadow shadow-blue-900/75 hover:mix-blend-multiply'
                            /></Link>
                        <div className='pt-3 text-center'><Typography variant="overline" gutterBottom >DONATE YOUR BOAT TO CHARITY</Typography></div>

                    </Grid>

                    <Grid item xl={4} lg={4} md={6} xs={12} sm={12}>
                        <Link href='https://mathtutoring.webdesignexpressions.net/' target='_blank' rel='noreferrer noopener'>
                            <img

                                src={MathTutoring}
                                alt='custom solutions in react web development'
                                title='Math Tutoring, Florida, USA'
                                width={1920}
                                height={1281}
                                className='rounded-xl shadow shadow-blue-900/75 hover:mix-blend-multiply'
                            />
                        </Link>
                        <div className='pt-3 text-center'><Typography variant="overline" gutterBottom >MATH TUTORING</Typography></div>

                    </Grid>




                    <Grid item xl={4} lg={4} md={6} xs={12} sm={12}>
                        <Link href='https://wellfoundyachts.com/' target='_blank' rel='noreferrer noopener'>
                            <img

                                src={WellFoundYachts}
                                alt='elevating your web presence professionally'
                                title='Wellfound Yachts, Florida, USA'
                                width={1920}
                                height={1281}
                                className='rounded-xl shadow shadow-blue-900/75 hover:mix-blend-multiply'
                            />
                        </Link>
                        <div className='pt-3 text-center'><Typography variant="overline" gutterBottom ><Link href='https://wellfoundyachts.com/' target='_blank' rel='noreferrer noopener'>WELLFOUND YACHTS</Link></Typography></div>

                    </Grid>



                </Grid>
            </div>
        </div>
    )
}
export default PreviousProjects;

