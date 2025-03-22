'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { motion } from 'framer-motion'; // Importing framer-motion for animations
import { FaClock, FaRegUser, FaShieldAlt, FaDollarSign } from 'react-icons/fa'; // Import icons from react-icons

export default function Home() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: any) => {
    // Create the WhatsApp message with form data
    const message = `*Booking Request*%0A%0AName: ${data.name}%0APhone: ${data.phone}%0AService: ${data.service}%0AProblem: ${data.problem || 'No description'}%0A%0APlease confirm the booking.`;

    // WhatsApp API link with message (encoded)
    const whatsappLink = `https://wa.me/9112564731?text=${encodeURIComponent(message)}`;

    // Open the WhatsApp link in a new tab
    window.open(whatsappLink, '_blank');

    // Set the submission state to true to show the success message
    setSubmitted(true);
    reset(); // Clear form fields after submission
  };

  return (
    <>
     
      {/* Main Section - Blue Background */}
<div className="bg-blue-900 text-white py-12 px-6 md:px-20 mt-15"> 
  <div className="max-w-5xl mx-auto flex flex-wrap justify-between items-center space-y-8 md:space-y-0">
    {/* Left Side: Text Section with Motion */}
    <motion.div
      className="w-full md:w-1/2 text-center md:text-left p-4 md:p-6"
      initial={{ opacity: 0, x: -100 }}  // Start from the left with opacity 0
      animate={{ opacity: 1, x: 0 }}      // Animate to opacity 1 and original position
      transition={{ duration: 1, type: 'spring', stiffness: 50 }}
    >
      <h2 className="text-3xl font-bold mb-6">Home Appliances Repair & Services</h2>
      <motion.p
        className="mt-4 text-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        Dizit Solution is a reputable Home Appliances repair and services provider in Varanasi. We offer a wide range of services, including AC Services & Repair, Washing Machine Repair, Refrigerator Repair, and Water Purifier (RO) Services & Maintenance. We offer express repair & services at your doorstep throughout Varanasi and nearby areas.
      </motion.p>

      <motion.p
        className="text-yellow-300 font-bold mt-2 mb-4"
        initial={{ opacity: 1 }}
        animate={{ opacity: 2 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        100% Customer Satisfaction Guarantee…
      </motion.p>

      <motion.button
        className="mt-4 bg-yellow-500 px-6 py-2 rounded-lg font-semibold transition-all duration-300"
        whileHover={{
          scale: 1.1,
          backgroundColor: "#f59e0b", // Change to a darker yellow color on hover
        }}
        transition={{ duration: 0.3 }}
      >
        BOOK NOW @ 7324802379
      </motion.button>
    </motion.div>

    {/* Right Side: Book Technician Form */}
    <div className="w-full md:w-1/2 bg-white text-black p-6 rounded-lg mt-8 md:mt-0 shadow-lg">
      <h3 className="text-xl font-semibold text-center mb-6">Book a Technician</h3>
      {submitted && <p className="text-green-600 text-center mb-4">Request Submitted Successfully!</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Input */}
        <div>
          <input
            {...register('name', { required: "Name is required" })}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{String(errors.name.message)}</p>}
        </div>

        {/* Phone Number Input */}
        <div>
          <input
            {...register('phone', { required: "Phone number is required" })}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Phone Number"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{String(errors.phone.message)}</p>}
        </div>

        {/* Service Selection */}
        <div>
          <select
            {...register('service', { required: "Please select a service" })}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">- Select Services -</option>
            <option value="ac">AC Repair</option>
            <option value="washing_machine">Washing Machine Repair</option>
            <option value="fridge">Refrigerator Repair</option>
            <option value="ro">Water Purifier (RO) Service</option>
          </select>
          {errors.service && <p className="text-red-500 text-sm mt-1">{String(errors.service.message)}</p>}
        </div>

        {/* Problem Description */}
        <div>
          <textarea
            {...register('problem')}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Describe Your Problem (Optional)"
          />
        </div>

        {/* Submit Button */}
        <div>
          <motion.button
            type="submit"
            className="w-full bg-orange-500 text-white p-2 rounded font-semibold hover:bg-orange-600 transition duration-200"
            whileHover={{ scale: 1.05 }}
          >
            BOOK TECHNICIAN
          </motion.button>
        </div>
      </form>
    </div>
  </div>
</div>
  {/* Call Now and Image Section */}
      <div className="text-center">
        <p className="bg-yellow-300 text-yellow-900 font-semibold text-lg py-3">
          Book A Technician @ Call Now - 07324802379 | On Time Services
        </p>

        <motion.div
          className="relative w-full mx-auto"
          transition={{ duration: 0.4 }}
        >
          <motion.img
            src="/for-sale.webp"
            alt="Technician Image"
            className="w-full h-auto mx-auto rounded-lg shadow-lg transform transition-all duration-300"
            whileHover={{ rotate: 10 }}
            transition={{ duration: 0.3 }}
          />
          {/* Optional: Shadow Effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-20 rounded-lg"></div>
        </motion.div>
      </div>

      {/* About Section */}
      <div className="bg-gray-100 py-12 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold text-blue-800 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            About Dizit Solution
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            Dizit Solution is your trusted provider for a wide range of home appliance services in Varanasi. Our dedicated team of professionals offers on-demand solutions for all your household needs, including installation, repair, and maintenance services for a variety of appliances. We cater to a diverse range of products, ensuring that you can rely on us for split or window ACs, refrigerators, washing machines, microwaves, induction cooktops, geysers, water purifiers, mixers, chimneys, and more.
          </motion.p>

          <motion.p
            className="text-lg text-gray-700 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
          >
            Our expertise extends to servicing models from top brands such as LG, Samsung, Sony, Bajaj, Daikin, Blue Star, Voltas, Prestige, Carrier, General, Panasonic, Mitsubishi, Haier, Whirlpool, Videocon, Godrej, Onida, Kenstar, and many others. We are committed to providing prompt and hassle-free services so that you can enjoy a seamless experience with your home appliances.
          </motion.p>

          {/* Highlighted Points with Icons */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            <motion.div
              className="flex items-center space-x-4 bg-yellow-400 p-4 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}
              transition={{ duration: 0.3 }}
            >
              <FaClock className="text-3xl text-blue-900" />
              <div>
                <h3 className="font-semibold text-xl text-blue-900">On Time Services</h3>
                <p className="text-gray-700 mt-2">We value your time and provide timely services to meet your needs.</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4 bg-blue-400 p-4 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}
              transition={{ duration: 0.3 }}
            >
              <FaRegUser className="text-3xl text-white" />
              <div>
                <h3 className="font-semibold text-xl text-white">Trained Professionals</h3>
                <p className="text-gray-100 mt-2">Our technicians are highly trained and skilled to handle all appliance issues.</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4 bg-green-400 p-4 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}
              transition={{ duration: 0.3 }}
            >
              <FaShieldAlt className="text-3xl text-blue-900" />
              <div>
                <h3 className="font-semibold text-xl text-blue-900">Assured Service Quality</h3>
                <p className="text-gray-700 mt-2">We guarantee top-notch service quality with every job we perform.</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4 bg-red-400 p-4 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}
              transition={{ duration: 0.3 }}
            >
              <FaDollarSign className="text-3xl text-blue-900" />
              <div>
                <h3 className="font-semibold text-xl text-blue-900">No Extra Charge</h3>
                <p className="text-gray-700 mt-2">We provide transparent pricing with no hidden or extra charges.</p>
              </div>
            </motion.div>
          </div>

          {/* Contact Section */}
          <motion.p
            className="text-xl text-blue-900 font-semibold mt-8 bg-yellow-300 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            whileHover={{ scale: 1.05 }}
          >
            Book A Technician @ Call Now – <span className="text-red-600">07324802379</span> | On Time Services
          </motion.p>
        </div>
      </div>
 {/* Services Section */}
 <div className="bg-gray-100 py-12 px-6 md:px-20">
  <div className="max-w-7xl mx-auto text-center">
    {/* Main Title */}
    <motion.h2
      className="text-3xl font-bold text-blue-800 mb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Home Appliance Services in Varanasi
    </motion.h2>

    {/* Subtitle */}
    <motion.p
      className="text-lg text-gray-700 mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.5 }}
    >
      We provide a wide range of home appliance services in Varanasi, including installation, repair, and maintenance for various appliances.
    </motion.p>

    {/* Services Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {/* AC Services */}
      <motion.div
        className="flex flex-col items-center space-y-4 bg-white p-4 rounded-lg shadow-lg border border-neutral-200 dark:border-slate-800"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src="/repairman-doing-air-conditioner-service_1303-26541.avif"
          alt="AC Repair"
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <h3 className="font-semibold text-lg">AC Services & Repair</h3>
        <p className="text-gray-700">Expert AC repair and maintenance services to keep your system running smoothly.</p>
      </motion.div>

      {/* Washing Machine Repair */}
      <motion.div
        className="flex flex-col items-center space-y-4 bg-white p-4 rounded-lg shadow-lg border border-neutral-200 dark:border-slate-800"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src="/whashingmachine.jpg"
          alt="Washing Machine Repair"
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <h3 className="font-semibold text-lg">Washing Machine Repair</h3>
        <p className="text-gray-700">Reliable repair services for washing machines, both front load and top load models.</p>
      </motion.div>

      {/* Refrigerator Repair */}
      <motion.div
        className="flex flex-col items-center space-y-4 bg-white p-4 rounded-lg shadow-lg border border-neutral-200 dark:border-slate-800"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src="/fridge-repair1.jpg"
          alt="Refrigerator Repair"
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <h3 className="font-semibold text-lg">Refrigerator Repair</h3>
        <p className="text-gray-700">Efficient repair and maintenance services for all types of refrigerators.</p>
      </motion.div>

      {/* Geyser Repair */}
      <motion.div
        className="flex flex-col items-center space-y-4 bg-white p-4 rounded-lg shadow-lg border border-neutral-200 dark:border-slate-800"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src="/geyser-repair.jpg"
          alt="Geyser Repair"
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <h3 className="font-semibold text-lg">Geyser Repair</h3>
        <p className="text-gray-700">Expert repair services for geysers to ensure safe and efficient heating.</p>
      </motion.div>

      {/* Microwave Repair */}
      <motion.div
        className="flex flex-col items-center space-y-4 bg-white p-4 rounded-lg shadow-lg border border-neutral-200 dark:border-slate-800"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src="/microvwave-repair.avif"
          alt="Microwave Repair"
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <h3 className="font-semibold text-lg">Microwave Repair</h3>
        <p className="text-gray-700">Quick and reliable microwave repair services to restore your kitchen appliance.</p>
      </motion.div>

      {/* RO Water Purifier Repair */}
      <motion.div
        className="flex flex-col items-center space-y-4 bg-white p-4 rounded-lg shadow-lg border border-neutral-200 dark:border-slate-800"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src="/ro-water.webp"
          alt="RO Water Purifier Repair"
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <h3 className="font-semibold text-lg">RO Water Purifier Repair</h3>
        <p className="text-gray-700">We offer regular servicing and repair of your RO water purifiers for clean, safe water.</p>
      </motion.div>

      {/* Deep Freezer Repair */}
      <motion.div
        className="flex flex-col items-center space-y-4 bg-white p-4 rounded-lg shadow-lg border border-neutral-200 dark:border-slate-800"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src="/deepfridge.webp"
          alt="Deep Freezer Repair"
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <h3 className="font-semibold text-lg">Deep Freezer Repair</h3>
        <p className="text-gray-700">Professional repair services for deep freezers to ensure optimal freezing performance.</p>
      </motion.div>

      {/* Chimney Repair */}
      <motion.div
        className="flex flex-col items-center space-y-4 bg-white p-4 rounded-lg shadow-lg border border-neutral-200 dark:border-slate-800"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src="/chimney.webp"
          alt="Chimney Repair"
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <h3 className="font-semibold text-lg">Chimney Repair</h3>
        <p className="text-gray-700">Efficient repair and maintenance services for chimneys, ensuring safety and functionality.</p>
      </motion.div>
    </div>
  </div>
