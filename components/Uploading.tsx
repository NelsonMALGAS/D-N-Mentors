const Uploading = () => {
  return (
    <div className="flex items-center justify-center min-h-4 bg-transparent">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-gray-600 border-t-4 border-t-white rounded-full animate-spin"></div>
        <p className="text-white text-2xl mt-4">Uploading...</p>
      </div>
    </div>
  );
};

export default Uploading;
