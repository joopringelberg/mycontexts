import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Container, Navbar, Button, Modal, Form, Col, Row } from 'react-bootstrap';
import 'bootswatch/dist/lumen/bootstrap.min.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { set as setValue } from 'idb-keyval';
import './app.css';
import { init } from '@paralleldrive/cuid2';
import { takeCUID } from 'perspectives-react';
const PUBLICKEY = "_publicKey";
const PRIVATEKEY = "_privateKey";
const ConfigureInstallation = () => {
    const [showFAQPanel, setShowFAQPanel] = useState(false);
    const [showInstallPanel, setShowInstallPanel] = useState(false);
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, { bg: 'primary', fixed: "top", children: _jsx(Navbar.Brand, { className: "mx-auto text-white", children: "Welkom bij My Contexts" }) }), _jsxs(Container, { fluid: true, className: "main-content", style: { minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '120px' }, children: [_jsx("p", { children: "Je staat op het punt om onderdeel uit te gaan maken van de MyContext wereld. Daarin kan je samen met anderen veilig gebruikmaken van de Apps in onze App Stores. Misschien wil je eerst meer weten over MyContexts voordat je deel gaat nemen. Als dat zo is ga dan eerst naar onze FAQ's." }), _jsx(Button, { variant: "primary", onClick: () => setShowFAQPanel(true), className: "mb-2", children: "MyContexts FAQ's" }), _jsx(Button, { variant: "primary", onClick: () => setShowInstallPanel(true), children: "Install" })] }), _jsx(FAQModal, { show: showFAQPanel, onHide: () => setShowFAQPanel(false) }), _jsx(InstallModal, { show: showInstallPanel, onHide: () => setShowInstallPanel(false) })] }));
};
const FAQModal = ({ show, onHide }) => (_jsxs(Modal, { show: show, onHide: onHide, fullscreen: true, dialogClassName: "slide-in-bottom", children: [_jsx(Modal.Header, { closeButton: true, children: _jsx(Modal.Title, { children: "MyContexts FAQ's" }) }), _jsx(Modal.Body, { children: _jsxs("ul", { children: [_jsxs("details", { children: [_jsx("summary", { children: "Wat kan ik met MyContexts doen?" }), _jsx("p", { children: "Met MyContexts kun je veilig contexten maken waarin je samen met anderen gegevens kunt delen voor werk, voor thuis, voor leuke dingen en veel meer. Je kunt gratis Apps kiezen uit de MyContexts App Stores. Daarmee bepaal je zelf de soort contexten die je wilt gebruiken en met wie je die contexten wilt delen." })] }), _jsxs("details", { children: [_jsx("summary", { children: "Hoe werkt MyContexts?" }), _jsx("p", { children: "MyContexts Apps worden op een speciale manier gemaakt. Bij MyContexts hoort een taal die in termen van Contexten, Rollen en Perspectieven (Gebruikerrollen hebben Perspectieven op andere Gebruikerrollen en Dingrollen) een toepassing vormgeeft. Op basis hiervan rekenen we uit welke gebruikers in een Context welke gegevens moet krijgen om zijn of haar rol in een Context te spelen. Vervolgens sturen we die gegevens naar de devices van die gebruikers. Zoals gezegd, geen servers die je gegevens opslaan. Dus niet via een Server." })] }), _jsxs("details", { children: [_jsx("summary", { children: "Waarom is MyContext veilig?" }), _jsx("p", { children: "MyContexts werkt zonder servers. Servers die kunnen worden gehackt waardoor je gegevens op straat komen te liggen. Servers van bedrijven die aan de haal gaan met je gegevens en er veel aan verdienen. Geen Server geen problemen met je privacy " })] }), _jsxs("details", { children: [_jsx("summary", { children: "Waarom is MyContexts duurzaam?" }), _jsx("p", { children: "Geen servers betekent geen Datacenters die energie slurpen en het landschap vervuilen." })] }), _jsxs("details", { children: [_jsx("summary", { children: "Wat is het verschil met bijvoorbeeld WhatsApp?" }), _jsx("p", { children: "Om te beginnen is MyContext niet een App, maar een taal en een platform. In WhatsApp draait het om Chats. Iedere Context in MyContexts heeft standaard een Chat maar ook gegevens en andere Contexten waar je heen kan gaan. We noemen dit de Wie-Wat-Waar opzet. Wie doen er allemaal mee in een Context?, Wat voor gegevens zijn er in de Context waar je samen aan kunt werken en Waar kun je naar allemaal naar toe. We denken dan ook dat WWW binnenkort niet meer staat voor World Wide Web maar voor Wie Wat Waar :-)" })] }), _jsxs("details", { children: [_jsx("summary", { children: "Waarom kost MyConexts zo weinig?" }), _jsx("p", { children: "Omdat wij geen centrale sewrver hebben en je alleen je eigen apparaten gebruikt om gegevens op te slaan en te verwerken maken we bijna geen kosten. Daarom is 2 Euro per maand of een tientje per jaar voldoende." })] }), _jsxs("details", { children: [_jsx("summary", { children: "Stel mijn smartphone gaat kapot. Ben ik dan alles kwijt?" }), _jsx("p", { children: "Nee, we hebben meerdere mechanismen ontworpen om je gegevens te herstellen ook al doet je smartphone het niet meer. Meerdere Contexties dienen als een back-up voor je data. Voer een code in op de MyContexts website, een code die je van ons krijgt wanneer je mee gaat doen en we herstellen je data op een ander apparaat." })] }), _jsxs("details", { children: [_jsx("summary", { children: "Werkt MyContexts ook op mijn andere apparaten?" }), _jsx("p", { children: "Ja, je lkunt net zoveel apparaten met MyContexts gebruiken. Wij zorgen ervoor dat je gegevens en apps tussen je apparaten gesynced worden." })] }), _jsxs("details", { children: [_jsx("summary", { children: "Kan ik ook zelf MyContexts Apps maken?" }), _jsx("p", { children: "Vooralsnog maken wij de Apps maar over niet al te lange tijd publiceren we de taal en de tools om dit zelf te kunnen. Je zult dan zien dat Apps maken voor MyContexts erg eenvoudig is." })] }), _jsxs("details", { children: [_jsx("summary", { children: "Wie heeft MyContexts gemaakt?" }), _jsx("p", { children: "MyContext is het resultaat van meer dan zeven jaar noeste arbeid van Joop Ringelberg en Cor Baars. Beide Cognitie Wetenschappers en ervaren IT-ers" })] }), _jsxs("details", { children: [_jsx("summary", { children: "Waarom is dit nooit eerder gedaan?" }), _jsx("p", { children: "Je begrijpt dat bedrijven die je naar hun servers lokken om daar geld aan te verdienen dit geen goed idee vinden en hier niet in investeren. Verder is het, ondanks de eenvoud van het idee, erg complex om te maken We hebben er niet voor niets meer dan zeven jaar aan gewerkt." })] }), _jsxs("details", { children: [_jsx("summary", { children: "Waar kan ik meer informatie vinden over MyContexts?" }), _jsx("p", { children: "Je begrijpt dat bedrijven die je naar hun servers lokken om daar geld aan te verdienen dit geen goed idee vinden en hier niet in investeren. Verder is het, ondanks de eenvoud van het idee, erg complex om te maken We hebben er niet voor niets meer dan zeven jaar aan gewerkt." })] })] }) })] }));
const InstallModal = ({ show, onHide }) => {
    const [deviceName, setDeviceName] = useState(null);
    const [notFirstMyContexts, setNotFirstMyContexts] = useState(false);
    const [advancedInstall, setAdvancedInstall] = useState(false);
    const [useOwnDatabase, setUseOwnDatabase] = useState(false);
    const [useOwnKey, setUseOwnKey] = useState(false);
    const [keyPair, setKeyPair] = useState(null);
    const [identityFile, setIdentityFile] = useState(null);
    const [couchdbUrl, setCouchdbUrl] = useState(null);
    const [couchdbPort, setCouchDbPort] = useState(null);
    const [userName, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    function handleCryptoKeys(event) {
        const fileList = event.target.files;
        if (fileList && fileList.length > 0) {
            fileToJSON(fileList[0]).then((json) => {
                setKeyPair(json);
            });
        }
        else {
            setKeyPair(null);
        }
        ;
    }
    function handleIdentityFile(event) {
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
    function fileToJSON(file) {
        if (file.type == "application/json") {
            return file.text().then(JSON.parse);
        }
        // Otherwise fail
        else {
            return Promise.reject("File is not a JSON file");
        }
    }
    return (_jsxs(Modal, { show: show, onHide: onHide, fullscreen: true, dialogClassName: "slide-in-bottom", children: [_jsx(Modal.Header, { closeButton: true, children: _jsx(Modal.Title, { children: "Installeer MyContexts" }) }), _jsx(Modal.Body, { children: _jsxs(Form, { children: [_jsxs(Form.Group, { controlId: "formDeviceName", children: [_jsx(Form.Label, { children: "De naam voor het apparaat waarop je installeert:" }), _jsx(Form.Control, { type: "text", placeholder: "E.g. mylaptop, mymobile, mytablet", value: deviceName || '', required: true, onChange: (e) => {
                                        setDeviceName(e.target.value);
                                        setValue('deviceName', e.target.value);
                                    } }), _jsx(Form.Control.Feedback, { type: "invalid", children: "Please enter a valid username." })] }), _jsx(SliderWithTooltip, { label: "Niet mijn eerste installatie", tooltip: "Als dit niet je eerste MyContext installatie is moet je een identity file en een cryptografische sleutel uploaden. Daarmee zorgen we ervoor dat de gegevens tussen je verschillende apparaten worden gesynchroniseerd.", callback: setNotFirstMyContexts }), notFirstMyContexts && (_jsxs(Container, { className: 'pt-0', children: [_jsxs(Form.Group, { controlId: "formIdentityFileUpload", className: "mt-3", children: [_jsx(Form.Label, { children: "Upload je identity file:" }), _jsx(Form.Control, { type: "file", onChange: handleIdentityFile })] }), _jsxs(Form.Group, { controlId: "formKeyFileUploadNotFirstInstallation", className: "mt-3", children: [_jsx(Form.Label, { children: "Upload je cryptografische sleutels:" }), _jsx(Form.Control, { type: "file", onChange: handleCryptoKeys })] })] })), _jsx(SliderWithTooltip, { label: "Geavanceerde installatie", tooltip: "Wanneer je je eigen database voor MyContexts wilt gebruiken of je je wilt je eigen cryptografische sleutel gebruiken zet dan geavanceerde installatie aan.", callback: setAdvancedInstall }), advancedInstall && (_jsxs(_Fragment, { children: [_jsx(Slider, { label: "Gebruik eigen database", callback: setUseOwnDatabase }), useOwnDatabase && (_jsxs(Container, { className: 'mt-4 mb-4', children: [_jsxs(Form.Group, { as: Row, children: [_jsx(Form.Label, { column: true, sm: "3", children: "Database URL" }), _jsx(Col, { sm: "9", children: _jsx(Form.Control, { type: "text", placeholder: "https://mydatabase.com", value: couchdbUrl || '', onChange: (e) => {
                                                            setCouchdbUrl(e.target.value);
                                                            setValue('couchdbUrl', e.target.value);
                                                        } }) })] }), _jsxs(Form.Group, { as: Row, children: [_jsx(Form.Label, { column: true, sm: "3", children: "Database poort" }), _jsx(Col, { sm: "9", children: _jsx(Form.Control, { type: "number", value: couchdbPort || '', onChange: (e) => {
                                                            setCouchDbPort(parseInt(e.target.value));
                                                            setValue('couchdbPort', e.target.value);
                                                        } }) })] }), _jsxs(Form.Group, { as: Row, children: [_jsx(Form.Label, { column: true, sm: "3", children: "Database username" }), _jsx(Col, { sm: "9", children: _jsx(Form.Control
                                                    // TODO: VALIDATE USERNAME
                                                    , { 
                                                        // TODO: VALIDATE USERNAME
                                                        type: "text", placeholder: "myusername", value: userName || '', onChange: (e) => {
                                                            setUsername(e.target.value);
                                                            setValue('userName', e.target.value);
                                                        } }) })] }), _jsxs(Form.Group, { as: Row, children: [_jsx(Form.Label, { column: true, sm: "3", children: "Database password" }), _jsx(Col, { sm: "9", children: _jsx(Form.Control, { type: "text", placeholder: "mypassword", value: password || '', onChange: (e) => {
                                                            setPassword(e.target.value);
                                                            setValue('password', e.target.value);
                                                        } }) })] })] })), !keyPair &&
                                    _jsxs(Form.Group, { children: [_jsx(Slider, { label: "Gebruik eigen cryptografische sleutel", callback: setUseOwnKey }), "            ", useOwnKey && (_jsx(Container, { children: _jsxs(Form.Group, { controlId: "formKeyFileUpload", className: "mt-3", children: [_jsx(Form.Label, { children: "Upload je cryptografische sleutels:" }), _jsx(Form.Control, { type: "file", onChange: handleCryptoKeys })] }) }))] })] }))] }) }), _jsxs(Modal.Footer, { children: [_jsx(Button, { variant: "secondary", onClick: () => {
                            setDeviceName(null);
                            setNotFirstMyContexts(false);
                            setAdvancedInstall(false);
                            setUseOwnDatabase(false);
                            onHide();
                        }, children: "Close" }), _jsx(Button, { variant: "primary", onClick: () => handleInstall({ deviceName, keyPair, identityFile, couchdbUrl, couchdbPort, userName, password }), children: "Install" })] })] }));
};
function handleInstall({ deviceName, keyPair, identityFile, couchdbUrl, couchdbPort, userName, password }) {
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
        perspectivesUsersId = takeCUID(identityFile.author);
        perspectivesUsersId = identityFile.author;
    }
    else {
        perspectivesUsersId = cuid2();
    }
    // If there is no privateKey, generate a new keypair.
    if (keyPair) {
        // Save the keypair
        setValue(perspectivesUsersId + PUBLICKEY, keyPair.exportedPublicKey);
        setValue(perspectivesUsersId + PRIVATEKEY, keyPair.exportedPrivateKey);
    }
    else {
        // Generate a new keypair
        createKeypair(perspectivesUsersId).then(({ exportedPrivateKey, exportedPublicKey }) => {
            // Save the keypair
            setValue(perspectivesUsersId + PUBLICKEY, exportedPublicKey);
            setValue(perspectivesUsersId + PRIVATEKEY, exportedPrivateKey);
        });
    }
}
;
function createKeypair(perspectivesUsersId) {
    let keypair, exportedPrivateKey, exportedPublicKey;
    return window.crypto.subtle.generateKey({
        name: "ECDSA",
        namedCurve: "P-384"
    }, true, // extractable.
    ["sign", "verify"])
        .then(kp => keypair = kp)
        .then(() => setValue(perspectivesUsersId + PUBLICKEY, keypair.publicKey))
        .then(() => window.crypto.subtle.exportKey("jwk", keypair.privateKey))
        .then(buff => {
        // We must save the exported private key because it appears as if it can only be exported once.
        exportedPrivateKey = buff;
        return window.crypto.subtle.importKey("jwk", buff, { name: "ECDSA", namedCurve: "P-384" }, false, ["sign"]);
    })
        .then(unextractablePrivateKey => setValue(perspectivesUsersId + PRIVATEKEY, unextractablePrivateKey))
        .then(() => window.crypto.subtle.exportKey("jwk", keypair.publicKey))
        .then(buff => exportedPublicKey = buff)
        .then(() => ({ exportedPrivateKey, exportedPublicKey }));
}
function SliderWithTooltip({ label, tooltip, callback }) {
    return (_jsxs(Form.Group, { as: Row, controlId: "formIdentityFile", className: "mt-3", children: [_jsx(Col, { sm: 1, children: _jsx(Form.Check, { type: "switch", label: "", onChange: (e) => callback(e.target.checked) }) }), _jsx(Col, { sm: 11, children: _jsx(OverlayTrigger, { placement: "bottom-start", delay: { show: 250, hide: 400 }, overlay: (props) => (_jsx(Tooltip, { id: "MyContexts-tooltip", ...props, show: 
                        // eslint-disable-next-line react/prop-types
                        props.show, children: tooltip })), children: _jsx(Form.Label, { children: label }) }) })] }));
}
function Slider({ label, callback }) {
    return (_jsxs(Form.Group, { as: Row, className: "mt-3", children: [_jsx(Col, { sm: 1, children: _jsx(Form.Check, { type: "switch", label: "", onChange: (e) => callback(e.target.checked) }) }), _jsx(Col, { sm: 11, children: _jsx(Form.Label, { children: label }) })] }));
}
function fileToJSON(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            if (event.target && event.target.result) {
                try {
                    resolve(JSON.parse(event.target.result));
                }
                catch (error) {
                    reject(error);
                }
            }
        };
        reader.readAsText(file);
    });
}
export default ConfigureInstallation;
