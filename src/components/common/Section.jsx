import clsx from "clsx";

const Section = ({ className, children }) => {
  return (
    <div className={clsx("px-5 md:px-10", className)}>
      <div className="max-w-[1550px] mx-auto">{children}</div>
    </div>
  );
};

export default Section;
