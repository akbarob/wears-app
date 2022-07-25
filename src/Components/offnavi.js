import { ListGroup,Navbar,NavbarBrand, Nav, NavItem, NavDropdown,Container,InputGroup ,FormControl, Offcanvas, OffcanvasHeader, OffcanvasBody,OffcanvasTitle,Button, Accordion, Row, Col, Modal} from "react-bootstrap";
import { Search,Person,Heart,Handbag,List, Messenger, Box2, QuestionCircle, Vr} from "react-bootstrap-icons";
import {NavLink, Link} from "react-router-dom";

export default function Offnavi(props){
    return(
        <Offcanvas show={props.show} onHide={props.onHide} className="bg-grey">
                <OffcanvasHeader closeButton>
                <OffcanvasTitle>
                <Nav justify variant="tabs" defaultActiveKey="/women">
                    <NavItem>
                        <NavLink to='/women' className='nav-link  mx-3' eventKey="link-1"> WOMEN</NavLink>
                    </NavItem>
                    <div class="vr  text-light"></div>
                    <NavItem>
                        <NavLink to='/men' className='nav-link   mx-3' eventKey="link-2"> MEN</NavLink>
                    </NavItem>
                    
                </Nav>
                    
                </OffcanvasTitle>
                </OffcanvasHeader>
                <OffcanvasBody>
                    <div className="text-center justify mb-2">
                        <Row>
                            <Col xs={3}>Sign in</Col>
                            <div className="vr"></div>
                            <Col xs={3}>Join</Col>
                        </Row>
                    </div>
                <Nav defaultActiveKey="/home" className="flex-column peen">
                    <Nav.Link href="/home" className=' nav-link text-secondary' ><Person/> My Account</Nav.Link>
                    <Nav.Link eventKey="link-1" className=' nav-link text-secondary'><Box2/> My Orders</Nav.Link>
                    <Nav.Link eventKey="link-2" className=' nav-link text-secondary'><QuestionCircle/> Return Information</Nav.Link>
                    <Nav.Link eventKey="link-3" className=' nav-link text-secondary'> <Messenger/> Contact Prefrence</Nav.Link>
                </Nav>
                <Accordion  className="my-3" flush>
                    <Accordion.Item eventKey="0" className="shadown-none">
                        <Accordion.Header>Help & Information</Accordion.Header>
                        <Accordion.Body className='p-0'>
                            <Nav defaultActiveKey="/home" className="flex-column peen">
                                <Nav.Link href="/home" className=' nav-link text-secondary' >Help</Nav.Link>
                                <Nav.Link eventKey="link-1" className=' nav-link text-secondary'>Track order</Nav.Link>
                                <Nav.Link eventKey="link-2" className=' nav-link text-secondary'>Delivery and Returns</Nav.Link>
                            </Nav>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>About WEARS</Accordion.Header>
                        <Accordion.Body className='p-0'>
                            <Nav defaultActiveKey="/home" className="flex-column peen">
                                <Nav.Link href="/home" className=' nav-link text-secondary' >About us</Nav.Link>
                                <Nav.Link eventKey="link-1" className=' nav-link text-secondary'>Careers at WEARS</Nav.Link>
                                <Nav.Link eventKey="link-2" className=' nav-link text-secondary'>Coporate Responsibility</Nav.Link>
                                <Nav.Link eventKey="link-2" className=' nav-link text-secondary'>Investors' site</Nav.Link>
                            </Nav>
                        
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>More From WEARS</Accordion.Header>
                        <Accordion.Body className='p-0'>
                            <Nav defaultActiveKey="/home" className="flex-column peen">
                                <Nav.Link href="/home" className=' nav-link text-secondary' >Mobile and WEARS appss</Nav.Link>
                                <Nav.Link eventKey="link-1" className=' nav-link text-secondary'>WEARS Marketplace</Nav.Link>
                                <Nav.Link eventKey="link-2" className=' nav-link text-secondary'>Gift Vouchers</Nav.Link>
                                <Nav.Link eventKey="link-2" className=' nav-link text-secondary'>Black Friday</Nav.Link>
                                <Nav.Link eventKey="link-2" className=' nav-link text-secondary'>WEARS x Thrift+</Nav.Link>
                            </Nav>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </OffcanvasBody>
                    <div className="footer py-3 text-center brand text-dark"> ©️ wears 2022 ™</div>
            </Offcanvas>
    )
}