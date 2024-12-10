import React from 'react'
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import testimonialsData from './Component/Testimonials.json';
import './motion.css';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


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

function Offer() {

    const [width, setWidth] = useState(0);
    const carousel = useRef();
    useEffect(() => {
        // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);
    // console.log(images)
    return (
        // className='bg-gradient-to-b from-white/25 to-blue-900/25 rounded-xl m-10 p-5 dark:text-white dark:bg-black/75'
        <div className='my-4'>
            <div className="text-center pb-5 text-3xl font-bold">What Our Clients Say</div>
            <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
                <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='inner-carousel '>
                    {testimonialsData.map((testimonial, index) => {
                        return (
                            <motion.div className='flex lg:min-w-[50%] sm: min-w-[100%] m-2 ' key={testimonial.id || index}>
                                <Card sx={{ color: 'inherit', backgroundColor: 'transparent' }}>
                                    <div>
                                        <div className="lg:float-left mb-8">
                                            <img
                                                src={testimonial.image}
                                                alt={`${testimonial.companyName}`}
                                                title={`${testimonial.companyName}`}
                                                width={'100%'}
                                                height={'auto'}
                                                loading="lazy"
                                                className="mx-auto"
                                            />
                                        </div>
                                        <div className='p-8'>
                                            <div className='text-xl pb-4 font-bold'>{testimonial.companyName}</div>
                                            <div className=''>{testimonial.testimonial}</div>

                                            <div className='text-right pt-5'>
                                                <ThemeProvider theme={theme}>
                                                    <Button
                                                        fullWidth variant="contained" id="btnSubmit" color="secondary" style={{ color: 'inherit', fontWeight: 'bold' }} size='large'
                                                        className="mx-auto"
                                                        title={`Visit ${testimonial.companyName}`}
                                                        href={testimonial.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {testimonial.companyName}&nbsp;&nbsp; <ExitToAppIcon />
                                                    </Button>
                                                </ThemeProvider>
                                            </div>
                                        </div>




                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}

                </motion.div>
            </motion.div>

        </div >
    )
}
export default Offer;