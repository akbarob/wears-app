import FirstS from "./firstsection"
import Second2 from "./second2"
import { motion } from "framer-motion"

export default function Women(props){
    return(
        <motion.div className="container"
            initial={{opacity:0, width:0}}
            animate={{opacity:1, width:"100%"}}
            exit={{opacity:0, x:window.innerWidth, transition:{duration:0.9}}}
        >
            <FirstS
            Women={props.Women}
            errMess={props.errMess}
            isLoading={props.isLoading}/>
            <Second2/>
        </motion.div>
    )
}