import React, { Component } from 'react';
import { Accordion, Col, Container, Nav, Navbar, NavDropdown, Offcanvas, Row, Tab, Tabs } from 'react-bootstrap';
import './www.css';
import MSComponent from './mscomponent';
import { MainContentStub, SlidingPanelContentStub } from './contentStubs';
import i18next from 'i18next';
import { ContextInstanceT, RoleInstanceT, SharedWorkerChannelPromise } from 'perspectives-proxy';
import {AppContext, deconstructLocalName, EventDispatcher, externalRole, ModelDependencies, MySystem, PSContext} from 'perspectives-react';
import { constructPouchdbUser, getInstallationData } from './installationData';
import { Me } from './me';
import { Apps } from './apps';

type Section = 'who' | 'what' | 'where';

interface WWWComponentState {
  isSmallScreen: boolean;
  title: string;
  doubleSection: Section;
  showNotifications: boolean;
  leftPanelContent: 'about' | 'me' | 'settings' | 'apps' | false;
  activeSection: Section;
  systemIdentifier: ContextInstanceT;
  systemUser: RoleInstanceT
  openContext?: ContextInstanceT
  // apps: TableFormDef
}

class WWWComponent extends Component<{}, WWWComponentState> {
  eventDispatcherLocation: {eventDispatcher: (event: any) => void};

  constructor(props: {}) {
    super(props);
    this.state = 
      { isSmallScreen: false
      , title: 'MyContexts'
      , doubleSection: 'what'
      , showNotifications: false
      , leftPanelContent: false
      , activeSection: 'what' 
      , systemIdentifier: '' as ContextInstanceT
      , systemUser: '' as RoleInstanceT
    };
    this.checkScreenSize = this.checkScreenSize.bind(this);
    this.eventDispatcherLocation = {eventDispatcher: function(){}};
  }

  componentDidMount() {
    const component = this;
    SharedWorkerChannelPromise.then( pdrHandler => {
      getInstallationData().then( installationData => {
        pdrHandler.runPDR( installationData.perspectivesUserId!, 
          constructPouchdbUser(installationData), 
          { isFirstInstallation: true, 
            useSystemVersion: null,
            myContextsVersion: __MYCONTEXTS_VERSION__
          }).then ( succeeded => {
            const systemIdentifier = "def:#" + installationData.perspectivesUserId! + installationData.deviceName! as ContextInstanceT;
            this.setState(
              { systemIdentifier
              , systemUser: systemIdentifier + "$" + deconstructLocalName( ModelDependencies.sysUser) as RoleInstanceT
              })
          }
          );})});
    window.addEventListener('resize', this.checkScreenSize);
    this.checkScreenSize()
    function listenToOpenContext(event: CustomEvent) {
      component.setState({openContext: event.detail});
    }
    document.body.addEventListener('OpenContext', listenToOpenContext as EventListener, false);
  }

  checkScreenSize(){
    const navbar = document.querySelector('#top-navbar');
    const mobileTabs = document.querySelector('#mobile-tabs');
    // Includes the padding of the navbar.
    const navbarHeight = navbar ? (navbar as HTMLElement).offsetHeight : 40;
    const mobileTabsHeight = mobileTabs ? (mobileTabs as HTMLElement).offsetHeight : 48;
    // Set the CSS variable for the navbar height. This is incorporated in the CSS style full-height.
    document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
    document.documentElement.style.setProperty('--tabs-height', `${mobileTabsHeight}px`); 
    this.setState(
      { isSmallScreen: window.innerWidth < 768 });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
  }

