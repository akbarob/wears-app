import { motion } from "framer-motion"
export default function Men(){
    return(
        <motion.div className="container text-center"
            initial={{opacity:0, width:0}}
            animate={{opacity:1, width:"100%"}}
            exit={{opacity:0, x:window.innerWidth, transition:{duration:0.9}}}
             >
            <h4>MEN PAGE</h4>
        </motion.div>
    )
}