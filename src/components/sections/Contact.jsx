import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Section from "../ui/Section";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "qazimubashir623@gmail.com",
      href: "mailto:qazimubashir623@gmail.com"
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+92 XXX XXXXXXX",
      href: "tel:+92XXXXXXXXX"
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Pakistan",
      href: null
    }
  ];

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        "service_0tekf3i",
        "template_516knmb", 
        form.current,
        "ZIc_xbFV58dqniieF"
      );
      
      setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
      form.current.reset();
    } catch {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" background="primary">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Let's Connect
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hello, feel free to reach out!
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-blue-500/20 text-blue-300 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                  {info.icon}
                </div>
                <div>
                  <div className="text-sm text-gray-400">{info.label}</div>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-white hover:text-blue-300 transition-colors duration-300"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-white">{info.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-gray-300 mb-4">Follow me on social media:</p>
            <div className="flex gap-4">
              {[
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/qazi-mubashir-hussain-ba864a286/' },
                { name: 'GitHub', url: 'https://github.com/Mubashir2134' },
                { name: 'Fiverr', url: 'https://www.fiverr.com/sellers/qazimubashir623/edit' }
              ].map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open(social.url, '_blank')}
                >
                  {social.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="p-8">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-vertical"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            {/* Submit Status */}
            {submitStatus && (
              <div className={`flex items-center gap-3 p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                  : 'bg-red-500/20 text-red-300 border border-red-500/30'
              }`}>
                {submitStatus.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
                {submitStatus.message}
              </div>
            )}

            <Button
              type="submit"
              variant="accent"
              size="lg"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <FaEnvelope />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </Card>
      </div>
    </Section>
  );
};

export default Contact;