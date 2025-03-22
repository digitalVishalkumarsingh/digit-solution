'use client';
import { Button, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

// Service data array (to be defined outside of the component)
const services = [
  {
    title: "Washing Machine Repair",
    description: "We fix all issues related to washing machines, including motor problems, drainage issues, faulty door seals, and more. No problem is too big or small for our expert technicians.",
    imageUrl: "/whashingmachine.jpg"
  },
  {
    title: "Washing Machine Installation",
    description: "Our professional washing machine installation services ensure that your new machine is set up correctly and operates efficiently, minimizing the risk of future problems.",
    imageUrl: "/installationwashingmachine.jpg"
  },
  {
    title: "Washing Machine Maintenance",
    description: "We provide regular maintenance services to keep your washing machine running smoothly and extend its lifespan. This includes cleaning, inspections, and minor repairs to prevent major issues.",
    imageUrl: "/whashingmaintaince.jpg"
  },
  {
    title: "PCB Repair",
    description: "Our PCB (Printed Circuit Board) repair service targets the electronic components of your washing machine. We diagnose and repair any faults in the control board to ensure smooth operation and prevent unexpected breakdowns.",
    imageUrl: "/pcb.jpg"
  },
  {
    title: "Motor and Winding Repair",
    description: "If your washing machine is making unusual noises, not starting, or not spinning, the motor or windings could be the culprit. We repair or replace these critical components to restore your machine’s performance.",
    imageUrl: "/motorrepair.png"
  },
  {
    title: "Gearbox Replacement",
    description: "A malfunctioning gearbox can lead to problems with spinning or draining. Our experts replace old gearboxes with high-quality, durable ones to ensure your washing machine works efficiently and reliably.",
    imageUrl: "/gearboxrepair.jpg"
  }
];

export default function WashingMachineRepair() {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full h-screen mt-15">
        {/* Text Section */}
        <motion.div
          className="flex flex-col justify-center items-start bg-gray-800 text-white p-8 w-full md:w-2/5 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-2"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Washing Machine Repair & Services in Varanasi
          </motion.h1>
          <motion.p
            className="text-lg mb-4"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Dizit Solution is a rеputablе Homе Appliancеs rеpair and sеrvicеs providеr in Varanasi. Thеy offеr a rangе of sеrvicеs, including AC Sеrvicеs & Rеpair, Washing Machinе Rеpair, Rеfrigеrator Rеpair, and Watеr Purifiеr(RO) Sеrvicеs & maintеnancе. Wе offеr еxprеss Rеpair & Sеrvicеs at your doorstеp throughout thе arеas of Varanasi & Nеarby arеas.
          </motion.p>
          <motion.a
            href="tel:7324802379"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now @ 7324802379
          </motion.a>
        </motion.div>

        {/* Background Image Section */}
        <div className="relative w-full md:w-3/5 h-full">
          <Image
            src="/shashingpagewebp.webp"
            alt="Washing Machine Repair Service"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 p-6 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-6"
        >
          Our Washing Machine Services in Varanasi
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-white text-black shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1 h-full">
                <div className="relative h-48 group">
                  {/* Image Section */}
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                  {/* Text overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xl text-center px-4">{service.title}</p>
                  </div>
                </div>
                <CardContent className="p-4 text-center">
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
          Common Washing Machine Issues We Repair
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Washing machine doesn’t start",
            "Washing machine doesn’t rinse properly",
            "Washer is making loud noises",
            "Washing machine is vibrating excessively",
            "Drain pump not working properly",
            "Washing machine motor not spinning"
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
