import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import NotFound from "./common/NotFound";
import ScrollToTop from "./common/ScrollToTop";
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Active pages */}
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />

        {/* Deleted pages explicitly returning 404 */}
        <Route path="/pricing" element={<NotFound />} />
        <Route path="/team" element={<NotFound />} />

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    
  );
}
