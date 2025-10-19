import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import "../../css/index.css";

export default function Sites999() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: `I'm interested in the Custom Plan — TailorMade* (Custom Pricing).\n\n`
  });
  const [errors, setErrors] = useState({});

  const plan = {
    title: "Custom Plan — TailorMade*",
    subtitle: "Get a plan built just for your unique needs.",
    price: "Custom Pricing",
    features: [
      "Custom Website Development & Design",
      "Flexible Feature Integration Based on Your Requirements",
      "SEO & Performance Optimization",
      "Marketing Automation & Campaign Setup",
      "Scalable Solutions Tailored to Your Business",
    ],
    description: `The Custom Plan is ideal for businesses with unique needs that require a completely tailored solution. 
    Get a custom website, personalized features, SEO and performance optimization, marketing automation, and scalable solutions that grow with your business.`,
    extra: [
      "Unlimited revisions",
      "Dedicated developer and support team",
      "Advanced marketing strategy consultation",
    ],
    color: "from-pink-600 to-pink-800",
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setResult("Sending your inquiry...");
    
    const formDataObj = new FormData(event.target);
    formDataObj.append("plan", `${plan.title} - ${plan.price}`);
    formDataObj.append("access_key", "795dd06f-a4f1-42cf-b7e9-e534375b53dc");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj
      });
      const data = await response.json();

      if (data.success) {
        setResult("✓ Thank you! We'll contact you within 24 hours.");
        event.target.reset();
        setFormData({
          name: '', email: '', phone: '', company: '',
          message: `I'm interested in the Custom Plan — TailorMade* (Custom Pricing).\n\n`
        });
      } else {
        setResult("✗ Something went wrong. Please try again or call us directly.");
      }
    } catch (error) {
      setResult("✗ Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-8 px-4 font-outfit">
        <div className="max-w-4xl mx-auto">
          <div className={`flex flex-col bg-gradient-to-b ${plan.color} text-white p-8 rounded-2xl shadow-lg mb-8`}>
            <h1 className="text-5xl font-bold mb-2">{plan.title}</h1>
            <p className="text-gray-200 mb-4 text-lg">{plan.subtitle}</p>
            <p className="text-4xl text-yellow-300 mb-6">{plan.price}</p>
            <p className="mb-6 text-gray-100">{plan.description}</p>

            <h2 className="text-2xl font-semibold mb-3">Features:</h2>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <i className="fas fa-check text-green-300 mr-2"></i>{feature}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mb-3">Extras:</h2>
            <ul className="space-y-2 mb-6">
              {plan.extra.map((item, i) => (
                <li key={i} className="flex items-center">
                  <i className="fas fa-star text-yellow-300 mr-2"></i>{item}
                </li>
              ))}
            </ul>

            <Link to="/pricing" className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg text-center hover:bg-gray-200 transition inline-block w-fit">
              ← Back to Pricing
            </Link>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Get Started with {plan.title}</h2>
            <p className="text-gray-600 text-center mb-6">Fill out the form below and we'll get back to you within 24 hours</p>

            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} disabled={isSubmitting}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition ${errors.name ? 'border-red-500' : 'border-gray-300'} ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  placeholder="John Doe" required />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} disabled={isSubmitting}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition ${errors.email ? 'border-red-500' : 'border-gray-300'} ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  placeholder="john@example.com" required />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} disabled={isSubmitting}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition ${errors.phone ? 'border-red-500' : 'border-gray-300'} ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  placeholder="+91 98765 43210" required />
                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name <span className="text-gray-400 text-xs">(Optional)</span>
                </label>
                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} disabled={isSubmitting}
                  className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  placeholder="Your Company" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Project Details <span className="text-red-500">*</span>
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} disabled={isSubmitting} rows="5"
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'} ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  placeholder="Tell us about your project requirements..." required></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <button type="submit" disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'}`}>
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Submit Inquiry'}
              </button>

              {result && (
                <div role="alert" className={`mt-4 p-3 rounded-lg text-center font-medium text-sm ${result.includes('✓') ? 'bg-green-100 text-green-800' : result.includes('✗') ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                  {result}
                </div>
              )}
            </form>

            <p className="text-xs text-gray-500 text-center mt-6">
              By submitting this form, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
