import { modules } from '../data/modules';

const CourseCards = () => {
  return (
    <div className="p-6 bg-gray-900">
      {modules.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-4xl font-bold mb-6 text-white">{section.category}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {section.items.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:bg-gray-700 transition-colors duration-300"

              >
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-400 mb-2"><strong>Price:</strong> {item.price}</p>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCards;
