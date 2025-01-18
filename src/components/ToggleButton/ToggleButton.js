const ToggleButton = ({ activePlanType, setActivePlanType }) => {
  const handleToggle = () => {
    activePlanType === "monthly"
      ? setActivePlanType("yearly")
      : setActivePlanType("monthly");
  };

  return (
    <div
      className={`w-10 h-6 flex items-center rounded-full cursor-pointer transition-colors duration-300 bg-primarymarineblue`}
      onClick={handleToggle}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          activePlanType === "yearly" ? "translate-x-5" : "translate-x-1"
        }`}
      ></div>
    </div>
  );
};

export default ToggleButton;
