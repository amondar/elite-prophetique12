import React from 'react';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="social-links">
        {/* Remplacez les # par vos vrais liens */}
        <a href="#facebook" target="_blank" rel="noreferrer">Facebook</a> | 
        <a href="#youtube" target="_blank" rel="noreferrer">YouTube</a> | 
        <a href="#whatsapp" target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
      
      <div className="contact-info">
        <p>Contact : <a href="mailto:contact@elite-prophetique12.com">contact@elite-prophetique12.com</a></p>
      </div>
      
      <div className="copyright">
        <p>&copy; 2026 Prophète Amon Darius / Élite Prophétique pour la Programmation Divine - Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;