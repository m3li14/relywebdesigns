import React, { useState } from 'react';

const SEOfactors = () => {
    const [expandedRow, setExpandedRow] = useState(null);

    const factors = [
        {
            title: "Expertise",
            content: "Expert knowledge in SEO best practices, technical optimization, and industry trends. Including understanding of search algorithms, keyword research, and content optimization strategies.",
            color: "#1768AC" // blue-500
        },
        {
            title: "Effort",
            content: "Consistent dedication to implementing and maintaining SEO strategies. Regular content updates, technical audits, and performance monitoring.",
            color: "#F3DE8A" // green-500
        },
        {
            title: "Strategy",
            content: "Tailored SEO approaches based on industry, target audience, and business goals. Custom content strategies and technical optimizations.",
            color: "#FC6DAB" // pink-500
        },
        {
            title: "Competitiveness",
            content: "Analysis of competitor strategies, market positioning, and unique value propositions to stand out in search results.",
            color: "#F0F757" // amber-500
        },
        {
            title: "Resources",
            content: "Utilization of professional SEO tools, analytics platforms, and monitoring systems for comprehensive optimization.",
            color: "#FF9F1C" // violet-500
        },
        {
            title: "ROI",
            content: "Measurable improvements in search rankings, organic traffic, conversions, and overall digital presence.",
            color: "#FFFC99" // red-500
        }
    ];

    const calculateCirclePosition = (index, total, radius) => {
        const angle = (index * 360) / total - 90;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
        return [x, y];
    };

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="relative w-[600px] h-[600px] rounded-full shadow-lg flex items-center justify-center">
                {/* Concentric circles for visual effect */}
                {[5, 4, 3, 2, 1, 0].map((level) => {
                    const size = 500 - level * 70;
                    return (
                        <div
                            key={level}
                            className="absolute rounded-full border-2 border-inherit transition-all duration-300"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                opacity: expandedRow === level ? 0.2 : 1
                            }}
                        />
                    );
                })}

                {/* SEO Factors */}
                {factors.map((factor, index) => {
                    const isExpanded = expandedRow === index;
                    const [x, y] = calculateCirclePosition(index, factors.length, 220);

                    return (
                        <div
                            key={index}
                            className={`absolute transition-all duration-300 cursor-pointer
                ${isExpanded ? 'z-50' : 'z-0'}
              `}
                            style={{
                                transform: `translate(${x}px, ${y}px)`,
                                width: isExpanded ? '300px' : '120px',
                                height: isExpanded ? '120px' : '120px'
                            }}
                            onClick={() => setExpandedRow(isExpanded ? null : index)}
                        >
                            <div
                                className={`rounded-full transition-all duration-300 flex flex-col items-center justify-center p-4 text-center
                  ${isExpanded ? 'shadow-xl scale-150' : 'hover:scale-150'}
                `}
                                style={{
                                    backgroundColor: factor.color,
                                    width: '100%',
                                    height: '100%',
                                    opacity: isExpanded ? 1 : 0.9
                                }}
                            >
                                <h3 className="font-bold mb-1">
                                    {factor.title}
                                </h3>
                                {isExpanded && (
                                    <div className=" mt-2 overflow-auto">
                                        {factor.content}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}

                {/* Center circle */}
                <div className="absolute w-32 h-32 rounded-full flex items-center justify-center text-center shadow-lg">
                    <div>
                        <div className="font-bold text-5xl Company-Main-Font">SEO</div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SEOfactors;