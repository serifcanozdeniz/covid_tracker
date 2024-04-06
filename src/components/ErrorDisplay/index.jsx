import { IoWarning } from "react-icons/io5";

const ErrorDisplay = ({ message, retry }) => {
  return (
    <>
      <div className=" flex items-center gap-4 bg-red-500 rounded-md p-3">
        <IoWarning className="text-4xl" />;
        <div>
          <h2>Üzgünüz bir hata oluştu</h2>
          <p>{message}</p>
        </div>
      </div>

      <button
        onClick={retry}
        className="border text-gray-600 hover:bg-gray-100 transition p-2 rounded-md"
      >
        Tekrar Dene
      </button>
    </>
  );
};

export default ErrorDisplay;
