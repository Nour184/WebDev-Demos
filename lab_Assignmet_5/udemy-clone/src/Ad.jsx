import './Ad.css';
import offerpic from './assets/offer-pic.webp';
export default function Ad() {
    const data = {
        title: "Reimagine your career in the AI era",
        subtitle: "Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.",
        // Update perks to be objects if you want specific icons for each
        perks: [
            { text: "Learn AI and more", icon: "✨" }, 
            { text: "Prep for a certification", icon: "🏆" },
            { text: "Practice with AI coaching", icon: "💻" },
            { text: "Advance your career", icon: "💡" }
        ],
        buttonText: "Learn more",
        buttonSubtext: "Starting at E£204.00/month"
    };

    return (
        <div className="advertisement-banner">
            {/* --- Left Side: Content --- */}
            <div className="ad-content-left">
                <h2 className="ad-title">{data.title}</h2>
                <p className="ad-subtitle">{data.subtitle}</p>
                
                <ul className="ad-perks-list">
                    {data.perks.map((perk, index) => (
                        <li key={index} className="ad-perk-item">
                            <span className="icon-container">{perk.icon}</span> 
                            <span>{perk.text}</span>
                        </li>
                    ))}
                </ul>
                
                <div className="ad-cta-container">
                    <button className="ad-cta-button">
                        {data.buttonText}
                    </button>
                    <p className="ad-button-subtext">{data.buttonSubtext}</p>
                </div>
            </div>

            {/* --- Right Side: Images  --- */}
            <div className="ad-content-right">
                <img src={offerpic} alt="Advertisement Visual" className="ad-image" />
            </div>
        </div>
    );
}