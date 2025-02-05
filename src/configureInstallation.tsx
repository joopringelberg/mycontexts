import { useState, ReactElement, FC, ChangeEvent } from 'react';
import { Container, Navbar, Button, Modal, Form, Col, Row } from 'react-bootstrap';
import 'bootswatch/dist/lumen/bootstrap.min.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { set as setValue} from 'idb-keyval';
import './app.css';
import {init} from '@paralleldrive/cuid2';
import { takeCUID } from 'perspectives-react';


const PUBLICKEY = "_publicKey";
const PRIVATEKEY = "_privateKey"; 

interface IdentityFile {author: string}

interface KeyPair { exportedPrivateKey: JsonWebKey, exportedPublicKey: JsonWebKey }

export interface InstallationData {
  deviceName: string | null;
  keyPair: KeyPair | null;
  identityFile: IdentityFile | null;
  couchdbUrl: string | null;
  couchdbPort: number | null;
  userName: string | null;
  password: string | null;
}

const ConfigureInstallation: FC = (): ReactElement => {
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
      <InstallModal show={showInstallPanel} onHide={() => setShowInstallPanel(false)}/>
    </>
  );
};

const FAQModal: FC<{ show: boolean; onHide: () => void }> = ({ show, onHide }) => (
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

const InstallModal: FC<{ show: boolean; onHide: () => void }> = ({ show, onHide }) => {
  const [deviceName, setDeviceName] = useState<string | null>(null);
  const [notFirstMyContexts, setNotFirstMyContexts] = useState<boolean>(false);
  const [advancedInstall, setAdvancedInstall] = useState<boolean>(false);
  const [useOwnDatabase, setUseOwnDatabase] = useState<boolean>(false);
  const [useOwnKey, setUseOwnKey] = useState<boolean>(false);
  const [keyPair, setKeyPair] = useState<KeyPair | null>(null);
  const [identityFile, setIdentityFile] = useState<IdentityFile | null>(null);
  const [couchdbUrl, setCouchdbUrl] = useState<string | null>(null);
  const [couchdbPort, setCouchDbPort] = useState<number | null>(null);
  const [userName, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string|null>(null);

  function handleCryptoKeys(event: ChangeEvent<HTMLInputElement>)
  {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0)
    {
      fileToJSON(fileList[0]).then((json) => {
        setKeyPair(json);
    })}
    else
    {
      setKeyPair(null);
    };
  }

  function handleIdentityFile(event: ChangeEvent<HTMLInputElement>)
  {

    const fileList = event.target.files;
    let json;
    if (fileList?.length && fileList[0].name.match(/.*\.json/)) {
      fileList[0].text()
        .then(t => {
          json = JSON.parse(t);
          if (json.author && json.timeStamp && json.deltas && json.publicKeys) {
            setIdentityFile(json);
            setValue('identityFile', json);  
            }
          })
        .catch(reason => console.log(reason));
      }
  }

  function fileToJSON (file: File): Promise<any> {
    if (file.type == "application/json")
    {
      return file.text().then( JSON.parse )
    }
    // Otherwise fail
    else
    {
      return Promise.reject("File is not a JSON file");
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
            value={deviceName || ''}
            required
            onChange={(e) => {
              setDeviceName(e.target.value)
              setValue('deviceName', e.target.value)
            }}
          />
          <Form.Control.Feedback type="invalid">Please enter a valid username.</Form.Control.Feedback>
        </Form.Group>
        <SliderWithTooltip 
          label="Niet mijn eerste installatie" 
          tooltip="Als dit niet je eerste MyContext installatie is moet je een identity file en een cryptografische sleutel uploaden. Daarmee zorgen we ervoor dat de gegevens tussen je verschillende apparaten worden gesynchroniseerd." 
          callback={setNotFirstMyContexts} />  
        {notFirstMyContexts && (
          <Container className='pt-0'>
            <Form.Group controlId="formIdentityFileUpload" className="mt-3">
              <Form.Label>Upload je identity file:</Form.Label>
              <Form.Control type="file" onChange={handleIdentityFile}/>
            </Form.Group>
            <Form.Group controlId="formKeyFileUploadNotFirstInstallation" className="mt-3">
              <Form.Label>Upload je cryptografische sleutels:</Form.Label>
              <Form.Control type="file" onChange={handleCryptoKeys}/>
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
                  value={couchdbUrl || ''}
                  onChange={(e) => {
                    setCouchdbUrl(e.target.value);
                    setValue('couchdbUrl', e.target.value);
                  }}
                />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="3">
                  Database poort
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                  type="number"
                  value={couchdbPort || ''}
                  onChange={(e) => {
                    setCouchDbPort(parseInt(e.target.value));
                    setValue('couchdbPort', e.target.value);
                  }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="3">
                  Database username
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                  // TODO: VALIDATE USERNAME
                  type="text"
                  placeholder="myusername"
                  value={userName || ''}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setValue('userName', e.target.value);
                  }}
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
                  value={password || ''}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setValue('password', e.target.value);
                    }}
                />
                </Col>
              </Form.Group>
              </Container>
            )}

          { !keyPair &&
            <Form.Group>
              <Slider label="Gebruik eigen cryptografische sleutel" callback={setUseOwnKey} />            {
                useOwnKey && (
                  <Container>
                    <Form.Group controlId="formKeyFileUpload" className="mt-3">
                      <Form.Label>Upload je cryptografische sleutels:</Form.Label>
                      <Form.Control type="file" onChange={handleCryptoKeys}/>
                    </Form.Group>
                  </Container>)
              }
            </Form.Group>}
          </>
        )}

      </Form>
    </Modal.Body>
    <Modal.Footer>
      {/* Clear state and close dialog */}
      <Button variant="secondary" onClick={ ()  =>{
        setDeviceName(null);
        setNotFirstMyContexts(false);
        setAdvancedInstall(false);
        setUseOwnDatabase(false);
        onHide()
      }}>
        Close
      </Button>
      {/* Gather state and put in KeyVal database. Then start actual installation process */}
      <Button variant="primary" onClick={() => handleInstall({ deviceName, keyPair, identityFile, couchdbUrl, couchdbPort, userName, password })}>
        Install
      </Button>
    </Modal.Footer>
  </Modal>)};

