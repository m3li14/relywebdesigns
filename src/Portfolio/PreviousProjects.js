import React, { useEffect, useState } from 'react';
import projects from './Projects.json';
import { useSprings, animated } from '@react-spring/web'; // Import react-spring

const PreviousProjects = () => {
    const [shuffledImages, setShuffledImages] = useState([]);

    useEffect(() => {
        const shuffleArray = (array) => {
            const newArray = [...array];
            for (let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
            return newArray;
        };

        const shuffledArray = shuffleArray(projects);
        setShuffledImages(shuffledArray);
    }, []);

    // Create springs for each image with a hover effect
    const [springs, api] = useSprings(shuffledImages.length, index => ({
        transform: 'scale(1)',
        config: { tension: 200, friction: 15 },
    }));

    // Handle mouse enter/leave for each project card
    const handleMouseEnter = (index) => {
        api.start(i =>
            i === index
                ? { transform: 'scale(0.95)' } // Scale up slightly when hovered
                : {}
        );
    };

    const handleMouseLeave = () => {
        api.start({ transform: 'scale(1)' }); // Reset to normal size
    };

    return (
        <div className=''>
            <div className='mx-5'>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
                    {springs.map((style, index) => {
                        const project = shuffledImages[index];
                        return (
                            <animated.a // Use animated.a for smooth link animation
                                key={project.ID}
                                href={project.ProjectURL}
                                target='_blank'
                                rel='noreferrer noopener'
                                onMouseEnter={() => handleMouseEnter(index)} // Apply hover effects
                                onMouseLeave={handleMouseLeave}
                                style={style} // Apply spring style
                            >
                                <div className='relative'>
                                    <div className=''>
                                        <animated.img
                                            src={project.ProjectImage}
                                            alt={project.ProjectName || ''}
                                            title={project.ProjectName || ''}
                                            width={'100%'}
                                            height={'auto'}
                                            style={style} // Apply spring style to image
                                        />
                                    </div>
                                </div>
                            </animated.a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default PreviousProjects;
