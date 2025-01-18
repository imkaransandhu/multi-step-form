const CustomCheckbox = ({ checked, setChecked }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <div
        className={`w-6 h-6 rounded-md ${
          checked
            ? "bg-primarypastelblue border-primarypastelblue"
            : "bg-transparent border-primarylightgray"
        } flex items-center justify-center transition-all duration-300 border-2 peer-checked:bg-primarypastelblue`}
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
    </label>
  );
};

export default CustomCheckbox;
