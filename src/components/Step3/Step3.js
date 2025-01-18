"use client";
import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import Heading from "../Heading/Heading";
import PlanCard from "../PlanCard/PlanCard";
import ArcadeIcon from "./../../../public/images/icon-arcade.svg";
import ProIcon from "./../../../public/images/icon-pro.svg";
import AdvancedIcon from "./../../../public/images/icon-advanced.svg";
import ToggleButton from "../ToggleButton/ToggleButton";
import PlanAddOnCard from "../PlanAddOnCard/PlanAddOnCard";

export default function Step3() {
  const [activePlanType, setActivePlanType] = useState("monthly");
  return (
    <div className="right-section rounded-lg md:rounded-l-none md:rounded-r-lg relative -top-16 md:top-0 flex flex-col mx-auto w-[90%] sm:w-[80%] md:w-full bg-primarywhite text-white px-6 py-4	md:px-12  lg:px-28 lg:pt-8 lg:pb-4">
      <Heading
        headingText="Pick add-ons"
        headingDesciption="Add-ons help enhance your gaming experience."
      />
      <div
        className={`flex flex-col flex-wrap justify-between
          gap-y-3 mb-4`}
      >
        <PlanAddOnCard
          addOnType="Online service"
          addOnDescription="Access to multiplayer games"
          activeType="monthly"
          monthlyPrice="+$1/mo"
          yearlyPrice="+10/yr"
        />
        <PlanAddOnCard
          addOnType="Larger storage"
          addOnDescription="Extra 1TB of cloud save"
          activeType="monthly"
          monthlyPrice="+$2/mo"
          yearlyPrice="+20/yr"
        />
        <PlanAddOnCard
          addOnType="Customizable Profile"
          addOnDescription="Custom theme on your profile"
          activeType="yearly"
          monthlyPrice="+$2/mo"
          yearlyPrice="+20/yr"
        />
      </div>

      <CustomButton />
    </div>
  );
}
