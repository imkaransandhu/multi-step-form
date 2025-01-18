import Image from "next/image";

export default function PlanCard({
  iconPath,
  altText,
  monthlyPrice,
  yearlyPrice,
  benefits,
  planName,
  activeType,
}) {
  return (
    <div
      className={`border-2 border-primarylightgray rounded-lg 
        w-full md:w-[45%] lg:w-[30%] 
        flex flex-row  gap-x-4 lg:gap-x-0 md:flex-col px-3 py-4`}
    >
      <Image height={"40px"} width={"40px"} src={iconPath} alt={altText} />
      <div className="h-auto mt-0 lg:mt-12">
        <h4 className={`text-primarymarineblue font-[600] `}>{planName}</h4>
        {activeType === "yearly" ? (
          <>
            <p className={`text-neutralcoolgray`}>{yearlyPrice}</p>
            <p className={`text-primarymarineblue text-sm`}>{benefits}</p>
          </>
        ) : (
          <p className={`text-neutralcoolgray`}>{monthlyPrice}</p>
        )}
      </div>
    </div>
  );
}
