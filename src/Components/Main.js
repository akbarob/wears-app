import Header from "./Header"
import Header2 from "./header2"

import AnimatedRoutes from "./AnimatedRoutes"
import { Component } from "react"
import { connect } from "react-redux/es/exports"
import { fetchwomen } from "../redux/ActionCreators"


const mapStateToProps= state => {
    return{
        Women: state.Women,
    }
}
const mapDispatchToProps = dispatch => ({
    fetchwomen: ()=> {dispatch(fetchwomen())},
})

class Main extends Component{
    componentDidMount(){
        this.props.fetchwomen()
    }

    render(){
        return(
            <div>
               <Header/>
               <Header2/>
               <AnimatedRoutes
               Women={this.props.Women.Women}
               errMess={this.props.Women.errMess}
               isLoading={this.props.Women.isLoading}/>
               
            </div>
        )

    }
   
}

export default connect( mapStateToProps,mapDispatchToProps)(Main)