import React, { useState, useEffect } from 'react';
import Footer from './Component/Footer';
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from './Home';
import Testimonial from './Testimonial';
import Projects from './Portfolio/Projects';

import Contact from './Contact';
import { motion } from 'framer-motion';
import CustomWebDesign from './CustomWebDesign';
import Redesign from './Redesign';
import searchEngineOptimization from './searchEngineOptimization';
import CustomWebDevelopment from './CustomWebDevelopment';
import Ecommerce from './Ecommerce';
import UIUXDesign from './UIUXDesign';
import { Divider, Link } from '@mui/material';
import CompanyName from './Component/CompanyName';
import SocialMedia from './Component/socialMedia';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from "@mui/icons-material/Menu";
import TermsofUse from './TermsofUse';
// import TopSearchEngines from './TopSearchEngines';


// Background: #FFFFFF
// Primary: #1B3E5D Nile Blue
// Secondary: #C13E39 Turkish Rose

const history = createBrowserHistory();

// const flipVariants = {
//   initial: {
//     transform: 'rotateY(180deg)',
//     opacity: .5,
//   },
//   animate: {
//     transform: 'rotateY(0deg)',
//     opacity: 1,
//     transition: {
//       duration: 0.5, // Adjust the duration as desired
//       ease: 'easeOut', // Choose the easing function
//     },
//   },
// };

const pageVariants = {
  initial: { x: "25%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "100%", opacity: 0 },
};

function App() {

  // const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Toggle dark mode class on body and store the mode in localStorage
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="">
      <div className='mx-auto'>
        <BrowserRouter history={history}>
          {/* <Navigation /> */}


          {/* <Switch>
            <motion.div
              key="home"
              initial="initial"
              animate="animate"
              variants={flipVariants}
            >
              <Route exact={true}="true" path="/" component={Home} />
              <Route exact={true}="true" path="/CustomWebDevelopment" component={CustomWebDevelopment} />
              <Route exact={true}="true" path="/WebDesignProcess" component={WebDesignProcess} />
              <Route exact={true}="true" path="/Portfolio/Projects" component={Projects} />
              <Route exact={true}="true" path="/Testimonial" component={Testimonial} />
              <Route exact={true}="true" path="/FAQ" component={FAQ} />
              <Route exact={true}="true" path="/Contact" component={Contact} />

              <Route exact={true} path="/CompanyOffers/SearchEngineOptimization" component={SearchEngineOptimization}></Route>
              <Route exact={true} path="/CompanyOffers/reactJsDevelopment" component={reactJsDevelopment}></Route>
              <Route exact={true} path="/CompanyOffers/WebsiteHosting" component={WebsiteHosting}></Route>
              <Route exact={true} path="/CompanyOffers/webDesignProcess" component={WebDesignProcess}></Route>
              <Route exact={true} path="/CompanyOffers/WPASP" component={WPASP}></Route>
              <Route exact={true} path="/CompanyOffers/marketing" component={Marketing}></Route>




            </motion.div>
          </Switch> */}
          <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} isOpen={isOpen} setIsOpen={setIsOpen} />
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route exact={true} path="/Home" component={Home} />
              <Route exact={true} path="/Portfolio/Projects" component={Projects} />
              <Route exact={true} path="/Testimonial" component={Testimonial} />
              <Route exact={true} path="/CustomWebDesign" component={CustomWebDesign} />
              <Route exact={true} path="/Redesign" component={Redesign} />
              <Route exact={true} path="/CustomWebDevelopment" component={CustomWebDevelopment} />
              <Route exact={true} path="/searchEngineOptimization" component={searchEngineOptimization} />
              <Route exact={true} path="/Ecommerce" component={Ecommerce} />
              <Route exact={true} path="/UIUXDesign" component={UIUXDesign} />
              <Route exact={true} path="/Projects" component={Projects} />
              {/* <Route exact={true} path="/Testimonials" component={Testimonials} /> */}
              <Route exact={true} path="/Contact" component={Contact} />
              {/* <Route exact={true} path="/Login" component={Login} />
            <PrivateRoute exact={true} path="/Office/Main" component={Main} />
            <PrivateRoute exact={true} path="/Office/Invoicing" component={Invoicing} />
            <PrivateRoute exact={true} path="/Office/QR" component={QR} />
            <PrivateRoute exact={true} path="/Office/SEOFactory" component={SEOFactory} />
            <PrivateRoute exact={true} path="/Office/ImageUpload" component={ImageUpload} /> */}
              <Route exact={true} path="/TermsofUse" component={TermsofUse} />

            </Switch>
          </motion.div>
        </BrowserRouter>
      </div>
      <div className='mx-16'>

        <div><Footer /></div>
      </div>
    </div >

  );
}

function Navigation({ isDarkMode, toggleDarkMode, isOpen, setIsOpen }) {
  const location = useLocation();

  const handleMouseEnter = (e) => {
    const underline = document.createElement("span");
    underline.className = "absolute left-0 bottom-0 h-0.5 w-full bg-[#d14009] transition-transform duration-300 ease-in-out transform scale-x-0";
    underline.style.transformOrigin = "left";
    const link = e.currentTarget;
    link.appendChild(underline);

    requestAnimationFrame(() => {
      underline.style.transform = "scaleX(1)";
    });
  };

  const handleMouseLeave = (e) => {
    const underline = e.currentTarget.querySelector("span");
    if (underline) {
      underline.style.transform = "scaleX(0)";
      underline.addEventListener(
        "transitionend",
        () => {
          if (underline.parentNode) {
            underline.parentNode.removeChild(underline);
          }
        },
        { once: true }
      );
    }
  };

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (

    <nav className="p-3 border-b-2 print:hidden">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-2xl Company-Main-Font">
          <Link href='/' style={{ color: 'inherit', textDecoration: 'none' }}><CompanyName /></Link>
        </div>

        <div className="hidden md:flex md:items-center md:space-x-6">
          <ul className="flex flex-row space-x-4">
            {["Home", "Projects", "Testimonial", "Contact"].map((item, index) => {
              const path = `/${item.replace(" ", "")}`;
              const isActive = location.pathname === path;
              return (
                <li key={index} className="relative text-xl font-bold list-none">
                  <Link
                    href={path}
                    className={`${isActive ? "underline" : ""}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{ color: "inherit", textDecoration: "none", position: "relative", overflow: "hidden", cursor: "pointer" }}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          <div><SocialMedia /></div>
          <IconButton onClick={toggleDarkMode} color="inherit" title={isDarkMode ? "Light Mode" : "Dark Mode"}>
            {isDarkMode ? <LightModeIcon style={{ color: '#D14009' }} /> : <DarkModeIcon style={{ color: '#F6F1D5' }} />}
          </IconButton>

          <div className="md:hidden">
            <IconButton onClick={handleMenuToggle} style={{ color: "inherit", textDecoration: "none" }}>
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-4`}>
        <ul className="flex flex-col space-y-4">
          {["Home", "Projects", "Testimonial", "Contact"].map((item, index) => {
            const path = `/${item.replace(" ", "")}`;
            const isActive = location.pathname === path;
            return (
              <li key={index} className="relative text-lg font-bold ">
                <Link
                  href={path}
                  className={`${isActive ? "underline" : ""}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{ color: "inherit", textDecoration: "none", position: "relative" }}
                >
                  {item}
                </Link>
                <div className='py-1'><Divider /></div>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default App;
