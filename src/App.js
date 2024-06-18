import { React } from 'react';
import Footer from './Component/Footer';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Navigation from './Component/Navigation';
import Home from './Home';
import Testimonial from './Testimonial';
import PreviousProjects from './PreviousProjects';
import WebDesignProcess from './CompanyOffers/webDesignProcess'
import FAQ from './FAQ';
import SearchEngineOptimization from "./CompanyOffers/searchEngineOptimization";
import reactJsDevelopment from './CompanyOffers/reactJsDevelopment';
import WebsiteHosting from "./CompanyOffers/WebsiteHosting";
import Marketing from './CompanyOffers/marketing';
import WPASP from './CompanyOffers/WPASP';
import Contact from './Contact';
import { motion } from 'framer-motion';
import CustomWebDevelopment from './CustomWebDevelopment';





// import TopSearchEngines from './TopSearchEngines';


// Background: #FFFFFF
// Primary: #1B3E5D Nile Blue
// Secondary: #C13E39 Turkish Rose

const history = createBrowserHistory();

const flipVariants = {
  initial: {
    transform: 'rotateY(180deg)',
    opacity: .5,
  },
  animate: {
    transform: 'rotateY(0deg)',
    opacity: 1,
    transition: {
      duration: 0.5, // Adjust the duration as desired
      ease: 'easeOut', // Choose the easing function
    },
  },
};

function App() {

  // const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };



  return (
    <div className="bg-white">
      <div className='mx-auto'>
        <BrowserRouter history={history}>
          <Navigation />


          <Switch>
            <motion.div
              key="home"
              initial="initial"
              animate="animate"
              variants={flipVariants}
            >
              <Route exact="true" path="/" component={Home} />
              <Route exact="true" path="/CustomWebDevelopment" component={CustomWebDevelopment} />
              <Route exact="true" path="/WebDesignProcess" component={WebDesignProcess} />
              <Route exact="true" path="/PreviousProjects" component={PreviousProjects} />
              <Route exact="true" path="/Testimonial" component={Testimonial} />
              <Route exact="true" path="/FAQ" component={FAQ} />
              <Route exact="true" path="/Contact" component={Contact} />

              <Route exact path="/CompanyOffers/SearchEngineOptimization" component={SearchEngineOptimization}></Route>
              <Route exact path="/CompanyOffers/reactJsDevelopment" component={reactJsDevelopment}></Route>
              <Route exact path="/CompanyOffers/WebsiteHosting" component={WebsiteHosting}></Route>
              <Route exact path="/CompanyOffers/webDesignProcess" component={WebDesignProcess}></Route>
              <Route exact path="/CompanyOffers/WPASP" component={WPASP}></Route>
              <Route exact path="/CompanyOffers/marketing" component={Marketing}></Route>




            </motion.div>
          </Switch>

        </BrowserRouter>
      </div>
      <div className='container mx-auto lg:px-0 px-10'>

        <div><Footer /></div>
      </div>
    </div >

  );
}

export default App;
