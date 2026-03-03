import React from 'react';

function BookPromo() {
  return (
    <section className="book-promo-section">
      <h2>Un manuel stratégique pour notre génération</h2>
      <p className="urgency-text">
        Nous vivons une époque charnière. Face aux défis grandissants et à l'accélération des temps de la fin, l'Église ne peut plus se contenter d'une position défensive. Il y a une guerre spirituelle déclarée, et Dieu appelle Son peuple à un véritable changement de paradigme. Ce livre n'est pas un simple enseignement théorique ; c'est un appel aux armes spirituelles.
      </p>
      
      <div className="benefits-list">
        <h3>En lisant cet ouvrage, vous allez découvrir comment :</h3>
        <ul>
          <li><strong>🌍 Décrypter les temps actuels :</strong> Comprendre le "changement de paradigme" et la nature exacte du combat spirituel auquel nous faisons face aujourd'hui.</li>
          <li><strong>🔥 Éveiller votre appel :</strong> Réaliser que l'onction prophétique n'est pas réservée à une élite, et découvrir comment Dieu veut vous utiliser comme Son porte-voix.</li>
          <li><strong>🛡️ Vous équiper pour la victoire :</strong> Recevoir des clés bibliques et pratiques pour passer de simple spectateur à véritable soldat dans l'armée de Jésus-Christ.</li>
        </ul>
      </div>
      
      <div className="cta-container">
        <p>Ne subissez plus les événements spirituels. Prenez votre place dans les rangs.</p>
        <button onClick={() => window.open('https://mybook.to/7HRqB', '_blank')}>
          👉 Télécharger mon exemplaire maintenant
        </button>
      </div>
    </section>
  );
}

export default BookPromo;