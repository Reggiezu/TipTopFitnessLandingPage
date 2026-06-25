import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, MessageSquare } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "(555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: Mail,
      title: "Email",
      value: "hello@tiptopfitness.com",
      link: "mailto:hello@tiptopfitness.com"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "123 Fitness Ave, Los Angeles, CA 90001",
      link: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Hours",
      value: "Mon-Sat: 6am - 8pm",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@tiptopfitness",
      link: "https://instagram.com"
    },
    {
      icon: MessageSquare,
      name: "TikTok",
      handle: "@tiptopfitness",
      link: "https://tiktok.com"
    },
    {
      icon: Facebook,
      name: "Facebook",
      handle: "/tiptopfitness",
      link: "https://facebook.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl mb-4" style={{ color: '#0ABAB5' }}>
            Get In Touch
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? Want to schedule a session? I'd love to hear from you!
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                      placeholder="john@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="booking">Booking Question</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="nutrition">Nutrition Consultation</option>
                    <option value="online">Online Coaching</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 resize-none"
                    placeholder="Tell me about your fitness goals and how I can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-white rounded-lg transition-all hover:shadow-lg disabled:opacity-50"
                  style={{ backgroundColor: '#0ABAB5' }}
                >
                  {submitted ? "Message Sent! ✓" : "Send Message"}
                </button>
              </form>

              {submitted && (
                <div
                  className="mt-4 p-4 rounded-lg text-white text-center"
                  style={{ backgroundColor: '#0ABAB5' }}
                >
                  Thank you for your message! I'll get back to you within 24 hours.
                </div>
              )}
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl mb-4">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-3">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: '#E6F9F8' }}
                      >
                        <Icon className="w-5 h-5" style={{ color: '#0ABAB5' }} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">{item.title}</div>
                        <div className="text-sm">{item.value}</div>
                      </div>
                    </div>
                  );

                  return item.link ? (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:bg-gray-50 p-2 rounded-lg transition-colors"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index} className="p-2">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl mb-4">Follow Me</h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: '#0ABAB5' }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm">{social.name}</div>
                        <div className="text-xs text-gray-500">{social.handle}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Note */}
            <div 
              className="rounded-2xl shadow-sm p-6 text-white"
              style={{ backgroundColor: '#0ABAB5' }}
            >
              <h3 className="text-lg mb-2">Response Time</h3>
              <p className="text-sm text-white/90">
                I typically respond to all inquiries within 24 hours. 
                For urgent matters, please call directly.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl mb-6 text-center" style={{ color: '#0ABAB5' }}>
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="mb-2">Do you offer free consultations?</h3>
              <p className="text-sm text-gray-600">
                Yes! I offer a free 15-minute phone consultation to discuss your goals 
                and determine the best service for you.
              </p>
            </div>
            <div>
              <h3 className="mb-2">What is your cancellation policy?</h3>
              <p className="text-sm text-gray-600">
                Please provide at least 24 hours notice for cancellations. 
                Late cancellations may be subject to a fee.
              </p>
            </div>
            <div>
              <h3 className="mb-2">Do you train beginners?</h3>
              <p className="text-sm text-gray-600">
                Absolutely! I work with all fitness levels, from complete beginners 
                to advanced athletes.
              </p>
            </div>
            <div>
              <h3 className="mb-2">Where are sessions held?</h3>
              <p className="text-sm text-gray-600">
                Sessions can be held at my private studio, your home gym, 
                or virtually via video call.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
