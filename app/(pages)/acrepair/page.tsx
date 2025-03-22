'use client';
import Image from "next/image";
import { motion } from 'framer-motion';
import { Card, CardContent, Button } from '@mui/material';

// Service data with added AC Installation service and images
const services = [
  {
    title: 'Split AC Repair',
    description: 'Installation, uninstallation, and servicing for indoor & outdoor units. Our expert technicians ensure efficient and long-lasting repair solutions for your split AC units. Whether it\'s a minor issue or a major malfunction, we\'ve got you covered!',
    imageUrl: '/splitacrepair.webp'
  },
  {
    title: 'Multi-Split AC Repair',
    description: 'Expert repair services for all brands of built-in multi-split AC systems. Our team specializes in diagnosing and repairing issues specific to multi-split units, ensuring optimal cooling for multiple rooms. Whether for residential or commercial use, we guarantee fast and effective solutions.',
    imageUrl: '/multisplit.webp'
  },
  {
    title: 'Window AC Repair',
    description: 'Installation, uninstallation, and servicing of window AC units. If your window AC isn\'t cooling properly or making strange noises, our technicians will quickly identify the problem and fix it. We offer a comprehensive service to extend the life of your window unit and ensure it runs efficiently.',
    imageUrl: '/windowac.webp'
  },
  {
    title: 'AC Gas Filling',
    description: 'Professional gas refilling to restore optimal cooling performance. If your AC is losing cooling efficiency or blowing warm air, a gas refill might be the solution. We use high-quality refrigerants and ensure the correct gas is filled for efficient cooling and longer AC lifespan.',
    imageUrl: '/fillinggas.webp' // Add appropriate image URL
  },
  {
    title: 'AC Installation',
    description: 'Professional AC installation services for all types of AC units. From split to window and multi-split units, our team ensures precise and safe installation to maximize the efficiency and longevity of your AC system. We also offer installation for commercial spaces, ensuring your workplace stays cool and comfortable.',
    imageUrl: '/iacinstallation.webp' // Add appropriate image URL
  },
  {
    title: 'AC Service',
    description: 'Expert installation, maintenance, and repair services for all types of air conditioning units. Regular maintenance helps prevent breakdowns and ensures your AC runs smoothly throughout the year. Our service includes cleaning, filter replacement, and diagnostics to keep your system at peak performance.',
    imageUrl: '/ac2.jpeg' // Ensure this file exists
  }
];

export default function ACServices() {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full h-screen mt-15">
        {/* Text Section */}
        <motion.div
          className="flex flex-col justify-center items-start bg-[rgba(102,93,78,0.8)] text-white p-8 w-full md:w-2/5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-2xl md:text-4xl font-bold mb-2"
            style={{ fontSize: '34px' }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            AC Repair & Services in Varanasi
          </motion.h1>
          <motion.p
            className="text-sm md:text-lg mb-4"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We offer top-notch AC repair, servicing, and installation services in Varanasi, conveniently delivered to your doorstep at highly competitive prices. Simply contact us, and our skilled technician will promptly arrive at your location at your preferred time to resolve any AC-related concerns.
          </motion.p>
          <motion.p
            className="text-yellow-600 font-bold mt-2 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            100% Customer Satisfaction Guarantee!
          </motion.p>
          <motion.a
            href="tel:7324802379"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now @ 7324802379
          </motion.a>
        </motion.div>

        {/* Background Image Section */}
        <div className="relative w-full md:w-3/5 h-full">
          <Image
            src="/acrepair.jpg"
            alt="AC Repair Service"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 p-6 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-6"
        >
          Our AC Services in Varanasi
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation effect
            >
              <Card className="bg-white text-black shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:scale-105 h-full">
                {/* Set a fixed height for the image container */}
                <div className="relative h-60"> {/* Fixed height for uniformity */}
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    layout="fill" // Responsive image handling
                    objectFit="cover" // Ensures the image covers its container without distortion
                    className="rounded-t-lg"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                  <p className="mt-2 text-sm text-gray-600">{service.description}</p>
                  <Button
                    variant="contained"
                    color="primary"
                    className="mt-4 w-full"
                    onClick={() =>
                      window.open(
                        `https://wa.me/7324802379?text=${encodeURIComponent(`Book Service: ${service.title}`)}`,
                        '_blank'
                      )
                    }
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Issues Section */}
<div className="p-6 text-white bg-gray-800">
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-3xl font-bold text-center mb-8"
  >
    Common AC Issues We Repair
  </motion.h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      "AC not turning on",
      "AC not cooling properly",
      "AC blowing warm air",
      "Water leaking from AC",
      "AC making strange noises",
      "AC not blowing air",
      "Frozen evaporator coils",
      "Frequent cycling on and off",
      "Bad odors from the AC",
      "AC not responding to thermostat",
      "High energy bills",
      "AC tripping the circuit breaker"
    ].map((issue, index) => (
      <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-md">
        <p className="text-lg">{issue}</p>
      </div>
    ))}
  </div>
</div>

    </>
  );
}
