/*
  This component renders a single TableFormDef screen element.
 */

import { Component, ReactNode } from "react";
import { Button, CloseButton, Col, Container, Navbar, Row } from "react-bootstrap";
import "./slidingPanels.css";
import * as React from "react";

type RoleInstance = string;

type RoleInstanceSelectionEvent = Event & { detail: { roleInstance: RoleInstance } };

interface MSComponentState {
  selectedRoleInstance: RoleInstance | undefined;
  isFormVisible: boolean;
}

export interface MainContentProps {
  className?: string;
}

export interface SlidingPanelContentProps {
  className?: string;
  selectedRoleInstance?: RoleInstance;
}

interface MSComponentProps {
  isMobile: boolean;
  children: [React.ReactElement<MainContentProps>, React.ReactElement<SlidingPanelContentProps>];
  className?: string;
}

class MSComponent extends Component<MSComponentProps, MSComponentState> {
  private eventRef: React.RefObject<HTMLDivElement>;

  constructor(props: MSComponentProps) {
    super(props);
    this.state = { selectedRoleInstance: undefined, isFormVisible: false };
    this.setSelectRow = this.setSelectRow.bind(this);
    this.eventRef = React.createRef();
  }

  setSelectRow = (event: RoleInstanceSelectionEvent) => {
    this.setState({ selectedRoleInstance: event.detail.roleInstance, isFormVisible: this.props.isMobile });
  };

  componentDidMount(): void {
    const component = this;
    if (component.eventRef.current) {
      // The event is not handled during the bubbling phase, but during the capturing phase.
      component.eventRef.current.addEventListener('SetSelectRow', this.setSelectRow as EventListener, true);
    }
  }

  componentDidUpdate(prevProps: MSComponentProps): void {
    if (prevProps.isMobile !== this.props.isMobile && this.eventRef.current) {
      // Remove the event listener from the previous element
      this.eventRef.current.removeEventListener('SetSelectRow', this.setSelectRow as EventListener, true);
      // Add the event listener to the new element
      this.eventRef.current.addEventListener('SetSelectRow', this.setSelectRow as EventListener, true);
    }
  }
  componentWillUnmount(): void {
    const component = this;
    if (component.eventRef.current) {
      component.eventRef.current.removeEventListener('SetSelectRow', this.setSelectRow as EventListener, true);
    }
  }

  render() {
    const component = this;
    const { children } = this.props;

    if (!children || children.length !== 2) {
      console.error("MSComponent requires exactly two children: <MainContent /> and <SlidingPanelContent />");
      return null;
    }

    const [mainContent, slidingContent] = children;

    if (component.props.isMobile) {
      return (
        <div className="sliding-panels-container" ref={this.eventRef}>
          {/* Main Panel */}
          <div className="main-panel">
            {React.cloneElement(mainContent as React.ReactElement<any>, { className: this.props.className })}
          </div>

          {/* Cover Panel */}
            <div className={`cover-panel ${this.state.isFormVisible ? "open" : ""} bg-info`}>
            <CloseButton onClick={() => component.setState({ isFormVisible: false })} />
            {React.cloneElement(slidingContent as React.ReactElement<any>, { className: this.props.className, selectedRoleInstance: this.state.selectedRoleInstance })}
            </div>
        </div>
      );
    }
    else {
      return (<Row className="px-1" ref={this.eventRef}>
        <Col>{React.cloneElement(mainContent as React.ReactElement<any>, { className: this.props.className })}</Col>
        <Col>{React.cloneElement(slidingContent as React.ReactElement<any>, { className: this.props.className, selectedRoleInstance: this.state.selectedRoleInstance })}</Col>
        </Row>)
    }
  }
}

export default MSComponent;