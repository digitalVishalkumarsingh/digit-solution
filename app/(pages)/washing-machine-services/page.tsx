'use client';
import { Button, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Head from "next/head";

const services = [
  { title: "Washing Machine Repair", description: "We fix motor problems, drainage issues, faulty door seals, and more.", imageUrl: "/whashingmachine.jpg" },
  { title: "Washing Machine Installation", description: "Professional installation to ensure proper setup and efficiency.", imageUrl: "/installationwashingmachine.jpg" },
  { title: "Washing Machine Maintenance", description: "Regular maintenance services for long-lasting performance.", imageUrl: "/whashingmaintaince.jpg" },
  { title: "PCB Repair", description: "Expert PCB repair for electronic control issues.", imageUrl: "/pcb.jpg" },
  { title: "Motor and Winding Repair", description: "We fix or replace motors and windings for optimal performance.", imageUrl: "/motorrepair.png" },
  { title: "Gearbox Replacement", description: "Replacement of malfunctioning gearboxes to restore efficiency.", imageUrl: "/gearboxrepair.jpg" }
];

const issues = [
  "Machine doesn’t start", "Doesn’t rinse properly", "Loud noises", "Excessive vibrations", "Drain pump issues", "Motor not spinning"
];

export default function WashingMachineRepair() {
  const router = useRouter();

  const handleBooking = (title: string) => {
    router.push(`https://wa.me/7324802379?text=${encodeURIComponent(`Book Service: ${title}`)}`);
  };

  return (
    <>
      <Head>
        <title>Washing Machine Repair in Varanasi | Dizit Solution</title>
        <meta name="description" content="Expert washing machine repair, installation, and maintenance services in Varanasi. Book now!" />
      </Head>

      <div className="flex flex-col md:flex-row w-full h-screen mt-15">
        <motion.div className="flex flex-col justify-center items-start bg-gray-800 text-white p-8 w-full md:w-2/5 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <motion.h1 className="text-3xl md:text-5xl font-bold mb-2">Washing Machine Repair & Services in Varanasi</motion.h1>
          <motion.p className="text-lg mb-4">Experience exceptional washing machine services in Varanasi, conveniently brought to your doorstep at incredibly competitive prices. Simply get in touch with us, and our proficient technician will promptly arrive at your preferred time to address any concerns related to your washing machine. We also offer repair and installation services for washing machines in Varanasi, guaranteeing that your appliances remain in top-notch condition.</motion.p>
          <motion.a href="tel:7324802379" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded">Book Now @ 7324802379</motion.a>
        </motion.div>
        <div className="relative w-full md:w-3/5 h-full">
          <Image src="/washingpage.webp" alt="Washing Machine Repair" layout="fill" objectFit="cover" priority className="rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 p-6 text-white">
        <motion.h1 className="text-4xl font-bold text-center mb-6">Our Washing Machine Services</motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
              <Card className="bg-white text-black shadow-md rounded-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 h-full">
                <div className="relative h-48">
                  <Image src={service.imageUrl} alt={service.title} width={400} height={250} className="rounded-t-lg object-cover w-full h-full" />
                </div>
                <CardContent className="p-4 text-center">
                  <p className="mt-2 text-sm text-gray-600">{service.description}</p>
                  <Button variant="contained" color="primary" className="mt-4 w-full" onClick={() => handleBooking(service.title)}>Book Now</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="p-6 text-white bg-gray-800">
        <motion.h2 className="text-3xl font-bold text-center mb-8">Common Washing Machine Issues</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {issues.map((issue, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-md">
              <p className="text-lg">{issue}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
