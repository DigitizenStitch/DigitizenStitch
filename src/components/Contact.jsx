import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  // ✅ State to Handle Form Data
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    message: '',
  });

  // ✅ Handle Input Change with Trimmed Values
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: name === "message" ? value : value.trim(), // Trim all fields EXCEPT "message"
    });
  };
  

  // ✅ Handle Form Submission (Updated)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    // Stop submission if honeypot field is filled
    if (form["bot-field"].value) {
      console.log("Bot detected, stopping submission.");
      return;
    }

    console.log("Submitting form to Netlify...");

    // ✅ Append "form-name" explicitly (required for Netlify)
    const formData = new FormData(form);
    formData.append("form-name", "contact");

    // ✅ Convert to URL-encoded string for safe submission
    const encodedData = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
      encodedData.append(key, value);
    }

    try {
      const response = await fetch("/", {
        method: "POST",
        body: encodedData.toString(),
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ first_name: '', last_name: '', email: '', phone_number: '', message: '' });
      } else {
        throw new Error("Failed to submit the form");
      }
    } catch (error) {
      alert("Something went wrong! Please try again.");
      console.error("Form submission error:", error);
    }
  };

  

  return (
    <section id="contact" className="bg-gray-50 py-20">
      {/* 📍 Map Section */}
      <div className="w-full">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.1914696887634!2d-121.92944502393443!3d37.38530397282401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcbdfe0a2f967%3A0x8f7541ae937457c!2s2570%20N%20First%20St%20%232nd%2C%20San%20Jose%2C%20CA%2095131%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2s!4v1741816317881!5m2!1sfr!2s"
              width="600"
              height="450"
              className="w-full h-96 border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* 📝 Contact Form & Details */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-12 mt-12 flex flex-col lg:flex-row items-start lg:items-center gap-12">
        {/* Left Section - Contact Form */}
        <div className="flex-1 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our friendly team would love to hear from you. Fill out the form below and we’ll get back to you soon.
          </p>

          <form 
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="hidden">
              <label>Don’t fill this out: <input name="bot-field" /></label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  onChange={handleChange}
                  value={formData.first_name}
                  className="w-full h-12 px-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  onChange={handleChange}
                  value={formData.last_name}
                  className="w-full h-12 px-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                className="w-full h-12 px-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone_number"
                onChange={handleChange}
                value={formData.phone_number}
                className="w-full h-12 px-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                onChange={handleChange}
                value={formData.message}
                className="w-full h-32 px-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-md text-lg font-semibold hover:bg-black transition"
            >
              Send Message
            </button>
          </form>
        </div>

          {/* Right Section - Contact Info */}
          <div className="flex-1 w-full bg-white p-8 shadow-lg rounded-lg">
            <h3 className="text-2xl text-center font-semibold text-gray-800 mb-6">Contact Information</h3>

          <div className="flex items-center gap-4 mb-6">
            <Phone className="text-blue-900 w-8 h-8" />
            <div>
              <p className="text-gray-800 font-medium">Phone</p>
              <p className="text-gray-600"><a href="tel:+923701081851">+923701081851</a></p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <Mail className="text-blue-900 w-8 h-8" />
            <div>
              <p className="text-gray-800 font-medium">Email</p>
              <p className="text-gray-600"><a href="mailto:info@digitizenstitch.com">info@digitizenstitch.com</a></p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-blue-900 w-8 h-8" />
            <div>
              <p className="text-gray-800 font-medium">Address</p>
              <p className="text-gray-600">2570 North First Street, 2nd Floor, San Jose, CA</p>
            </div>
          </div>
          {/* Social Media Links */}
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center gap-4">
                  <hr className="w-1/4 border-gray-300" />
                  <p className="text-gray-600 font-medium">OR</p>
                  <hr className="w-1/4 border-gray-300" />
                </div>
                <p className="mt-4 text-gray-800 font-medium">Follow us on:</p>
                <div className="flex items-center gap-4 justify-center mt-2">
                  <a
                    href="https://www.instagram.com/digitizenstitch_?igsh=MTlzN3J5N2xnczhnbA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/19WE5X4obH/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    <FaFacebookF className="w-6 h-6" />
                  </a>
                  <a
                    href="https://wa.me/message/ERBPA4SEF47CE1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    <FaWhatsapp className="w-6 h-6" />
                  </a>
                </div>
              </div>

        </div>



      </div>
    </section>
  );
};

export default Contact;
