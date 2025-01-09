export default function CustomButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className={`ml-auto mt-auto py-3.5 px-6 rounded-md flex	
        bg-primarymarineblue text-white font-[400] 
        hover:bg-primarypastelblue transition duration-300 `}
    >
      Next Step
    </button>
  );
}
