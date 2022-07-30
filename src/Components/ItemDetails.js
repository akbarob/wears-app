import {Breadcrumb, Card, Image }from 'react-bootstrap'
import { baseUrl } from '../shared/baseUrl'
function RenderItem(props){

    return(
        <div className="container">
            <Image src={baseUrl + props.omo.image} alt={props.omo.name}  style={{ width: '15rem'}}/>    


        </div>

    )
}
function RenderInfo(){

    return(
        <div className="container">
            

        </div>

    )
}


export default function ItemDetails(props){
    console.log(props.omo.image)
    return(
        <div className="container">
            <div className="row">
            <Breadcrumb className='py-2'>
                <Breadcrumb.Item href="/men">Men </Breadcrumb.Item>
                <Breadcrumb.Item active> {props.omo.name}</Breadcrumb.Item>
            </Breadcrumb>
            </div>
            <div className="col-12"> </div>
            <hr/>

            <div>
                <RenderItem 
                omo={props.omo}/>
                <RenderInfo/>
            </div>

        </div>
    )
}