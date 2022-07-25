import {Card, Button,Badge  }from "react-bootstrap"
import { baseUrl } from "../shared/baseUrl"
import { Loading } from "./Loading"



function RenderItemCards(props){
    
    
    return(
        <div  className="col-12 col-md-5 col-lg-4 mx-auto mt-5">
            <Card style={{ width: '15rem',  }} className='mx-auto border-0'>
                <Card.Img variant="top" src={props.girl.image} alt={props.girl.name}/>
                <Card.ImgOverlay> <Badge className="rounded-pill bg-transparent text-danger ">{props.girl.label}</Badge></Card.ImgOverlay>
                <Card.Body>
                    <Card.Title>{props.girl.name}</Card.Title>
                    <Card.Text>
                    {props.girl.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}


export default function FirstS(props){
    const women=props.Women.map(girl => {
        return(
            <RenderItemCards key={girl.id} girl={girl}/>
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
            <h6>With code : akbarob</h6>
            <div className="row">
              {women}
            </div>

        </div>
    )
}