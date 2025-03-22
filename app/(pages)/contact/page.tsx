'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2"; // Import SweetAlert2

function Page() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    description: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Send data to the server
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      // SweetAlert success or error message
      if (response.ok && result.success) {
        Swal.fire({
          title: "Success!",
          text: "Your request has been sent successfully!",
          icon: "success",
           confirmButtonText: "Ok",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: result.error || "There was an error, please try again.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
     
      Swal.fire({
        title: "Error!",
        text: "There was an error while sending your request. Please try again.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div className="bg-gray-100 py-12 px-6 md:px-20 mt-15">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        {/* Left Side: Contact Information */}
        <div className="w-full md:w-1/2 p-6 bg-gray-100 rounded-lg shadow-lg">
          <motion.h2
            className="text-3xl font-bold text-orange-600 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Contacts
            <br />
            <span className="text-xl text-gray-600">How to Find Us</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            If you have any questions or need assistance, feel free to get in touch with us. We’re happy to help!
          </motion.p>
          <motion.p
            className="text-lg text-gray-700 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            Contact us at{' '}
            <span className="font-bold text-blue-600">07324802379</span> or{' '}
            <span className="font-bold text-blue-600">dizitsolution@gmail.com</span>.
          </motion.p>
          <motion.p
            className="text-lg text-gray-700 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
          >
            Our office is conveniently located near Sunbeam School, Lahartara, Varanasi – 221002.
          </motion.p>
        </div>

        {/* Right Side: Book Technician Form */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg mt-8 md:mt-0">
          <h3 className="text-xl font-semibold text-center mb-6">Book a Technician</h3>
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            onSubmit={handleSubmit} // Form submission
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="">- Select Service -</option>
                <option value="ac">AC Repair</option>
                <option value="washing_machine">Washing Machine Repair</option>
                <option value="fridge">Refrigerator Repair</option>
              </select>
            </div>
            <div>
              <textarea
                name="description"
                placeholder="Describe Your Problem (Optional)"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <motion.button
                type="submit"
                className="w-full bg-orange-600 text-white p-2 rounded font-semibold hover:bg-orange-700 transition duration-200"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Book Technician
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}

export default Page;
