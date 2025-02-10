import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Chez Taginify, nous vous proposons une expérience culinaire authentique et savoureuse. Découvrez notre menu varié de plats marocains traditionnels, préparés avec soin et passion.
          </p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook_icon} alt="" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.twitter_icon} alt="" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.linkedin_icon} alt="" />
            </a>
          </div>
        </div>

        <div className="footer-content-center">
          <h2>ENTREPRISE</h2>
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">À propos</a></li>
            <li><a href="#">Livraison</a></li>
            <li><a href="#">Politique de confidentialité</a></li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>CONTACTEZ-NOUS</h2>
          <ul>
            <li>+212 512345678</li>
            <li>contact@taginify.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        © 2023 Taginify. Tous droits réservés.
      </p>
    </div>
  );
};

export default Footer;