import { useState } from "react";
import { Image, ListGroup,Navbar,NavbarBrand, Nav, NavItem, NavDropdown,Container,InputGroup ,FormControl, Offcanvas, OffcanvasHeader, OffcanvasBody,OffcanvasTitle,Button, Accordion, Row, Col, Modal} from "react-bootstrap";
import { Search,Person,Heart,Handbag,List, Messenger, Box2, QuestionCircle, Vr} from "react-bootstrap-icons";
import {NavLink, Link} from "react-router-dom";
import Offnavi from "./offnavi";

export default function Header(){


    const [showOff, setShowOff] = useState(false)
    function handleOffcanvasNav(){
        setShowOff(prevState => !prevState)
    }


    const [showModal, setShowModal] = useState(false)
    function toggleModal(){
        setShowModal(prevState => !prevState)
    }
    return(
        <div>
            <Navbar bg='bar-color' fixed="top" className="bar-color">
                
                    <Button variant="dark" onClick={handleOffcanvasNav} className='d-lg-none'>
                        <List size={30}/>
                    </Button>
                    <NavbarBrand href='/' className="ms-5 my-1">
                        <Image src="images/wears-Logo4.png" style={{width:"2rem"}} className="pb-2" />
                    </NavbarBrand>
                    <div className="d-none d-lg-block ">
                    <Nav className="me-auto" >
                        
                        <div className="vr  text-light"></div>
                        <NavItem>
                        <NavLink to='/women' className='nav-link text-light  px-3 py-3 m-w'> WOMEN</NavLink>
                        </NavItem>
                        <div className="vr mx-3"></div>                        
                        
                        <NavItem>
                            <NavLink to='/men' className='nav-link text-light  px-3 py-3 m-w'> MEN</NavLink>
                        </NavItem>
                        <div className="vr text-light" ></div>

                        <div className="p-2 mx-5 rounded-pill border bg-light border-0  col-10 d-block">
                                <InputGroup>
                                    <FormControl
                                    size="sm"
                                    placeholder="search for items and brands"
                                    aria-label="search for items and brands"
                                    className="bg-light border-0 shadow-none col-12 rounded-pill"/>
                                     <InputGroup.Text className="bg-light border-0">
                                        <Search size={25}/>
                                    </InputGroup.Text>
                                </InputGroup>
                        </div>
                    </Nav>

                    </div>

                    
                    <Nav className="ms-auto me-4">
                        <NavItem className="d-lg-none">
                         <Search size={40} onClick={toggleModal} className='nav-link text-light my-2 px-2 '/>
                        </NavItem>
                        <NavDropdown
                        color="light"
                        id='profile-dropdown'
                        menuVariant="light"
                        title={<Person size={27} className='text-light '/>}
                        className='nav-link px-2 d-none d-lg-block'
                        >
                            <NavDropdown.Item href="#action/3.1"> <Person className="mx-2"/>My account</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                            <Box2 className="mx-2"/>  My orders
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3"> <QuestionCircle className="mx-2"/>Return Information</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                            <Messenger className="mx-2"/>Contact Prefrence
                            </NavDropdown.Item>
                            
                        </NavDropdown>
                        <NavItem>
                            <NavLink to='#' className='nav-link text-light my-2 px-2 d-lg-none' > <Person size={25}/></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='#' className='nav-link text-light my-2 px-2'> <Heart size={25}/></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='#' className='nav-link text-light my-2 px-3'> <Handbag size={25}/></NavLink>
                        </NavItem>
                    </Nav> 
                        

                
            </Navbar>

            <Offnavi show={showOff} onHide={handleOffcanvasNav} />

            <Modal show={showModal} onHide={toggleModal}>
                <Modal.Body>
                    <InputGroup>
                        <FormControl
                        autoFocus
                            size="sm"
                            placeholder="search for items and brands"
                            aria-label="search for items and brands"
                            className="bg-light border-0 shadow-none col-12"/>
                            <InputGroup.Text className="bg-light border-0">
                            <Search size={25}/>
                            </InputGroup.Text>
                    </InputGroup>
                </Modal.Body>
                <Row className="pb-2">
                    <Col className="offset-6">
                        <Button size="sm" variant="outline-primary" onClick={toggleModal}>
                        Search
                        </Button>
                    </Col>
                
                <Col>
                    <Button size="sm" variant="outline-danger" onClick={toggleModal}>
                        Cancel
                    </Button>
                </Col>
                </Row>
            </Modal>
        </div>
    )
}