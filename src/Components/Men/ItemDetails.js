import {Breadcrumb, Button, Image, Form }from 'react-bootstrap'
import { HandbagFill } from 'react-bootstrap-icons'
import { baseUrl } from '../../shared/baseUrl'
function RenderItem(props){

    return(
        <div className="container">
            <Image src={baseUrl + props.omo.image} alt={props.omo.name}  style={{ width: '20rem'}} className='mx-auto d-block'/>    


        </div>

    )
}
function RenderInfo(props){

    return(
        <div className="container">
            <h4>{props.omo.description}</h4>
            <div className='row  mt-5'> 
                <h6 className='col-auto text-decoration-line-through text-muted'>{props.omo.oldprice}</h6> <h6  className='col-auto text-danger'>{props.omo.price}</h6>
            </div>
            <div className='row'>
                <Form.Select aria-label="Default select example" className='shadow-none mt-5 col-5'>
                <option>Select size</option>
                <option value="1">Small (s)</option>
                <option value="2">Medium (M)</option>
                <option value="3">Large (L)</option>
                <option value="3">Extra-Large (XL)</option>
                <option value="3">Extra-Extra-Large (XXL)</option>

                </Form.Select>
            <Button variant="success" className=' mx-auto mt-5 px-auto col-5'> <HandbagFill size={25} /> Add to cart</Button>

            </div>
            
            

            

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


            <div className='container'>
                <div className='row justify-content-center' >
                    <div className=' mx-auto col-md-5'>
                        <RenderItem 
                        omo={props.omo}  />

                    </div>
                    <div className=' offset-1 col-md-5 mt-5'>
                        <RenderInfo
                        omo={props.omo}  />
                    </div>
                   
                </div>
            </div>
            

        </div>
    )
}