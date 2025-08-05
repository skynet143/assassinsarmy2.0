import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaDiscord,
} from "react-icons/fa";

function ContactUs() {
  return (
    <div className="container mx-auto px-4 py-20 w-full max-w-3xl">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-white mb-4 animate-fade-in"
          id="contact"
        >
          Contact Us
        </h2>
        <h3 className="text-xl md:text-2xl text-gray-300 font-medium animate-fade-in animate-delay-200">
          <span>— </span>
          <span className="text-red-500">Get in touch</span>
          <span> —</span>
        </h3>
      </div>

      {/* Contact Info Box */}
      <div className="flex flex-col lg:flex-row gap-10 items-stretch">
        {/* Left: Info */}
        <div className="flex-1 bg-gradient-to-br from-gray-800/70 to-gray-700/70 border border-gray-700 rounded-xl p-8 shadow-lg backdrop-blur-md animate-fade-in animate-delay-400">
          <h4 className="text-2xl font-semibold text-white mb-4">
            Let’s Connect!
          </h4>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Whether you're seeking pro tips in Free Fire, looking for
            collaboration opportunities, or simply want to say hello — I'm
            always up for a chat. Let’s create something awesome together!
          </p>

          <div className="space-y-5 text-gray-300">
            <div className="flex items-center gap-3 animate-fade-in animate-delay-600">
              <FaUser className="text-red-500" />
              <span>
                <strong>Name:</strong> Nayan Shelke
              </span>
            </div>
            <div className="flex items-center gap-3 animate-fade-in animate-delay-800">
              <FaMapMarkerAlt className="text-red-500" />
              <span>
                <strong>Location:</strong> Ch. Sambhajinagar, Maharashtra
              </span>
            </div>
            <div className="flex items-center gap-3 animate-fade-in animate-delay-1000">
              <FaEnvelope className="text-red-500" />
              <span>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@sharksentertainment.com"
                  className="text-red-400 hover:underline"
                >
                  info@sharksentertainment.com
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Right: Google Map */}
       
      </div>

      {/* Social Media Section */}
      <div className="mt-16 text-center">
        <h4 className="text-2xl font-bold text-white mb-4 animate-fade-in">
          Follow Me
        </h4>
        <p className="text-gray-400 mb-6 animate-fade-in animate-delay-200">
          Stay connected across all platforms. Join the community!
        </p>
        <div className="flex justify-center gap-6 flex-wrap animate-fade-in animate-delay-400">
          {/* Youtube */}
          <a
            href="https://www.youtube.com/@AssassinsARMY"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-[#ff0000] text-white hover:bg-[#ff0000] hover:shadow-lg hover:scale-110 transition-all"
          >
            <FaYoutube size={24} />
          </a>

          {/* Discord */}
          <a
            href="https://discord.gg/assassins"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-[#5865F2] text-white hover:bg-[#5865F2] hover:shadow-lg hover:scale-110 transition-all"
          >
            <FaDiscord size={24} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/assassinsarmy01/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-[#E1306C] text-white hover:bg-[#E1306C] hover:shadow-lg hover:scale-110 transition-all"
          >
            <FaInstagram size={24} />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/AssassinsArmy007/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-[#1877F2] text-white hover:bg-[#1877F2] hover:shadow-lg hover:scale-110 transition-all"
          >
            <FaFacebookF size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
