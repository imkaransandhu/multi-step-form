export default function Heading({ headingText, headingDesciption }) {
  return (
    <div className={`pb-6 `}>
      <h2 className={`text-3xl font-[600] text-primarymarineblue`}>
        {headingText}
      </h2>
      <p className={`text-neutralcoolgray`}>{headingDesciption}</p>
    </div>
  );
}
