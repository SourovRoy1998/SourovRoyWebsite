import './App.css';
import NavigationBar from './components/NavigationBar';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import ScienceBlog from './components/ScienceBlog';
import HumanitiesBlog from './components/HumanitiesBlog';
import BengaliBlog from './components/BengaliBlog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route>
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/Certificates" element={<Certificates />} />
            <Route path="/science-blog" element={<ScienceBlog />} />
            <Route path="/humanities-blog" element={<HumanitiesBlog />} />\
            <Route path="/bengali-blog" element={<BengaliBlog />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
