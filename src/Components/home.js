import {Card, Button,Badge  }from "react-bootstrap"
import { Link } from "react-router-dom"
import { baseUrl } from "../shared/baseUrl"

function HomeMenCards(props){
    
    return(
        <div  className="col-12 col-md-5 col-lg-3 mx-auto mt-5">
            <Card style={{ width: '10rem',  }} className='mx-auto border-0'>
                <Link to={`/men/${props.guy.id}`} className="text-decoration-none text-dark">
                <Card.Img variant="top" src={baseUrl + props.guy.image} alt={props.guy.name}/>
                <Card.ImgOverlay> <Badge className="rounded-pill bg-transparent text-danger  position-absolute top-1 start-0">{props.guy.discount}</Badge></Card.ImgOverlay>
                <Card.Body>
                    <Card.Title>{props.guy.name}</Card.Title>
                    <Card.Text>
                    {props.guy.description}
                    <strong className="text-danger">{props.guy.price}</strong> <span className="text-decoration-line-through text-muted">{props.guy.oldprice}</span>
                    </Card.Text>
                </Card.Body>
                </Link>
            </Card>
        </div>
    )
}
function HomeWomenCards(props){
    
    
    return(
        <div  className="col-12 col-md-5 col-lg-3 mx-auto mt-5">
            <Card style={{ width: '10rem',  }} className='mx-auto border-0'>
                <Link to={`/women/${props.girl.id}`} className="text-decoration-none text-dark">

                <Card.Img variant="top" src={baseUrl + props.girl.image} alt={props.girl.name}/>
                <Card.ImgOverlay> <Badge className="rounded-pill bg-transparent text-danger  position-absolute top-1 start-0">{props.girl.label}</Badge></Card.ImgOverlay>
                <Card.Body>
                    <Card.Title>{props.girl.name}</Card.Title>
                    <Card.Text>
                    <strong className="text-danger">{props.girl.price}</strong> <span className="text-decoration-line-through text-muted">{props.girl.oldprice}</span>  
                    </Card.Text>
                </Card.Body>
                </Link>
            </Card>
        </div>
    )
}
export default function Home(props){
    const ran= props.Men.slice(1,3)
     console.log(ran)
     const jog = props.Men[Math.floor(Math.random() * props.Men.length)]
     console.log(jog)
    const home=ran.map(guy => {
        return(
            <HomeMenCards key={guy.id} guy={guy}/>
        )
    })

    const rann= props.Women.slice(2,4)
    const women=rann.map(girl => {
        return(
            <HomeWomenCards key={girl.id} girl={girl}/>
        )
    })
    return(
        <>
            <div className="homebg d-flex header brand">
                <div className="align-self-center mx-auto mt-5">
                    <Link to='/men'>
                        <Button variant="outline-dark" size="lg" className="shadow-none brand">SHOP WEARS DESIGN</Button>
                    </Link>
                </div>
            </div>
            <div className="container">
                <div className="  row pb-5">
                    {home}{women}
                </div>
            </div>
        </>
    )
}