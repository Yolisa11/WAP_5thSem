import Header1 from './components/header'
import Nav from './components/Nav'
import './App.css'
import Section1 from './components/section'
import Footer1 from './components/footer'
 import { BrowserRouter } from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
      <Header1/>
      <Nav/>
      <Section1/>
      <Footer1/>
      </BrowserRouter>
    </>
  )
}

export default App