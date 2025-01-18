"use client";
import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import Heading from "../Heading/Heading";
import PlanCard from "../PlanCard/PlanCard";
import ArcadeIcon from "./../../../public/images/icon-arcade.svg";
import ProIcon from "./../../../public/images/icon-pro.svg";
import AdvancedIcon from "./../../../public/images/icon-advanced.svg";
import ToggleButton from "../ToggleButton/ToggleButton";

export default function Step2() {
  const [activePlanType, setActivePlanType] = useState("monthly");
  return (
    <div className="right-section rounded-lg md:rounded-l-none md:rounded-r-lg relative -top-16 md:top-0 flex flex-col mx-auto w-[90%] sm:w-[80%] md:w-full bg-primarywhite text-white px-6 py-4	md:px-12  lg:px-28 lg:pt-8 lg:pb-4">
      <Heading
        headingText="Select your plan"
        headingDesciption="You have the option of monthly or yearly billing."
      />
      <div
        className={`flex flex-col md:flex-row flex-wrap justify-between
          gap-x-0 gap-y-2 lg:gap-y-0 md:gap-x-4 
          pb-4`}
      >
        <PlanCard
          iconPath={ArcadeIcon}
          altText="arcade plan"
          planName="Arcade"
          monthlyPrice="$9/mo"
          yearlyPrice="$90/yr"
          benefits="2 months free"
          activeType={activePlanType}
        />

        <PlanCard
          iconPath={AdvancedIcon}
          altText="arcade plan"
          planName="Advanced"
          monthlyPrice="$12/mo"
          yearlyPrice="$120/yr"
          benefits="2 months free"
          activeType={activePlanType}
        />

        <PlanCard
          iconPath={ProIcon}
          altText="arcade plan"
          planName="Pro"
          monthlyPrice="$15/mo"
          yearlyPrice="$150/yr"
          benefits="2 months free"
          activeType={activePlanType}
        />
      </div>

      <div
        className={`flex justify-between bg-primarylightgray text-neutralcoolgray p-4 rounded-xl mb-4`}
      >
        <p className={`cursor-pointer`}>Montly</p>
        <ToggleButton
          activePlanType={activePlanType}
          setActivePlanType={setActivePlanType}
        />
        <p className={`cursor-pointer	`}>Yearly</p>
      </div>
      <CustomButton />
    </div>
  );
}
