import React from 'react';
import { Formik } from 'formik';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const validate = async (values) => {
  const errors = {};

  if (!values.first_name) {
    errors.first_name = 'First Name is required';
  }

  if (!values.last_name) {
    errors.last_name = 'Last Name is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }

  if (!values.phone_number) {
    errors.phone_number = 'Phone number is required';
  }

  // Async validation for the username
  if (values.username) {
    await sleep(2000); // Simulate a server call
    if (['admin', 'null', 'god'].includes(values.username)) {
      errors.username = 'This username is not allowed';
    }
  }

  return errors;
};

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-200 py-20">
      
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-12">
        
        {/* Left Section */}
        <div className="flex-1 lg:mr-8">
          <p className="text-2xl font-bold text-gray-900 md:text-4xl">Get in touch</p>
          <p className="mt-4 text-lg text-gray-600">
            Our friendly team would love to hear from you.
          </p>
          <Formik
            initialValues={{
              first_name: '',
              last_name: '',
              email: '',
              phone_number: '',
              message: '',
              username: '',
            }}
            validate={validate}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                  <div className="grid w-full items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700"
                      htmlFor="first_name"
                    >
                      First Name
                    </label>
                    <input
                      className="flex h-12 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                      type="text"
                      id="first_name"
                      name="first_name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.first_name}
                      placeholder="First Name"
                    />
                    {errors.first_name && touched.first_name && (
                      <div className="text-red-600 text-sm">{errors.first_name}</div>
                    )}
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700"
                      htmlFor="last_name"
                    >
                      Last Name
                    </label>
                    <input
                      className="flex h-12 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                      type="text"
                      id="last_name"
                      name="last_name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.last_name}
                      placeholder="Last Name"
                    />
                    {errors.last_name && touched.last_name && (
                      <div className="text-red-600 text-sm">{errors.last_name}</div>
                    )}
                  </div>
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="flex h-12 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                    type="text"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Email"
                  />
                  {errors.email && touched.email && (
                    <div className="text-red-600 text-sm">{errors.email}</div>
                  )}
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none text-gray-700"
                    htmlFor="phone_number"
                  >
                    Phone number
                  </label>
                  <input
                    className="flex h-12 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                    type="tel"
                    id="phone_number"
                    name="phone_number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone_number}
                    placeholder="Phone number"
                  />
                  {errors.phone_number && touched.phone_number && (
                    <div className="text-red-600 text-sm">{errors.phone_number}</div>
                  )}
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none text-gray-700"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="flex h-32 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                    id="message"
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    placeholder="Leave us a message"
                    cols={3}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-blue-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  disabled={isSubmitting}
                >
                  Send Message
                </button>
              </form>
            )}
          </Formik>
        </div>

        {/* Right Section with Image, "Our Team" text, and Iframe */}
        <div className="relative flex-1 lg:ml-8 flex flex-col justify-center items-center">
          <div className="animate-bounce border-collapse border-b-8 border-t-8 border-black absolute -top-12 lg:-top-16 bg-blue-900 text-white text-lg font-bold h-24 w-24 rounded-full flex justify-center items-center shadow-lg">
            Contact us
          </div>
          <img
            alt="Contact us"
            className="w-full lg:w-3/4 rounded-lg object-cover border-b-8 border-collapse border-blue-800"
            src="https://th.bing.com/th/id/OIP.aFgtAh1Z50QtwZ6qKk9VQgHaE9?w=589&h=394&rs=1&pid=ImgDetMain"
          />
         
        </div>
      </div>
      <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.044629056729!2d67.06455567521544!3d24.964596177861406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb340959f743d53%3A0x187dcbe4eb81b078!2sNagan%20Chowrangi%20Flyover%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1725435706830!5m2!1sen!2s"
  style={{ border: 0, marginTop: '20px', padding:"10px" , width:"100%" }} 
   width="100%"
  height="450"
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
  className="w-full lg:w-3/4 mt-8 justifyItems:center alignItems:center rounded-lg border-b-8 border-collapse border-blue-800"
/>

    </section>
  );
};

export default Contact;
