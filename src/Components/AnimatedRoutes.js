import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes,useParams, useLocation} from 'react-router-dom'
import Men from './Men/men';
import Women from './women';

export default function AnimatedRoutes(props){
    const location = useLocation();
    return(
        <AnimatePresence>
            <Routes  location={location} key={location.pathname}>
                <Route path='/' element={<Men
                Men={props.Men}
                errMess={props.errMessMen}
                isLoading={props.isLoadingMen}/>}/>
                <Route path='/men' element={<Men
                    Men={props.Men}
                    errMess={props.errMessMen}
                    isLoading={props.isLoadingMen}/>}/>
                <Route path='/women' element={<Women 
                     Women={props.Women}
                     errMess={props.errMess}
                     isLoading={props.isLoading}
                />}/>
                <Route path='men/:itemId' element={<props.ItemWithId/>}/>
                <Route path='*' element={<Navigate to='/'/>}/>


            </Routes>
        </AnimatePresence>
    )
}