import React from 'react'
import Navbars from '../constants/Navbar'
import { useLocation} from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Facilitator from './Facilitator';
import Club from './Club';
import Players from './Players';
import Tournaments from './Tournaments';
import League from './League';
import FixturesResults from './FixturesResults';
import Scheduling from './Scheduling';
import Payroll from './Payroll';


const AdminHome = () => {
  
  const { state } = useLocation();
  return (
    <>
    <Navbars state={state} />
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">
                Facilitator
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" >
                Club
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third" >
                Players
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">
                Tournaments
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth">
                Leagues
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sixth">
                Fixtures and Results
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="seventh">
                Scheduling
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="eighth">
                Payroll
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
             <Facilitator/>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
             <Club/>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
             <Players/>
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
             <Tournaments/>
            </Tab.Pane>
            <Tab.Pane eventKey="fifth">
             <League/>
            </Tab.Pane>
            <Tab.Pane eventKey="sixth">
             <FixturesResults/>
            </Tab.Pane>
            <Tab.Pane eventKey="seventh">
             <Scheduling/>
            </Tab.Pane>
            <Tab.Pane eventKey="eighth">
             <Payroll/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>

    </>
  )
}

export default AdminHome