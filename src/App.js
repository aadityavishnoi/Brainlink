import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { ThemeProvider } from "./ThemeContext";
import ScrollToTop from "./common/ScrollToTop";
import LoadingState from "./components/LoadingState";
import "./index.css";

const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const Work = lazy(() => import("./pages/Work"));
const About = lazy(() => import("./pages/About"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const BlogList = lazy(() => import("./pages/blog/BlogList"));
const BlogDetail = lazy(() => import("./pages/blog/BlogDetail"));
const NotFound = lazy(() => import("./common/NotFound"));

function RouteFallback() {
  return <LoadingState label="Loading..." minHeight="100vh" />;
}

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />

              {/* Legacy URLs kept working via redirect, not a hard 404 */}
              <Route path="/service" element={<Navigate to="/services" replace />} />
              <Route path="/plans" element={<Navigate to="/pricing" replace />} />
              <Route path="/team" element={<Navigate to="/about" replace />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Router>
        <SpeedInsights />
      </ThemeProvider>
    </HelmetProvider>
  );
}
