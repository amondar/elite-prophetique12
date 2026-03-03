import React, { useState } from 'react';

function Community() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Plus tard, vous pourrez connecter ceci à un service d'envoi d'e-mails
    alert(`Merci ${name} ! Votre inscription est prise en compte avec l'adresse ${email}. Vous recevrez bientôt le lien vers la vidéo.`);
    setName('');
    setEmail('');
  };

  return (
    <section className="community-section">
      <h2>Rejoignez les sentinelles : Ne combattez plus seul</h2>
      <p>
        La guerre spirituelle de notre génération nécessite une armée unie, éveillée et constamment équipée. Je vous invite à rejoindre ma liste de contacts privés pour recevoir directement par e-mail mes enseignements, décryptages prophétiques et encouragements.
      </p>
      
      <div className="gift-box">
        <h3>🎁 CADEAU DE BIENVENUE :</h3>
        <p>
          En vous inscrivant aujourd'hui, recevez un accès immédiat et privé à un enseignement vidéo exclusif : <strong>"Les 3 clés pour discerner la voix de Dieu dans le chaos actuel"</strong>.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="signup-form">
        <input 
          type="text" 
          placeholder="Votre Prénom" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required 
        />
        <input 
          type="email" 
          placeholder="Votre Adresse E-mail" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <button type="submit">👉 Oui, je m'inscris et j'accède à la vidéo !</button>
      </form>
      <p className="privacy-note">
        <small>🔒 Votre adresse e-mail est en sécurité. Vous pourrez vous désabonner à tout moment.</small>
      </p>
    </section>
  );
}

export default Community;