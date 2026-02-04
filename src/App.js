import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import NotFound from "./common/NotFound";
// Import plan pages
import Sites999 from "./pages/plans/sites999";
import Ignite from "./pages/plans/ignite";
import Momentum from "./pages/plans/momentum";
import Velocity from "./pages/plans/velocity";
import Custom from "./pages/plans/custom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/pricing/sites999" element={<Sites999 />} />
        <Route path="/pricing/ignite" element={<Ignite />} />
        <Route path="/pricing/momentum" element={<Momentum />} />
        <Route path="/pricing/velocity" element={<Velocity />} />
        <Route path="/pricing/custom" element={<Custom />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
