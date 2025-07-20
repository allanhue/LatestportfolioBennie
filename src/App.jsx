import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./layouts/Layout";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Cert = lazy(() => import("./pages/Cert"));
const Projects = lazy(() => import("./pages/Projects"));
const Exp = lazy(() => import("./pages/Exp"));
const About = lazy(() => import("./pages/About"));
const Experience = lazy(() => import("./pages/Experience"));

import { Spinner } from "./css/Components/spinner";

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Suspense fallback={<Spinner />}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} /> 
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certifications" element={<Cert />} />
              <Route path="/education" element={<Exp />} />
            </Routes>
          </Layout>
        </Suspense>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