  notificationsAndClipboard() {
    const component = this;
    return (
      <Offcanvas show={this.state.showNotifications} onHide={() => component.setState({showNotifications:false})} placement='bottom' scroll={true} style={{ height: '50vh' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Clipboard & Notifications</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Clipboard</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Notifications</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Notification 1</li>
                <li>Notification 2</li>
                <li>Notification 3</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </Offcanvas.Body>
    </Offcanvas>
    );
  }

  leftPanel() {
    const component = this;
    let content;
    switch (this.state.leftPanelContent) {
      case 'about':
        content = <p>About</p>;
        break;
      case 'me':
        content = <Me systemuser={component.state.systemUser}/>;
        break;
      case 'apps':
        content = <Apps systemuser={component.state.systemUser}/>;
        break;
      case 'settings':
        content = <p>Settings</p>;
        break;
      default:
        return null;
    }
    return (
      <Offcanvas show={this.state.leftPanelContent} onHide={() => component.setState({leftPanelContent:false})} placement='start' scroll={true} style={{ height: '100vh' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{ this.state.leftPanelContent ? i18next.t( 'leftPanel_' + this.state.leftPanelContent, {ns: 'mycontexts'}) : ""}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          { content }
        </Offcanvas.Body>
    </Offcanvas>
    );
  }

  renderMobile ()
  {
    const component = this;
    return (<Container fluid className='px-0'>
      {component.renderTopNavBar()}
      <Tabs
        id="mobile-tabs"
        activeKey={this.state.activeSection}
        onSelect={(k: string | null) => {
          const key = k || 'what';
          component.setState({ 'activeSection': k as Section });
          }}
        fill
        >
        <Tab eventKey="who" title="Wie" className='bg-info full-mobile-height px-2' style={{'--bs-bg-opacity': '.2'} as React.CSSProperties}>
          <p className='bg-light-subtle'>Weergave van de perspectieven op wie.</p>
        </Tab>
        <Tab eventKey="what" title="Wat" className='bg-info full-mobile-height px-2' style={{'--bs-bg-opacity': '.4'} as React.CSSProperties}>
          <MSComponent isMobile={this.state.isSmallScreen}  className='bg-light-subtle'>
            <MainContentStub/>
            <SlidingPanelContentStub/>
          </MSComponent>
        </Tab>
        <Tab eventKey="where" title="Waar" className='bg-info full-mobile-height px-2' style={{'--bs-bg-opacity': '.6'} as React.CSSProperties}>
          <p className='bg-light-subtle'>Weergave van de perspectieven op waar.</p>
        </Tab>
      </Tabs>
      <Navbar fixed="bottom" bg="info" expand="xs" className="justify-content-center py-0">
        <Navbar.Brand onClick={() => component.setState({ showNotifications: true })}>
          <i className="bi bi-arrow-up"></i>
        </Navbar.Brand>
    </Navbar>
    </Container>
    );
  }

  renderTopNavBar() {
    const component = this;
    return (<Navbar bg="info" expand="xs" className="py-0" id="top-navbar">
      <NavDropdown title={<i className="bi bi-list"></i>} className="me-auto">
        <NavDropdown.Item onClick={() => component.setState({leftPanelContent: 'about'})}>About...</NavDropdown.Item>
        <NavDropdown.Item onClick={() => component.setState({leftPanelContent: 'me'})}>Me</NavDropdown.Item>
        <NavDropdown.Item onClick={() => component.setState({leftPanelContent: 'apps'})}>Apps</NavDropdown.Item>
        <NavDropdown.Item onClick={() => component.setState({leftPanelContent: 'settings'})}>Settings</NavDropdown.Item>
      </NavDropdown>
      <Navbar.Brand href="#home" className='text-light flex-grow-1 d-flex justify-content-center align-items-center'>{this.state.title}</Navbar.Brand>
    </Navbar>);
  }

  renderDesktop() {
    const component = this;
    return (<Container fluid className='px-0'>
      {component.renderTopNavBar()}
      <Row className='mx-0'>
        <Col 
          className='bg-info full-height' 
          xs={ this.state.doubleSection === "who" ? 6 : 3} 
          style={{'--bs-bg-opacity': '.2'} as React.CSSProperties}>
            <Row onClick={() => component.setState( {'doubleSection': "who"} )}><h4 className='text-center'>Wie</h4></Row>
            <Row className='px-1'>
                <p className='bg-light-subtle'>Here we render all TableFormDef elements that make up the Who part of the screen (the user roles), as Master-Slave components. </p>
                <p className='bg-light-subtle'>Rendering of the chats in this context</p>
            </Row>
        </Col>
        <Col 
          className='bg-info' 
          xs={ this.state.doubleSection === "what" ? 6 : 3} 
          style={{'--bs-bg-opacity': '.4'} as React.CSSProperties}>
          <Row onClick={() => component.setState( {'doubleSection': "what"} )}  ><h4 className='text-center'>Wat</h4></Row>
          {/* In the desktop, MSComponent will render a row with px-1 */}
          {/* Here we render either an arbitrary screen: {tag: "FreeFormScreen", elements: MainScreenElements}, or all TableFormDef elements in the {tag: "TableForms", elements: TableFormDef[]} variant of What. */}
          <MSComponent isMobile={this.state.isSmallScreen || this.state.doubleSection !== "what"} className='bg-light-subtle'>
            <MainContentStub/>
            <SlidingPanelContentStub/>
          </MSComponent>
        </Col>
        <Col 
          className='bg-info' 
          xs={ this.state.doubleSection === "where" ? 6 : 3} 
          style={{'--bs-bg-opacity': '.6'} as React.CSSProperties}>
          <Row onClick={() => component.setState( {'doubleSection': "where"} )}  ><h4 className='text-center'>Waar</h4></Row>  
          <Row className='px-1'>
            <p className='bg-light-subtle'>Here we render all TableFormDef elements that make up the Whereto part of the screen (representing the context roles), as Master-Slave components. </p>
            <p className='bg-light-subtle'>Rendering of the recent contexts.</p>
            <p className='bg-light-subtle'>Rendering of the pinned contexts.</p>
          </Row>
        </Col>
      </Row>
      <Navbar fixed="bottom" bg="info" expand="xs" className="justify-content-center py-0">
        <Navbar.Brand onClick={() => component.setState({ showNotifications: true })}>
          <i className="bi bi-arrow-up"></i>
        </Navbar.Brand>
      </Navbar>
    </Container>);
  }
  render() {
    const component = this;
    return ( 
          <AppContext.Provider value={
              { systemExternalRole: externalRole(component.state.systemIdentifier)
              , systemIdentifier: component.state.systemIdentifier
              , systemUser: component.state.systemUser
              , setEventDispatcher: function(dispatcher : EventDispatcher)
                  {
                    component.eventDispatcherLocation.eventDispatcher = dispatcher;
                  }
                }}
              >
            {this.state.isSmallScreen ? this.renderMobile() : this.renderDesktop()}
            {this.notificationsAndClipboard()}
            {this.leftPanel()}
          </AppContext.Provider>);
    }
}

export default WWWComponent;
