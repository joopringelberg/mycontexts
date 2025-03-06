import React from "react";
import { PDRproxy } from "perspectives-proxy";
import { externalRole, MySystem, PerspectivesComponent, PSContext } from "perspectives-react";

export class Me extends PerspectivesComponent<> {
  constructor(props: {}) {
    super(props);
  }

  componentDidMount() {
    PDRproxy.then((PDRproxy) => {
      PDRproxy.getPerspective();
    }
  }

  render() {
    return (
      <MySystem>
      <PSContext.Consumer>{ mysystem :  =>
          { 
            systemExternalRole: externalRole(mysystem.contextinstance)
          }
      }</PSContext.Consumer>
      </MySystem>      
    );
  }
}