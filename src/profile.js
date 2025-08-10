import React from 'react';
import Navbar from './components/navbar';

const founders = [
  {
    name: 'DR. IR. H. ADY SETIAWAN, S.H., M.H., M.M., M.T.',
    image: '/images/ady-setiawan.svg'
  },
  {
    name: 'SUKARNO, SE.',
    image: '/images/sukarno.svg'
  }
];

const management = [
  { name: 'SUKARNO, SE.', title: 'Chairman', image: '/images/sukarno.svg' },
  { name: 'DR. IR. H. ADY SETIAWAN, S.H., M.H., M.M., M.T.', title: 'General Chairman', image: '/images/ady-setiawan.svg' },
  { name: 'NUR KAMID', title: 'Chairman', image: '/images/nur-kamid.svg' },
  { name: 'EDY MULYADI', title: 'Secretary', image: '/images/edy-mulyadi.svg' },
  { name: 'EKO SUPRIYADI GL', title: 'Treasurer', image: '/images/eko-supriyadi.svg' }
];

const coreValues = [ 
  { term: 'Ṣhalawat', desc: 'Upholding Islamic values towards Allah and the Prophet Muhammad SAW' },
  { term: 'Ṣiddīq', desc: 'We serve with unwavering dedication, honesty, loyalty, and a commitment to just and fair practices.' },
  { term: 'Originality', desc: 'We constantly strive to produce new and impactful innovations and inventions.' },
  { term: 'Reporting', desc: 'We prioritize rigorous evaluation, monitoring, and balanced processes in all our work.' },
  { term: 'Measured Time', desc: 'We operate with precision, using dimensions that are both appropriate and measurable to ensure effectiveness.' }
];

const cardStyle = {
  backgroundColor: '#fff',
  border: 'none',
  borderRadius: '8px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  padding: '1rem',
  textAlign: 'center'
};

export default function Profile() {
  return (
    <div>
      <Navbar active="profile" />
      <section className="py-5">
        <div className="container">
          <h2 className="text-center" style={{ color: '#006C2C', fontWeight: '700' }}>KPM HADIST</h2>
          <h1 className="text-center mb-4" style={{ color: '#006C2C', fontWeight: '800' }}>Profile</h1>

          {/* Founder */}
          <h4 className="text-center mb-3" style={{ fontWeight: '600' }}>Founder</h4>
          <div className="row justify-content-center mb-5">
            {founders.map((f, i) => (
              <div className="col-10 col-md-4 mb-3" key={i}>
                <div style={cardStyle}>
                  <img src={f.image} alt={f.name} className="img-fluid mb-2" />
                  <p style={{ fontWeight: '600', marginBottom: 0 }}>{f.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Management */}
          <h4 className="text-center mb-4" style={{ fontWeight: '700', fontSize: '2rem' }}>Management</h4>
          <div className="d-flex flex-wrap justify-content-center gap-4 mb-5">
            {management.map((m, i) => (
              <div
                key={i}
                style={{
                  flex: '0 1 calc(33.33% - 2rem)', // 3 per row
                  maxWidth: '440px',
                  height: '340px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '1rem',
                  textAlign: 'center',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'start'
                }}
              >
                <div style={{ height: '180px', marginBottom: '1rem' }}>
                  <img
                    src={m.image}
                    alt={m.name}
                    style={{
                      maxHeight: '100%',
                      width: 'auto',
                      objectFit: 'contain',
                      display: 'block',
                      margin: '0 auto'
                    }}
                  />
                </div>
                <p style={{ fontWeight: '600', fontSize: '1rem', marginBottom: '0.25rem' }}>{m.name}</p>
                <small className="text-muted">{m.title}</small>
              </div>
            ))}
          </div>


          {/* Core Values */}
          <h4 className="text-center mb-4" style={{ color: '#006C2C', fontWeight: '800', fontSize: '2rem' }}>
            Core Values
          </h4>
          <div className="container mb-5" style={{ maxWidth: '1000px' }}>
            {coreValues.map((cv, idx) => (
              <div key={idx} className="row align-items-start mb-3">
                {/* Term */}
                <div className="col-md-3 d-flex">
                  <div style={{ width: '6px', backgroundColor: '#FFD55A', marginRight: '0.75rem', height: '1.5rem', marginTop: '6px' }} />
                  <p style={{ fontWeight: '700', fontSize: '1.2rem', margin: 0 }}>{cv.term}</p>
                </div>
                {/* Desc */}
                <div className="col-md-9">
                  <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: '1.5' }}>{cv.desc}</p>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Contact Us */}
      <section className="contact-section py-5">
        <div className="container-fluid">
          <div className="row align-items-start">
            {/* Left: Title */}
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <h4 className="contact-title">Contact <br /> Us!</h4>
            </div>
            {/* Right: Details */}
            <div className="col-12 col-md-8">
              <ul className="contact-list list-unstyled">
                <li>
                  <img src="/images/location.svg" alt="Address" /> 
                  Jl. Laksamana 1 Blok H-16, Perum. Ayodya, Putat, Kec. Purwodadi, Kab. Grobogan, Indonesia.
                </li>
                <li>
                  <img src="/images/email.svg" alt="Email" /> 
                  kpmhadist@gmail.com
                </li>
                <li>
                  <img src="/images/phone.svg" alt="Phone" /> 
                  (+62) 8112759300
                </li>
                <li>
                  <img src="/images/instagram.svg" alt="Instagram" /> 
                  @kpmhadist
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
