import React, { useState } from 'react';
import '../App.css';
import { styled } from '@mui/material/styles';
import {
    Drawer,
    Box,
    Typography,
    Link,
    Divider,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { CompanyName } from './CompanyName';


const drawerWidth = 240;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        width: drawerWidth,
        flexShrink: 0,
    },
    "& .MuiDrawer-paper": {
        backgroundColor: "#1B3E5D",
        //position: "relative",
        //overflow: "hidden",
        "&::before": {
            content: '""',
            // display: "block",
            //position: "absolute",
            top: 0,
            //left: 0,
            width: 240,
            backgroundColor: '#F#1B3E5D',
            zIndex: -1,
        },
    },
}));

const Navigation = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div className='bg-[#1B3E5D] print:hidden'>
            <div className='lg:float-left pt-5 pl-3'>

                <Link href='/' exact style={{ textDecoration: 'none', color: '#ffffff' }}>
                    {/* <img src={Logo} alt='' title='' className='mx-auto' /> */}
                    <Typography><h2 className='custom-font font-bold text-lg'><CompanyName /></h2></Typography>
                </Link></div>
            <div>

                <ul className='lg:flex lg:flex-row justify-end list-none p-0'>

                    <li className='px-3 lg:py-5 py-5 text-lg custom-font'><Link href='/' style={{ textDecoration: 'none', color: '#ffffff' }} exact>HOME</Link></li>
                    <Divider variant="middle" className='bg-[#C13E39]' />
                    <li className='px-3 lg:py-5 py-2 text-lg custom-font'><Link href='/WebDesignProcess' style={{ textDecoration: 'none', color: '#ffffff' }} exact>DESIGN PROCESS</Link></li>
                    <Divider variant="middle" className='bg-[#C13E39]' />
                    <li className='px-3 lg:py-5 py-2 text-lg custom-font'><Link href='/PreviousProjects' style={{ textDecoration: 'none', color: '#ffffff' }} exact> OUR PROJECTS</Link></li>
                    <Divider variant="middle" className='bg-[#C13E39]' />
                    <li className='px-3 lg:py-5 py-2 text-lg custom-font'><Link href='/Testimonial' style={{ textDecoration: 'none', color: '#ffffff' }} exact> TESTIMONIAL</Link></li>
                    <Divider variant="middle" className='bg-[#C13E39]' />
                    <li className='px-3 lg:py-5 py-2 text-lg custom-font'><Link href='/FAQ' style={{ textDecoration: 'none', color: '#ffffff' }} exact> FAQ</Link></li>
                    <Divider variant="middle" className='bg-[#C13E39]' />
                    <li className='px-3 lg:py-5 py-2 text-lg custom-font'><Link href='/Contact' style={{ textDecoration: 'none', color: '#ffffff' }} exact> CONTACT</Link></li>
                </ul>
            </div>

        </div>
    );

    return (
        <>
            <Box className="print:hidden" Box sx={{ display: { md: 'none' } }
            }>
                <IconButton onClick={handleDrawerToggle}>
                    <MenuIcon />
                </IconButton>
            </Box >
            <StyledDrawer variant="temporary" anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
                {drawer}
            </StyledDrawer>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                {drawer}
            </Box>
        </ >
    );
};

export default Navigation;