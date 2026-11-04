import React, { useState } from 'react';
import { FAQ_ITEMS, COMPANY_DETAILS } from '../data/content';
import { 
  Mail, 
  MapPin, 
  Clock, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight,
  GraduationCap,
  Building2,
  HelpCircle
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeChannel, setActiveChannel] = useState<'faculty' | 'trainer' | 'info'>('info');
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    channel: 'info',
    organization: '',
    academicStage: 'Undergraduate',
    message: ''
  });

  const channelConfig = {
    faculty: {
      title: 'Academic & Student Inquiries',
      email: COMPANY_DETAILS.facultyEmail,
      badge: 'For Students & Scholars',
      icon: GraduationCap,
      description: 'Subject coaching (Commerce, Engineering, Sciences, Arts), PhD thesis support, journal publishing, and parent-student career counselling.',
    },
    trainer: {
      title: 'Corporate & Institutional Workshops',
      email: COMPANY_DETAILS.trainerEmail,
      badge: 'For Organizations & Colleges',
      icon: Building2,
      description: 'Custom corporate training, executive communication masterclasses, college placement bootcamps, and faculty development programs (FDP).',
    },
    info: {
      title: 'General & Admissions Desk',
      email: COMPANY_DETAILS.email,
      badge: 'General & Centre Inquiries',
      icon: HelpCircle,
      description: 'Physical centre visits in Chennai & Trichy, online admission procedures, fees, and general institutional inquiries.',
    }
  };

  const currentChannel = channelConfig[activeChannel];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full space-y-16 md:space-y-24 pb-20 animate-fadeIn">
      {/* 1. Header */}
      <section className="pt-20 md:pt-28 max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-gold-dark font-semibold">
            <span className="w-6 h-[1.5px] bg-gold" />
            <span>Dedicated Contact Desks</span>
          </div>

          <h1 className="font-heading font-bold text-3xl sm:text-5xl md:text-6xl text-foreground tracking-tight leading-[1.12]">
            Every academic journey starts with a conversation.
          </h1>

          <p className="text-secondary text-sm md:text-base leading-relaxed pt-1">
            To give your request the fastest and most specialized attention, choose the department that aligns with your requirements.
          </p>
        </div>
      </section>

      {/* 2. Channel Selector Cards (Lite Grey Cards bg-[#EFEFEF]) */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {(['faculty', 'trainer', 'info'] as const).map((key) => {
            const ch = channelConfig[key];
            const isSelected = activeChannel === key;
            const IconComponent = ch.icon;

            return (
              <button
                key={key}
                onClick={() => {
                  setActiveChannel(key);
                  setFormData(prev => ({ ...prev, channel: key }));
                }}
                className={`p-6 rounded-card text-left transition-all flex flex-col justify-between space-y-4 ${
                  isSelected
                    ? 'bg-[#14213D] text-white shadow-md'
                    : 'bg-[#EFEFEF] text-foreground shadow-xs hover:shadow-sm'
                }`}
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      isSelected ? 'bg-white/15 text-gold-light' : 'bg-white/80 text-secondary'
                    }`}>
                      {ch.badge}
                    </span>
                    <IconComponent className={`w-5 h-5 ${isSelected ? 'text-gold-light' : 'text-navy'}`} />
                  </div>

                  <h3 className="font-heading font-bold text-base leading-snug">
                    {ch.title}
                  </h3>

                  <p className={`text-xs leading-relaxed ${isSelected ? 'text-white/80' : 'text-secondary'}`}>
                    {ch.description}
                  </p>
                </div>

                <div className="pt-2">
                  <span className={` text-xs font-semibold ${isSelected ? 'text-gold-light' : 'text-navy'}`}>
                    {ch.email}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Main Split (Lite Grey Cards bg-[#EFEFEF]) */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
                Official Directory
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground tracking-tight">
                Operating Schedule & Reach
              </h2>
              <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                Focused weekday hours to provide our learners with genuine, unhurried attention.
              </p>
            </div>

            <div className="space-y-4">
              {/* Working Hours Card (Lite Grey bg-[#EFEFEF]) */}
              <div className="p-5 rounded-card bg-[#EFEFEF] shadow-xs flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-btn bg-white flex items-center justify-center text-navy shrink-0 mt-0.5 shadow-xs">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground text-sm">
                    Mon–Fri Working Days
                  </h4>
                  <p className="text-xs text-navy font-semibold mt-0.5">
                    Monday to Friday: 9:00 AM – 8:00 PM IST
                  </p>
                  <p className="text-[11px] text-secondary mt-1">
                    Closed on Saturdays & Sundays for faculty review and research.
                  </p>
                </div>
              </div>

              {/* Physical Hubs (Lite Grey bg-[#EFEFEF]) */}
              <div className="p-5 rounded-card bg-[#EFEFEF] shadow-xs flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-btn bg-white flex items-center justify-center text-navy shrink-0 mt-0.5 shadow-xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-foreground text-sm">
                    Centres & Virtual Reach
                  </h4>
                  <div className="text-xs text-secondary space-y-0.5">
                    <p><strong className="text-foreground">Chennai Centre:</strong> Academic & Mentoring Hub</p>
                    <p><strong className="text-foreground">Trichy Centre:</strong> Regional Academic Centre</p>
                    <p><strong className="text-foreground">Online Learning:</strong> Virtual classrooms across India & abroad</p>
                  </div>
                </div>
              </div>

              {/* Workspace Emails Summary (Lite Grey bg-[#EFEFEF]) */}
              <div className="p-5 rounded-card bg-[#EFEFEF] shadow-xs space-y-2.5">
                <h4 className="font-heading font-bold text-foreground text-sm flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-navy" />
                  <span>Workspace Email Directory</span>
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between pb-1">
                    <span className="text-secondary">Students & PhD Desk:</span>
                    <a href={`mailto:${COMPANY_DETAILS.facultyEmail}`} className=" font-semibold text-navy hover:underline">
                      {COMPANY_DETAILS.facultyEmail}
                    </a>
                  </div>
                  <div className="flex items-center justify-between pb-1">
                    <span className="text-secondary">Corporate & Workshops:</span>
                    <a href={`mailto:${COMPANY_DETAILS.trainerEmail}`} className=" font-semibold text-navy hover:underline">
                      {COMPANY_DETAILS.trainerEmail}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-secondary">Admissions & General:</span>
                    <a href={`mailto:${COMPANY_DETAILS.email}`} className=" font-semibold text-navy hover:underline">
                      {COMPANY_DETAILS.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form (Lite Grey Card bg-[#EFEFEF]) */}
          <div className="lg:col-span-7">
            <div className="p-7 md:p-9 rounded-card bg-[#EFEFEF] shadow-sm space-y-5">
              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground">
                    Inquiry Routed Successfully
                  </h3>
                  <p className="text-secondary text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-foreground">{formData.name}</span>. Your inquiry has been delivered directly to <strong className="text-navy">{currentChannel.email}</strong>. Our mentors will respond within 24 hours.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="h-10 px-7 rounded-btn bg-navy text-white text-xs font-semibold tracking-wide hover:bg-navy-hover transition-colors shadow-xs"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-gold-dark">
                      Destination Desk
                    </span>
                    <h3 className="font-heading font-bold text-xl text-foreground mt-0.5">
                      {currentChannel.title}
                    </h3>
                    <p className="text-xs text-secondary mt-0.5">
                      Routing to: <strong className="text-navy ">{currentChannel.email}</strong>
                    </p>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase text-secondary mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anandha Krishnan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-10 px-3.5 text-xs bg-white text-foreground border border-border/80 rounded-btn focus:outline-none focus:border-navy"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase text-secondary mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="anand@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-10 px-3.5 text-xs bg-white text-foreground border border-border/80 rounded-btn focus:outline-none focus:border-navy"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold uppercase text-secondary mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 94440 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full h-10 px-3.5 text-xs bg-white text-foreground border border-border/80 rounded-btn focus:outline-none focus:border-navy"
                      />
                    </div>
                  </div>

                  {activeChannel === 'faculty' && (
                    <div>
                      <label className="block text-[10px] font-semibold uppercase text-secondary mb-1">
                        Academic Level
                      </label>
                      <select
                        value={formData.academicStage}
                        onChange={(e) => setFormData({ ...formData, academicStage: e.target.value })}
                        className="w-full h-10 px-3 text-xs bg-white border border-border/80 rounded-btn focus:outline-none focus:border-navy"
                      >
                        <option>Higher Secondary (11th & 12th)</option>
                        <option>Undergraduate (B.Com, BBA, B.Tech, B.Sc)</option>
                        <option>Postgraduate & MBA Coursework</option>
                        <option>PhD Thesis & Research Mentoring</option>
                        <option>Journal Paper Publication Advisory</option>
                        <option>Parent & Student Joint Counselling</option>
                      </select>
                    </div>
                  )}

                  {activeChannel === 'trainer' && (
                    <div>
                      <label className="block text-[10px] font-semibold uppercase text-secondary mb-1">
                        Company or Educational Institution
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. ABC Technologies / University Dept"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full h-10 px-3 text-xs bg-white border border-border/80 rounded-btn focus:outline-none focus:border-navy"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-[10px] font-semibold uppercase text-secondary mb-1">
                      Your Message or Requirements *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Share details about your subject, goals, schedule, or team size..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 text-xs bg-white border border-border/80 rounded-btn focus:outline-none focus:border-navy resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-11 rounded-btn bg-navy text-white text-xs font-semibold tracking-wide hover:bg-navy-hover transition-colors shadow-xs flex items-center justify-center space-x-2"
                  >
                    <span>Send Message to {currentChannel.email}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions (Lite Grey Cards bg-[#EFEFEF]) */}
      <section className="max-w-grid mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
              Clarifications
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground tracking-tight mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-secondary text-xs sm:text-sm mt-1">
              Honest answers to the questions we hear most often from students, parents, and partners.
            </p>
          </div>

          <div className="space-y-2.5">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-card bg-[#EFEFEF] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between hover:bg-[#E5E7EB] transition-colors"
                  >
                    <span className="font-heading font-semibold text-sm sm:text-base text-foreground pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-navy shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-secondary leading-relaxed animate-fadeIn">
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
