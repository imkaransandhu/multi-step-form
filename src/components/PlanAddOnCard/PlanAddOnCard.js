import { useState } from "react";
import CustomCheckbox from "../CustomCheckBox/CustomCheckBox";

export default function PlanAddOnCard({
  addOnType,
  addOnDescription,
  activeType,
  monthlyPrice,
  yearlyPrice,
}) {
  const [checked, setChecked] = useState(false);
  return (
    <div
      className={` flex items-center	
        border-2 ${
          checked ? "border-primarypastelblue" : "border-primarylightgray"
        } rounded-lg
        p-2 md:px-4 lg:px-6 md:py-2`}
    >
      <CustomCheckbox checked={checked} setChecked={setChecked} />

      <div className="ml-2 md:ml-4 lg:ml-6 ">
        <p className="text-primarymarineblue font-bold	">{addOnType}</p>
        <p className="text-neutralcoolgray">{addOnDescription}</p>
      </div>

      <div className="ml-auto text-primarypastelblue">
        <p>{activeType === "monthly" ? monthlyPrice : yearlyPrice}</p>
      </div>
    </div>
  );
}
