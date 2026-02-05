import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import NotFound from "./common/NotFound";
import ScrollToTop from "./common/ScrollToTop";
import BlogList from "./pages/blog/BlogList";
import BlogDetail from "./pages/blog/BlogDetail";
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Active pages */}
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        {/* Deleted pages explicitly returning 404 */}
        <Route path="/pricing" element={<NotFound />} />
        <Route path="/team" element={<NotFound />} />

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    
  );
}
