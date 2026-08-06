import React, { useState } from 'react';
import { FAQ_ITEMS, COMPANY_DETAILS } from '../data/content';
import { GlowCard } from '../components/GlowCard';
import { 
  Mail, 
  MapPin, 
  Clock, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    stage: 'Undergraduate',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full space-y-24 md:space-y-32 pb-24 animate-fadeIn">
      {/* Header */}
      <section className="pt-20 md:pt-32 max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-content space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
            Get In Touch
          </span>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-foreground tracking-tight leading-tight">
            Every academic journey starts with a conversation.
          </h1>

          <p className="text-secondary text-lg md:text-xl leading-relaxed-custom max-w-prose-custom">
            If you are weighing up your options, unsure where to begin, or want to understand how we could support your goals, write to us. There is no obligation, only a discussion.
          </p>
        </div>
      </section>

      {/* Split Layout: Contact Info (Left) & Minimal Form (Right) */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16">
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground tracking-tight">
                Reach & Locations
              </h2>
              <p className="text-secondary text-sm mt-1 leading-relaxed">
                Connect with our mentors face to face in Tamil Nadu, or join online from anywhere across India and abroad.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-btn border border-border bg-surface-muted flex items-center justify-center text-navy shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground text-sm">
                    Direct Email
                  </h4>
                  <a 
                    href={`mailto:${COMPANY_DETAILS.email}`}
                    className="text-secondary hover:text-navy text-sm font-medium transition-colors"
                  >
                    {COMPANY_DETAILS.email}
                  </a>
                  <p className="text-xs text-secondary mt-1">
                    We respond to all inquiries within 24 hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-btn border border-border bg-surface-muted flex items-center justify-center text-navy shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-heading font-semibold text-foreground text-sm">
                    Centres & Reach
                  </h4>
                  <div className="text-xs text-secondary space-y-1">
                    <p><strong className="text-foreground">Chennai Centre:</strong> Physical mentoring hub</p>
                    <p><strong className="text-foreground">Trichy Centre:</strong> Regional academic centre</p>
                    <p><strong className="text-foreground">Online Learning:</strong> Accessible Pan India & Global</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-btn border border-border bg-surface-muted flex items-center justify-center text-navy shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground text-sm">
                    Mentoring Hours
                  </h4>
                  <p className="text-xs text-secondary leading-relaxed mt-1">
                    Monday to Saturday: 9:00 AM to 8:00 PM IST<br />
                    Flexible evening & weekend sessions arranged for working professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (Navy Blue GlowCard #14213D) */}
          <div className="lg:col-span-7">
            <GlowCard backgroundColor="#14213D" className="w-full shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4 text-white">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto text-white">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white">
                    Message Sent Successfully
                  </h3>
                  <p className="text-white/80 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{formData.name}</span>. Our mentoring team will review your details and write back to <span className="font-semibold text-white">{formData.email}</span> promptly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="h-[48px] px-8 rounded-btn bg-white text-navy text-sm font-bold hover:bg-white/90 transition-colors shadow-xs"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-white p-2">
                  <div>
                    <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-white tracking-tight">
                      Send Us a Message
                    </h3>
                    <p className="text-white/80 text-xs md:text-sm mt-1">
                      Fill out the brief form below and we will contact you.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-11 px-4 text-sm bg-white/10 text-white placeholder-white/50 border border-white/20 rounded-btn focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="rahul@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full h-11 px-4 text-sm bg-white/10 text-white placeholder-white/50 border border-white/20 rounded-btn focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 94440 00000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full h-11 px-4 text-sm bg-white/10 text-white placeholder-white/50 border border-white/20 rounded-btn focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                        Academic / Professional Stage
                      </label>
                      <select
                        value={formData.stage}
                        onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                        className="w-full h-11 px-3 text-sm bg-white/10 text-white border border-white/20 rounded-btn focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                      >
                        <option value="Higher Secondary" className="bg-[#14213D] text-white">Higher Secondary (11th & 12th)</option>
                        <option value="Undergraduate" className="bg-[#14213D] text-white">Undergraduate Study</option>
                        <option value="Postgraduate / MBA" className="bg-[#14213D] text-white">Postgraduate / MBA</option>
                        <option value="Research Scholar" className="bg-[#14213D] text-white">PhD / Doctoral Research</option>
                        <option value="Corporate / Institution" className="bg-[#14213D] text-white">College Department / Corporate L&D</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                        Your Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about the subject, topic, or guidance you are seeking..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-3 text-sm bg-white/10 text-white placeholder-white/50 border border-white/20 rounded-btn focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full h-[48px] px-8 rounded-btn bg-white text-navy text-sm font-bold hover:bg-white/90 transition-colors flex items-center justify-center space-x-2 shadow-md"
                    >
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Simple FAQ Accordion Section */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="pt-16 space-y-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
              Common Inquiries
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-secondary text-sm mt-2">
              Questions we hear often from students, parents, and working professionals.
            </p>
          </div>

          <div className="space-y-4 max-w-content">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-card border border-border bg-background overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between space-x-4 hover:bg-surface-hover transition-colors"
                  >
                    <span className="font-heading font-bold text-base text-foreground tracking-tight">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-secondary shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-navy' : ''
                    }`} />
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 text-secondary text-sm leading-relaxed pt-4 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
