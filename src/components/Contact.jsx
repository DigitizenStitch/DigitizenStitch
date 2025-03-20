import React from 'react';
import { Formik } from 'formik';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const validate = (values) => {
  const errors = {};
  if (!values.first_name) errors.first_name = 'First Name is required';
  if (!values.last_name) errors.last_name = 'Last Name is required';
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.phone_number) errors.phone_number = 'Phone number is required';
  return errors;
};

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-50 py-20">
      {/* Map Section */}
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

      {/* Contact Form and Details */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-12 mt-12 flex flex-col lg:flex-row items-start lg:items-center gap-12">
        {/* Left Section - Contact Form */}
        <div className="flex-1 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our friendly team would love to hear from you. Fill out the form below and we’ll get back to you soon.
          </p>

          <Formik
            initialValues={{
              first_name: '',
              last_name: '',
              email: '',
              phone_number: '',
              message: '',
            }}
            validate={validate}
            onSubmit={(values, { setSubmitting }) => {
              const form = document.getElementById('contact-form');
              const formData = new FormData(form);
              fetch("/", {
                method: "POST",
                body: formData,
              })
                .then(() => {
                  alert("Message sent successfully!");
                  setSubmitting(false);
                })
                .catch((error) => {
                  alert("Something went wrong!");
                  console.error(error);
                  setSubmitting(false);
                });
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <form
                id="contact-form"
                name="contact"
                method="POST"
                data-netlify="true"
                className="mt-8 space-y-4"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.first_name}
                      className="w-full h-12 px-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    {errors.first_name && touched.first_name && (
                      <p className="text-red-600 text-sm mt-1">{errors.first_name}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.last_name}
                      className="w-full h-12 px-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    {errors.last_name && touched.last_name && (
                      <p className="text-red-600 text-sm mt-1">{errors.last_name}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className="w-full h-12 px-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  {errors.email && touched.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone_number"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone_number}
                    className="w-full h-12 px-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  {errors.phone_number && touched.phone_number && (
                    <p className="text-red-600 text-sm mt-1">{errors.phone_number}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    name="message"
                    placeholder="Your message..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    className="w-full h-32 px-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-900 text-white py-3 rounded-md text-lg font-semibold hover:bg-black transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </Formik>
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
