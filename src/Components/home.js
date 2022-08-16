import {Card, Button,Badge,Row,Col, Image  }from "react-bootstrap"
import { Link } from "react-router-dom"
import { baseUrl } from "../shared/baseUrl"
import { Loading } from "./Loading"
import { motion } from "framer-motion"

function HomeMenCards(props){
        
        return(
                <div  className=" col-12 col-md-5 col-lg-2  mx-auto mt-5" >
                    
                    <Card style={{ width: '15rem',  }} className='mx-auto border-0'>
                    <Link to={`/men/${props.guy.id}`} className="text-decoration-none text-dark">
                    <Card.Img variant="top" src={baseUrl + props.guy.image} alt={props.guy.name}  />
                    <Card.ImgOverlay> <Badge className="rounded-pill bg-transparent text-danger  position-absolute top-1 start-0">{props.guy.discount}</Badge></Card.ImgOverlay>
                    <Card.Body>
                        <Card.Title><strong>{props.guy.name}</strong></Card.Title>
                        {/* 
                        <Card.Text>
                        {props.guy.description}
                        <strong className="text-danger">{props.guy.price}</strong> <span className="text-decoration-line-through text-muted">{props.guy.oldprice}</span>
                        </Card.Text> */}
                    </Card.Body>
                    </Link>
                </Card>
                
        </div>

        )
    }
    
function HomeWomenCards(props){
    
        
        return(
             <div  className="col-12 col-md-5 col-lg-2  mx-auto mt-5" >
            <Card style={{ width: '15rem',  }} className='mx-auto border-0'>
                <Link to={`/women/${props.girl.id}`} className="text-decoration-none text-dark">

                <Card.Img variant="top" src={baseUrl + props.girl.image} alt={props.girl.name}/>
                <Card.ImgOverlay> <Badge className="rounded-pill bg-transparent text-danger  position-absolute top-1 start-0">{props.girl.label}</Badge></Card.ImgOverlay>
                <Card.Body>
                    <Card.Title><strong>{props.girl.name}</strong></Card.Title>
                    {/*<Card.Text>
                    <strong className="text-danger">{props.girl.price}</strong> <span className="text-decoration-line-through text-muted">{props.girl.oldprice}</span>  
                    </Card.Text> */}
                </Card.Body>
                </Link>
            </Card>
        </div>
            
        )
    }

function Brandslogos(){
    return(
        <div className="container text-center">
            <Row>
                
               
                <Col md={2}  xs={4}>
                    <Image src="images/Tommy_Hilfiger-Logo-PNG1.png"  style={{width:"5rem"}} className='brand-logo-effect' />
                </Col>
                <Col md={2} xs={4}>
                    <Image src="images/Ralph_Lauren-Logo-PNG7.png"  style={{width:"5rem"}} className='brand-logo-effect'/>
                </Col >
                <Col md={2}  xs={4}>
                    <Image src="images/Supreme-Logo-PNG5.png"  style={{width:"5rem"}} className='brand-logo-effect'/>
                </Col>
                <Col md={2} xs={4}>
                    <Image src="images/H_M-Logo-PNG2.png"  style={{width:"5rem"}} className='brand-logo-effect'/>
                </Col>
                <Col md={2} xs={4}>
                    <Image src="images/Louis_Vuitton-Logo-PNG13.png"  style={{width:"5rem"}} className='brand-logo-effect'/>
                </Col>
                <Col md={2} xs={4}>
                    <Image src="images/Adidas-Logo-PNG13.png"  style={{width:"5rem"}}  className='brand-logo-effect'/>
                </Col>
                
            
            </Row>
            

        </div>
    )
}
export default function Home(props){
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.5
          }
        }
      }
      
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }
      
    
    
      function getMultipleRandom(use , num) {
        const shuffled = [...use].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }
    
    let use= props.Men;
    const get = getMultipleRandom(use, 2) 
    const man = get.map(guy=>{
        return(
            <HomeMenCards key={guy.id} guy={guy}
            Men={props.Men}
            errMess={props.errMessMen}
            isLoadingMen={props.isLoadingMen}
        /> 
        )
    })
    function getMultipleRandom(use , num) {
        const shuffled = [...use].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }
   
    
    use =props.Women
    const babe = getMultipleRandom(use, 2) 
    const woman = babe.map(girl=>{
        return(
        <HomeWomenCards key={girl.id} girl={girl}
            Women={props.Women}
            errMess={props.errMessWomen}
            isLoadingWomen={props.isLoadingWomen}
        /> )
    })
    return(
        <>
            <div className="homebg d-flex header brand">
                <div className="align-self-center mx-auto mt-5">
                    <Link to='/men'>
                        <Button variant="outline-dark" size="lg" className="shadow-none brand home-button">SHOP WEARS DESIGN</Button>
                    </Link>
                </div>
            </div>
            <motion.div className="container"
            variant={container}
            initial="hidden"
            animate="show">
                <motion.div className="row my-5 text-center"
                variant={item}>
                       {man} {woman}
                    
                
                </motion.div>
            </motion.div>
            <Brandslogos/>
        </>
    )
}