import { ModalProps } from "@/types/types";

const Modal: React.FC<ModalProps> = ({
  isVisible,
  onClose,
  bookingData,
}) => {
  if (!isVisible || !bookingData) return null;

  const { service, name, email, dueDate, description,date } = bookingData;

  const formatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const humanReadableDate = formatter.format(date);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl max-w-sm w-full mx-auto transform transition-transform duration-300 ease-in-out scale-95 hover:scale-100">
        <h2 className="text-2xl font-bold text-center mb-6">🎉 Booking Confirmed!</h2>
        <p className="text-center mb-6">Thank you for booking the <span className="font-semibold text-blue-400">{service}</span> service.</p>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-400">Name:</span>
            <span className="font-semibold">{name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Email:</span>
            <span className="font-semibold">{email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Date:</span>
            <span className="font-semibold">{humanReadableDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Due Date:</span>
            <span className="font-semibold">{dueDate}</span>
          </div>
          <div>
            <span className="block text-gray-400 mb-1">Description:</span>
            <p className="font-medium bg-gray-700 p-3 rounded-lg">{description}</p>
          </div>
        </div>
        <p className="mt-6 text-center text-sm">Please don't forget to make the payment for the service.</p>
        <button
          onClick={onClose}
          className="w-full mt-6 py-2 px-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
