import React, { useState, ReactElement } from 'react';
import { Container, Navbar, Button, Modal, Form, Col, Row } from 'react-bootstrap';
import 'bootswatch/dist/lumen/bootstrap.min.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './app.css';

const CreateInstallation: React.FC = (): ReactElement => {
  const [showFAQPanel, setShowFAQPanel] = useState<boolean>(false);
  const [showInstallPanel, setShowInstallPanel] = useState<boolean>(false);

  return (
    <>
      <Navbar bg='primary' fixed="top">
        <Navbar.Brand className="mx-auto text-white">Welkom bij My Contexts</Navbar.Brand>
      </Navbar>
      <Container fluid className="main-content" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '120px' }}>
        <p>
          Je staat op het punt om onderdeel uit te gaan maken van de MyContext wereld.
          Daarin kan je samen met anderen veilig gebruikmaken van de Apps in onze App Stores.
          Misschien wil je eerst meer weten over MyContexts voordat je deel gaat nemen.
          Als dat zo is ga dan eerst naar onze FAQ's.
        </p>
        <Button variant="primary" onClick={() => setShowFAQPanel(true)} className="mb-2">
          MyContexts FAQ's
        </Button>
        <Button variant="primary" onClick={() => setShowInstallPanel(true)}>
          Install
        </Button>
      </Container>
      <FAQModal show={showFAQPanel} onHide={() => setShowFAQPanel(false)} />
      <InstallModal show={showInstallPanel} onHide={() => setShowInstallPanel(false)} />
    </>
  );
};

const FAQModal: React.FC<{ show: boolean; onHide: () => void }> = ({ show, onHide }) => (
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

const InstallModal: React.FC<{ show: boolean; onHide: () => void }> = ({ show, onHide }) => {
  const [deviceName, setDeviceName] = useState<string>('');
  const [notFirstMyContexts, setNotFirstMyContexts] = useState<boolean>(false);
  const [advancedInstall, setAdvancedInstall] = useState<boolean>(false);
  const [useOwnDatabase, setUseOwnDatabase] = useState<boolean>(false);
  const [useOwnKey, setUseOwnKey] = useState<boolean>(false);
  const [ownKey, setOwnKey] = useState<File | null>(null);
  const [dbUrl, setDbUrl] = useState<string>('');
  const [dbPort, setDbPort] = useState<string>('');
  const [dbUsername, setDbUsername] = useState<string>('');
  const [dbPassword, setDbPassword] = useState<string>('');

  function handleFileSelect(event: React.ChangeEvent<HTMLInputElement>)
  {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0)
    {
      setOwnKey(fileList[0]);
    }
    else
    {
      setOwnKey(null);
    }
  }

  return (<Modal show={show} onHide={onHide} fullscreen dialogClassName="slide-in-bottom">
    <Modal.Header closeButton>
      <Modal.Title>Installeer MyContexts</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="formDeviceName">
          <Form.Label>De naam voor het apparaat waarop je installeert:</Form.Label>
          <Form.Control
            type="text"
            placeholder="E.g. mylaptop, mymobile, mytablet"
            value={deviceName}
            onChange={(e) => setDeviceName(e.target.value)}
          />
        </Form.Group>
        <SliderWithTooltip 
          label="Niet mijn eerste installatie" 
          tooltip="Als dit niet je eerste MyContext installatie is moet je een identity file en een cryptografische sleutel uploaden. Daarmee zorgen we ervoor dat de gegevens tussen je verschillende apparaten worden gesynchroniseerd." 
          callback={setNotFirstMyContexts} />  
        {notFirstMyContexts && (
          <Container className='pt-0'>
            <Form.Group controlId="formIdentityFileUpload" className="mt-3">
              <Form.Label>Upload je identity file:</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group controlId="formKeyFileUploadNotFirstInstallation" className="mt-3">
              <Form.Label>Upload je cryptografische sleutel:</Form.Label>
              <Form.Control type="file" onChange={handleFileSelect}/>
            </Form.Group>
          </Container>
        )}
        <SliderWithTooltip 
          label="Geavanceerde installatie"
          tooltip="Wanneer je je eigen database voor MyContexts wilt gebruiken of je je wilt je eigen cryptografische sleutel gebruiken zet dan geavanceerde installatie aan."
          callback={setAdvancedInstall}
          />
        {advancedInstall && (
          <>
          <Slider 
            label="Gebruik eigen database" 
            callback={setUseOwnDatabase} />
          {useOwnDatabase && (
            <Container className='mt-4 mb-4'>
              <Form.Group as={Row}>
                <Form.Label column sm="3">
                  Database URL
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                  type="text"
                  placeholder="https://mydatabase.com"
                  value={dbUrl}
                  onChange={(e) => setDbUrl(e.target.value)}
                />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="3">
                  Database poort
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                  type="text"
                  placeholder="1234"
                  value={dbPort}
                  onChange={(e) => setDbPort(e.target.value)}
                />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="3">
                  Database username
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                  type="text"
                  placeholder="myusername"
                  value={dbUsername}
                  onChange={(e) => setDbUsername(e.target.value)}
                />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="3">
                  Database password
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                  type="text"
                  placeholder="mypassword"
                  value={dbPassword}
                  onChange={(e) => setDbPassword(e.target.value)}
                />
                </Col>
              </Form.Group>
              </Container>
            )}

          { !ownKey &&
            <Form.Group>
              <Slider label="Gebruik eigen cryptografische sleutel" callback={setUseOwnKey} />            {
                useOwnKey && (
                  <Container>
                    <Form.Group controlId="formKeyFileUpload" className="mt-3">
                      <Form.Label>Upload je cryptografische sleutel:</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Container>)
              }
            </Form.Group>}
          </>
        )}

      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Close
      </Button>
      <Button variant="primary" onClick={handleInstall}>
        Install
      </Button>
    </Modal.Footer>
  </Modal>)};

const handleInstall = () => {
  console.log('Start installatie proces');
};

function SliderWithTooltip({ label, tooltip, callback }: { label: string, tooltip: string, callback: (e: any) => void }): ReactElement { 
  return (
    <Form.Group as={Row} controlId="formIdentityFile" className="mt-3">
    <Col sm={1}>
    <Form.Check
        type="switch"
        label=""
        onChange={(e) => callback(e.target.checked)}
      />
    </Col>
    <Col sm={11}>
      <OverlayTrigger
            placement="bottom-start"
            delay={{ show: 250, hide: 400 }}
            overlay={(props) => (
              <Tooltip id="MyContexts-tooltip" {...props} show={
                // eslint-disable-next-line react/prop-types
                props.show}>{tooltip}
              </Tooltip> )}
        >
        <Form.Label>{label}</Form.Label>
      </OverlayTrigger>
    </Col>
  </Form.Group>
);
}

function Slider({ label, callback }: { label: string, callback: (e: any) => void }): ReactElement {
  return (
    <Form.Group as={Row} className="mt-3">
    <Col sm={1}>
    <Form.Check
        type="switch"
        label=""
        onChange={(e) => callback(e.target.checked)}
      />
    </Col>
    <Col sm={11}>
      <Form.Label>{label}</Form.Label>
    </Col>
  </Form.Group>
);
}

export default CreateInstallation;