import React from 'react';
import 'materialize-css';
import {
    BrowserRouter,
    Link,
    Route,
    Switch,
    NavLink
} from 'react-router-dom';
import {
    Col,
    Icon,
    Navbar,
    NavItem,
    Row,
    Dropdown
} from 'react-materialize';
import Home from './home/Home';
import ProjectList from './project/ProjectList';
import ConsultantList from './consultant/ConsultantList';
import ConsultantDetail from './consultant/ConsultantDetail';
import ProjectDetail from './project/ProjectDetail';
import About from './about/About';
import TechnologyList from './technology/TechnologyList';
import TechnologyDetail from './technology/TechnologyDetail';
import './App.css';
import ServiceList from './service/ServiceList';
import ServiceDetail from './service/ServiceDetail';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <Navbar
                        fixed={true}
                        alignLinks="right"
                        centerChildren={true}
                        brand={<NavLink to="/">ALTEN Denmark</NavLink>}
                        id="mobile-nav"
                        menuIcon={<Icon>menu</Icon>}
                        options={{
                            draggable: true,
                            edge: 'left',
                            inDuration: 250,
                            outDuration: 200,
                            preventScrolling: true
                        }}
                    >   
                        <NavLink to="/consultants">CONSULTANTS</NavLink>
                        <NavLink to="/services">SERVICES</NavLink>
                        <NavLink to="/about">ABOUT</NavLink>
                        <Dropdown
                            id="Dropdown_6"
                            options={{
                            constrainWidth: false,
                            coverTrigger: false,
                            hover: true,
                            inDuration: 150,
                            outDuration: 250
                            }}
                            trigger={<a href="#!"><Icon>phone</Icon></a>}
                        >
                            <a href="tel:004541423030">+45 4142 3030</a>
                            <a href="tel:004541423030">Click to call!</a>
                        </Dropdown>
                        <NavItem href="mailto:tech@alten.dk">
                            <Icon>email</Icon>
                        </NavItem>
                    </Navbar>
                </header>
                <main>
                    <Switch>
                        <Route exact={true} path="/">
                            <Home />
                        </Route>
                        <Route exact={true} path="/consultants">
                            <ConsultantList />
                        </Route>
                        <Route path="/consultants/tags/:tagSlug">
                            <ConsultantList />
                        </Route>
                        <Route path="/consultants/:consultantSlug">
                            <ConsultantDetail />
                        </Route>
                        <Route exact={true} path="/projects">
                            <ProjectList />
                        </Route>
                        <Route path="/projects/:projectSlug">
                            <ProjectDetail />
                        </Route>
                        <Route exact={true} path="/technologies">
                            <TechnologyList />
                        </Route>
                        <Route path="/technologies/:technologySlug">
                            <TechnologyDetail />
                        </Route>
                        <Route exact={true} path="/services">
                            <ServiceList />
                        </Route>
                        <Route path="/services/:serviceSlug">
                            <ServiceDetail />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="*">
                            <div>Whoops. Something went wrong! :(</div>
                        </Route>
                    </Switch>
                </main>
                <footer className="page-footer black">
                    <div className="container">
                        <Row>
                            <Col s={12} l={5}>
                                <h5>ALTEN Denmark ApS</h5>
                                <address>
                                    C/o Work Share Grow<br />
                                    Christians Brygge 28, 1.<br />
                                    1559 København V
                                </address>
                                <a href="tel:004541423030">+45 41 42 30 30</a><br />
                                <a href="mailto:tech@alten.dk">tech@alten.dk</a>
                            </Col>
                            <Col s={12} l={4}>
                                <h5>Links</h5>
                                <a target="_blank" rel="noopener noreferrer" href="https://alten.com">Web</a><br />
                                <a target="_blank" rel="noopener noreferrer" href="https://dk.linkedin.com/company/alten-danmark">LinkedIn</a>
                            </Col>
                            <Col s={12} l={3}>
                                <h5>Pages</h5>
                                <Link to="/consultants">CONSULTANTS</Link><br />
                                <Link to="/services">SERVICES</Link><br />
                                <Link to="/about">ABOUT</Link>
                            </Col>
                        </Row>
                    </div>
                    <div className="center-align">
                        <a target="_blank" rel="noopener noreferrer" href="https://alten.com">
                            <img className="responsive-img" alt="ALTEN Logo" src="https://api.altentechnology.dk/static/base/logo/alten.png" />
                        </a>
                    </div>
                    <div className="footer-copyright">
                        <div className="container center-align">&copy; 2020 ALTEN Denmark</div>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
