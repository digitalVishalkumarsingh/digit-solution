"use client";

import { motion } from "framer-motion";
import Link from "next/link"; // Import Link from Next.js

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Information */}
          <div>
            <img
              src="/Dizit-Solution.webp" // Replace with your logo path
              alt="Dizit Solution Logo"
              className="w-32 h-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul>
              <li><Link href="/" className="hover:text-yellow-500">Home</Link></li>
              <li><Link href="/" className="hover:text-yellow-500">Company</Link></li>
              <li><Link href="/" className="hover:text-yellow-500">Services</Link></li>
              <li><Link href="/" className="hover:text-yellow-500">Cases</Link></li>
              <li><Link href="/" className="hover:text-yellow-500">News</Link></li>
            </ul>
          </div>

          {/* Services Offered */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul>
              <li><Link href="/acrepair" className="hover:text-yellow-500">AC Services</Link></li>
              <li><Link href="/washing-machine-services" className="hover:text-yellow-500">Washing Machine Services</Link></li>
              <li><Link href="/washing-machine-services" className="hover:text-yellow-500">Refrigerator Services</Link></li>
              <li><Link href="/washing-machine-services" className="hover:text-yellow-500">RO Purifier Services</Link></li>
              <li><Link href="/washing-machine-services" className="hover:text-yellow-500">Geyser Services</Link></li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">
              <strong>Phone No.</strong>: 07324802379
            </p>
            <p className="mb-2">
              <strong>Email</strong>: <Link href="mailto:dizitsolution@gmail.com" className="hover:text-yellow-500">dizitsolution@gmail.com</Link>
            </p>
            <p className="mb-4">
              <strong>Address</strong>: Near Sunbeam School, Lahartara, Varanasi – 221002
            </p>

            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="https://facebook.com" className="hover:text-yellow-500">Facebook</Link>
              <Link href="https://twitter.com" className="hover:text-yellow-500">Twitter</Link>
              <Link href="https://instagram.com" className="hover:text-yellow-500">Instagram</Link>
              <Link href="https://linkedin.com" className="hover:text-yellow-500">LinkedIn</Link>
            </div>

            {/* Call-to-Action */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              className="bg-blue-600 text-white py-3 px-6 rounded-full mt-4 hover:bg-orange-600 transition duration-300"
            >
              Book Now @ 7324802379
            </motion.button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 border-t border-gray-600 pt-6 text-center">
          <p className="text-sm text-gray-400">
            Copyright &copy; 2023 Dizit Solution. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-8 mt-3">
            <Link href="/privacy-policy" className="hover:text-yellow-500">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-yellow-500">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
