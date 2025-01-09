

import Navbar from "./components/headers"
import "./components/course.css"
import Course from "./components/course"
import Footer from "./components/footer"
import {Routes,Route} from "react-router-dom";
import MyCourses from "./components/mycourses";
import Amaric from  "./components/amaric"
import Tcourse from "./components/tigrenya"
import Culture from "./components/culture";
import About from "./components/about";
import AfaanOromo from "./components/afaanoromo"
function App() {
  
  return (
    <div>
<header>
         <Navbar/>
    </header>
    <main>
        <Routes>
        <Route path="/" element={<Course/>} />
          <Route path="/components/mycourses.tsx" element={<MyCourses />} />
          <Route path="/components/tigrenya.tsx" element={<Tcourse />} />
          <Route path="/components/amaric.tsx" element={<Amaric />} />
          <Route path="/components/afaanoromo.tsx" element= {<AfaanOromo/>}/>
          <Route path="/culture" element={<Culture />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </main>
    <div>
    <Footer/>
    </div>
        
    </div>
    
  )
}

export default App
