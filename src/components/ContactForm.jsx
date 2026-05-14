import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, User, Mail, MessageSquare } from 'lucide-react';

const FORMSPREE_ID = 'mvzdnbkk';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); 

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 md:px-0 relative">
      {status === 'success' ? (
        <div className="flex flex-col items-center justify-center py-20 gap-6 text-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-3xl font-black text-on-surface tracking-tighter">Message Sent!</h3>
          <p className="text-on-surface/50 font-medium">I'll get back to you as soon as possible. 🙏</p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-4 px-8 py-3 rounded-2xl bg-white/10 text-on-surface text-xs font-black uppercase tracking-widest hover:bg-white/20 transition-all"
          >
            Send Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface/30">
              <User className="w-5 h-5" />
            </div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-on-surface placeholder:text-on-surface/30 focus:outline-none focus:border-primary/50 transition-all text-sm md:text-base"
            />
          </div>

          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface/30">
              <Mail className="w-5 h-5" />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-on-surface placeholder:text-on-surface/30 focus:outline-none focus:border-primary/50 transition-all text-sm md:text-base"
            />
          </div>

          <div className="relative">
            <div className="absolute left-4 top-5 text-on-surface/30">
              <MessageSquare className="w-5 h-5" />
            </div>
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-on-surface placeholder:text-on-surface/30 focus:outline-none focus:border-primary/50 transition-all resize-none text-sm md:text-base"
            />
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-3 px-5 py-4 bg-red-500/10 border border-red-500/20 rounded-2xl">
              <AlertCircle className="w-5 h-5 text-red-400" />
              <span className="text-red-400 text-sm">Something went wrong. Please try again.</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="flex items-center justify-center gap-3 w-full bg-primary text-surface py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs md:text-sm shadow-xl shadow-primary/20 hover:bg-on-surface hover:text-surface transition-all disabled:opacity-50"
          >
            {status === 'loading' ? (
              <div className="w-5 h-5 rounded-full border-2 border-surface/30 border-t-surface animate-spin" />
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
