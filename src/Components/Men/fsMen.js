import {Card, Button,Badge  }from "react-bootstrap"
import { Loading } from "../Loading"



function RenderItemCards(props){
    
    
    return(
        <div  className="col-12 col-md-5 col-lg-4 mx-auto mt-5">
            <Card style={{ width: '15rem',  }} className='mx-auto border-0'>
                <Card.Img variant="top" src={props.guy.image} alt={props.guy.name}/>
                <Card.ImgOverlay> <Badge className="rounded-pill bg-transparent text-danger  position-absolute top-1 start-0">{props.guy.label}</Badge></Card.ImgOverlay>
                <Card.Body>
                    <Card.Title>{props.guy.name}</Card.Title>
                    <Card.Text>
                    {props.guy.description}
                    <p><strong className="text-danger">{props.guy.price}</strong> <span className="text-decoration-line-through text-muted">{props.guy.oldprice}</span></p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}


export default function FsMen(props){
    const men=props.Men.map(guy => {
        return(
            <RenderItemCards key={guy.id} guy={guy}/>
        )
    })
if(props.isLoading){
    return(<Loading/>)
}
else if (props.errMess){
    return(
        <div>
            <h4>{props.errMess}</h4>
        </div>
    )
}
else

    return(
        <div className="text-center bg-light">
            <Button >SALE</Button>
            <h3>EXTRA 20% off!!!</h3>
            <h4>ALREADY UP TO 80% OFF</h4>
            <h6>With code : <strong className="blink_me text-success">akbarob</strong></h6>
            <div className="row">
              {men}
            </div>

        </div>
    )
}