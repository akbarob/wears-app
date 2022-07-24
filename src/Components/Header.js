import { useState } from "react";
import { ListGroup,Navbar,NavbarBrand, Nav, NavItem,Container,InputGroup ,FormControl, Offcanvas, OffcanvasHeader, OffcanvasBody,OffcanvasTitle,Button, Accordion} from "react-bootstrap";
import { Search,Person,Heart,Handbag,List, Messenger, Box2, QuestionCircle} from "react-bootstrap-icons";
import {NavLink, Link} from "react-router-dom";

export default function Header(){
    const [showOff, setShowOff] = useState(false)
    function handleOffcanvasNav(){
        setShowOff(prevState => !prevState)
    }
    return(
        <div>
            <Navbar bg='dark' >
                
                    <Button variant="dark" onClick={handleOffcanvasNav} className='d-lg-none'>
                        <List size={30}/>
                    </Button>
                    <NavbarBrand href='/' >
                        <h3 className="brand  px-3">wears</h3>
                    </NavbarBrand>
                    <div className="d-none d-lg-block">
                    <Nav className="me-auto" >
                        
                        <div class="vr  text-light"></div>
                        <NavItem>
                        <NavLink to='women' className='nav-link text-light  px-3 '> WOMEN</NavLink>
                        </NavItem>
                        <div class="vr  text-light"></div>
                        <NavItem>
                            <NavLink to='men' className='nav-link text-light  px-3'> MEN</NavLink>
                        </NavItem>
                        <div class="vr text-light" ></div>

                        <div className="p-2 mx-5 rounded-pill border bg-light border-0 search col-10 d--block">
                                <InputGroup>
                                    <FormControl
                                    size="sm"
                                    placeholder="search for items and brands"
                                    aria-label="search for items and brands"
                                    className="bg-light border-0 shadow-none col-12"/>
                                     <InputGroup.Text className="bg-light border-0">
                                        <Search size={25}/>
                                    </InputGroup.Text>
                                </InputGroup>
                        </div>
                    </Nav>

                    </div>

                    
                    <Nav className="ms-auto px-3">
                        <NavItem className="d-lg-none">
                            <NavLink to='women' className='nav-link text-light my-2 px-3 '> <Search size={25}/></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='women' className='nav-link text-light my-2 px-3 '> <Person size={25}/></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='men' className='nav-link text-light my-2 px-3'> <Heart size={25}/></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='men' className='nav-link text-light my-2 px-3'> <Handbag size={25}/></NavLink>
                        </NavItem>
                    </Nav> 
                        

                
            </Navbar>

            <Offcanvas show={showOff} onHide={handleOffcanvasNav} className="bg-grey">
                <OffcanvasHeader closeButton>
                <OffcanvasTitle>
                <Nav justify variant="tabs" defaultActiveKey="/women">
                    <NavItem>
                        <NavLink to='/women' className='nav-link text-dark mx-3' eventKey="link-1"> WOMEN</NavLink>
                    </NavItem>
                    <div class="vr  text-light"></div>
                    <NavItem>
                        <NavLink to='/men' className='nav-link text-dark  mx-3' eventKey="link-2"> MEN</NavLink>
                    </NavItem>
                    
                </Nav>
                    
                </OffcanvasTitle>
                </OffcanvasHeader>
                <OffcanvasBody>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
                <Nav defaultActiveKey="/home" className="flex-column peen">
                    <Nav.Link href="/home" className=' nav-link text-secondary' ><Person/> My Account</Nav.Link>
                    <Nav.Link eventKey="link-1" className=' nav-link text-secondary'><Box2/> My Orders</Nav.Link>
                    <Nav.Link eventKey="link-2" className=' nav-link text-secondary'><QuestionCircle/> Return Information</Nav.Link>
                    <Nav.Link eventKey="link-3" className=' nav-link text-secondary'> <Messenger/> Contact Prefrence</Nav.Link>
                </Nav>
                <Accordion  className="my-3" flush>
                    <Accordion.Item eventKey="0" className="shadown-none">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </OffcanvasBody>

            </Offcanvas>
        </div>
    )
}