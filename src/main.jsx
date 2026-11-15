import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  Phone, MessageCircle, MapPin, Clock3, Tv, ShieldCheck, Wrench,
  House, Zap, CheckCircle2, ArrowRight, Languages, BadgeCheck,
  Menu, X, ChevronRight
} from 'lucide-react'
import './style.css'

const PHONE_PRIMARY = '9030334405'
const PHONE_SECONDARY = '9849194574'
const WHATSAPP = '9030334405'
const whatsappLink = `https://wa.me/91${WHATSAPP}?text=${encodeURIComponent('Hello Mr. Basha Shaik, I need TV service in Hyderabad. Please contact me.')}`

const brands = ['SAMSUNG', 'LG', 'SONY', 'Panasonic', 'mi Xiaomi', 'TCL', 'Haier', 'VU', 'Hisense', 'OnePlus']
const services = [
  'LCD / LED / Smart TV repair',
  'TV not turning on / power issues',
  'No display, lines on screen or picture issues',
  'No sound and audio troubleshooting',
  'Smart TV software, setup and connectivity',
  'General inspection and fault diagnosis',
]
const areas = ['Madhapur', 'Kukatpally', 'Miyapur', 'Kondapur', 'Gachibowli', 'Ameerpet', 'Secunderabad', 'Dilsukhnagar', 'LB Nagar', 'Mehdipatnam', 'Uppal', 'All other Hyderabad areas']

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const closeMenu = () => setMenuOpen(false)
  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span><MapPin size={15}/> Hyderabad – All Areas</span>
          <i />
          <span><Clock3 size={15}/> 24/7 by appointment</span>
          <i />
          <span><Languages size={15}/> Telugu · Hindi · English</span>
          <div className="top-actions">
            <a href={`tel:${PHONE_PRIMARY}`}><Phone size={15}/> {PHONE_PRIMARY}</a>
            <a className="wa-top" href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={16}/> WhatsApp</a>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-icon"><Tv size={31}/></span>
            <span><strong>Mr. Basha Shaik</strong><small>TV Service Expert – Hyderabad</small></span>
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X/> : <Menu/>}
          </button>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            {['Home', 'About', 'Services', 'Brands', 'Areas', 'Contact'].map(item =>
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
            )}
            <a className="nav-call" href={`tel:${PHONE_PRIMARY}`}><Phone size={17}/> Call Now</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot"/> INDEPENDENT TV SERVICE PROFESSIONAL</div>
              <h1>LCD / LED / SMART TV <span>Service in Hyderabad</span></h1>
              <p className="hero-sub">Experienced hands. Honest guidance. Convenient home service.</p>
              <div className="experience-row">
                <div className="experience-icon"><BadgeCheck size={34}/></div>
                <div><strong>25+ Years</strong><small>of TV servicing experience</small></div>
                <div className="experience-divider"/>
                <div className="home-visit"><House size={30}/><span>Home service<br/>by appointment</span></div>
              </div>
              <div className="hero-buttons">
                <a className="btn btn-primary" href={`tel:${PHONE_PRIMARY}`}><Phone size={18}/> Call for TV Service</a>
                <a className="btn btn-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={18}/> WhatsApp Enquiry</a>
              </div>
              <p className="micro-note">Inspection charges applicable. Please confirm the visit charge before booking.</p>
            </div>
            <div className="hero-visual">
              <div className="photo-frame">
                <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1100&q=85" alt="Technician working carefully with electronic equipment" />
                <div className="photo-label"><Wrench size={16}/> TV repair & troubleshooting</div>
              </div>
              <div className="floating-card"><span className="floating-check"><ShieldCheck size={22}/></span><span><b>Personal service</b><small>Independent technician</small></span></div>
            </div>
          </div>
        </section>

        <section className="brand-strip" id="brands">
          <div className="container">
            <div className="section-kicker">TV BRANDS SERVICED</div>
            <h2>Support for major television brands</h2>
            <div className="brand-grid">{brands.map((brand, i) => <div className={`brand-word brand-${i}`} key={brand}>{brand}</div>)}</div>
            <p className="brand-note">Brand names are shown for service compatibility reference; this is an independent service and not an authorised brand service centre.</p>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-grid">
            <div><House/><span><b>Home Service</b><small>Across Hyderabad</small></span></div>
            <div><Zap/><span><b>Appointment Based</b><small>Call to arrange a visit</small></span></div>
            <div><ShieldCheck/><span><b>25+ Years</b><small>Hands-on experience</small></span></div>
            <div><Languages/><span><b>Local Languages</b><small>Telugu, Hindi & English</small></span></div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="about-photo">
              <img src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=900&q=85" alt="Modern television in a home living room" />
              <div className="years-stamp"><strong>25+</strong><span>YEARS OF<br/>EXPERIENCE</span></div>
            </div>
            <div className="about-copy">
              <div className="section-kicker">ABOUT THE TECHNICIAN</div>
              <h2>Meet <span>Mr. Basha Shaik</span></h2>
              <p className="lead">A dedicated, independent TV service professional with more than 25 years of hands-on experience.</p>
              <p>Mr. Basha Shaik provides repair and troubleshooting support for LCD, LED and Smart TVs across Hyderabad. Customers can contact him directly, explain the issue and arrange a convenient home-service appointment.</p>
              <div className="language-pill"><Languages size={17}/> Telugu · Hindi · English</div>
              <a href="#contact" className="text-link">Get in touch <ChevronRight size={17}/></a>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <div className="section-kicker">HOW WE CAN HELP</div>
              <h2>TV repair & service support</h2>
              <p>Describe the problem over a call or WhatsApp to discuss the next step.</p>
            </div>
            <div className="service-layout">
              <div className="service-list">{services.map(service => <div className="service-item" key={service}><CheckCircle2/><span>{service}</span></div>)}</div>
              <aside className="inspection-card">
                <div className="inspection-icon"><Wrench size={28}/></div>
                <h3>Need a TV check-up?</h3>
                <p>Home visits are arranged by appointment. Inspection charges are applicable.</p>
                <a className="btn btn-primary full" href={whatsappLink} target="_blank" rel="noreferrer">Ask about a visit <ArrowRight size={17}/></a>
              </aside>
            </div>
          </div>
        </section>

        <section className="areas-section" id="areas">
          <div className="container areas-grid">
            <div><div className="section-kicker light">SERVICE COVERAGE</div><h2>Serving customers across Hyderabad</h2><p>Home service appointments available throughout Hyderabad. Contact us to confirm availability for your locality.</p><div className="area-label"><MapPin size={19}/> Hyderabad, Telangana</div></div>
            <div className="area-tags">{areas.map(area => <span key={area}>{area}</span>)}</div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-card">
            <div className="contact-copy"><div className="section-kicker light">BOOK A SERVICE ENQUIRY</div><h2>Let's get your TV working again.</h2><p>Call directly or send a WhatsApp message with your TV brand, model and issue.</p><div className="contact-facts"><span><Clock3/> 24/7 by appointment</span><span><MapPin/> Hyderabad – all areas</span><span><Languages/> Telugu · Hindi · English</span></div></div>
            <div className="contact-actions">
              <a className="contact-number" href={`tel:${PHONE_PRIMARY}`}><Phone/><span><small>CALL MR. BASHA SHAIK</small><b>{PHONE_PRIMARY}</b></span></a>
              <a className="contact-number" href={`tel:${PHONE_SECONDARY}`}><Phone/><span><small>ALTERNATE CONTACT</small><b>{PHONE_SECONDARY}</b></span></a>
              <a className="btn btn-whatsapp full" href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle/> Chat on WhatsApp</a>
              <small className="charge-note">Inspection charges applicable. Confirm charges and appointment details directly before service.</small>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand"><div className="footer-logo"><Tv size={30}/></div><div><b>Mr. Basha Shaik</b><small>TV Service Expert – Hyderabad</small></div><p>Independent LCD, LED & Smart TV service with 25+ years of experience.</p></div>
          <div><h4>Quick Links</h4><a href="#about">About</a><a href="#services">Services</a><a href="#brands">Supported Brands</a><a href="#areas">Service Areas</a></div>
          <div><h4>Contact</h4><a href={`tel:${PHONE_PRIMARY}`}>{PHONE_PRIMARY}</a><a href={`tel:${PHONE_SECONDARY}`}>{PHONE_SECONDARY}</a><a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp Enquiry</a><span>Hyderabad, Telangana</span></div>
          <div><h4>Service Commitment</h4><span>Personal attention</span><span>Clear communication</span><span>Appointment-based visits</span></div>
        </div>
        <div className="copyright">© {new Date().getFullYear()} Mr. Basha Shaik TV Service. All rights reserved. <span>Independent service provider · Hyderabad</span></div>
      </footer>

      <div className="mobile-bar"><a href={`tel:${PHONE_PRIMARY}`}><Phone size={18}/> Call Now</a><a href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={18}/> WhatsApp</a></div>
    </>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
