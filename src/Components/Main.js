import Header from "./Header"
import Header2 from "./header2"
import FirstS from "./firstsection"
import Container from "react-bootstrap/esm/Container"
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
               <Container>
               <FirstS
               Women={this.props.Women.Women}/>
               </Container>
            </div>
        )

    }
   
}

export default connect( mapStateToProps,mapDispatchToProps)(Main)