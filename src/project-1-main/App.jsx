import React from 'react';
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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import RightSolutions from './components/Right-Solutions/RightSolutions';
import BelowFooter from './components/Footer/BelowFooter';
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

import Certificates from './components/cerificates/certifcate';




const Home = () => {
  return (
    <div className=''>
      <Navbar />
      <Bannerslider />
      <Text1 />
      <Certificates />
      <Text3 />
      <Servicecard />
      <Banner />
      <Dropdown />
      <Text2 />
      <Text3 />
      <Servingsection />
      <Text4 />
      <Inputsection />
      <Oursection />
      <Blogsection />
      <Faq />
      <Text3 />
      <Footer />
      <BelowFooter />
      <WhatsAppIcon />
      <CookieBanner />

    </div>
  )
}


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/CEO" element={<CEO />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BPost />} />
        <Route path="/rightsolutions" element={<RightSolutions />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/:industriestitle/:subindustrytitle"
          element={
            <PageWrapper>
              <Industries />
            </PageWrapper>

          } />
        <Route path="/freeconsultation" element={<FreeConsultation />} />
        <Route path="/services/:subServicetitle/:subServiceTitle"
          element={
            <PageTransitionWrapper>
              <Accountingandfinancialreporting />
            </PageTransitionWrapper>
          } />
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
      </Routes>
    </Router>
  );
};

export default App