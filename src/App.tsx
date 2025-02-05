import { Component } from 'react'
import './App.css'
import { get as getValue } from 'idb-keyval';
import ConfigureInstallation from './configureInstallation';

interface AppState {
  phase: 'installationExists' | 'prepareInstallation' | 'installationError' | 'installing' | undefined;
}

export default class App extends Component<{}, AppState>
{
  constructor()
  {
    super({});
    this.state =
      { phase: undefined
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
      return <ConfigureInstallation />;
      case 'installationError' :
      return <div>Installation error.</div>;
      case 'installing':
      return <div>Installing...</div>;
      default:
      return <div>Work to do.</div>;
    }
  }
}

function isInstallationComplete(): Promise<boolean> 
{
  return getValue('installationComplete').then((value: boolean) => value);
}
