import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile as faFileSolid } from '@fortawesome/free-solid-svg-icons';

// Utiliser les icônes dans un composant
const SocialLinks = () => {
    return (
        <div className="social-links">
            <a href="https://github.com/LidwinePrior" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/lidwine-careme/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://drive.google.com/file/d/1aQmAyuy-TSq3vLaV7FSbH8wd3VthuL9b/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFileSolid} />
            </a>
        </div>
    );
};

export default SocialLinks;