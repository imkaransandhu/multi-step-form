import CustomButton from "../CustomButton/CustomButton";
import Heading from "../Heading/Heading";
import InputField from "../InputField/InputField";

export default function Step1() {
  return (
    <div className="right-section  rounded-lg md:rounded-l-none md:rounded-r-lg relative -top-16 md:top-0 flex flex-col mx-auto w-[90%] sm:w-[80%] md:w-full bg-primarywhite text-white p-6	md:px-16  lg:px-28 lg:pt-8 lg:pb-4">
      <Heading
        headingText="Personal info"
        headingDesciption="Please provide your name, email address, and phone number."
      />
      <InputField
        type="text"
        label="Name"
        placeholderText="e.g. Stephen King"
      />

      <InputField
        type="email"
        label="Email Address"
        placeholderText="e.g. stephenking@lorem.com"
      />

      <InputField
        type="number"
        label="Phone Number"
        placeholderText="e.g. +1234567890"
      />

      <CustomButton />
    </div>
  );
}
