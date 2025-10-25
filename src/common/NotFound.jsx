import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../assets/logo/logo.png";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <img src={logo} className="h-8" alt="Brainlink Software" />
      <h1 className="text-6xl font-bold text-gray-800 mb-4 font-outfit">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2 font-outfit">Page Not Found</h2>
      <p className="text-gray-500 mb-6 font-outfit">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-outfit"
      >
        Go Back Home
      </Link>
    </div>
  );
}
