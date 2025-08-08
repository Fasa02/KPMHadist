import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Profile from './profile';
import MBG from './MBG';
import './App.css';


const services = [
  {
    icon: '/images/education.svg',
    title: 'Education and Training',
    description: 'Providing crucial learning and development opportunities.'
  },
  {
    icon: '/images/certification.svg',
    title: 'Professional Certification',
    description: 'Offering official certification to validate professional skills.'
  },
  {
    icon: '/images/kitchen.svg',
    title: 'MBG Kitchens',
    description: 'Establishing and managing kitchens specifically for the Free Nutritious Meal (MBG) program.'
  },
  {
    icon: '/images/homestay.svg',
    title: 'Homestay and Restaurant',
    description: 'Operating hospitality services including homestays and restaurants.'
  },
  {
    icon: '/images/warehousing.svg',
    title: 'Warehousing',
    description: 'Providing and managing storage and logistics facilities.'
  }
];

const articles = [
  {
    date: '1 Aug 2025',
    title: 'News Title 1',
    description: 'lorem ipsum dolor',
    img: '/images/news.svg',
  },
  {
    date: '5 Aug 2025',
    title: 'News Title 2',
    description: 'consectetur adipiscing',
    img: '/images/news.svg',
  },
  {
    date: '10 Aug 2025',
    title: 'News Title 3',
    description: 'sed do eiusmod',
    img: '/images/news.svg',
  },
];


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Home Section */}
              <section
                id="home"
                className="d-flex align-items-center justify-content-center text-center flex-column"
                style={{
                  height: '100vh',
                  backgroundImage: `url('/images/Food.svg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="container px-4">
                  <h1 style={{ color: '#006C2C', fontWeight: '800', fontSize: '3rem' }}>
                    Building a Brighter Future, Together :<br />
                    <span style={{ textDecoration: 'underline' }}>
                      KPM HADIST Foundation
                    </span>
                  </h1>
                  <p className="mt-4" style={{ color: '#555', fontSize: '1.3rem', marginTop:'40px'}}>
                    KPM HADIST is dedicated to ensuring the effective and sustainable
                    implementation of government programs, transforming national goals
                    into tangible community welfare. We bridge the gap between policy
                    and people, fostering growth, knowledge, and empowerment.
                  </p>
                  <h5 className="mb-4" style={{ color: '#333', fontWeight: '600', marginTop: '80px', textAlign: 'center' }}>
                    In Collaboration With
                  </h5>
                  <div className="row justify-content-center g-4">
                    {[
                      { 
                        src: '/images/gizi.svg', 
                        alt: 'Badan Gizi Nasional',
                        title: 'Badan Gizi Nasional',
                        subtitle: 'National Nutrition Agency'
                      },
                      { 
                        src: '/images/kemensos.svg', 
                        alt: 'Kementerian Sosial Republik Indonesia',
                        title: 'Kementerian Sosial Republik Indonesia',
                        subtitle: 'Ministry of Social Affairs of the Republic of Indonesia'
                      },
                      { 
                        src: '/images/semarang.svg', 
                        alt: 'Pemerintah Kota Semarang',
                        title: 'Pemerintah Kota Semarang',
                        subtitle: 'Semarang City Government'
                      },
                      { 
                        src: '/images/pdam.jpeg', 
                        alt: 'PDAM Semarang',
                        title: 'PDAM Indramayu',
                        subtitle: 'Indramayu City Water Utility'
                      }
                    ].map((item, idx) => (
                      <div className="col-6 col-md-3 d-flex justify-content-center" key={idx}>
                        <div className="collab-card">
                          <img src={item.src} alt={item.alt} className="collab-card-logo" />
                          <div className="collab-card-text">
                            <div className="collab-card-title">{item.title}</div>
                            <div className="collab-card-subtitle">{item.subtitle}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Newest Articles Section */}
              <section id="articles" className="py-2 bg-white">
                <div className="container">
                  <h2 className="text-center mb-4">Newest Articles</h2>
                  <div className="row gx-4 gy-4 justify-content-center">
                    {articles.map((art, idx) => (
                      <div className="col-12 col-md-6 col-lg-4" key={idx}>
                        <div className="card article-card h-100 shadow-sm rounded">
                          <img src={art.img} className="card-img-top" alt={art.title} />
                          <div className="card-body">
                            <small className="text-muted">{art.date}</small>
                            <h5 className="card-title mt-2">{art.title}</h5>
                            <p className="card-text">{art.description}</p>
                            <a href="#articles" className="stretched-link text-decoration-none fw-bold">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>


             {/* About Section */}
            <section id="about" className="py-5 bg-white">
              <div className="container">
                <div className="text-center mb-2">
                  <span className="about-title-badge">About KPM Hadist</span>
                </div>

                {/* wrap kedua paragraf About jadi dua kolom */}
                <div className="about-paragraphs">
                  <div className="about-box about-box-top">
                    <div className="about-yellow-bar"></div>
                    <p>
                      KPM HADIST was <strong>established by a group of dedicated scientists and technocrats</strong> in response to the stagnation observed in various government programs. For too long, government’s focus has been on “follow the money” rather than “follow the program,” leading to a <strong>disconnect from the primary objective: the welfare of the people</strong>
                    </p>
                  </div>
                  <div className="about-box about-box-bottom">
                    <img src="/images/shape.svg" alt="background shape" className="about-bg-shape" />
                    <div className="about-yellow-bar small"></div>
                    <p>
                      We were founded to build a robust body of knowledge, ensuring that government initiatives are not only well-funded but are also clearly understood and correctly implemented according to their legal, methodological, and purpose-driven frameworks. Our goal is to uplift the dignity and value of every individual, empowering them to become leaders in their own lives and communities.
                    </p>
                  </div>
                </div>

                {/* Vision & Mission */}
                <div className="about-vision-mission">
                  <h4 className="vm-title">Our Vision & Mission</h4>

                  {/* Vision Row */}
                  <div className="vm-row vm-vision">
                    <button className="vm-btn">Our Vision</button>
                    <p className="vm-textv">
                      To become the leading Center for the Body of Knowledge, Concern, and Sustainability for Government Programs.
                    </p>
                  </div>

                  {/* Mission Row */}
                  <div className="vm-row vm-mission">
                    <button className="vm-btn">Our Mission</button>
                    <ol className="vm-text">
                      <li>To act as a key operator for government programs in the economic, social welfare, educational, and industrial sectors.</li>
                      <li>To pioneer omni-channel, multi-effect criteria for government programs to maximize their impact.</li>
                      <li>To be a forefront institution in the development of knowledge, technology, and the long-term sustainability of government initiatives.</li>
                    </ol>
                  </div>
                </div>

              </div>
            </section>




              {/* Programs Section */}
              <section id="programs" className="py-5 bg-light ">
                <div className="container">
                  <h2 className="text-center mb-4">Our Services</h2>
                 <div className="services-grid">
                    {services.map((service, idx) => (
                      <div
                        key={idx}
                        className={`service-item ${idx === 4 ? 'center-middle' : ''}`}
                      >
                        <img src={service.icon} alt={service.title} className="icon-img" />
                        <div>
                          <h5 className="service-title">{service.title}</h5>
                          <p className="service-desc">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 text-center commitment-section">
                    <span className="commitment-badge">
                      Commitment to Indonesia’s 2045 Golden Generation
                    </span>
                    <p className="commitment-desc">
                      The success of Indonesia's "Golden Generation 2045" mission hinges on the nutritional foundation of its people. The Free Nutritious Meal program is a critical government initiative in this endeavor. While initially funded by the national budget, its long-term success relies on a self-sustaining system. KPM HADIST is deeply committed to this vision, recognizing that active participation from non-governmental institutions is vital for achieving our shared national goals.
                    </p>
                  </div>
                  <div className="contact-partnership text-center">
                    <h5>Contact Us for Partnerships</h5>
                    <a
                      href="https://wa.me/628112759300"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-button"
                    >
                      <img src="/images/whatsapp-icon.svg" alt="WhatsApp" className="whatsapp-icon" />
                      (+62) 8112759300
                    </a>
                  </div>
                </div>
              </section>

              {/* Footer Section */}
              <footer className="footer bg-dark-green text-white py-5">
                <div className="container d-flex flex-column flex-md-row justify-content-between">
                  {/* Kolom Kiri */}
                  <div className="footer-col mb-4 mb-md-0">
                    <h5 className="footer-title">KPM Hadist</h5>
                    <ul className="list-unstyled">
                      <li><a href="/" className="footer-link">Home</a></li>
                      <li><a href="/profile" className="footer-link">Profile</a></li>
                      <li><a href="/mbg" className="footer-link">MBG</a></li>
                      <li><a href="#articles" className="footer-link">Articles</a></li>
                    </ul>
                  </div>

                  {/* Kolom Kanan */}
                  <div className="footer-col">
                    <h5 className="footer-title">KPM Hadist</h5>
                    <ul className="list-unstyled">
                      <li>
                        <i className="bi bi-building-fill footer-icon"></i>
                        Jl. Laksamana 1 Blok H-16, Perum. Ayodya, Putat, Kec. Purwodadi, Kab. Grobogan, Indonesia.
                      </li>
                      <li>
                        <i className="bi bi-telephone-fill footer-icon"></i>
                        (+62) 8112759300
                      </li>
                      <li>
                        <i className="bi bi-envelope-fill footer-icon"></i>
                        kpмhadist@gmail.com
                      </li>
                      <li>
                        <i className="bi bi-instagram footer-icon"></i>
                        kpmhadist
                      </li>
                    </ul>
                  </div>
                </div>
              </footer>

            </>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mbg" element={<MBG />} />
      </Routes>
    </Router>
  );
}
