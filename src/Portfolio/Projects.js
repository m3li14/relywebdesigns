import projects from './Projects.json';
import { Helmet } from 'react-helmet';
import { Link } from '@mui/material';
import { useSprings, animated } from '@react-spring/web';
import { useState, useEffect } from 'react';

const Projects = ({ src, alt }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    // Animation for project cards with hover effect
    const [springs, api] = useSprings(projects.length, index => ({
        transform: 'scale(1)',
        config: { tension: 200, friction: 15 },
    }));

    const handleMouseEnter = (index) => {
        api.start(i =>
            i === index
                ? {
                    transform: 'scale(0.95)', // Slightly shrink the image
                }
                : {}
        );
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        api.start({
            transform: 'scale(1)', // Reset back to original size
        });
        setHoveredIndex(null);
    };

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setDimensions({ width: img.width, height: img.height });
        };
    }, [src]);

    return (
        <animated.div className="mx-10">
            <Helmet>
                <title data-react-helmet="true">
                    Web Design Expressions previous and current custom projects
                </title>
                <meta
                    data-react-helmet="true"
                    name="description"
                    content="Web Design Expressions proves custom websites can be affordable & professional. Our work in development services has given our small business clients value they can rely on."
                />
                <meta
                    data-react-helmet="true"
                    property="og:title"
                    content="previous and current projects"
                />
                <meta
                    data-react-helmet="true"
                    property="og:type"
                    content="Web Design Company"
                />
                <meta
                    data-react-helmet="true"
                    property="og:url"
                    content="https://webdesignexpressions.net/"
                />
                <meta
                    data-react-helmet="true"
                    property="og:image"
                    content="https://webdesignexpressions.net/Assets/PreviousProjects.jpg"
                />
                <meta
                    data-react-helmet="true"
                    property="og:description"
                    content="Web Design Expressions provides affordable & professional custom websites. We develop web services for our small business clients adding value they can rely on."
                />
            </Helmet>

            {/* Flexbox container for projects */}
            <div className="flex flex-wrap justify-center gap-4 pt-5 mx-auto">
                {/* Sort projects by year in descending order */}
                {springs.map((style, index) => {
                    const sortedProjects = [...projects].sort((a, b) => b.ProjectYear - a.ProjectYear); // Sort by year descending
                    const project = sortedProjects[index];

                    return (
                        <animated.div
                            key={project.ID}
                            style={style} // Apply the spring styles
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            className="relative overflow-hidden"
                        >
                            {/* Hidden text, will appear on hover for hovered image only */}
                            {hoveredIndex === index && (
                                <animated.div
                                    style={{
                                        opacity: 1,
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        zIndex: 2,
                                        textAlign: 'center',
                                        color: '#c7d5e0',
                                        backgroundColor: 'rgba(23, 26, 33, 0.7)',
                                        padding: '50px',
                                        pointerEvents: 'none',
                                        borderRadius: '25px'
                                    }}
                                >
                                    <Link
                                        href={project.ProjectURL}
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <div
                                            className='lg:text-6xl font-bold'
                                            style={{
                                                fontSize: '3rem',
                                                marginBottom: '1rem',
                                            }}
                                        >
                                            {project.ProjectName || 'Untitled Project'}
                                        </div>
                                    </Link>

                                    <div
                                        style={{
                                            fontSize: '1.85rem',
                                            position: 'relative',
                                            right: '0',
                                            textAlign: 'right'
                                        }}
                                    >
                                        {project.ProjectYear}
                                    </div>
                                </animated.div>
                            )}

                            <div className="relative">
                                <div className="mb-5">
                                    <Link
                                        href={project.ProjectURL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <animated.img
                                            src={project.ProjectImage}
                                            alt={project.ProjectName}
                                            title={project.ProjectName}
                                            width={dimensions.width}
                                            height={dimensions.height}

                                            className="shadow-md mx-auto"
                                            style={{
                                                ...style,
                                                backgroundColor: 'transparent',
                                                objectFit: 'cover',
                                                width: "100%",
                                                height: "auto",
                                                loading: "lazy"
                                            }}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </animated.div>
                    );
                })}
            </div>

        </animated.div>
    );
};

export default Projects;
