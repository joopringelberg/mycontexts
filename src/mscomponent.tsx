import { Component, createRef } from "react";
import { Col, Row } from "react-bootstrap";

/*
  * The Master-Slave component is always embeded in a Container element.
*/

type RoleInstance = string;

type RoleInstanceSelectionEvent = Event & { detail: { roleInstance: RoleInstance } };

interface MSComponentState {
  selectedRoleInstance : RoleInstance | undefined;
  isFormVisible: boolean;
}

interface MSComponentProps {
  isMobile: boolean;
}

class MSComponent extends Component<MSComponentProps, MSComponentState> {
  private eventDiv: React.RefObject<HTMLDivElement>;

  constructor(props: MSComponentProps) {
    super(props);
    this.state = { selectedRoleInstance: undefined, isFormVisible: false };
    this.eventDiv = createRef();
  }

  componentDidMount(): void {
    const component = this;
    if (component.eventDiv.current) {
      component.eventDiv.current.addEventListener('SetSelectRow',
        function (e)
        {
          const customEvent = e as RoleInstanceSelectionEvent;
          component.setState({ selectedRoleInstance: customEvent.detail.roleInstance });
          e.stopPropagation();
        },
        false);
    }
  }
  render() {
    const component = this;
    // Note: there is no need to throw the event from eventDiv. Any element can throw the event.
    function setSelectRow(roleInstance: RoleInstance) {
      const event = new CustomEvent('SetSelectRow', { detail: { roleInstance: roleInstance } });
      if (component.eventDiv.current) {
        component.eventDiv.current.dispatchEvent(event);
      }
    }
    function deselectRow() {
      component.setState({ selectedRoleInstance: undefined });
    }
    return (<Row className='bg-light-subtle' ref={this.eventDiv}>
        <Col className={`transition ${this.props.isMobile && this.state.selectedRoleInstance ? 'slide-out-to-right' : 'slide-in-from-right'}`}>
          <ul>
            <li onClick={setSelectRow.bind(this, 'Melk')}>Melk</li>
            <li onClick={setSelectRow.bind(this, 'Kaas')}>Kaas</li>
          </ul>
          </Col>
          <Col 
            className={`transition ${this.props.isMobile && !this.state.selectedRoleInstance ? 'slide-out-to-right' : 'slide-in-from-right'} bg-info`}
            onClick={deselectRow}
            >Form with details of {this.state.selectedRoleInstance}</Col>
      </Row>);
  }
}

export default MSComponent;