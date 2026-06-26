import { useState } from "react";
import { Mail, Phone, Instagram } from "lucide-react";

// ✅ Replace this with your actual Formspree form ID
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;

const TEAL = "#0ABAB5";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", inquiryType: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 py-10 text-center shadow-sm">
        <h1 className="text-3xl font-medium mb-2" style={{ color: TEAL }}>
          Get In Touch
        </h1>
        <p className="text-gray-500 text-sm">
          Questions, free consultations, or just say hi — Tip will get back to you personally.
        </p>
      </div>

      <div className="max-w-lg mx-auto px-4 py-8 space-y-6">
        {/* Quick contact */}
        <div className="flex justify-center gap-6">
          <a href="mailto:trainwithtiptop@gmail.com" className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-700">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#E6FAFA" }}>
              <Mail className="w-5 h-5" style={{ color: TEAL }} />
            </div>
            <span className="text-xs">Email</span>
          </a>
          <a href="tel:+16016088089" className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-700">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#E6FAFA" }}>
              <Phone className="w-5 h-5" style={{ color: TEAL }} />
            </div>
            <span className="text-xs">Call</span>
          </a>
          <a href="https://instagram.com/tiptopfitnesss" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-700">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#E6FAFA" }}>
              <Instagram className="w-5 h-5" style={{ color: TEAL }} />
            </div>
            <span className="text-xs">Instagram</span>
          </a>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          {status === "success" ? (
            <div className="text-center py-8">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#E6FAFA" }}
              >
                <Mail className="w-8 h-8" style={{ color: TEAL }} />
              </div>
              <h2 className="text-lg font-medium text-gray-900 mb-1">Message sent!</h2>
              <p className="text-gray-500 text-sm">Tip will get back to you soon.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-medium"
                style={{ color: TEAL }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {status === "error" && (
                <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl">
                  Something went wrong. Please try again or email directly.
                </div>
              )}

              <div>
                <label className="text-sm text-gray-600 mb-1 block">Name *</label>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2"
                  style={{ "--tw-ring-color": TEAL } as React.CSSProperties}
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1 block">Email *</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1 block">Phone</label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(optional)"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1 block">What can Tip help with? *</label>
                <select
                  name="inquiryType"
                  required
                  value={form.inquiryType}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 bg-white"
                >
                  <option value="">Select an option...</option>
                  <option value="Free Consultation">Free Consultation</option>
                  <option value="1-on-1 Session">1-on-1 Session</option>
                  <option value="Training Package">Training Package</option>
                  <option value="Virtual Training">Virtual Training</option>
                  <option value="General Question">General Question</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1 block">Message *</label>
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell Tip about your goals..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-3 rounded-xl text-white font-medium transition-opacity disabled:opacity-60"
                style={{ backgroundColor: TEAL }}
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}