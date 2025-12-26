import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import WhatsAppIcon from '../WhatsAppIcon/WhatsAppIcon';
import CookieBanner from '../Cookies/CookieBanner';

const PrivacyPolicy = () => {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Privacy Policy & Website Disclaimer – FinPrime Consulting</title>
          <meta 
            name="description" 
            content="Read FinPrime Consulting's Privacy Policy and Website Disclaimer. Learn about our data protection practices, confidentiality policies, and terms of use." 
          />
          <meta 
            name="keywords" 
            content="privacy policy, website disclaimer, data protection, confidentiality, FinPrime Consulting" 
          />
          <meta name="author" content="FinPrime Consulting" />
          <meta property="og:title" content="Privacy Policy & Website Disclaimer – FinPrime Consulting" />
          <meta 
            property="og:description" 
            content="Read FinPrime Consulting's Privacy Policy and Website Disclaimer. Learn about our data protection practices and terms of use." 
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://finprimeconsulting.com/privacy" />
          <link rel="canonical" href="https://finprimeconsulting.com/privacy" />
        </Helmet>

        <Navbar />
        
        <div className="pt-20 pb-16 px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto pt-28">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brandBlue font-inter mb-4">
                Privacy Policy & Website Disclaimer
              </h1>
              <p className="text-sm md:text-base text-gray-600 font-inter">
                FinPrime Consulting
              </p>
            </div>

            {/* Main Content */}
            <div className="space-y-8 text-gray-800 font-inter">
              {/* Introduction */}
              <section>
                <p className="text-base md:text-lg leading-relaxed">
                  All information presented, conveyed, or carried on{' '}
                  <a 
                    href="https://www.finprimeconsulting.com" 
                    className="text-brandBlue hover:text-cyan-500 underline transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    www.finprimeconsulting.com
                  </a>{' '}
                  is protected by applicable copyright and other intellectual property laws. The content of this website is owned entirely by FinPrime Consulting, unless otherwise stated.
                </p>
              </section>

              {/* Copyright Section */}
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-brandBlue mb-4 font-inter">
                  Copyright & Intellectual Property
                </h2>
                <p className="text-base md:text-lg leading-relaxed">
                  You may not copy, reproduce, publish, edit, transmit, sell, distribute, display, perform, or otherwise commercially exploit any content available on this website without prior written consent from FinPrime Consulting.
                </p>
              </section>

              {/* Liability Disclaimer */}
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-brandBlue mb-4 font-inter">
                  Liability Disclaimer
                </h2>
                <p className="text-base md:text-lg leading-relaxed">
                  FinPrime Consulting shall not be held responsible or liable for any loss, damage, or consequences of any kind arising due to the misuse, misinterpretation, or reliance on the information published on this website by any third party.
                </p>
              </section>

              {/* Rights Reserved */}
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-brandBlue mb-4 font-inter">
                  Rights Reserved
                </h2>
                <p className="text-base md:text-lg leading-relaxed">
                  We reserve the right, at our sole discretion, to modify, suspend, interrupt, or discontinue any part of the website or services at any time without prior notice. We also reserve the right to refuse service to any individual or organization at our discretion.
                </p>
              </section>

              {/* Confidentiality & Data Protection */}
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-brandBlue mb-4 font-inter">
                  Confidentiality & Data Protection
                </h2>
                <div className="space-y-4">
                  <p className="text-base md:text-lg leading-relaxed">
                    We value and respect the confidentiality of information relating to our clients, associates, and website visitors. FinPrime Consulting does not disclose information regarding your visits to our website or any personal information voluntarily provided by you—including but not limited to your name, address, email address, or contact number—to any third party without your consent, unless required by law.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    Any information provided by you will be used solely for legitimate business purposes and only with your consent. We provide reasonable mechanisms for you to review, manage, update, or regulate the personal information shared with us.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    We also provide appropriate channels for you to communicate any privacy-related concerns, and we shall address such concerns in a timely and responsible manner.
                  </p>
                </div>
              </section>

              {/* Disclaimer of Warranties */}
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-brandBlue mb-4 font-inter">
                  Disclaimer of Warranties
                </h2>
                <p className="text-base md:text-lg leading-relaxed">
                  FinPrime Consulting disclaims all warranties or conditions, whether express or implied, including but not limited to implied warranties of accuracy, completeness, reliability, or fitness for a particular purpose of the information and content provided on this website.
                </p>
              </section>

              {/* Jurisdiction */}
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-brandBlue mb-4 font-inter">
                  Jurisdiction
                </h2>
                <p className="text-base md:text-lg leading-relaxed">
                  FinPrime Consulting agrees to be subject exclusively to the jurisdiction of the competent courts of Dubai, UAE, in relation to any disputes arising from the use of this website.
                </p>
              </section>

              {/* Opinions & Publications */}
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-brandBlue mb-4 font-inter">
                  Opinions & Publications
                </h2>
                <p className="text-base md:text-lg leading-relaxed">
                  Any articles, insights, or publications made available on this website reflect the personal views of the respective authors and do not necessarily represent the official views or opinions of FinPrime Consulting as a whole.
                </p>
              </section>

              {/* Website Development */}
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-brandBlue mb-4 font-inter">
                  Website Development
                </h2>
                <p className="text-base md:text-lg leading-relaxed">
                  This website is designed and maintained by{' '}
                  <a 
                    href="https://zorro.ae" 
                    className="text-brandBlue hover:text-cyan-500 underline transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Zorro Arab Emirates
                  </a>.
                </p>
              </section>

              {/* Last Updated */}
              <section className="pt-6 border-t border-gray-300">
                <p className="text-sm text-gray-600 font-inter italic">
                  Last updated: December 2025
                </p>
              </section>
            </div>
          </div>
        </div>

        <Footer />
        <WhatsAppIcon />
        <CookieBanner />
      </div>
    </HelmetProvider>
  );
};

export default PrivacyPolicy;

