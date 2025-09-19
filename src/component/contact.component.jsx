
import { useState } from "react";
import { FaLinkedin, FaGithub, FaDiscord, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

   const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch('https://mailsender-wvl0.onrender.com/send', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json(); 
      console.log("Response:", data);

      if (data.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); 
      } else {
        alert("Failed to send message: " + data.error);
      }
    } catch (err) {
      console.error("Error sending message:", err);
      alert("Failed to send message. Server not responding.");
    }finally {
    setLoading(false); 
  }
  };


  return (
    <section className="bg-[#0d0d0d] text-white py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">

        <div className="flex-1">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FF6700] mb-12">
            Contact Me
          </h2>

          <form
            className="bg-[#1A1A1A] p-8 rounded-2xl shadow-lg flex flex-col gap-6"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="flex-1 p-4 rounded-lg bg-[#0d0d0d] border border-gray-700 text-white focus:outline-none focus:border-[#FF6700] transition"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="flex-1 p-4 rounded-lg bg-[#0d0d0d] border border-gray-700 text-white focus:outline-none focus:border-[#FF6700] transition"
                required
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="6"
              className="w-full p-4 rounded-lg bg-[#0d0d0d] border border-gray-700 text-white focus:outline-none focus:border-[#FF6700] transition"
              required
            ></textarea>

            <button
              type="submit"
              className={`self-start px-6 py-3 rounded text-white font-semibold transition duration-300
    ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#FF6700] hover:bg-[#e65c00]"}
  `}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>

        <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-8">
          <h3 className="text-3xl font-bold text-[#FF6700] mb-6">Find Me On</h3>

          <div className="flex flex-col gap-6 text-2xl">
            <a href="https://www.linkedin.com/in/abhishek-yadav-462352327/" target="_blank" className="flex items-center gap-4 hover:text-[#0a66c2] transition duration-300">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/AbhishekYadav-09" target="_blank" className="flex items-center gap-4 hover:text-[#FF6700] transition duration-300">
              <FaGithub /> GitHub
            </a>
            <a href="https://discord.com/users/anuragabhi" target="_blank" className="flex items-center gap-4 hover:text-[#7289da] transition duration-300">
              <FaDiscord /> Discord
            </a>
            <a href="mailto:abhishekyadavcode@gmail.com" className="flex items-center gap-4 hover:text-[#ea4335] transition duration-300">
              <FaEnvelope /> Gmail
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
