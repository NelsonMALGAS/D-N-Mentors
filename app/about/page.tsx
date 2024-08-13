const AboutUs = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <section className="mb-12">
        <h1 className="text-4xl font-extrabold text-center mb-8">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Executive Summary Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300 col-span-1 lg:col-span-3">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Executive Summary</h2>
            <p className="text-gray-600 leading-relaxed">
              Kelebogile Doctor Modisane &amp; Nelson Zongezile Malgas Tutor and Mentor Organization is a comprehensive educational service provider specializing in assisting students with their academic studies. Our organization offers tutoring and mentoring services across various subjects, including business, finance, economics, public administration, and project management. With a team of experienced tutors and mentors, we aim to support students at all levels of their education journey, from first-year modules to advanced coursework.
            </p>
          </div>

          {/* Business Description Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300 col-span-1">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Business Description</h2>
            <p className="text-gray-600 leading-relaxed">
              Kelebogile Doctor Modisane &amp; Nelson Zongezile Malgas Tutor and Mentor Organization provides a wide range of modules to cater to the diverse needs of students. These modules cover subjects such as business mathematics, finance, accounting, economics, public administration, project management, and more. We offer services including KCQs (Key Concept Questions), exams preparation, assignments assistance, project guidance, private classes, and homework support.
            </p>
          </div>

          {/* Market Analysis Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300 col-span-1">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Market Analysis</h2>
            <p className="text-gray-600 leading-relaxed">
              The demand for academic support services continues to grow as students seek additional assistance to excel in their studies. With the increasing complexity of educational curricula and the competitive nature of academic environments, there is a significant market for tutoring and mentoring services. Our organization aims to capitalize on this demand by providing high-quality, personalized support to students across various disciplines.
            </p>
          </div>

          {/* Marketing and Sales Strategy Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300 col-span-1">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Marketing and Sales Strategy</h2>
            <p className="text-gray-600 leading-relaxed">
              We will employ a multi-channel marketing approach to reach our target audience, including online advertising, social media marketing, partnerships with educational institutions, and word-of-mouth referrals. Additionally, we will offer promotional discounts and incentives to attract new clients and retain existing ones. Our sales team will focus on building long-term relationships with clients and providing excellent customer service to ensure satisfaction and loyalty.
            </p>
          </div>

          {/* Operations Plan Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300 col-span-1 lg:col-span-3">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Operations Plan</h2>
            <p className="text-gray-600 leading-relaxed">
              Our operations will be streamlined to ensure efficiency and effectiveness in delivering our services. We will recruit experienced tutors and mentors with expertise in their respective fields to provide high-quality instruction and guidance to students. Our scheduling system will allow for flexible booking of private classes and homework assistance sessions to accommodate students&apos; busy schedules. We will also invest in technology and resources to support our operations and enhance the learning experience for our clients.
            </p>
          </div>

          {/* Financial Plan Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300 col-span-1 lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Financial Plan</h2>
            <p className="text-gray-600 leading-relaxed">
              We project steady revenue growth over the next three years as we expand our client base and diversify our service offerings. Our pricing strategy is competitive and reflects the value we provide to our clients. We will closely monitor our expenses and manage costs to ensure profitability and sustainability. Additionally, we will explore opportunities for additional revenue streams, such as partnerships with educational institutions and corporate training programs.
            </p>
          </div>

          {/* Growth Strategy Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300 col-span-1">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Growth Strategy</h2>
            <p className="text-gray-600 leading-relaxed">
              As we grow our organization, we will focus on expanding our service offerings, entering new markets, and building strategic partnerships. We will continuously evaluate market trends and customer feedback to adapt and innovate our services to meet evolving needs. Our long-term goal is to become a trusted leader in the education support industry, known for our commitment to excellence and student success.
            </p>
          </div>

          {/* Conclusion Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300 col-span-1 lg:col-span-3">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Conclusion</h2>
            <p className="text-gray-600 leading-relaxed">
              Kelebogile Doctor Modisane &amp; Nelson Zongezile Malgas Tutor and Mentor Organization is poised to make a significant impact in the education support sector by providing personalized, high-quality services to students. With our experienced team, comprehensive modules, and dedication to student success, we are confident in our ability to achieve our goals and become a leader in the industry.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
