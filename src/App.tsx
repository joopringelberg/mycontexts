import { Component, ReactElement } from 'react'
import './App.css'
import { get as getValue } from 'idb-keyval';
import ConfigureInstallation, { InstallationData, InstallationResult, KeyPairData } from './configureInstallation';
import {initI18next, loadLanguageResources} from "./i18next.js";
import { SaveKeyPair } from './saveKeypair.js';
import { KeyPair } from './configurationComponents.js';

await initI18next();

interface AppState {
  phase: 'installationExists' | 'prepareInstallation' | 'installationError' | 'installing' | undefined,
  installationResult: InstallationResult,
}

export default class App extends Component<{}, AppState>
{
  constructor(props: {})
  {
    super(props);
    this.state =
      { phase: undefined
      , installationResult: { type: 'NoKeyPairData' }
      };
  }

  componentDidMount(): void {
    isInstallationComplete().then((isComplete: boolean) => {
      if (isComplete) {
        this.setState({ phase: 'installationExists' });
      } else {
        this.setState({ phase: 'prepareInstallation' });
    }})}

  render()
  {
    switch (this.state.phase) {
      case 'installationExists':
      return (
        <div className="App">
        <header className="App-header">
          <h1>MyContexts</h1>
        </header>
        </div>
      );
      case 'prepareInstallation':
      return <ConfigureInstallation callback={ (installationResult : InstallationResult) =>{
          this.setState({ phase: 'installing', installationResult });
        }} />;
      case 'installationError' :
      return <div>Installation error.</div>;
      case 'installing':
        return installing(this.state.installationResult);
      default:
      return <div>Work to do.</div>;
    }
  }
}

function isInstallationComplete(): Promise<boolean> 
{
  return getValue('installationComplete').then((value: boolean) => value);
}

function installing(data : InstallationResult): ReactElement
{
  switch (data.type) {
    case 'KeyPairData':
      return <> 
        <SaveKeyPair keypair={data.keyPair} perspectivesuserid={data.perspectivesUserId} />
        <div>Installing...</div>
        </>;
    case 'NoKeyPairData':
      default :
      return <div>Installing...</div>;
  }
}