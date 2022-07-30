import Header from "./Header"
import Header2 from "./header2"
import ItemDetails from "./ItemDetails"

import AnimatedRoutes from "./AnimatedRoutes"
import { Component } from "react"
import { connect } from "react-redux/es/exports"
import { fetchwomen, fetchmen, } from "../redux/ActionCreators"
import { useParams } from "react-router-dom"



const mapStateToProps= state => {
    return{
        Women: state.Women,
        Men: state.Men,
    }
}
const mapDispatchToProps = dispatch => ({
    fetchwomen: ()=> {dispatch(fetchwomen())},
    fetchmen: ()=> {dispatch(fetchmen())},

})

class Main extends Component{
    componentDidMount(){
        this.props.fetchwomen()
        this.props.fetchmen()

    }

    render(){

        const ItemWithId = () =>{
            const{itemId} = useParams();

            return(
                <ItemDetails
                woman={this.props.Women.Women.filter(lady => lady.id === parseInt(itemId,10))}
                errMess={this.props.Women.errMess}
                isLoading={this.props.Women.isLoading}
                omo={this.props.Men.Men.filter(omo => omo.id === parseInt(itemId,10)) [0]}
                errMessMen={this.props.Men.errMess}
                isLoadingMen={this.props.Men.isLoading}/>

            )
        }
        return(
            <div>
               <Header/>
               <Header2/>
               <AnimatedRoutes
               Women={this.props.Women.Women}
               errMess={this.props.Women.errMess}
               isLoading={this.props.Women.isLoading}
               Men={this.props.Men.Men}
               errMessMen={this.props.Men.errMess}
               isLoadingMen={this.props.Men.isLoading}
               ItemWithId={ItemWithId}/>
               
            </div>
        )

    }
   
}

export default connect( mapStateToProps,mapDispatchToProps)(Main)