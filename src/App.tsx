

import Navbar from "./components/headers"
import "./components/course.css"
import Course from "./components/course"
import Footer from "./components/footer"
import {Routes,Route} from "react-router-dom";
import MyCourses from "./components/mycourses";
import Ucourse from "./components/ucourse"
import Culture from "./components/culture";
import About from "./components/about";
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
          <Route path="/components/ucourse.tsx" element={<Ucourse />} />
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
