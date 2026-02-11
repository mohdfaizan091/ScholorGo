import { useState } from "react";
import { submitInquiry } from "../services/api";

function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    message: "",
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
      setSuccess("Inquiry submitted successfully. We will contact you.");
      setForm({
        fullName: "",
        phone: "",
        email: "",
        city: "",
        state: "",
        message: "",
      });
    } catch {
      alert("Submission failed. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <input name="fullName" placeholder="Full Name" onChange={handleChange} value={form.fullName} required />
        <input name="phone" placeholder="Phone" onChange={handleChange} value={form.phone} required />
        <input name="email" placeholder="Email" onChange={handleChange} value={form.email} required />
        <input name="city" placeholder="City" onChange={handleChange} value={form.city} required />
        <input name="state" placeholder="State" onChange={handleChange} value={form.state} required />
        <textarea name="message" placeholder="Message" onChange={handleChange} value={form.message} />
        <button disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
      </form>

      {success && <p>{success}</p>}
    </div>
  );
}

export default Contact;
