import React, { useEffect, useState } from 'react';
import allyachtregistries from '../Images/allyachtregistries.webp';
import ImmigrationPlus from '../Images/ImmigrationPlus.webp'
import yachttransportlines from '../Images/yachttransportlines.webp';
// import urdelawaretaxiservices from '../Images/urdelawaretaxiservices.jpg';
import travelsaver from '../Images/travelsaver.webp';
import turtleStore from '../Images/theSeaTurtleStore.webp';
// import circletestprep from '../Images/circletestprep.jpg';
import arescustomyachts from '../Images/arescustomyachts.webp';
import egyfin from '../Images/egyfin.webp';
// import BostonianLimousine from '../Images/Bostonian-Limousine.jpg';
import MathTutoring from '../Images/Math-Tutoring.webp';
import NationalSaveTheSeaTurtleFoundation from '../Images/National-Save-The-Sea-Turtle-Foundation.webp';
import WellFoundYachts from '../Images/WellFound-Yachts.webp';
import ShenShen from '../Images/ShenShen.webp';
import PhuketTaxiServices from '../Images/PhuketTaxiServices.webp';
import Donatetheboattocharity from '../Images/donatetheboattocharity.webp'



const PreviousProjects = () => {

    const [shuffledImages, setShuffledImages] = useState([]);
    useEffect(() => {
        const images = [
            { id: 1, name: 'ALL YACHT REGISTRIES', src: allyachtregistries, alt: 'web site design for yacht documentation company', title: 'Customized Yacht Services Website, Florida, USA', link: 'https://allyachtregistries.com/' },
            { id: 2, name: 'IMMIGRATION PLUS', src: ImmigrationPlus, alt: 'custom web site for immigration company', title: 'Affordable Immigration Services Website for, California, USA', link: 'https://immigrationland.net/' },
            { id: 3, name: 'YACHT TRANSPORT LINES', src: yachttransportlines, alt: 'professional web site for yacht transportation company', title: 'Professional Yacht Transportation Website, Florida, USA', link: 'http://www.yachttransportlines.com/' },
            // { id: 4, name: 'UR. TAXI SERVICE', src: urdelawaretaxiservices, alt: 'Urdelawaretaxiservices', title: '', link: 'https://webdesignexpressions.net/' },
            { id: 5, name: 'TRAVEL SAVER', src: travelsaver, alt: 'affordable website for travel company', title: 'Professional Web Development for Travel Company Website, California, USA', link: 'https://webdesignexpressions.net/' },
            { id: 6, name: 'THE SEA TURTLE STORE', src: turtleStore, alt: 'responsive website for non-profit', title: 'A Customized and Responsive Website for a Non-Profit Organization, Florida, USA', link: 'https://webdesignexpressions.net/' },
            // { id: 7, name: 'CIRCLE TEST PREP', src: circletestprep, alt: 'Circletestprep', title: '', link: 'https://webdesignexpressions.net/' },
            { id: 8, name: 'ARES CUSTOM YACHTS', src: arescustomyachts, alt: 'professional web design solutions', title: 'Customized and Responsive Website for Yacht Restoration, Florida, USA', link: 'https://aresmarine.com/' },
            { id: 9, name: 'FINEGYPT', src: egyfin, alt: 'affordable website for hardwood floor retail', title: 'Customized and Responsive Website for Hardwood Flooring, Cairo, Egypt', link: 'https://finegypt.webdesignexpressions.net/' },
            // { id: 10, name: 'BOSTONIAN LIMOUSINE', src: BostonianLimousine, alt: 'BostonianLimousine', title: '', link: 'https://webdesignexpressions.net/' },
            { id: 11, name: 'MATH TUTORING', src: MathTutoring, alt: 'affordable math tutor website', title: 'A Customized Small Business Website for Personalized Math Learning, Florida, USA', link: 'https://mathtutoring.webdesignexpressions.net/' },
            { id: 12, name: 'THE SEA TURTLE FOUNDATION', src: NationalSaveTheSeaTurtleFoundation, alt: 'professional custom web design for non-profit', title: 'A Customized Website for a Non-Profit Organization, Florida, USA', link: 'https://savetheseaturtle.org/' },
            { id: 13, name: 'WELLFOUND YACHTS', src: WellFoundYachts, alt: 'custom web design services', title: 'A Customized Website for Boat Brokers, Florida, USA', link: 'https://wellfoundyachts.com/' },
            { id: 14, name: 'SHEN SHEN ICE CREAM', src: ShenShen, alt: 'affordable web developer creating custom web solutions', title: 'A Custom Website for an Ice Cream Shop, Hurghada, Egypt', link: 'https://shenshen.webdesignexpressions.net/' },
            { id: 15, name: 'PHUKET TAXI SERVICES', src: PhuketTaxiServices, alt: 'Professional Web Development Services', title: 'A Custom Website for Taxi and Shuttle Services, Phuket, Thailand', link: 'https://phukettaxi.webdesignexpressions.net/' },
            { id: 16, name: 'DONATE YOUR BOAT TO CHARITY', src: Donatetheboattocharity, alt: 'custom Web Development Services', title: 'Custom Web Site for Yacht Donation, Florida, USA', link: 'https://phukettaxi.webdesignexpressions.net/' },


        ];

        const shuffleArray = (array) => {
            const newArray = [...array];
            for (let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
            return newArray;
        };

        const shuffledArray = shuffleArray(images);
        setShuffledImages(shuffledArray);
    }, []);

    // const handleImageClick = (id) => {
    //     // Handle the image click event here
    //     console.log(`Clicked image with ID: ${id}`);
    // };



    return (
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-1">
            {shuffledImages.map((image) => (
                <a href={image.link} target='_blank' rel='noreferrer noopener'>
                    <div key={image.id} className="relative group">

                        <img
                            src={image.src}
                            alt={image.alt}
                            width={'100%'}
                            height={'auto'}
                            title={image.title}
                            className="w-full h-auto object-cover group-hover:opacity-70 transition-opacity duration-300 cursor-pointer"
                        // onClick={() => handleLinkClick(image.link)}
                        />

                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                        </div>

                        <div className='text-center custom-font pt-2'>{image.name}</div>
                    </div>
                </a>
            ))
            }
        </div >
    )
}

export default PreviousProjects; 