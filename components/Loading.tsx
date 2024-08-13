

const Loading = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex items-center justify-center">
          <svg
            className="w-12 h-12 text-blue-500 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M4.93 4.93a10 10 0 0 1 14.14 14.14M20.07 4.93a10 10 0 0 0-14.14 14.14" />
          </svg>
        </div>
      </div>
    );
  };
  
  export default Loading;
  