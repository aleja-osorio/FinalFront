import dhImage from '../assets/DH.png';
import fbIcon from '../assets/ico-facebook.png';
import igIcon from '../assets/ico-instagram.png';
import waIcon from '../assets/ico-whatsapp.png';
import tkIcon from '../assets/ico-tiktok.png';
import '../index.css'

const Footer = () => {
  return (
    <footer className="footer">
      <img src={dhImage} alt="DH" className="footer-left" />
      <div className="footer-right">
        <img src={fbIcon} alt="Facebook" className="social-icon" />
        <img src={igIcon} alt="Instagram" className="social-icon" />
        <img src={waIcon} alt="WhatsApp" className="social-icon" />
        <img src={tkIcon} alt="TikTok" className="social-icon" />
      </div>
    </footer>
  );
};

export default Footer;

