import React from 'react';

function Header() {
  return (
    <header className="header-section">
      <div className="header-content">
        <h1>Éveillez la voix prophétique qui est en vous et préparez-vous pour les temps de la fin.</h1>
        
        <p>
          Bienvenue sur la page officielle du Ministère <strong>Élite Prophétique pour la Programmation Divine</strong>. 
          Plongez dans une vision claire de la guerre spirituelle actuelle à travers notre nouvel ouvrage : 
          <em> Lever une armée de prophètes et prophétesses pour Jésus-Christ</em>.
        </p>
        
        <button className="cta-button" onClick={() => window.open('https://mybook.to/7HRqB', '_blank')}>
          🔥 Commencer ma lecture aujourd'hui
        </button>
      </div>
      
      <div className="header-image">
        {/* Vous pourrez remplacer la source (src) par l'image de votre couverture */}
        <img src="./src/assets/Couverture-Officielle-Kindle_.jpg" alt="Couverture du livre Lever une armée de prophètes" />
      </div>
    </header>
  );
}

export default Header;