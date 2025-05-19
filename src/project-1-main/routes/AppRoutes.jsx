import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../features/About/About";
import Blog from "../features/Blog/Blog";
import RightSolutions from "../features/RightSolutions/RightSolutions";
import Contact from "../components/ContactUs/Contact";
import Offer from "../components/Offer/Offer";
import FreeConsultation from "../features/FreeConsultation/FreeConsultation";
import PageTransitionWrapper from "../components/PageTransitionWrapper/PageTransitionWrapper";
import Industries from "../components/Servingsection/industries/Industries";
import Form from "../components/Speaktoanexprt/Form";
import Form2 from "../components/Speaktoanexprt/Form2";
import CEO from "../components/Speaktoanexprt/CEO";
import BlogForm from "../components/admin/BlogForm";
import BlogLists from "../components/admin/BlogLists";
import TestimonialsLists from "../components/admin/TestimonialsLists";
import TestimonialsForm from "../components/admin/TestimonialsForm";
import EditBlog from "../components/admin/EditBlog";
import EditTestimonials from "../components/admin/EditTestimonials";
import Login from "../components/adminregister/Login";
import Dashboard from "../components/adminregister/Dashboard";
import FormSubmissionsList from "../components/admin/FormSubmissionsList";
import SideNavbar from "../components/adminregister/SideNavbar";
import Form2SubmissionsList from "../components/admin/Form2SubmissionsList";
import MailList from "../components/admin/MailList";
import MailList2 from "../components/admin/MailList2";
import BPost from "../features/Blog/components/BlogPost/BPost";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import PageWrapper from "../components/PageTransitionWrapper/PageWrapper";
import Home from "../features/Home/Home";
import AppServices from "../features/Services/AppServices";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BPost />} />
      <Route path="/rightsolutions" element={<RightSolutions />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path="/offer" element={<Offer />} />
      <Route path="/freeconsultation" element={<FreeConsultation />} />
      <Route path="/CEO" element={<CEO />} />
      <Route path="/form/:industryId/:subIndustryId" element={<Form />} />
      <Route path="/form2/:serviceId/:subServiceId" element={<Form2 />} />
      <Route
        path="/:industriestitle/:subindustrytitle"
        element={
          <PageWrapper>
            <Industries />
          </PageWrapper>
        }
      />
      <Route
        path="/services/:servicetitle/:subServicetitle"
        element={
          <PageTransitionWrapper>
            <AppServices />
          </PageTransitionWrapper>
        }
      />
      <Route path="/blogform" element={<BlogForm />} />
      <Route path="/bloglists" element={<BlogLists />} />
      <Route path="/testimonialform" element={<TestimonialsForm />} />
      <Route path="/testimonialslists" element={<TestimonialsLists />} />
      <Route path="/update-blog/:blogId" element={<EditBlog />} />
      <Route
        path="/update-testimonial/:testimonialsId"
        x
        element={<EditTestimonials />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/form-submissions" element={<FormSubmissionsList />} />
      <Route path="/form2-submissions" element={<Form2SubmissionsList />} />
      <Route path="/maillist" element={<MailList />} />
      <Route path="/maillist2" element={<MailList2 />} />
      <Route path="/admin" element={<SideNavbar />} />

      {/* Fallback */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
