import { jsx as _jsx } from "react/jsx-runtime";
import { Component } from 'react';
import './App.css';
import { get as getValue } from 'idb-keyval';
import ConfigureInstallation from './configureInstallation';
export default class App extends Component {
    constructor() {
        super({});
        this.state =
            { phase: undefined
            };
    }
    componentDidMount() {
        isInstallationComplete().then((isComplete) => {
            if (isComplete) {
                this.setState({ phase: 'installationExists' });
            }
            else {
                this.setState({ phase: 'prepareInstallation' });
            }
        });
    }
    render() {
        switch (this.state.phase) {
            case 'installationExists':
                return (_jsx("div", { className: "App", children: _jsx("header", { className: "App-header", children: _jsx("h1", { children: "MyContexts" }) }) }));
            case 'prepareInstallation':
                return _jsx(ConfigureInstallation, {});
            case 'installationError':
                return _jsx("div", { children: "Installation error." });
            case 'installing':
                return _jsx("div", { children: "Installing..." });
            default:
                return _jsx("div", { children: "Work to do." });
        }
    }
}
function isInstallationComplete() {
    return getValue('installationComplete').then((value) => value);
}
