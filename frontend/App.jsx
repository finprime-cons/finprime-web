import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import Text1 from './components/Text/Text1';
import Servicecard from './components/Servicecard/Servicecard';
import Banner from './components/Banner/Banner';
import Dropdown from './components/dropdown/Dropdown';
import Text2 from './components/Text/Text2';
import Servingsection from './components/Servingsection/Servingsection';
import Text4 from './components/Text/Text4';
import Inputsection from './components/inputsection/Inputsection';
import Oursection from './components/Oursection/Oursection';
import Blogsection from './components/Blogsection/Blogsection';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import RightSolutions from './components/Right-Solutions/RightSolutions';
import Contact from './components/ContactUs/Contact';
import Offer from './components/Offer/Offer';
import FreeConsultation from './components/FreeConsultation/FreeConsultation';
import WhatsAppIcon from './components/WhatsAppIcon/WhatsAppIcon';
import Accountingandfinancialreporting from './components/Services/Accountingandfinancialreporting';
import PageTransitionWrapper from './components/PageTransitionWrapper/PageTransitionWrapper';
import CookieBanner from './components/Cookies/CookieBanner';
import Industries from './components/Servingsection/industries/Industries';
import Bannerslider from './components/Bannerslider/Bannerslider';
import Text3 from './components/Text/Text3';
import Form from './components/Speaktoanexprt/Form';
import Form2 from './components/Speaktoanexprt/Form2';
import CEO from './components/Speaktoanexprt/CEO';
import Navbar from './components/Navbar/Navbar';
import BlogForm from './components/admin/BlogForm';
import BlogLists from './components/admin/BlogLists';
import TestimonialsLists from './components/admin/TestimonialsLists';
import TestimonialsForm from './components/admin/TestimonialsForm';
import EditBlog from './components/admin/EditBlog';
import EditTestimonials from './components/admin/EditTestimonials';
import Login from './components/adminregister/Login';
import Dashboard from './components/adminregister/Dashboard';
import FormSubmissionsList from './components/admin/FormSubmissionsList';
import SideNavbar from './components/adminregister/SideNavbar';
import Form2SubmissionsList from './components/admin/Form2SubmissionsList';
import MailList from './components/admin/MailList';
import MailList2 from './components/admin/MailList2';
import BPost from './components/Blog/BlogPost/BPost';
import ErrorPage from './components/ErrorPage/ErrorPage';
import PageWrapper from './components/PageTransitionWrapper/PageWrapper';
import PartnerWithItem from './components/PartnerWith/partnerwith';
import Refer from './components/Refer/Refer';
import YoutubeBroadcast from './components/YoutubeBroadcast/YoutubeBroadcast';
import { IoIosClose } from 'react-icons/io';
import ConsultationModal from './components/ConsultationModal';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';

