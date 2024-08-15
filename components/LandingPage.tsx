"use client"

import Link from 'next/link';
import { FaBookOpen, FaChalkboardTeacher, FaBullhorn, FaHandsHelping } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Welcome to D.N Modisane & N.Z Malgas</h1>
          <p className="text-lg md:text-xl mb-6">Empowering students through expert tutoring and mentoring services</p>
          <Link href="/about">
            <span className="bg-white text-blue-600 py-2 px-6 rounded-full font-semibold hover:bg-gray-200 transition duration-300">Learn More</span>
          </Link>
        </div>
      </section>

      {/* Mission, Vision, and Services Section */}
      <section id="mission-vision" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-8 ">Our Key Aspects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Mission Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:bg-gray-900 hover:text-white transition-shadow duration-300">
              <FaBullhorn className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed hover:text-white">
                To provide personalized, high-quality tutoring and mentoring that helps students excel academically and achieve their educational goals.
              </p>
            </div>
            {/* Vision Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:bg-gray-900 hover:text-white transition-shadow duration-300">
              <FaChalkboardTeacher className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-2xl font-bold mb-4 ">Our Vision</h3>
              <p className="text-gray-600 hover:text-white leading-relaxed">
                To be a leading educational support organization recognized for our commitment to student success and excellence in teaching.
              </p>
            </div>
            {/* Values Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:bg-gray-900 hover:text-white transition-shadow duration-300">
              <FaHandsHelping className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed hover:text-white">
                Integrity, Excellence, and Dedication. We are committed to delivering the highest quality support while upholding ethical standards and fostering a positive learning environment.
              </p>
            </div>
            {/* Services Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:bg-gray-900 hover:text-white transition-shadow duration-300">
              <FaBookOpen className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Services</h3>
              <p className="text-gray-600 leading-relaxed hover:text-white">
                Comprehensive tutoring and mentoring services across various subjects, including exam preparation, private classes, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Achieve Your Goals?</h2>
          <p className="text-lg mb-6">Join us and take the first step towards academic success with expert guidance and support!</p>
          <Link href="/contact">
            <span className="bg-white text-blue-600 py-2 px-6 rounded-full font-semibold hover:bg-gray-200 transition duration-300">Contact Us</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
