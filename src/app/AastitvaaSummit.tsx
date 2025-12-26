'use client';

import { useEffect, useState } from 'react';
import { Mail, Instagram, MessageCircle, Heart, Users, Mic2, Calendar, MapPin, ChevronDown, Quote, Sparkles, Shield, Target, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { ScrollReveal } from '../components/ScrollReveal';
import { AnimatedBackground } from '../components/AnimatedBackground';

export default function AastitvaaSummit() {
  const [email, setEmail] = useState('');
  const [formState, setFormState] = useState('idle');
  const [buttonText, setButtonText] = useState('Join Waitlist');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // Question form state
  const [questionName, setQuestionName] = useState('');
  const [questionEmail, setQuestionEmail] = useState('');
  const [questionText, setQuestionText] = useState('');
  const [questionFormState, setQuestionFormState] = useState('idle');
  const [questionButtonText, setQuestionButtonText] = useState('Submit Question');

  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz9-fn1suJhple0UZjc8JJzBe1sVMN4u7PrB6SzvmbLiWV9qE2hNlJNvJ86MxrCxJd_/exec';

  const testimonials = [
    {
      quote: "I wanted to be a musician, but I told my parents I'm preparing for IIT. This summit finally gave me courage to speak up.",
      name: "Ananya, 19",
      dream: "Aspiring Musician"
    },
    {
      quote: "Every day I draw in secret. Art is my soul, but engineering is my 'career'. Time to break the silence.",
      name: "Rahul, 21",
      dream: "Hidden Artist"
    },
    {
      quote: "They think I'm studying law. I'm actually building a startup. Aastitvaa helped me find my voice.",
      name: "Priya, 22",
      dream: "Secret Entrepreneur"
    }
  ];

  const struggles = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Suppressed Ambitions",
      description: "Dreams whispered in solitude, never shared at the dinner table"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Fear of Disappointment",
      description: "The weight of expectations crushing authentic aspirations"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Career Stereotypes",
      description: "Doctor, Engineer, Lawyer — the only 'acceptable' choices"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Find Your Voice",
      description: "This summit is your safe space to speak your truth"
    }
  ];

  const handleWaitlistSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('loading');
    setButtonText('Joining...');

    try {
      const formData = new FormData();
      formData.append('formType', 'waitlist');
      formData.append('email', email);

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      });

      setFormState('success');
      setButtonText('You are on the list');
      setEmail('');

      setTimeout(() => {
        setFormState('idle');
        setButtonText('Join Waitlist');
      }, 4000);
    } catch {
      setFormState('error');
      setButtonText('Try Again');
      setTimeout(() => {
        setFormState('idle');
        setButtonText('Join Waitlist');
      }, 3000);
    }
  };

  const handleQuestionSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuestionFormState('loading');
    setQuestionButtonText('Submitting...');

    try {
      const formData = new FormData();
      formData.append('formType', 'question');
      formData.append('name', questionName || 'Anonymous');
      formData.append('email', questionEmail);
      formData.append('question', questionText);

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      });

      setQuestionFormState('success');
      setQuestionButtonText('Question Submitted');
      setQuestionName('');
      setQuestionEmail('');
      setQuestionText('');

      setTimeout(() => {
        setQuestionFormState('idle');
        setQuestionButtonText('Submit Question');
      }, 4000);
    } catch {
      setQuestionFormState('error');
      setQuestionButtonText('Try Again');
      setTimeout(() => {
        setQuestionFormState('idle');
        setQuestionButtonText('Submit Question');
      }, 3000);
    }
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .animation-delay-2000 { animation-delay: 2s; }
      .animation-delay-4000 { animation-delay: 4s; }
      .animation-delay-6000 { animation-delay: 6s; }
    `;
    document.head.appendChild(style);

    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      document.head.removeChild(style);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="antialiased text-gray-800 min-h-screen flex flex-col relative">
      <AnimatedBackground />
      {/* Navbar */}
      <nav className="w-full py-4 px-6 md:px-12 flex justify-between items-center glass-card fixed top-0 z-50 border-b border-brand-green/10">
        <div className="flex items-center gap-1">
          <Image
            src="https://i.ibb.co/1fgg4y3b/1.png"
            alt="Aastitvaa Icon"
            width={48}
            height={48}
            className="object-contain"
          />
          <Image
            src="https://i.ibb.co/Zrr521g/aastitva-name.png"
            alt="Aastitvaa Wordmark"
            width={160}
            height={40}
            className="h-10 object-contain"
          />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#theme" className="text-gray-700 hover:text-brand-red transition-colors font-medium">The Theme</a>
          <a href="#struggles" className="text-gray-700 hover:text-brand-red transition-colors font-medium">Why This Matters</a>
          <a href="#event" className="text-gray-700 hover:text-brand-red transition-colors font-medium">Event Details</a>
          <a href="#register" className="bg-brand-red text-white px-6 py-2 rounded-full font-bold btn-premium shimmer">
            Join Now
          </a>
        </div>

        <div className="flex md:hidden gap-4">
          <a href="mailto:aastitva_official@gmail.com" className="text-brand-green hover:text-brand-orange transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/aastitvaa_official_/" className="text-brand-green hover:text-brand-orange transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden pt-40 pb-20">
        {/* Animated Background Blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-brand-red/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-brand-orange/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-brand-green/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Edition Badge */}
          <div className="inline-flex items-center px-5 py-2 rounded-full glass-card text-brand-red font-bold text-sm border border-brand-red/30 mb-6 animate-float">
            <Sparkles className="w-4 h-4 mr-2" />
            FIRST EDITION
          </div>

          {/* Main Title */}
          <ScrollReveal direction='up' delay={0.2} width="100%">
            <div className="space-y-4 mb-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-italiana font-bold tracking-tight">
                <span className="text-brand-red">AASTITVAA</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-brand-orange to-brand-red">
                  SUMMIT
                </span>
              </h1>
            </div>
          </ScrollReveal>

          {/* Theme Statement - The Hook */}
          <ScrollReveal direction='up' delay={0.4} width='100%'>
            <div className="max-w-4xl mx-auto mb-12">
              <div className="glass-card rounded-2xl p-8 shadow-premium-lg relative">
                <Quote className="absolute top-4 left-4 w-8 h-8 text-brand-orange/40" />
                <Quote className="absolute bottom-4 right-4 w-8 h-8 text-brand-orange/40 rotate-180" />
                <h2 className="text-2xl md:text-4xl font-italiana font-bold text-gray-800 leading-tight">
                  "Why Do Indian Youth{' '}
                  <span className="text-brand-red underline decoration-brand-orange decoration-4 underline-offset-4">
                    Hide Their Real Dreams
                  </span>{' '}
                  From Parents?"
                </h2>
                <p className="mt-4 text-gray-600 text-lg md:text-xl font-serif">
                  A summit about silent struggles, suppressed ambitions, and the courage to speak up.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-[fadeInUp_0.8s_ease-out_0.6s_forwards] opacity-0">
            <a 
              href="#register" 
              className="bg-brand-red text-white px-10 py-4 rounded-full font-bold text-lg btn-premium shimmer flex items-center gap-2 glow-red"
            >
              Reserve Your Spot <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#theme" 
              className="glass-card text-brand-green px-10 py-4 rounded-full font-bold text-lg border-2 border-brand-green hover:bg-brand-green hover:text-white transition-all flex items-center gap-2 hover-scale"
            >
              Learn More <ChevronDown className="w-5 h-5" />
            </a>
          </div>

          {/* Event Quick Info */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards] opacity-0">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5 text-brand-red" />
              <span className="font-medium">Coming Soon</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-5 h-5 text-brand-green" />
              <span className="font-medium">New Delhi, India</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-5 h-5 text-brand-orange" />
              <span className="font-medium">500+ Expected Attendees</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-brand-red" />
        </div>
      </header>

      {/* Theme Section */}
      <section id="theme" className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">The Central Theme</span>
            <ScrollReveal width="100%">
              <h2 className="text-4xl md:text-5xl font-italiana font-bold mt-4 mb-2 py-2 text-gray-800">
                Breaking the Silence
              </h2>
            </ScrollReveal>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Every year, millions of Indian youth suppress their true aspirations. They smile at the dinner table while their 
              <span className="text-brand-red font-semibold"> real dreams remain locked away</span>. 
              This summit is about giving voice to those whispered ambitions.
            </p>
          </div>

          {/* Emotional Statistics */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card bg-gradient-to-br from-brand-red/5 to-brand-red/10 rounded-2xl p-8 text-center border border-brand-red/10 card-hover">
              <div className="text-5xl md:text-6xl font-bold gradient-text-premium mb-2">67%</div>
              <p className="text-gray-700 font-medium">of Indian students pursue careers chosen by parents</p>
            </div>
            <div className="glass-card bg-gradient-to-br from-brand-orange/5 to-brand-orange/10 rounded-2xl p-8 text-center border border-brand-orange/10 card-hover">
              <div className="text-5xl md:text-6xl font-bold text-brand-orange mb-2">4 in 5</div>
              <p className="text-gray-700 font-medium">youth feel they cannot openly discuss career dreams at home</p>
            </div>
            <div className="glass-card bg-gradient-to-br from-brand-green/5 to-brand-green/10 rounded-2xl p-8 text-center border border-brand-green/10 card-hover">
              <div className="text-5xl md:text-6xl font-bold text-brand-green mb-2">89%</div>
              <p className="text-gray-700 font-medium">wish they had a safe space to express their true aspirations</p>
            </div>
          </div>

          {/* Testimonial Carousel */}
          <div className="max-w-3xl mx-auto glass-card rounded-2xl p-8 md:p-12 shadow-premium-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-red/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <Quote className="w-12 h-12 text-brand-red/30 mb-4" />
              <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-6 min-h-[100px] transition-all duration-500">
                "{testimonials[activeTestimonial].quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center text-white font-bold">
                  {testimonials[activeTestimonial].name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-800">{testimonials[activeTestimonial].name}</p>
                  <p className="text-brand-orange text-sm">{testimonials[activeTestimonial].dream}</p>
                </div>
              </div>

              {/* Carousel Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === activeTestimonial ? 'bg-brand-red w-8' : 'bg-brand-red/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Struggles Section */}
      <section id="struggles" className="py-24 bg-gradient-to-b from-brand-cream to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-9xl font-bold text-brand-red rotate-12">?</div>
          <div className="absolute bottom-10 right-10 text-9xl font-bold text-brand-green -rotate-12">?</div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-brand-red font-bold tracking-widest uppercase text-sm">Why This Matters</span>
            <ScrollReveal width="100%">
              <h2 className="text-4xl md:text-5xl font-italiana font-bold mt-4 mb-2 py-2 text-gray-800">
                The Silent Struggles
              </h2>
            </ScrollReveal>
            <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
              This summit addresses the unspoken battles that Indian youth fight every day
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {struggles.map((struggle, idx) => (
              <div 
                key={idx}
                className="glass-card rounded-2xl p-8 shadow-premium card-hover group"
              >
                <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center ${
                  idx === 0 ? 'bg-brand-red/10 text-brand-red' :
                  idx === 1 ? 'bg-brand-orange/10 text-brand-orange' :
                  idx === 2 ? 'bg-brand-green/10 text-brand-green' :
                  'bg-brand-red/10 text-brand-red'
                } group-hover:scale-110 transition-transform`}>
                  {struggle.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{struggle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{struggle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-brand-cream relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="md:w-1/2 relative">
               <div className="absolute inset-0 bg-brand-orange/20 rounded-2xl transform translate-x-4 translate-y-4"></div>
               <Image 
                 src="/image.png" 
                 alt="Raghav Juneja - Founder" 
                 width={500} 
                 height={600} 
                 className="rounded-2xl shadow-xl relative z-10 w-full object-cover"
               />
            </div>
            <div className="md:w-1/2 space-y-6">
              <span className="text-brand-red font-bold tracking-widest uppercase text-sm">About the Founder</span>
              <h2 className="text-4xl font-serif font-bold text-gray-800">Raghav Juneja</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Raghav Juneja is the Founder of <span className="font-semibold text-brand-red">Aastitvaa</span>, a youth-driven platform created with one clear belief — every young voice deserves a space to be heard.
                </p>
                <p>
                  With a deep interest in youth issues, society, politics, and leadership, Raghav started Aastitvaa to break the silence around topics that are often ignored, avoided, or considered taboo.
                </p>
                <p>
                  He strongly believes that today’s youth is not directionless — it is <span className="italic">under-represented</span>. Through Aastitvaa summits and discussions, he aims to give students and young minds a platform to express opinions, challenge narratives, and think independently.
                </p>
                <div className="bg-white/50 p-6 rounded-xl border-l-4 border-brand-orange my-6">
                  <p className="italic text-gray-600">
                    Under his leadership, Aastitvaa successfully hosted its first summit on “Politics as a Career – Taboo or Necessity”, receiving 40+ registrations within just two days, proving the hunger among youth for meaningful conversations.
                  </p>
                </div>
                <p className="font-medium text-gray-800">
                  Raghav’s vision is to make Aastitvaa India’s most trusted youth platform, where dialogue leads to clarity, confidence, and change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section id="event" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-green font-bold tracking-widest uppercase text-sm">What Awaits You</span>
            <ScrollReveal width="100%">
              <h2 className="text-4xl md:text-5xl font-italiana font-bold mt-4 mb-2 py-2 text-gray-800">
                Experience the Summit
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-brand-red to-brand-red/80 rounded-2xl p-8 text-white text-center transform hover:scale-105 transition-all shadow-xl">
              <Mic2 className="w-12 h-12 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Powerful Speakers</h3>
              <p className="opacity-90">
                Real people who broke free from expectations. Parents and children who bridged the gap. Stories that will move you.
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-green to-brand-green/80 rounded-2xl p-8 text-white text-center transform hover:scale-105 transition-all shadow-xl">
              <MessageCircle className="w-12 h-12 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Open Mic Sessions</h3>
              <p className="opacity-90">
                Your stage to finally speak your truth. A judgment-free zone to share your hidden dreams and suppressed stories.
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-orange to-brand-orange/80 rounded-2xl p-8 text-white text-center transform hover:scale-105 transition-all shadow-xl">
              <Users className="w-12 h-12 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Community Building</h3>
              <p className="opacity-90">
                Connect with others who understand. Build a support system of like-minded dreamers ready to take the leap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-24 bg-brand-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-brand-red/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-brand-orange/10 text-brand-orange font-bold text-sm mb-4 tracking-wider uppercase">
              Limited Seats Available
            </span>
            <h2 className="text-4xl md:text-5xl font-italiana font-bold text-gray-800 mb-4 py-2">
              Be Part of the Movement
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Register your interest for Aastitvaa Summit and submit questions you want us to address.
              <br />
              <span className="font-semibold text-brand-red">Dates coming soon</span>
            </p>
          </div>

          {/* Two Column Forms */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Waitlist Form */}
            <div className="glass-card rounded-3xl p-8 md:p-10 shadow-premium-lg">
              <div className="mb-8">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-brand-red" />
                </div>
                <h3 className="text-2xl font-italiana font-bold text-gray-800 mb-2">
                  Join the Waitlist
                </h3>
                <p className="text-gray-600 text-sm">
                  Be the first to know when registrations open. We will notify you with all event details.
                </p>
              </div>

              <form onSubmit={handleWaitlistSignup} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white/50 focus:bg-white custom-input transition-all text-base"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className={`w-full text-white font-bold px-8 py-4 rounded-xl text-base btn-premium flex items-center justify-center gap-2 ${
                    formState === 'success' ? 'bg-brand-green' : formState === 'error' ? 'bg-red-500' : 'bg-brand-red'
                  }`}
                >
                  {buttonText}
                  {formState === 'idle' && <ArrowRight className="w-5 h-5" />}
                </button>
              </form>

              {formState === 'success' && (
                <div className="mt-6 bg-brand-green/10 border border-brand-green/20 rounded-xl p-4 text-center">
                  <p className="text-brand-green font-semibold">
                    Welcome aboard. We will be in touch soon.
                  </p>
                </div>
              )}

              <p className="text-center text-gray-500 text-sm mt-6">
                Join 500+ youth ready to speak up
              </p>
            </div>

            {/* Question Submission Form */}
            <div className="glass-card rounded-3xl p-8 md:p-10 shadow-premium-lg">
              <div className="mb-8">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="text-2xl font-italiana font-bold text-gray-800 mb-2">
                  Submit a Question
                </h3>
                <p className="text-gray-600 text-sm">
                  Have a topic you want discussed at the summit? Share your question or suggestion.
                </p>
              </div>

              <form onSubmit={handleQuestionSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={questionName}
                    onChange={(e) => setQuestionName(e.target.value)}
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white custom-input transition-all text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    value={questionEmail}
                    onChange={(e) => setQuestionEmail(e.target.value)}
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white custom-input transition-all text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Question or Topic
                  </label>
                  <textarea
                    placeholder="What topic would you like us to discuss?"
                    required
                    rows={4}
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white custom-input transition-all text-base resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={questionFormState === 'loading'}
                  className={`w-full text-white font-bold px-8 py-4 rounded-xl text-base btn-premium flex items-center justify-center gap-2 ${
                    questionFormState === 'success' ? 'bg-brand-green' : questionFormState === 'error' ? 'bg-red-500' : 'bg-brand-orange'
                  }`}
                >
                  {questionButtonText}
                  {questionFormState === 'idle' && <ArrowRight className="w-5 h-5" />}
                </button>
              </form>

              {questionFormState === 'success' && (
                <div className="mt-6 bg-brand-green/10 border border-brand-green/20 rounded-xl p-4 text-center">
                  <p className="text-brand-green font-semibold">
                    Thank you for your submission. Your voice matters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Powerful Quote Section */}
      <section className="py-20 bg-brand-red text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal width='100%'>
            <blockquote className="text-3xl md:text-5xl font-italiana font-bold leading-tight max-w-4xl mx-auto">
              "Your dreams are valid.
              <br />
              <span className="text-brand-orange">Your voice matters.</span>
              <br />
              It's time to be heard."
            </blockquote>
          </ScrollReveal>
          <p className="mt-8 text-xl opacity-80">— Aastitvaa Summit</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="https://i.ibb.co/1fgg4y3b/1.png"
                  alt="Aastitvaa Icon"
                  width={40}
                  height={40}
                  className="object-contain brightness-0 invert"
                />
                <span className="font-serif text-2xl font-bold">Aastitvaa</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering Indian youth to find their identity and voice their true aspirations without fear.
              </p>
            </div>

            {/* Event Info */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-brand-orange">Event Details</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-brand-red" />
                  <span>Coming Soon</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-brand-green" />
                  <span>New Delhi, India</span>
                </div>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-brand-orange">Connect With Us</h4>
              <div className="flex gap-4">
                <a
                  href="mailto:aastitva_official@gmail.com"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/aastitvaa_official_/"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <p className="mt-4 text-gray-400 text-sm">
                aastitva_official@gmail.com
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Aastitvaa Summit. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Made with ❤️ for Indian Youth
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
