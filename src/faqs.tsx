import { FC } from 'react';
import { Modal } from 'react-bootstrap';
import 'bootswatch/dist/lumen/bootstrap.min.css';
import './app.css';

export const FAQModal: FC<{ show: boolean; onHide: () => void }> = ({ show, onHide }) => (
  <Modal show={show} onHide={onHide} fullscreen dialogClassName="slide-in-bottom">
    <Modal.Header closeButton>
      <Modal.Title>MyContexts FAQ's</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ul>
        <details>
          <summary>Wat kan ik met MyContexts doen?</summary>
          <p>Met MyContexts kun je veilig contexten maken waarin je samen met anderen 
            gegevens kunt delen voor werk, voor thuis, voor leuke dingen en veel meer.
            Je kunt gratis Apps kiezen uit de MyContexts App Stores. 
            Daarmee bepaal je zelf de soort contexten die je wilt gebruiken en met wie je 
            die contexten wilt delen.
            </p>
        </details>
        <details>
          <summary>Hoe werkt MyContexts?</summary>
          <p>MyContexts Apps worden op een speciale manier gemaakt. 
            Bij MyContexts hoort een taal die in termen van Contexten, Rollen en Perspectieven
            (Gebruikerrollen hebben Perspectieven op andere Gebruikerrollen en 
            Dingrollen) een toepassing vormgeeft. 
            Op basis hiervan rekenen we uit welke gebruikers in een Context
            welke gegevens moet krijgen om zijn of haar rol in een Context te spelen. 
            Vervolgens sturen we die gegevens naar de devices van die gebruikers.
            Zoals gezegd, geen servers die je gegevens opslaan.
            Dus niet via een Server.</p>
        </details>
        <details>
          <summary>Waarom is MyContext veilig?</summary>
          <p>MyContexts werkt zonder servers. 
            Servers die kunnen worden gehackt waardoor je gegevens op straat komen te liggen.
            Servers van bedrijven die aan de haal gaan met je gegevens en er veel aan verdienen.
            Geen Server geen problemen met je privacy </p>
        </details>
        <details>
          <summary>Waarom is MyContexts duurzaam?</summary>
          <p>Geen servers betekent geen Datacenters die energie slurpen 
            en het landschap vervuilen. 
          </p>
        </details>
        <details>
          <summary>Wat is het verschil met bijvoorbeeld WhatsApp?</summary>
          <p>Om te beginnen is MyContext niet een App, maar een taal en een platform.
          In WhatsApp draait het om Chats. 
          Iedere Context in MyContexts heeft standaard een Chat maar ook gegevens en andere Contexten waar je heen kan gaan. 
          We noemen dit de Wie-Wat-Waar opzet. Wie doen er allemaal mee in een Context?, 
          Wat voor gegevens zijn er in de Context waar je samen aan kunt werken en 
          Waar kun je naar allemaal naar toe. 
          We denken dan ook dat WWW binnenkort niet meer staat voor World Wide Web maar voor Wie Wat Waar :-)
          </p>
        </details>
        <details>
          <summary>Waarom kost MyConexts zo weinig?</summary>
          <p>Omdat wij geen centrale sewrver hebben 
            en je alleen je eigen apparaten gebruikt om gegevens op te slaan en te verwerken 
            maken we bijna geen kosten. Daarom is 2 Euro per maand of een tientje per jaar voldoende.
          </p>
        </details>
        <details>
          <summary>Stel mijn smartphone gaat kapot. Ben ik dan alles kwijt?</summary>
          <p>Nee, we hebben meerdere mechanismen ontworpen om je gegevens te herstellen
            ook al doet je smartphone het niet meer. Meerdere Contexties dienen als een back-up 
            voor je data. Voer een code in op de MyContexts website, een code die je van ons krijgt
            wanneer je mee gaat doen en we herstellen je data op een ander apparaat. 
          </p>
        </details>
        <details>
          <summary>Werkt MyContexts ook op mijn andere apparaten?</summary>
          <p>Ja, je lkunt net zoveel apparaten met MyContexts gebruiken. Wij zorgen ervoor dat 
            je gegevens en apps tussen je apparaten gesynced worden. 
          </p>
        </details>
        <details>
          <summary>Kan ik ook zelf MyContexts Apps maken?</summary>
          <p>Vooralsnog maken wij de Apps maar over niet al te lange tijd 
            publiceren we de taal en de tools om dit zelf te kunnen. Je zult dan zien 
            dat Apps maken voor MyContexts erg eenvoudig is.
          </p>
        </details>
        <details>
          <summary>Wie heeft MyContexts gemaakt?</summary>
          <p>MyContext is het resultaat van meer dan zeven jaar noeste arbeid 
          van Joop Ringelberg en Cor Baars. Beide Cognitie Wetenschappers en ervaren IT-ers</p>
        </details>
        <details>
          <summary>Waarom is dit nooit eerder gedaan?</summary>
          <p>Je begrijpt dat bedrijven die je naar hun servers lokken om daar geld aan te verdienen
            dit geen goed idee vinden en hier niet in investeren. 
            Verder is het, ondanks de eenvoud van het idee, erg complex om te maken
            We hebben er niet voor niets meer dan zeven jaar aan gewerkt.
          </p>
        </details>
        <details>
          <summary>Waar kan ik meer informatie vinden over MyContexts?</summary>
          <p>Je begrijpt dat bedrijven die je naar hun servers lokken om daar geld aan te verdienen
            dit geen goed idee vinden en hier niet in investeren. 
            Verder is het, ondanks de eenvoud van het idee, erg complex om te maken
            We hebben er niet voor niets meer dan zeven jaar aan gewerkt.
          </p>
        </details>
      </ul>
    </Modal.Body>
  </Modal>
);

