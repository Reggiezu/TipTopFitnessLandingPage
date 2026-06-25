import { useState } from "react";
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from "lucide-react";

export function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4" style={{ color: '#0ABAB5' }}>
            Book Your Session
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take the first step towards your fitness goals. Schedule a session and 
            let's create a personalized plan just for you.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-gray-700 mb-2">
                  <User className="w-4 h-4" style={{ color: '#0ABAB5' }} />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  style={{ focusRing: '#0ABAB5' }}
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-700 mb-2">
                  <Mail className="w-4 h-4" style={{ color: '#0ABAB5' }} />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-gray-700 mb-2">
                <Phone className="w-4 h-4" style={{ color: '#0ABAB5' }} />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Session Details */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 mb-2">
                <MessageSquare className="w-4 h-4" style={{ color: '#0ABAB5' }} />
                Service Type
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-white"
              >
                <option value="">Select a service</option>
                <option value="1-on-1">1-on-1 Personal Training</option>
                <option value="group">Small Group Training</option>
                <option value="nutrition">Nutrition Consultation</option>
                <option value="assessment">Fitness Assessment</option>
                <option value="online">Online Coaching</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-gray-700 mb-2">
                  <Calendar className="w-4 h-4" style={{ color: '#0ABAB5' }} />
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-700 mb-2">
                  <Clock className="w-4 h-4" style={{ color: '#0ABAB5' }} />
                  Preferred Time
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-white"
                >
                  <option value="">Select a time</option>
                  <option value="6am">6:00 AM</option>
                  <option value="7am">7:00 AM</option>
                  <option value="8am">8:00 AM</option>
                  <option value="9am">9:00 AM</option>
                  <option value="10am">10:00 AM</option>
                  <option value="12pm">12:00 PM</option>
                  <option value="4pm">4:00 PM</option>
                  <option value="5pm">5:00 PM</option>
                  <option value="6pm">6:00 PM</option>
                  <option value="7pm">7:00 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-gray-700 mb-2">
                <MessageSquare className="w-4 h-4" style={{ color: '#0ABAB5' }} />
                Additional Notes
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 resize-none"
                placeholder="Tell us about your fitness goals, any injuries or health concerns..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 text-white rounded-lg transition-all hover:shadow-lg disabled:opacity-50"
              style={{ backgroundColor: '#0ABAB5' }}
            >
              {submitted ? "Booking Submitted! ✓" : "Book Session"}
            </button>
          </form>

          {submitted && (
            <div
              className="mt-6 p-4 rounded-lg text-white text-center"
              style={{ backgroundColor: '#0ABAB5' }}
            >
              Thank you! We'll contact you shortly to confirm your session.
            </div>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6">
            <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#0ABAB5' }}>
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="mb-2">Flexible Scheduling</h3>
            <p className="text-sm text-gray-600">
              Morning, afternoon, and evening slots available
            </p>
          </div>

          <div className="p-6">
            <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#0ABAB5' }}>
              <User className="w-6 h-6 text-white" />
            </div>
            <h3 className="mb-2">Personalized Plans</h3>
            <p className="text-sm text-gray-600">
              Custom workouts designed for your goals
            </p>
          </div>

          <div className="p-6">
            <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#0ABAB5' }}>
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h3 className="mb-2">Ongoing Support</h3>
            <p className="text-sm text-gray-600">
              24/7 messaging and progress tracking
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
