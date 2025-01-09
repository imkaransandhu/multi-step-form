import Image from "next/image";
import Steps from "../steps/Steps";
import backgroundDesktopSidebar from "./../../../public/images/bg-sidebar-desktop.svg";
import backgroundMobileSidebar from "./../../../public/images/bg-sidebar-mobile.svg";
import styles from "./styles.module.css";

export default function StepContainer() {
  return (
    <div
      className={`${
        (styles.fontUbuntu, styles.imageHeightWidth)
      } font-semibold flex relative rounded-l-lg w-1/4 bg-primarywhite`}
    >
      {/* Background Image */}
      <div className="desktop hidden md:flex absolute inset-0 h-full">
        <Image
          src={backgroundDesktopSidebar}
          alt=""
          className={`object-contain`}
        />
      </div>

      <div className="mobile flex md:hidden absolute inset-0 h-full">
        <Image
          src={backgroundMobileSidebar}
          alt=""
          className={`object-cover w-full `}
        />
      </div>

      {/* Content Over Image */}
      <div
        className={`${styles.imageHeightWidth} relative z-10 flex flex-row md:flex-col items-start md:items-center justify-start p-8 gap-y-4 text-white h-auto w-full`}
      >
        <Steps stepInformation="Your Info" stepCounting="1" />
        <Steps stepInformation="Select Plan" stepCounting="2" />
        <Steps stepInformation="Add-Ons" stepCounting="3" />
        <Steps stepInformation="Summary" stepCounting="4" />
      </div>
    </div>
  );
}
