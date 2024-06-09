/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import Image from "next/image";

type TeamMember = {
  role: string;
  name: string;
  image: string;
};

type GlobalPresenceItem = {
  country: string;
  image: string;
};

const teamData: TeamMember[] = [
  {
    role: "Board of Directors",
    name: "Board of Directors",
    image: "/board-of-directors.png",
  },
  {
    role: "President",
    name: "Nadir Khan Bin Shirin",
    image: "/president.png",
  },
  {
    role: "Chief Executive Director",
    name: "Farooq Ahmad",
    image: "/ceo.png",
  },
  {
    role: "Managing Director",
    name: "Wajid Ali",
    image: "/md.png",
  },
  {
    role: "Sales & Marketing",
    name: "Muhammad Irfan",
    image: "/sm.png",
  },
  {
    role: "Production & Procurement",
    name: "Suliman Bin Razak",
    image: "/pp.png",
  },
  {
    role: "Logistics & Supply Chain",
    name: "Nisar Ahmed Kethmalay",
    image: "/ls.png",
  },
  {
    role: "Finance & Operation",
    name: "Aftab Azam",
    image: "/fo.png",
  },
  {
    role: "Human Resource",
    name: "Norfatihah Btmi Md Fauzi",
    image: "/hr.png",
  },
  {
    role: "E-Commerce",
    name: "Zia Ullah",
    image: "/ec.png",
  },
];
const globalPresenceData: GlobalPresenceItem[] = [
  { country: "Malaysia", image: "/images/Malaysia.jpg" },
  { country: "Malaysia", image: "/images/Malaysia1.jpg" },

  { country: "Malaysia", image: "/images/Malaysia2.jpg" },

  { country: "Brunei", image: "/images/Brunei.jpg" },
  { country: "Singapore", image: "/images/Singapore.jpg" },
  { country: "Thailand", image: "/images/Thailand.jpg" },
  { country: "Indonesia", image: "/images/Indonesia.jpg" },
  { country: "Philippines", image: "/images/Philipine.jpg" },
];

const AboutUsPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <div className="bg-gradient-to-l from-blue-400 to-red-400 transition-all duration-500 ease-in-out transform hover:shadow-xl hover:shadow-blue-300 hover:scale-105 hover:border-none w-full h-[400px] rounded-xl flex items-center justify-center">
        <h1 className="text-white font-extrabold text-[50px] text-center">
          About Us
        </h1>
      </div>

      <section className="mb-10 mt-10">
        <h2 className="text-3xl font-semibold mb-4 text-center md:text-left">
          Fashion is Our Passion
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Established in 2007,{" "}
          <span className="font-semibold text-lg">Alfaro Sdn. Bhd.</span> has
          emerged as one of the leading brands within the Malaysian Textile
          Industry. Our leadership is dedicated to cultivating a renowned
          reputation for both efficiency and integrity.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="font-semibold text-lg">Alfaro Sdn. Bhd.</span> is a
          sizable and diversified trading and manufacturing company operating in
          the textile sector. We draw our strength from our innate flexibility,
          enabling us to remain responsive and adaptable to the dynamic market
          trends and technological advancements that continuously emerge.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Our organizational culture prioritizes the observance of evolving
          market trends and technological shifts, with a vigilant leadership
          always at the helm. We possess the unique ability to accommodate
          flexibility in roles and working practices, allowing us to play a more
          proactive role in today's ever-changing global landscape.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Continuous skill development and nurturing of our team members is a
          core part of our strategy. We are dedicated to seeking out,
          developing, and honing the talents within our workforce, ensuring that
          we can consistently deliver innovative, high-quality products to our
          valued customers.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-center md:text-left">
          Our Vision
        </h2>
        <blockquote className="text-lg leading-relaxed border-l-4 border-blue-500 pl-4 italic">
          "To attain the market leadership through premium quality, innovative
          products, diverse corporate culture, highly competitive team of
          professionals and with the help of the world's most advanced
          technological instruments. We strive for the adaptation of best
          procedures in everything we do throughout the Enterprise."
        </blockquote>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-center md:text-left">
          Our Mission
        </h2>
        <p>We continually aim to :</p>
        <ul className="list-disc pl-5 text-lg leading-relaxed">
          <li>Provide quality products</li>
          <li>Focus our strategic development in target market</li>
          <li>Remain innovative</li>
          <li>Leverage our capabilities for efficiency</li>
          <li>
            Remain flexible in addressing changing market dynamics in order to
            utilize our resources efficiently
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-center md:text-left">
          Achievements
        </h2>
        <p className="text-lg leading-relaxed">
          Over the years, we have achieved numerous milestones that highlight
          our growth and success. From industry awards to global recognition,
          our achievements reflect our dedication to excellence and innovation.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-center md:text-left">
          Our Team
        </h2>
        <div className="team-container relative bg-slate-50 p-10 rounded-lg shadow-md">
          <div className="team-board flex justify-center items-center mb-10">
            <div className="text-center">
              <div className="bg-yellow-500 rounded-full mx-auto w-32 h-32 flex items-center justify-center">
                {/* <Image
                  src={teamData[0].image}
                  alt={teamData[0].role}
                  className="rounded-full w-28 h-28 object-cover"
                  width={112}
                  height={112}
                /> */}
              </div>
              <h3 className="text-lg font-bold mt-2">{teamData[0].role}</h3>
              <p>{teamData[0].name}</p>
            </div>
          </div>
          <div className="team-leaders flex justify-center mb-10 flex-wrap">
            {teamData.slice(1, 4).map((member, index) => (
              <div
                key={index}
                className="team-member text-center mx-5 mb-5 w-full sm:w-auto"
              >
                <div className="bg-yellow-500 rounded-full mx-auto w-24 h-24 flex items-center justify-center">
                  {/* <Image
                    src={member.image}
                    alt={member.role}
                    className="rounded-full w-20 h-20 object-cover"
                    width={80}
                    height={80}
                  /> */}
                </div>
                <h3 className="text-lg font-bold mt-2">{member.role}</h3>
                <p>{member.name}</p>
              </div>
            ))}
          </div>
          <div className="team-members grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamData.slice(4).map((member, index) => (
              <div key={index} className="team-member text-center mx-5">
                <div className="bg-yellow-500 rounded-full mx-auto w-24 h-24 flex items-center justify-center">
                  {/* <Image
                    src={member.image}
                    alt={member.role}
                    className="rounded-full w-20 h-20 object-cover"
                    width={80}
                    height={80}
                  /> */}
                </div>
                <h3 className="text-lg font-bold mt-2">{member.role}</h3>
                <p>{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-center md:text-left">
          Global Presence
        </h2>
        <p className="text-lg leading-relaxed mb-4 text-center md:text-left">
          Alfaro is embarking on an exciting journey to seize opportunities
          within the textile markets of the Middle East, Indonesia, Brunei,
          Singapore, Vietnam, the Philippines, and Thailand. Our ambitions
          extend beyond horizons as we strive to extend our global footprint,
          fostering business continuity and propelling profits in collaboration
          with our esteemed business partners and valued franchisees. Our aim is
          to conquer new frontiers in the global textile industry.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {globalPresenceData.map((item, index) => (
            <div key={index} className="text-center hover-container">
              <div className="relative bg-slate-50 p-3 shadow-md rounded-md w-[155px] mx-auto">
                <div
                  className="hover-image-container cursor-pointer"
                  onClick={() => handleImageClick(item.image)}
                >
                  <Image
                    src={item.image}
                    alt={item.country}
                    className="w-[150px] h-auto"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <h3 className="mt-4 text-xl font-semibold bg-gray-800 w-[150px] text-white py-2 rounded-md mx-auto">
                {item.country}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-center md:text-left">
          Quality Assurance / Quality Control
        </h2>
        <div
          className="relative bg-cover bg-center p-10 rounded-lg shadow-md"
          style={{ backgroundImage: "url('/images/quality-bg.jpg')" }}
        >
          <div className="bg-slate-50 bg-opacity-75 p-5 rounded-md">
            <p className="text-lg leading-relaxed mb-4">
              The core purpose of Quality Assurance is to prevent mistakes and
              defects in the development and production of products. Alfaro is
              committed to assure quality by avoiding problems and delays when
              delivering products to customers.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              The management of Alfaro have implemented administrative and
              procedural activities quality system so that requirements and
              goals for a product, will be accomplished.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our "quality assurance" and "quality control" department ensure
              that all our products meet the required quality standards.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-center md:text-left">
          Quality Policy Statement
        </h2>
        <div
          className="relative bg-cover bg-center p-10 rounded-lg shadow-md"
          style={{ backgroundImage: "url('/images/quality-bg.jpg')" }}
        >
          <div className="bg-slate-50 bg-opacity-75 p-5 rounded-md">
            <p className="text-lg leading-relaxed mb-4">
            <span className="font-semibold text-lg">Alfaro Sdn. Bhd.</span> is dedicated to delivering top-notch Malaysian
              ready-made garments, imported Jubah and Abaya, and all kinds of
              hijab at fair prices. Our goal is to surpass our customers'
              expectations and constantly enhance our products, processes, and
              services. We comply with all relevant legal and regulatory
              requirements, as well as international quality standards. We
              promote a culture of quality awareness, teamwork, and innovation
              among our employees, suppliers, and partners.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              We shall ensure the Quality Policy is communicated and understood
              by all employees. It shall be reviewed regularly during Management
              Review to ensure the effectiveness and suitability of the Quality
              Management System for continual improvement.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our quality assurance system includes inspections, testing, and
              feedback at various stages. We also conduct regular customer
              surveys to gauge satisfaction and preferences. Customer
              suggestions and complaints are welcomed and addressed promptly.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our imported products are sourced only from reputable suppliers
              who share our values and meet our quality standards. Defective
              products are not tolerated; they are immediately recalled and
              replaced, with the root cause investigated to prevent recurrence.
              We apologize for any inconvenience caused to our customers and
              provide appropriate compensation.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-center md:text-left">
          Quality Objectives
        </h2>
        <div
          className="relative bg-cover bg-center p-10 rounded-lg shadow-md"
          style={{ backgroundImage: "url('/images/quality-bg.jpg')" }}
        >
          <div className="bg-slate-50 bg-opacity-75 p-5 rounded-md">
            <p className="text-lg leading-relaxed mb-4">
              Outlined below are the quality objectives of <span className="font-semibold text-lg">Alfaro Sdn. Bhd.</span>, a
              textile wholesale and retail company specialized in garments and
              scarves:
            </p>
            <ol className="list-decimal pl-5 text-lg leading-relaxed">
              <li>
                <strong>Product Quality:</strong> Achieve a minimum of 95%
                compliance with industry standards for garment and scarf
                quality, as measured through regular quality inspections and
                audits.
              </li>
              <li>
                <strong>Customer Satisfaction:</strong> Maintain a customer
                satisfaction rating of at least 4.5 out of 5, as determined
                through customer surveys and feedback.
              </li>
              <li>
                <strong>Supplier Evaluation:</strong> Conduct supplier
                evaluations quarterly, assigning a performance rating based on
                criteria such as on-time delivery (95% adherence), material
                quality (minimum 90% acceptance rate), and adherence to ethical
                and sustainable manufacturing practices.
              </li>
              <li>
                <strong>On-Time Delivery:</strong> Achieve a minimum of 98%
                on-time delivery rate for customer orders, measured by tracking
                the percentage of orders delivered within the agreed-upon
                timeframes.
              </li>
              <li>
                <strong>Inventory Management:</strong> Maintain inventory
                accuracy of 99% of higher, as measured through regular cycle
                counts and reconciliation with system records.
              </li>
              <li>
                <strong>Return and Exchange Management:</strong> Aim for a
                resolution time of 3 business days or less for return and
                exchange requests, as tracked through the average time taken to
                process and resolve such requests.
              </li>
              <li>
                <strong>Continuous Improvement:</strong> Implement at least 3
                process improvement initiatives per quarter, identified through
                employee suggestions, customer feedback, and internal reviews,
                resulting in measurable improvements in product quality and
                customer satisfaction.
              </li>
            </ol>
            <p className="text-lg leading-relaxed mt-4">
              By establishing these quality objectives, <span className="font-semibold text-lg">Alfaro Sdn. Bhd.</span> can
              track and evaluate their performance, make data-driven decisions,
              and continuously strive for improvement in key areas of their
              operations.
            </p>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <Image
              src={selectedImage}
              alt="Selected"
              className="w-auto h-[700px] max-w-full max-h-full"
              width={600}
              height={600}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUsPage;