function handleInstall ( { deviceName, keyPair, identityFile, couchdbUrl, couchdbPort, userName, password }: InstallationData ) {
  // A function that generates a CUID using the current epoch as fingerprint.
  const cuid2 = init({
    // A custom random function with the same API as Math.random.
    // You can use this to pass a cryptographically secure random function.
    random: Math.random,
    // the length of the id
    length: 10,
    // A custom fingerprint for the host environment. This is used to help
    // prevent collisions when generating ids in a distributed system.
    fingerprint: Date.now().toString(36)
    });

  let perspectivesUsersId;
  if (identityFile) {
    // Get the perspectivesUsersId from the identity file
    // Save the identity file
    perspectivesUsersId = takeCUID( identityFile.author )
    perspectivesUsersId = identityFile.author;
  } else {
    perspectivesUsersId = cuid2();
  }
  // If there is no privateKey, generate a new keypair.
  if (keyPair) {
    // Save the keypair
    setValue( perspectivesUsersId + PUBLICKEY, keyPair.exportedPublicKey )
    setValue( perspectivesUsersId + PRIVATEKEY, keyPair.exportedPrivateKey )
  }
    else {
    // Generate a new keypair
    createKeypair(perspectivesUsersId).then( ({ exportedPrivateKey, exportedPublicKey }) => {
      // Save the keypair
      setValue( perspectivesUsersId + PUBLICKEY, exportedPublicKey )
      setValue( perspectivesUsersId + PRIVATEKEY, exportedPrivateKey )
    })
  }
};

function createKeypair (perspectivesUsersId: string) : Promise<KeyPair >
{
  let keypair : CryptoKeyPair, exportedPrivateKey: JsonWebKey, exportedPublicKey: JsonWebKey;
  return window.crypto.subtle.generateKey(
      {
      name: "ECDSA",
      namedCurve: "P-384"
      },
      true, // extractable.
      ["sign", "verify"])
    .then( kp => keypair = kp)
    .then( () => setValue( perspectivesUsersId + PUBLICKEY, keypair.publicKey ) )
    .then( () => window.crypto.subtle.exportKey( "jwk", keypair.privateKey ) )
    .then( buff => 
      {
        // We must save the exported private key because it appears as if it can only be exported once.
        exportedPrivateKey = buff;
        return window.crypto.subtle.importKey( "jwk", buff, { name: "ECDSA", namedCurve: "P-384" }, false, ["sign"])
      } )
    .then( unextractablePrivateKey => setValue( perspectivesUsersId + PRIVATEKEY, unextractablePrivateKey))
    .then( () => window.crypto.subtle.exportKey( "jwk", keypair.publicKey ) )
    .then( buff => exportedPublicKey = buff)
    .then( () => ({ exportedPrivateKey, exportedPublicKey }) )
}

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

function fileToJSON(file: File): Promise<any> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target && event.target.result) {
        try {
          resolve(JSON.parse(event.target.result as string));
        } catch (error) {
          reject(error);
        }
      }
    };
    reader.readAsText(file);
  });
}


export default ConfigureInstallation;