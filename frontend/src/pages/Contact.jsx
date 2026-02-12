import { useState } from "react";
import { submitInquiry } from "../services/api";

function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    message: "", // Keeping optional message field
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      await submitInquiry(form);
      //  Updated confirmation message - exact wording
      setSuccess("Thank you for reaching out to ScholarGo. We will contact you shortly.");
      setForm({
        fullName: "",
        phone: "",
        email: "",
        city: "",
        state: "",
        message: "",
      });
    } catch {
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="section-padding bg-white">
      <div className="container-pro">
        <div className="max-w-2xl mx-auto">
          <div className="pro-card pro-card-hover">
            <h2 className="trust-heading">Contact Us</h2>
            <p className="trust-subheading">Get in touch for personalized scholarship guidance</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  name="fullName"
                  placeholder="Enter your full name"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  className="pro-input"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+91 9876XXXXXX"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="pro-input"
                />
              </div>

              {/* Email ID */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email ID *
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="pro-input"
                />
              </div>

              {/* Address: City & State - Side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    name="city"
                    placeholder="e.g. New Delhi"
                    value={form.city}
                    onChange={handleChange}
                    required
                    className="pro-input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State *
                  </label>
                  <input
                    name="state"
                    placeholder="e.g. Delhi"
                    value={form.state}
                    onChange={handleChange}
                    required
                    className="pro-input"
                  />
                </div>
              </div>

              {/* Message - Optional, keeping for better user experience */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message (optional)
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us about your educational goals..."
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  className="pro-input"
                />
              </div>

              {/*  Button Text: Submit Inquiry */}
              <button 
                type="submit"
                disabled={loading}
                className="pro-btn-primary w-full"
              >
                {loading ? (
                  <div className="loading-dots">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                ) : (
                  "Submit Inquiry"
                )}
              </button>

              {/*  Updated confirmation message - exact wording */}
              {success && (
                <div className="success-message">
                   {success}
                </div>
              )}

              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to our Privacy Policy. Your information is secure.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;