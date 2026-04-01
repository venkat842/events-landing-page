/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Star, Clock, Utensils, Handshake, Quote, Instagram, Facebook, MapPin } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-surface selection:bg-primary/20 selection:text-primary">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-md flex justify-between items-center px-8 py-4 no-line-rule tonal-shift">
        <div className="text-2xl font-bold tracking-widest text-primary uppercase font-headline">
          PS EVENTS
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <a className="text-secondary font-semibold border-b-2 border-secondary font-label uppercase tracking-widest text-sm" href="#">Home</a>
          <a className="text-primary hover:text-secondary transition-colors font-label uppercase tracking-widest text-sm" href="#services">Services</a>
          <a className="text-primary hover:text-secondary transition-colors font-label uppercase tracking-widest text-sm" href="#portfolio">Portfolio</a>
          <a className="text-primary hover:text-secondary transition-colors font-label uppercase tracking-widest text-sm" href="#reviews">Reviews</a>
          <a className="text-primary hover:text-secondary transition-colors font-label uppercase tracking-widest text-sm" href="#contact">Contact</a>
        </div>
        <a 
          href="https://wa.me/919849501706?text=Hi%20PS%20Events%2C%20I'm%20interested%20in%20booking%20a%20consultation%20for%20my%20upcoming%20event."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-on-primary px-6 py-2 rounded-sm font-label uppercase tracking-tighter hover:bg-on-tertiary-container transition-all duration-300 scale-95 active:scale-90"
        >
          Book Consultation
        </a>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Grand Indian Mandap" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq24VCa2guN9tK9ghXxQ1WIcMYACbm0xptxRVjvZcGvG9w4g6ND6GqiIdmW8-QziRSpL8YHliCKeJhXJzcWzaee4A2w37HowBXdPE27wLlxUbKRovBHz3Ql_tqYTGDmzs_ksQDO_t8FURmVpuuYILJ4vWKTKYV0HYH_a8d9Up-UXvUeCa0ZzdfDz8TvkXI5R8zRA3dvxv4xTF5_EjigF7YRpuvwb7AsRbBnFCf1ZoMlNzadwqxmhUkpHTpWU8XT0HcyFTZ2rXawu7i"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center space-x-2 bg-secondary-container/80 backdrop-blur-sm px-4 py-1 mb-6 rounded-sm">
              <Star className="w-4 h-4 text-secondary fill-secondary" />
              <span className="text-on-secondary-container font-label text-xs font-bold uppercase tracking-widest">⭐️ 4.9/5 Rating based on 27 Google Reviews</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-headline font-bold text-primary leading-[0.9] tracking-tighter mb-8">
              Designing <br/><span className="italic font-normal">Unforgettable</span> <br/>Events in Kakinada.
            </h1>
            <p className="text-xl text-on-surface-variant max-w-lg mb-10 leading-relaxed">
              From intimate birthdays to grand weddings, we bring your vision to life with precision, passion, and unparalleled elegance.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://wa.me/919849501706?text=Hi%20PS%20Events%2C%20I'm%20interested%20in%20planning%20an%20event%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-4 rounded-sm font-label uppercase font-bold tracking-widest hover:scale-105 transition-transform duration-300"
              >
                Start Planning
              </a>
              <button className="border border-outline-variant/40 text-primary px-10 py-4 rounded-sm font-label uppercase font-bold tracking-widest hover:bg-surface-container-high transition-colors">
                View Gallery
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block relative"
          >
            <div className="absolute -top-12 -left-12 w-64 h-80 bg-surface-container-highest z-0"></div>
            <img 
              alt="Wedding Detail" 
              className="relative z-10 w-full h-[500px] object-cover shadow-2xl" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNZx_GBj1gDPV3H5D8xDGtFT7oTwkomHenigyOWbPnzhtsNY1E0z0vqtspoZbR-9GjYDIzSLr84T5esenSC3OMom70Q-55Tr4SYQyBkls0S89a4aEWVPLARfbfF6YyIOThijUqN2gfU99G-3i5piZ_HWIaFjNLF_gz0KOp2fjbd1iunASzJd2-bpZGEA9tb8oCH4RUFKM3AhA5Twuay6nIFkIxVarEYxktRF-DNRYXztvF6VvTOmwOHyaL6hf6R1XcluQ5Dic82h_u"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </header>

      {/* Highlights Section */}
      <section id="services" className="py-24 bg-surface-container">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-16">
            {/* Highlight 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-surface mb-8 flex items-center justify-center rounded-full transition-transform group-hover:scale-110 duration-500 shadow-sm">
                <Clock className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-headline text-2xl text-primary mb-4">Impeccable Timing</h3>
              <p className="text-on-surface-variant leading-relaxed">24/7 Availability and seamless coordination to ensure every moment of your event is perfectly paced and stress-free.</p>
            </motion.div>
            {/* Highlight 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-surface mb-8 flex items-center justify-center rounded-full transition-transform group-hover:scale-110 duration-500 shadow-sm">
                <Utensils className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-headline text-2xl text-primary mb-4">Exquisite Catering</h3>
              <p className="text-on-surface-variant leading-relaxed">Experience our signature Panasapattu Biryani and a curated menu of local delicacies prepared by master chefs.</p>
            </motion.div>
            {/* Highlight 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-surface mb-8 flex items-center justify-center rounded-full transition-transform group-hover:scale-110 duration-500 shadow-sm">
                <Handshake className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-headline text-2xl text-primary mb-4">Affordable Luxury</h3>
              <p className="text-on-surface-variant leading-relaxed">We believe in quality service that respects your budget. High-end aesthetics meets practical financial planning.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Bento Grid */}
      <section id="portfolio" className="py-24 bg-surface">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="font-label text-secondary uppercase tracking-[0.3em] text-sm font-bold block mb-4">Portfolio</span>
              <h2 className="font-headline text-5xl md:text-7xl text-primary font-bold">Our Latest <br/>Celebrations.</h2>
            </div>
            <p className="max-w-md text-on-surface-variant mb-4">A glimpse into the dreams we've realized. From traditional Kakinada weddings to modern gala nights.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[800px]">
            <div className="md:col-span-8 relative overflow-hidden group h-[400px] md:h-auto">
              <img 
                alt="Grand Wedding Setup" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9K074OjHheLyMPNMqFXdkwPFC0te272UIbbXlpO41l_b6_yPnMsKQwfWZSn9oXeP-D1qpE4Oo9lPnEMedKA3oA4Qrwn943zBhQ36IO3epFFwbDK_Q9__WhCXjpBU1d-4Ap4a5gYD3pCXSKyAL5GIkAdQoUNGyooMg3FZntZq6_MjR7ok3BJ3upj5xLMeHbuo9Ynyo7xO-BTvi8PZ3v1BX7CeVcKNGYXmrCTqOazKOiS8XqfhSldMS2wLn44xUuaLIwCY9roR7K6k7"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="text-on-primary">
                  <p className="font-label uppercase tracking-widest text-xs mb-2">Wedding Decor</p>
                  <h4 className="font-headline text-2xl">The Golden Pavilion</h4>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 relative overflow-hidden group h-[400px] md:h-auto">
              <img 
                alt="Catering Excellence" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDygRVePpsI-72CTZeUK-fY2cN9vKYmLiAhPr2QFHKKqn_UN10TInWG1vtavE3LTw_eDzEdr0KpOzgv_KgSt80L0TrlqhxTeq4asvSgDdxadcgEd2igMhy4awntsVX3wx4zvHdGxgt_6AymRPpStqmFrFCZ52fN2yAraJr5kedD2DoHyexYPTo88M77bb6mTYJOhupchwSwX8Y9B9O8Mhi-MRxzZFLT_a6EDBH1sccgo6M2w-1T8soyYucptnLkta28HAHsRAh3c5WN"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="text-on-primary">
                  <p className="font-label uppercase tracking-widest text-xs mb-2">Catering</p>
                  <h4 className="font-headline text-2xl">Authentic Flavors</h4>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 relative overflow-hidden group h-[400px] md:h-auto">
              <img 
                alt="Reception Night" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiRRyfDTugp2pPEjHBVKkL1pDIrlmCTtWA27S8SWwpxh9bKvIeVXfCvJtFyxSWfm2YpythRwYoFmEbZ5riAY583l3Goxhe7Tp6l3L6Uk3Ri1gAHzDTwpAERtuu9TJWYhd2lWyEzckSKNQs74MtFOtbdptAAkVg10i5GAoK48QswcPEeRfOeHSnlVp30yociCHrLID_wajEHm5M-GxEYv72_oMlJl4F_QMZ9CswFFldCEeVXhZQn4dgzNj5klD4iBCiBePdVJ1rWe63"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="text-on-primary">
                  <p className="font-label uppercase tracking-widest text-xs mb-2">Reception</p>
                  <h4 className="font-headline text-2xl">Starlit Soiree</h4>
                </div>
              </div>
            </div>
            <div className="md:col-span-8 relative overflow-hidden group h-[400px] md:h-auto">
              <img 
                alt="Mandap Details" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy5meWr7-LQ6liLyE6CjQYUt3Q8K8qfau4VQLzdjm1rF1yyqyEtTrpRteHPDrSt70bQTIsInIS8LpWddZovOIkKEcmKa_IVGjAxaYw_bQbxwskHriZY5d7bnhWl6Que-QV0mB5Ay3S69kciXqn4WEQPSmsYnupepvW63hQ0MfAmsbVBhvZaEjhw9naO-OX5wKYV8pNvo1A2lh120mqtx70BJbsA_DEjwta30AmPidWex7IqZ0QQarzWwG6FbTEG77SRTElH0hBUp-X"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="text-on-primary">
                  <p className="font-label uppercase tracking-widest text-xs mb-2">Tradition</p>
                  <h4 className="font-headline text-2xl">Heritage Mandap</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-8 text-center mb-20">
          <h2 className="font-headline text-5xl text-primary font-bold mb-4">Client Love</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>
        <div className="container mx-auto px-8 grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface-container-lowest p-12 relative flex flex-col justify-between shadow-sm"
          >
            <Quote className="absolute top-8 right-8 w-16 h-16 text-secondary/10" />
            <p className="text-on-surface italic leading-loose mb-10 relative z-10">
              "The team at PS Events made our wedding truly magical. Their attention to detail and the catering was the highlight of the evening. Highly recommended!"
            </p>
            <div>
              <h5 className="font-bold text-primary font-label uppercase tracking-widest">Mounika Priyadarshini Telu</h5>
              <div className="flex space-x-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                ))}
              </div>
            </div>
          </motion.div>
          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-surface-container-lowest p-12 relative flex flex-col justify-between shadow-sm"
          >
            <Quote className="absolute top-8 right-8 w-16 h-16 text-secondary/10" />
            <p className="text-on-surface italic leading-loose mb-10 relative z-10">
              "Exceptional management! They handled everything from decor to guest coordination perfectly. The Panasapattu Biryani is a must-try."
            </p>
            <div>
              <h5 className="font-bold text-primary font-label uppercase tracking-widest">Veerendra Kumar Bommidi</h5>
              <div className="flex space-x-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                ))}
              </div>
            </div>
          </motion.div>
          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-surface-container-lowest p-12 relative flex flex-col justify-between shadow-sm"
          >
            <Quote className="absolute top-8 right-8 w-16 h-16 text-secondary/10" />
            <p className="text-on-surface italic leading-loose mb-10 relative z-10">
              "Professional, creative, and very easy to work with. They transformed a simple venue into something straight out of a movie."
            </p>
            <div>
              <h5 className="font-bold text-primary font-label uppercase tracking-widest">Rajith Reddy</h5>
              <div className="flex space-x-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Bar */}
      <div className="bg-primary py-12">
        <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <h2 className="text-on-primary font-headline text-3xl md:text-4xl">Ready to plan your dream event?</h2>
          <a className="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-sm font-bold uppercase tracking-[0.2em] hover:bg-on-tertiary-container hover:text-on-primary transition-all duration-300" href="tel:09849501706">
            Call us now: 098495 01706
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer id="contact" className="bg-stone-100 w-full pt-12 pb-6 flex flex-col items-center space-y-8 px-6 text-center tonal-shift surface-container-low">
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-headline text-primary mb-2">PS EVENTS & WEDDING PLANNERS</h3>
          <p className="font-body text-sm tracking-wide uppercase text-stone-600 max-w-md">
            Valasapakala, Vakalapudi, Kakinada, Andhra Pradesh.
          </p>
        </div>
        <a 
          href="https://maps.app.goo.gl/EuxY6RaP8kBpc8Ds7"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-4xl h-48 rounded-lg overflow-hidden grayscale contrast-125 opacity-70 hover:opacity-100 transition-opacity block"
        >
          <img 
            alt="Kakinada Map Location" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMoOmmsr-BdgVhsk7ykPZFgK5BRr7ibN9uLy78pdmqoEYtIsHuiti0lKXzOu1drDDE78ClDxMTqAmRcdZk6Plm-GeseCmF-MF7nTeZchIbHfGyYSpBNWsN3IRd2mljZWro8NdWgOABn2yCd65XrNsA4CpJ2Ga_Ac8C0pbn2ZqMJPyDzJo1IgzD7M4C3DusoNKm4Yu1XYwRArP4WnexNtIf6e4QXNZolMWc_LiZg0JNf6jm7Q3dfQAjXl93ThRlxlewjJWQ0vukSKyA"
            referrerPolicy="no-referrer"
          />
        </a>
        <div className="flex space-x-8 text-secondary font-body text-sm tracking-wide uppercase">
          <a className="hover:text-primary transition-opacity underline-offset-4 hover:underline flex items-center gap-2" href="#">
            <Instagram className="w-4 h-4" /> Instagram
          </a>
          <a className="hover:text-primary transition-opacity underline-offset-4 hover:underline flex items-center gap-2" href="#">
            <Facebook className="w-4 h-4" /> Facebook
          </a>
          <a 
            className="hover:text-primary transition-opacity underline-offset-4 hover:underline flex items-center gap-2" 
            href="https://maps.app.goo.gl/EuxY6RaP8kBpc8Ds7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin className="w-4 h-4" /> Google Maps
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <span className="px-3 py-1 bg-surface border border-outline-variant/20 rounded-full text-[10px] uppercase font-bold text-primary tracking-[0.2em]">LGBTQ+ Friendly</span>
        </div>
        <div className="pt-8 w-full border-t border-outline-variant/10 text-[10px] text-stone-400 font-label uppercase tracking-widest">
          © 2024 PS EVENTS & WEDDING PLANNERS. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}
