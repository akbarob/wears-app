import { motion } from "framer-motion"
import FsMen from "./fsMen"
import SsMen from "./ssMen"

export default function Men(props){
    return(
        <motion.div className="container text-center"
            initial={{opacity:0, width:0}}
            animate={{opacity:1, width:"100%"}}
            exit={{opacity:0, x:window.innerWidth, transition:{duration:0.9}}}
             >
            <FsMen
            Men={props.Men}
            errMess={props.errMess}
            isLoading={props.isLoading}/>
            <SsMen/>
           
        </motion.div>
    )
}