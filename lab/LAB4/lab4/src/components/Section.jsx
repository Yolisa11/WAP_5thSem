import Dog from "./blogs/Dog"
import Cat from "./blogs/Cat"
import Lion from "./blogs/Lion"
import Home from "./blogs/Home"
import {Route, Routes} from 'react-router-dom'

export default function Section(){
    return(
        <>
            <section>
                <h1>Section</h1>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Dog' element={<Dog/>}/>
                    <Route path='/Cat' element={<Cat/>}/>
                    <Route path='/Lion' element={<Lion/>}/>
                </Routes>
            </section>
        </>
    )
}