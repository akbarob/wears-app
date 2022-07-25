import {Image, Breadcrumb }from 'react-bootstrap'
function RenderItem(props){

    return(
        <div className="container">
            <Image src={props.omo.image}/>

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
    console.log(props.omo)
    return(
        <div className="container">
            <div className="row">
            <Breadcrumb>
                <Breadcrumb.Item href="/men">Men</Breadcrumb.Item>
                <Breadcrumb.Item active>{props.omo.name}dfghj</Breadcrumb.Item>
            </Breadcrumb>
            </div>
            <div className="col-12"> {props.omo.name}</div>
            <hr/>

            <div>
                <RenderItem 
                omo={props.omo}/>
                <RenderInfo/>
            </div>

        </div>
    )
}