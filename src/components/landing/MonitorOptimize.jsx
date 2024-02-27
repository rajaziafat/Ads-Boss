import Button from "components/common/Button";
import Section from "components/common/Section";

const MonitorOptimize = () => {
  return (
    <Section className="relative bg-[#C8FF29]">
      <img
        src="/assets/arrow-right-black.svg"
        alt="arrow"
        className="absolute -top-[30px] w-[230px] sm:w-[250px] [transform:rotateY(180deg)] xl:rotate-0 left-[20vw] 2xl:left-[27vw]"
      />
      <div className="relative flex justify-between gap-12 2xl:gap-[100px] text-[#D9D9D9] z-10">
        <div className="absolute opacity-50 xl:opacity-100 max-w-[300px] 2xl:max-w-full bottom-0 right-0 xl:relative flex-grow">
          &nbsp;
          <img
            className="xl:absolute left-0 2xl:-left-[150px] xl:top-1/2 2xl:top-[-30px] xl:-translate-y-1/2 2xl:translate-y-0 w-full xl:w-[120%] 2xl:w-[150%] max-w-[724px]"
            src="/assets/monitor-woman.png"
            alt="monitor"
          />
        </div>
        <div className="xl:max-w-[720px] flex flex-col sm:flex-row gap-[34px] py-[66px] xl:pt-[66px] xl:pb-[188px]">
          <div className="flex-shrink-0 w-10 sm:w-[60px] h-10 sm:h-[60px] rounded-full bg-[#151515] flex justify-center items-center text-[#d9d9d9] font-bold text-2xl sm:text-[42px]">
            4
          </div>
          <div className="sm:mt-20 text-black">
            <h2 className="text-4xl sm:text-5xl lg:text-[60px] mb-10">
              Monitor & Optimise
            </h2>

            <ul className="text-xl lg:text-[25px] list-disc pl-10">
              <li className="mb-5">
                Receive regular updates and reports on key metrics.
              </li>
              <li className="mb-5">
                If adjustments are needed, communicate directly with your
                dedicated account manager.
              </li>
              <li className="mb-5">
                Our team continuously optimizes campaigns for maximum ROI,
                saving you time and effort.
              </li>
            </ul>

            <Button black className="mt-[62px]">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MonitorOptimize;
