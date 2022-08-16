import Header from "./Header"
import Header2 from "./header2"
import Footer from "./footer"
import ItemDetails from "./Men/ItemDetails"
import ItemDetailsW from "./Women/itemDetailsW"
import Home from "./home"

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
        const HomePage =() => {
            return(
                <>
                    <Home
                        Men={this.props.Men.Men}
                        isLoadingMen={this.props.Men.isLoading}
                        errMessMen={this.props.Men.errMess}
                        Women={this.props.Women.Women}
                        errMessWomen={this.props.Women.errMess}
                        isLoadingWomen={this.props.Women.isLoading}
                    />
                </>
            )
        }

        const ItemWithId = () =>{
            const{itemId} = useParams();

            return(
                <>
                <ItemDetails
                omo={this.props.Men.Men.filter(omo => omo.id === parseInt(itemId,10)) [0]}
                errMessMen={this.props.Men.errMess}
                isLoadingMen={this.props.Men.isLoading}/>
                </>
                
            )
        }
        const ItemWithIdW = () =>{
            const{itemId} = useParams();

            return(
                <>
                <ItemDetailsW
                lady={this.props.Women.Women.filter(lady => lady.id === parseInt(itemId,10)) [0]}
                errMess={this.props.Women.errMess}
                isLoading={this.props.Women.isLoading}/>
                </>
                
            )
        }
        return(
            <div>
               <Header />
               <Header2/>
               <AnimatedRoutes
                    Women={this.props.Women.Women}
                    errMess={this.props.Women.errMess}
                    isLoading={this.props.Women.isLoading}
                    Men={this.props.Men.Men}
                    errMessMen={this.props.Men.errMess}
                    isLoadingMen={this.props.Men.isLoading}
                    ItemWithId={ItemWithId}
                    ItemWithIdW={ItemWithIdW}
                    HomePage={HomePage}
               />
               
               <Footer/>
               
            </div>
        )

    }
   
}

export default connect( mapStateToProps,mapDispatchToProps)(Main)