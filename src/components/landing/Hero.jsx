import Button from "components/common/Button";
import Section from "../common/Section";

const Hero = () => {
  return (
    <Section className="relative bg-hero pt-[54px] pb-12">
      <img
        src="/assets/bg-glitter.png"
        alt="glitter"
        className="absolute left-0 top-0 w-full h-full object-cover opacity-10"
      />
      <div className=" relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 justify-between items-center">
          <div className="w-[690x] flex-shrink-0">
            <h1 className="font-anton relative z-10 lg:z-auto overflow-hidden">
              <div className="block relative">
                <span className="text-[80px] sm:text-[160px] xl:text-[235px] leading-none text-[#F9F9F9]">
                  4 STEPS
                </span>
                <span className="absolute left-0 top-0 text-[80px] sm:text-[160px] xl:text-[235px] leading-none text-[#F9F9F9] bg-glitter text-transparent bg-clip-text opacity-50 [background-size:300%]">
                  4 STEPS
                </span>
              </div>
              <br />
              <div className="block relative">
                <span className="text-[54px] sm:text-[110px] xl:text-[151px] leading-none text-[#CEFF09]">
                  TO SUCCESS
                </span>
                <span className="absolute left-0 top-0 text-[54px] sm:text-[110px] xl:text-[151px] leading-none text-[#F9F9F9] bg-glitter text-transparent bg-clip-text opacity-50 [background-size:300%]">
                  TO SUCCESS
                </span>
              </div>
            </h1>
            <Button
              green
              className="sm:w-[243px] mx-auto lg:mx-0 block mt-10 xl:mt-[78px]"
            >
              Find out more
            </Button>
          </div>
          <div className="max-w-[300px] lg:max-w-[unset]">
            <img
              className="max-w-[450px] xl:max-w-[560px] w-full"
              src="/assets/hero-man.png"
              alt="hero"
            />
          </div>
        </div>

        <div className="mt-20 xl:mt-[111px] mx-auto max-w-[500px] xl:max-w-[unset] flex flex-col sm:flex-row items-center gap-5 md:gap-10 justify-between flex-wrap">
          <div className="sm:w-[calc(50%-20px)] lg:w-auto flex items-center gap-2 xl:gap-3">
            <div className="w-[28px] sm:w-[35px] h-[28px] flex-shrink-0 sm:h-[35px] rounded-full bg-[#D9D9D9] text-[#151515] text-base xm:text-2xl flex justify-center items-center font-bold">
              1
            </div>
            <div className="w-[150px] sm:w-auto text-[#D9D9D9] text-sm sm:text-lg xl:text-xl 2xl:text-[30px]">
              Consultation
            </div>
          </div>
          <div className="sm:w-[calc(50%-20px)] lg:w-auto flex items-center gap-3">
            <div className="w-[28px] sm:w-[35px] h-[28px] flex-shrink-0 sm:h-[35px] rounded-full bg-[#D9D9D9] text-[#151515] text-base xm:text-2xl flex justify-center items-center font-bold">
              2
            </div>
            <div className="w-[150px] sm:w-auto text-[#D9D9D9] text-sm sm:text-lg xl:text-xl 2xl:text-[30px]">
              Customised Proposal
            </div>
          </div>
          <div className="sm:w-[calc(50%-20px)] lg:w-auto flex items-center gap-3">
            <div className="w-[28px] sm:w-[35px] h-[28px] flex-shrink-0 sm:h-[35px] rounded-full bg-[#D9D9D9] text-[#151515] text-base xm:text-2xl flex justify-center items-center font-bold">
              3
            </div>
            <div className="w-[150px] sm:w-auto text-[#D9D9D9] text-sm sm:text-lg xl:text-xl 2xl:text-[30px]">
              Approval & Setup
            </div>
          </div>
          <div className="sm:w-[calc(50%-20px)] lg:w-auto flex items-center gap-3">
            <div className="w-[28px] sm:w-[35px] h-[28px] flex-shrink-0 sm:h-[35px] rounded-full bg-[#D9D9D9] text-[#151515] text-base xm:text-2xl flex justify-center items-center font-bold">
              4
            </div>
            <div className="w-[150px] sm:w-auto text-[#D9D9D9] text-sm sm:text-lg xl:text-xl 2xl:text-[30px]">
              Monitor & Optimise
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
