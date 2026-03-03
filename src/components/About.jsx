import React from 'react';

function About() {
  return (
    <section className="about-section">
      <h2>La vision derrière le livre : Rencontrez le Prophète Amon Darius</h2>
      
      <div className="about-content">
        <div className="author-image">
           {/* N'oubliez pas de mettre le bon nom de votre fichier photo ici */}
           <img src="./src/assets/photo.png" alt="Prophète Amon Darius" />
        </div>
        
        <div className="author-bio">
          <p>
            Marchant fidèlement avec le Seigneur depuis 1989, Amon Darius a été consacré comme prophète de Dieu en 2018. Serviteur appelé à sonner de la trompette dans ces temps de la fin, il exerce un ministère de révélation et d'avertissement, tourné vers le réveil spirituel et la préparation de l'Épouse pour le retour imminent de Jésus-Christ.
          </p>
          
          <h3>Élite Prophétique pour la Programmation Divine</h3>
          <p>
            Il est le visionnaire et porteur du mandat "Élite Prophétique pour la Programmation Divine", un projet prophétique que le Seigneur lui a spécifiquement confié. À travers cette structure ministérielle, Amon Darius a pour fardeau de rassembler, d'alerter et d'équiper le peuple de Dieu face au changement de paradigme mondial, aux stratégies de l'ennemi et aux défis spirituels de notre génération.
          </p>
          <p>
            À travers son ouvrage, Lever une armée de Prophètes et Prophétesses pour Jésus-Christ, il lance un appel urgent et puissant au Corps du Christ. Profondément conscient des enjeux actuels, il invite les croyants à opérer un véritable « changement de paradigme ». Pour lui, la réalité spirituelle d'aujourd'hui est celle d'une « guerre déclarée dans ces temps de la fin », nécessitant de la part des chrétiens une préparation rigoureuse, un discernement aiguisé et une foi inébranlable.
          </p>
          <p>
            Sa mission, portée par ses écrits, est claire : il ne s'agit pas seulement d'informer, mais de susciter, de former et de lever une nouvelle génération de combattants spirituels capables de se tenir à la brèche. Le Prophète Amon Darius désire voir chaque croyant saisir son autorité spirituelle, entendre la voix de Dieu, et accomplir sa destinée au service exclusif de Jésus-Christ.
          </p>
          
          <div className="community-cta">
            <p>
              Son appel à lever une armée de sentinelles se déploie activement au-delà des frontières physiques. Vous pouvez rejoindre les rangs de ce conseil de guerre et suivre ses enseignements et décryptages prophétiques sur sa plateforme en ligne : recherchez « Élite Prophétique pour la Programmation Divine » sur Facebook pour rejoindre notre communauté. Maranatha !
            </p>
            <button onClick={() => window.open('https://www.facebook.com/eliteprophetique12', '_blank')}>
              👉 Rejoindre la communauté
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;