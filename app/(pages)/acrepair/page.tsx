'use client';
import Image from "next/image";
import { motion } from 'framer-motion';
import { Card, CardContent, Button } from '@mui/material';

// AC Service Data
const services = [
  { title: 'Split AC Repair', description: 'Installation, uninstallation, and servicing for indoor & outdoor units. Our expert technicians ensure efficient and long-lasting repair solutions.', imageUrl: '/splitacrepair.webp' },
  { title: 'Multi-Split AC Repair', description: 'Expert repair services for all brands of built-in multi-split AC systems, ensuring optimal cooling for multiple rooms.', imageUrl: '/multisplit.webp' },
  { title: 'Window AC Repair', description: 'Installation, uninstallation, and servicing of window AC units. Our technicians will quickly identify and fix any issues.', imageUrl: '/windowac.webp' },
  { title: 'AC Gas Filling', description: 'Professional gas refilling to restore optimal cooling performance using high-quality refrigerants.', imageUrl: '/fillinggas.webp' },
  { title: 'AC Installation', description: 'Professional AC installation services for all types of AC units, ensuring precise and safe installation.', imageUrl: '/iacinstallation.webp' },
  { title: 'AC Service', description: 'Expert installation, maintenance, and repair services for all types of air conditioning units.', imageUrl: '/ac2.jpeg' },
];

const commonIssues = [
  "AC not turning on", "AC not cooling properly", "AC blowing warm air", "Water leaking from AC",
  "AC making strange noises", "AC not blowing air", "Frozen evaporator coils", "Frequent cycling on and off",
  "Bad odors from the AC", "AC not responding to thermostat", "High energy bills", "AC tripping the circuit breaker"
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
          transition={{ duration: 0.8 }}
        >
          <motion.h1 className="text-2xl md:text-4xl font-bold mb-2" style={{ fontSize: '34px' }}>
            AC Repair & Services in Varanasi
          </motion.h1>
          <motion.p className="text-sm md:text-lg mb-4">
            We offer top-notch AC repair, servicing, and installation services in Varanasi at competitive prices. Contact us, and our skilled technician will arrive at your location at your preferred time.
          </motion.p>
          <motion.p className="text-yellow-600 font-bold mt-2 mb-4">
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

        {/* Background Image */}
        <div className="relative w-full md:w-3/5 h-full">
          <Image src="/acrepair.jpg" alt="AC Repair Service" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" priority />
        </div>
      </div>

      {/* Services Section */}
      <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 p-6 text-white">
        <motion.h1 className="text-4xl font-bold text-center mb-6">
          Our AC Services in Varanasi
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
              <Card className="bg-white text-black shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:scale-105 h-full">
                <div className="relative h-60">
                  <Image src={service.imageUrl} alt={service.title} layout="fill" objectFit="cover" className="rounded-t-lg" />
                </div>
                <CardContent className="p-4 text-center">
                  <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                  <p className="mt-2 text-sm text-gray-600">{service.description}</p>
                  <Button
                    variant="contained"
                    color="primary"
                    className="mt-4 w-full"
                    onClick={() =>
                      window.open(`https://wa.me/7324802379?text=${encodeURIComponent(`Book Service: ${service.title}`)}`, '_blank')
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

      {/* Common AC Issues Section */}
      <div className="p-6 text-white bg-gray-800">
        <motion.h2 className="text-3xl font-bold text-center mb-8">
          Common AC Issues We Repair
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commonIssues.map((issue, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-md">
              <p className="text-lg">{issue}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