// ⛑️ Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error);
    console.error('Error info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 text-red-500">
          <h1>Something went wrong.</h1>
          <pre>{this.state.error?.toString()}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

// 🏠 Home Page Component
const Home = () => {
  const [showConsultation, setShowConsultation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowConsultation(true), 20000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen ">
        <ConsultationModal show={showConsultation} onClose={() => setShowConsultation(false)} />
        <Navbar />
        <Bannerslider />
        <Text1 />
        <PartnerWithItem />
        <Servicecard />
        <Dropdown />
        <Banner />
        <Text2 />
        {/* Elfsight Google Reviews */}
        <div className="w-full flex justify-center my-16 px-6">
          <div className="elfsight-app-15cb44d6-fd21-461a-867a-eac41c35b30d" data-elfsight-app-lazy></div>
        </div>
        <Text3 />
        <Servingsection />
        <Inputsection />
        <Oursection />
        <div className="flex justify-center w-full my-16 px-6">
          <p className="text-center text-lg sm:text-xl md:text-2xl font-inter font-bold leading-snug max-w-3xl">
            We always try to step outside comfort zone. That's part of the reason we got{' '}
            <Link
              to="/technology/software-development"
              className="underline text-black hover:text-blue-600 transition-colors duration-200"
            >
              here
            </Link>.
          </p>
        </div>
        <Blogsection />
        <Faq />
        <Text3 />
        <Footer />
        <WhatsAppIcon />
        <CookieBanner />
      </div>
    </ErrorBoundary>
  );
};


// 🌍 Main App Component
const App = () => {
  const [isSpeakExpert, setIsSpeakExpert] = useState(false);
  const [formData, setFormData] = useState({ name: '', company: '', email: '', mobile: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const toggleSpeakExpert = () => setIsSpeakExpert(!isSpeakExpert);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('https://finprimeconsulting.com/api/submit-form-speak-expert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage(result.message);
        setFormData({ name: '', company: '', email: '', mobile: '' });
        setTimeout(toggleSpeakExpert, 2000);
      } else {
        setMessage(result.message || 'An error occurred.');
      }
    } catch (error) {
      setMessage('An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Helmet>
          <title>Accounting Services in Dubai, UAE | Best Accounting Companies</title>
          <meta name="description" content="Finprime Consulting offers trusted accounting services in Dubai, UAE. Partner with one of the best accounting companies in Dubai for reliable bookkeeping and tax solutions." />
          <meta name="keywords" content="accounting services dubai, best accounting companies dubai, bookkeeping services uae, tax services dubai, finprime consulting" />
          <meta name="author" content="Finprime Consulting" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="canonical" href="https://finprimeconsulting.com" />
        </Helmet>
        <Router>
          <ScrollToTop />

          <div className="min-h-screen ">
            {isSpeakExpert && (
              <div
                className="fixed inset-0 w-screen h-[100vh] bg-black bg-opacity-60 z-50 flex justify-center items-center"
                onClick={toggleSpeakExpert}
              >
                <div
                  className="relative bg-[#1a233a] w-[600px] shadow-md p-6"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute top-2 right-2 text-white font-bold"
                    onClick={toggleSpeakExpert}
                  >
                    <IoIosClose size={28} className="hover:text-brandBlue transition-colors duration-500" />
                  </button>
                  <form onSubmit={handleSubmit} className="space-y-4 z-50">
                    <div className="w-[90%] mx-auto">
                      <h5 className="text-white font-inter text-2xl sm:text-4xl font-semibold py-6">
                        Speak to an Expert
                      </h5>
                      <div className="grid grid-cols-2 gap-6 pt-8">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Name"
                          className="input-style"
                        />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Company"
                          className="input-style"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-6 pt-8">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="E-mail"
                          className="input-style"
                        />
                        <input
                          type="text"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          placeholder="Mobile"
                          className="input-style"
                        />
                      </div>
                      <div className="flex items-center mt-4">
                        <input type="checkbox" id="privacy-policy" required className="mr-2" />
                        <label htmlFor="privacy-policy" className="block text-xs text-gray-300 font-inter">
                          I agree to the Privacy Policy{' '}
                          <span className="text-red-500 font-inter underline">required</span>
                        </label>
                      </div>
                      <div className="mt-4">
                        <button
                          type="submit"
                          className="bg-transparent border border-white text-white py-2 px-16 text-sm font-inter transition-colors duration-300 hover:bg-black hover:text-white"
                          disabled={loading}
                        >
                          {loading ? 'Sending...' : 'Send'}
                        </button>
                      </div>
                      {message && <p className="text-white mt-4">{message}</p>}
                    </div>
                  </form>
                </div>
              </div>
            )}

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/rightsolutions" element={<RightSolutions />} />
              <Route path="/freeconsultation" element={<FreeConsultation />} />
              <Route path="/blogs/:slug" element={<BPost />} />
              <Route path="/contactus" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/offer" element={<Offer />} />
              <Route path="/CEO" element={<CEO />} />
              <Route path="/:industriestitle/:subindustrytitle" element={<PageWrapper><Industries /></PageWrapper>} />
              <Route path="/services/:servicetitle/:subServicetitle" element={<PageTransitionWrapper><Accountingandfinancialreporting /></PageTransitionWrapper>} />
              <Route path="/form/:industryId/:subIndustryId" element={<Form />} />
              <Route path="/form2/:serviceId/:subServiceId" element={<Form2 />} />
              <Route path="/blogform" element={<BlogForm />} />
              <Route path="/testimonialslists" element={<TestimonialsLists />} />
              <Route path="/testimonialform" element={<TestimonialsForm />} />
              <Route path="/bloglists" element={<BlogLists />} />
              <Route path="/update-blog/:blogId" element={<EditBlog />} />
              <Route path="/update-testimonial/:testimonialsId" element={<EditTestimonials />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/form-submissions" element={<FormSubmissionsList />} />
              <Route path="/form2-submissions" element={<Form2SubmissionsList />} />
              <Route path="/admin" element={<SideNavbar />} />
              <Route path="/maillist" element={<MailList />} />
              <Route path="/maillist2" element={<MailList2 />} />
              <Route path="/refer-and-earn" element={<PageWrapper><Refer /></PageWrapper>} />
              <Route path="/youtube-broadcast-channel" element={<PageWrapper><YoutubeBroadcast /></PageWrapper>} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
