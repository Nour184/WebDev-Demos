import './TopicCard.css';

export default function TopicCard({ iconUrl, studentCount, title }) {

    return (
        <div className="card-wrapper">
            <div className="topic-card">
                <div className="card-image-placeholder">

                    <img src={iconUrl} alt={title} className="card-image-content" />

                </div>
                <div className="card-content">
                    <div>
                        <div className="card-stats">{studentCount}</div>
                        <h3 className="card-title">{title}</h3>
                    </div>
                    <div className="card-footer">
                        <a href="#" className="card-link">Explore {title}</a>
                        <span className="card-arrow">→</span>
                    </div>
                </div>
            </div>
        </div>
    );

}