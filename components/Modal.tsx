import { ModalProps } from "@/types/types";

const Modal: React.FC<ModalProps> = ({
  isVisible,
  onClose,
  bookingData,
}) => {
  if (!isVisible || !bookingData) return null;

  const { service, name, email, dueDate, description } = bookingData;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-sm w-full mx-auto">
        <h2 className="text-xl font-bold mb-4">Booking Confirmed</h2>
        <p className="mb-4">Thank you for booking the {service} service.</p>
        <p className="mb-2"><strong>Name:</strong> {name}</p>
        <p className="mb-2"><strong>Email:</strong> {email}</p>
        <p className="mb-2"><strong>Due Date:</strong> {dueDate}</p>
        <p className="mb-4"><strong>Description:</strong> {description}</p>
        <p className="mb-4">Please don't forget to make the payment for the service.</p>
        <button
          onClick={onClose}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
