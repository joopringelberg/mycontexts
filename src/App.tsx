import { Component, useState } from 'react'
import './App.css'
import { del as deleteKey, set as setValue, get as getValue } from 'idb-keyval';
import CreateInstallation from './createInstallation';

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
    isInstallationComplete().then((value: boolean) => {
      if (value) {
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
      return <CreateInstallation />;
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