</div>

   {/* Main Section */}
   <div className=" bg-gray-100 py-12 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Title */}
          <motion.h2
            className="text-4xl font-bold text-blue mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Home Appliances Repair & Services in Varanasi
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg text-dark-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            Welcome to Dizit Solution, your one-stop solution for all your <span className="font-semibold text-yellow-500">home appliance repair</span> needs in Varanasi!
          </motion.p>

          <motion.p
            className="text-lg text-dark-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
          >
            At Dizit Solution, we understand how important it is to have properly functioning home appliances. A malfunctioning appliance not only disrupts your daily routine but can also lead to unexpected expenses. That’s why we are committed to providing reliable, efficient, and affordable <span className="font-semibold text-yellow-500">repair services</span> for all your home appliances.
          </motion.p>

          <motion.p
            className="text-lg text-dark-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
          >
            We specialize in <span className="font-semibold text-yellow-500">AC Repair</span> in Varanasi and offer a range of services for all types of air conditioners, from window units to central air systems. Our team of skilled technicians can diagnose and repair any AC problem, from refrigerant leaks to compressor failures, and get your AC up and running in no time. We also offer <span className="font-semibold text-yellow-500">Refrigerator repair</span> services to ensure your food stays fresh and safe to consume. Our technicians are trained to handle all kinds of refrigerator issues, from faulty compressors to broken door seals, and can repair all major brands and models of refrigerators.
          </motion.p>

          <motion.p
            className="text-lg text-dark-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.1 }}
          >
            In addition to AC and refrigerator repairs, we also offer comprehensive home appliance repair services. Our team of experts can repair and service all kinds of home appliances, including washing machines, dishwashers, ovens, and more.
          </motion.p>

          <motion.p
            className="text-lg text-dark-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.3 }}
          >
            At Dizit Solution, we believe in providing our customers with the highest level of service. Our technicians are certified and experienced, and we use only genuine parts for all our repairs. We also offer competitive pricing and provide a 100% satisfaction guarantee on all our services.
          </motion.p>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
          >
            <p className="text-xl font-semibold text-blue-900">
              Contact us today to schedule your <span className="font-semibold text-yellow-500">AC Repair</span> in Varanasi, <span className="font-semibold text-yellow-500">Refrigerator Repair</span>, <span className="font-semibold text-yellow-500">Washing Machine Repair</span>, or any other home appliance repair service. We are available 24/7 to provide you with prompt and reliable service.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              className="bg-blue-600 text-white py-3 px-6 rounded-full mt-4 hover:bg-orange-600 transition duration-300"
            >
              <span className="font-bold text-white">Book Now @ 7324802379</span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Dizit Solution Section */}
       <div className="bg-gray-100 py-12 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center md:flex md:items-center">
          {/* Text Section */}
          <div className="md:w-1/2 mb-8 md:mb-0 text-left">
            {/* Section Title */}
            <motion.h2
              className="text-4xl font-bold text-blue mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Why Choose Dizit Solution
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg text-dark-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              At <span className="font-semibold text-yellow-500">Dizit Solution</span>, we pride ourselves on being one of the most reliable and trustworthy home appliance repair service providers in Varanasi. Here are some reasons why you should choose us for your <span className="font-semibold text-yellow-500">AC services</span> in Varanasi, <span className="font-semibold text-yellow-500">refrigerator services</span>, and other home appliance services.
            </motion.p>

            {/* Skilled Technicians */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Skilled and Experienced Technicians</h3>
              <p className="text-lg text-dark-400">
                Our team of technicians is highly skilled, experienced, and trained to handle all kinds of home appliance repairs. They have extensive knowledge of all major brands and models of home appliances and can diagnose and repair any issue quickly and efficiently.
              </p>
            </motion.div>

            {/* Quality Service */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.3 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Choose for Quality Service</h3>
              <p className="text-lg text-dark-400">
                We ensure the highest standards of repair for your home appliances by using only genuine parts and the latest tools and equipment. Our technicians meticulously diagnose the issue and explain the repair process to you, ensuring you know exactly what to expect.
              </p>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <motion.img
              src="/Untitled-design-31.webp"  // Replace with your actual image path
              alt="Repair Technician"
              className="w-full h-auto rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.5 }}
            />
          </div>
        </div>
      </div> 
     {/* Brands We Repair Section */}
     <div className="bg-gray-100 py-12 px-6 md:px-20">
  <div className="max-w-7xl mx-auto text-center">
    {/* Section Title */}
    <motion.h2
      className="text-4xl font-bold text-blue-900 mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Brands We Repair
    </motion.h2>

    {/* Description */}
    <motion.p
      className="text-lg text-gray-700 mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.5 }}
    >
      We possess the capability to repair a wide range of major brands, makes, and models, regardless of where they were purchased.
    </motion.p>

    {/* Brand Logos */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
      {/* Mitsubishi Electric */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src="/Mitsubishi_Electric_logo.svg.webp"  // Replace with actual logo path
          alt="Mitsubishi Electric"
          className="w-32 h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </motion.div>

      {/* Samsung */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src="/samsung-logo.webp"  // Replace with actual logo path
          alt="Samsung"
          className="w-32 h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        />
      </motion.div>

      {/* Panasonic */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src="/Panasonic_Group_logo.svg.webp"  // Replace with actual logo path
          alt="Panasonic"
          className="w-32 h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.9 }}
        />
      </motion.div>

      {/* Blue Star */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src="/220px-Blue_Star_primary_logo.webp"  // Replace with actual logo path
          alt="Blue Star"
          className="w-32 h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.1 }}
        />
      </motion.div>

      {/* Sony */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src="/sony.webp"  
          alt="Sony"
          className="w-32 h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.3 }}
        />
      </motion.div>

      {/* Daikin */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src="/dekin-logo.webp"  
          alt="Daikin"
          className="w-32 h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        />
      </motion.div>

      {/* Sharp */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src="/sharp-logo.webp"  // Replace with actual logo path
          alt="Sharp"
          className="w-32 h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.7 }}
        />
      </motion.div>

      {/* Whirlpool */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src="/whirlpool.webp"  // Replace with actual logo path
          alt="Whirlpool"
          className="w-32 h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.9 }}
        />
      </motion.div>

      {/* Haier */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src="/haire-logo.webp"  // Replace with actual logo path
          alt="Haier"
          className="w-32 h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.1 }}
        />
      </motion.div>

      {/* Electrolux */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src="/Electrolux-.webp"  // Replace with actual logo path
          alt="Electrolux"
          className="w-32 h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.3 }}
        />
      </motion.div>

      {/* Bosch */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src="/bosch-logo.webp"  // Replace with actual logo path
          alt="Bosch"
          className="w-32 h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.5 }}
        />
      </motion.div>

      {/* LG */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src="/lg-logo.webp"  // Replace with actual logo path
          alt="LG"
          className="w-32 h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.7 }}
        />
      </motion.div>
    </div>
  </div>
</div>


    </>
  );
}
