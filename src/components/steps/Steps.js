import Styles from "./styles.module.css";

function Steps({ stepCounting, stepInformation }) {
  return (
    <div
      className={` h-1/8 w-full flex items-center justify-center md:justify-start gap-x-6`}
    >
      <div
        className={`step-counting ${
          stepCounting == "1" ? Styles.activeStep : ""
        }
        bg-transparent border-2 text-white rounded-full 
        w-10 h-10 flex items-center justify-center`}
      >
        {stepCounting}
      </div>
      <div className="step-details hidden md:flex flex-col justify-left text-left uppercase">
        <p className="font-thin">step {stepCounting}</p>
        <p className="font-medium">{stepInformation}</p>
      </div>
    </div>
  );
}

export default Steps;
