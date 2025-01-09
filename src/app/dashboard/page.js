import MainContainer from "@/components/MainContainer/MainContainer";
import StepContainer from "@/components/StepContainer/StepContainer";

export default function DashBoard() {
  return (
    <div
      className={`w-full p-0 pb-4 md:py-8 md:px-4 flex justify-center  bg-primarylightblue`}
    >
      <div
        className={`rounded-lg flex flex-col md:flex-row justify-center 
        p-0 md:p-3.5 md:h-650 w-full md:min-w-3/5 md:w-auto
        bg-primarylightblue md:bg-primarywhite`}
      >
        <StepContainer />
        <MainContainer />
      </div>
    </div>
  );
}
