export default function InputField({ label, placeholderText, type }) {
  return (
    <div className="flex flex-col space-y-1 pb-4">
      <label
        htmlFor={label}
        className="text-md font-medium text-primarymarineblue"
      >
        {label}
      </label>
      <input
        id={label}
        type={type}
        placeholder={placeholderText}
        className="px-4 py-3.5 border text-primarymarineblue font-[500] rounded-md"
      />
    </div>
  );
}
