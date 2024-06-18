import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@mui/material/Button';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import { createTheme, ThemeProvider } from "@mui/material/styles";


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

const TextSlide = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };

    const handleNext = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
    };

    const shouldRender = true;

    useEffect(() => {
        const interval = setInterval(handleNext, 10000); // Auto play every 10 seconds

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className='custom-font font-bold'>

            <div className='lg:flex'>

                <div className='lg:w-1/3'>
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: '0%' }}
                        transition={{ duration: 0.3 }}
                        style={{ height: '100%' }}
                    >
                        <img
                            src={slides[currentSlide].imageSrc}
                            alt={slides[currentSlide].imageAlt}
                            title={slides[currentSlide].imagetitle}
                            className="lg:border-r-4 lg:border-[#ffffff] mx-auto"
                            style={{ objectFit: 'cover', height: '100%' }}
                        />
                    </motion.div>



                </div>
                <div className='lg:w-2/3'>

                    <AnimatePresence exit={{ opacity: 0, transition: { duration: 0 } }}>
                        {shouldRender && (
                            <motion.div
                                className='pl-5 pr-20'
                                key={currentSlide}
                                initial={{ opacity: 0, x: '-100%' }}
                                animate={{ opacity: 1, x: '0%' }}
                                transition={{ duration: 0.6 }}
                                style={{ position: 'sticky' }}
                            >
                                <motion.h2 className="text-2xl pb-5 pt-5 text-[#C13E39]">
                                    {slides[currentSlide].title}
                                </motion.h2>
                                <motion.p className='max-h-full relative'>
                                    {slides[currentSlide].paragraph}
                                    <div className='text-center pt-10 pb-7'>
                                        <ThemeProvider theme={theme}>
                                            <Button size='large' variant="contained" id="btnSubmit" color="secondary" style={{ color: '#ffffff' }} title="Call Web Design Expressions for affordable/quality web design" href="tel:9494197273" label="">
                                                <PhonelinkRingIcon />
                                                &nbsp;&nbsp;
                                                <b>Call Now</b>
                                            </Button>
                                        </ThemeProvider>
                                    </div>
                                </motion.p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>

        </div>
    );
};

export default TextSlide;