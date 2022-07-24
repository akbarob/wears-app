import {Card, Button,  }from "react-bootstrap"
import { baseUrl } from "../shared/baseUrl"



function RenderItemCards(props){

    const women=props.women.map(girl=> {
    return(
        <div key={girl.id} girl={girl.id}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={girl.image} alt={girl.name}/>
                <Card.Body>
                    <Card.Title>{girl.name}</Card.Title>
                    <Card.Text>
                    {girl.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
})
return(
    <div>{women}</div>
)
}
export default function FirstS(props){


    return(
        <div className="text-center">
            <Button >SALE</Button>
            <h3>EXTRA 20% off!!!</h3>
            <h4>ALREADY UP TO 80% OFF</h4>
            <h6>With code : akbarob</h6>
            <RenderItemCards
            women={props.Women}/>

        </div>
    )
}