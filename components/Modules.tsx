
import { modules } from '../data/modules';

const CourseCards = () => {
  return (
    <div className="p-6">
      {modules.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{section.category}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {section.items.map((item, idx) => (
              <div key={idx} className="bg-white shadow-lg rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 mb-2"><strong>Price:</strong> {item.price}</p>
                <p className="text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCards;
