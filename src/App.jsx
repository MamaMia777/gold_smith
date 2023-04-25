import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Navbar, Tech, StarsCanvas, Hero } from "./components"
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
const App = () => {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <div className='bg-primary bg-cover bg-no-repeat bg-center relative z-0'>
          <Hero />
          <StarsCanvas />
        </div>
        <About />
        <First />
        {/* <Second /> */}
        {/* <Third /> */}
        <Tech />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
