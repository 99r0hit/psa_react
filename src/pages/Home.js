import React, { useEffect } from 'react';
import '../styles/Home.css'; // Assuming Home.css is in the same folder
import logo from '../assets/images/logo.png'; // Adjust path if needed
import sustain from '../assets/images/sustain.jfif';
import inno from '../assets/images/inno.jfif';
import exp from '../assets/images/exp.jfif';
import overview from '../assets/images/overview.jfif';

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero text-center">
        <div className="container">
          <h1 data-i18n="hero_title">Welcome to PSA Agrosciences</h1>
          <p className="lead" data-i18n="hero_subtitle">Pioneering Sustainable Agriculture through Scientific Innovations</p>
          <a href="#features" className="btn btn-primary mt-3 btn-hover" data-i18n="btn_explore">Explore More</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5" data-i18n="features_title">Why Choose Us</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="feature-card text-center">
                <img src={sustain} alt="Sustainability" className="img-fluid mb-3" />
                <h3 data-i18n="feature1_title">Sustainability</h3>
                <p data-i18n="feature1_desc">Eco-friendly solutions for a greener tomorrow.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-card text-center">
                <img src={inno} alt="Innovation" className="img-fluid mb-3" />
                <h3 data-i18n="feature2_title">Innovation</h3>
                <p data-i18n="feature2_desc">Cutting-edge agricultural technologies.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-card text-center">
                <img src={exp} alt="Expertise" className="img-fluid mb-3" />
                <h3 data-i18n="feature3_title">Expertise</h3>
                <p data-i18n="feature3_desc">Decades of scientific research in agriculture.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 data-i18n="overview_title">About PSA Agrosciences</h2>
              <p data-i18n="overview_text">PSA Agrosciences Pvt Ltd is dedicated to transforming agriculture...</p>
              <a href="/about" className="btn btn-outline-primary btn-hover" data-i18n="btn_learn">Learn More</a>
            </div>
            <div className="col-md-6">
              <img src={overview} alt="Company Overview" className="img-fluid rounded image-zoom" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 data-i18n="cta_title">Ready to Grow with Us?</h2>
          <p className="lead" data-i18n="cta_desc">Discover our products and services or get in touch today.</p>
          <div className="d-flex justify-content-center gap-3">
            <a href="/products" className="btn btn-primary btn-hover" data-i18n="btn_products">View Products</a>
            <a href="/contact" className="btn btn-outline-primary btn-hover" data-i18n="btn_contact">Contact Us</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
