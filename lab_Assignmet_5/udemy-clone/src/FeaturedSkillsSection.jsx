import TopicCard from "./TopicCard";
import './FeaturedSkillsSection.css';
import { useRef, useState } from "react";


const IMG_GENERATIVE_AI = "https://cms-images.udemycdn.com/96883mtakkm8/9Gj6y7OdRKhBmHkgJ9lWV/4589dcd6feb8009798924f70f515b731/generative-ai.png";
const IMG_IT_CERT = "https://cms-images.udemycdn.com/96883mtakkm8/5Pyb4XbnD2CBt6TgiSBB8v/26f6893300dadc86519907b854b430de/certifications.png"; 
const IMG_SOFT_SKILLS = "https://cms-images.udemycdn.com/96883mtakkm8/6QeCzvTvnqKN6tI18U0Wmg/cebc19b24d374ec1cab549a9c7a93020/data-science.png"; 
const IMG_WEB_DEV = "https://cms-images.udemycdn.com/96883mtakkm8/6cHWrhYDsqfm3k3qfR6gTO/04e768400c598dfa316114282b192987/chat-gpt.png"; 

// Keep the general icons for the rest of the cards, or use one of the new ones
const ICON_DEFAULT_1 = IMG_GENERATIVE_AI; // Re-use an image or define a new default placeholder
const ICON_DEFAULT_2 = IMG_IT_CERT; // Re-use an image or define a new default placeholder
export default function FeaturedSkillsSection() {
    const cardData = [
        // Course 1: Use specific image
        { iconUrl: IMG_GENERATIVE_AI, studentCount: "1M+", title: "Generative AI" }, 

        // Course 2: Use specific image
        { iconUrl: IMG_IT_CERT, studentCount: "14.4M+", title: "IT Certifications" }, 
        
        // Course 3: Use specific image
        { iconUrl: IMG_SOFT_SKILLS, studentCount: "7M+", title: "Soft Skills" }, 

        // Course 4: Use specific image
        { iconUrl: IMG_WEB_DEV, studentCount: "11M+", title: "Web Development" }, 

        // Course 5: Use a default/placeholder image for the rest
        { iconUrl: ICON_DEFAULT_1, studentCount: "2.5M+", title: "Data Science" }, 
        
        // Course 6: Use a different default/placeholder image
        { iconUrl: ICON_DEFAULT_2, studentCount: "5M+", title: "Leadership" }, 
    ];


    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 270; // Card width (250px) + gap (16px)
            const currentScroll = scrollContainerRef.current.scrollLeft;

            if (direction === 'left') {
                scrollContainerRef.current.scrollLeft = currentScroll - scrollAmount;
            } else {
                scrollContainerRef.current.scrollLeft = currentScroll + scrollAmount;
            }
        }
    };
    
    // Simple state to force re-render and check scroll position for button disabling
    const [scrollPosition, setScrollPosition] = useState(0); 

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            setScrollPosition(scrollContainerRef.current.scrollLeft);
        }
    };

    const isAtStart = scrollPosition === 0;
    const isAtEnd = scrollContainerRef.current 
        ? scrollPosition >= scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth - 1
        : true;
    
    return (
        <div className="skills-section">
            <div className="skills-heading-area">
                <h2 className="skills-title">
                    Learn essential career and life skills
                </h2>
                <p className="skills-description">
                    Udemy helps you build in-demand skills fast and advance your career in a changing job market.
                </p>
            </div>

            <div className="cards-scroll-wrapper">
                <div 
                    ref={scrollContainerRef} 
                    className="cards-container"
                    onScroll={handleScroll}
                >
                    {cardData.map((card, index) => (
                        <TopicCard 
                            key={index}
                            iconUrl={card.iconUrl}
                            studentCount={card.studentCount}
                            title={card.title}
                        />
                    ))}
                </div>

                {/* Carousel Controls */}
                <button 
                    className="carousel-btn btn-left" 
                    onClick={() => scroll('left')}
                    disabled={isAtStart}
                >
                    &lt;
                </button>
                <button 
                    className="carousel-btn btn-right" 
                    onClick={() => scroll('right')}
                    disabled={isAtEnd}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}