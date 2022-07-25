import Header from "./Header"
import Header2 from "./header2"

import AnimatedRoutes from "./AnimatedRoutes"
import { Component } from "react"
import { connect } from "react-redux/es/exports"
import { fetchwomen, fetchmen, } from "../redux/ActionCreators"



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
               isLoadingMen={this.props.Men.isLoading}/>
               
            </div>
        )

    }
   
}

export default connect( mapStateToProps,mapDispatchToProps)(Main)