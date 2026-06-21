import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import NotFound from "./common/NotFound";
import ScrollToTop from "./common/ScrollToTop";
import BlogList from "./pages/blog/BlogList";
import BlogDetail from "./pages/blog/BlogDetail";
import "./index.css";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/"          element={<Index />} />
          <Route path="/contact"   element={<Contact />} />
          <Route path="/service"   element={<Service />} />
          <Route path="/blog"      element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          {/* Pricing & About are sections on the homepage — redirect there */}
          <Route path="/pricing"   element={<Index />} />
          <Route path="/about"     element={<Index />} />
          <Route path="/team"      element={<NotFound />} />
          <Route path="*"          element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
