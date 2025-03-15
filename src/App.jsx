import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./layouts/Layout";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Cert = lazy(() => import("./pages/Cert"));
const Projects = lazy(() => import("./pages/Projects"));
const Exp = lazy(() => import("./pages/Exp"));
const About = lazy(() => import("./pages/About"));
const Experience = lazy(() => import("./pages/Experience"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> {/* About route */}
            <Route path="/experience" element={<Exp />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Cert />} />
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  );
}

export default App;
