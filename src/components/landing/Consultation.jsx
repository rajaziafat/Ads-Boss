import Button from "components/common/Button";
import Section from "components/common/Section";

const Consultation = () => {
  return (
    <Section className="pt-[66px] xl:pt-[84px] lg:pb-[66px] xl:pb-[180px] bg-[#D6D6D6] text-[#343434]">
      <div className="relative flex flex-col lg:flex-row justify-between gap-6 xl:gap-[100px]">
        <div className="xl:max-w-[636px] flex flex-col sm:flex-row gap-5 sm:gap-[34px]">
          <div className="flex-shrink-0 w-10 sm:w-[60px] h-10 sm:h-[60px] rounded-full bg-[#151515] flex justify-center items-center text-[#D9D9D9] font-bold text-2xl sm:text-[42px]">
            1
          </div>
          <div className="sm:mt-20">
            <h2 className="text-4xl sm:text-5xl lg:text-[60px] mb-10">
              Consultation
            </h2>

            <ul className="text-xl lg:text-[25px] list-disc pl-10">
              <li className="mb-5">
                Provide basic information about your business and advertising
                goals.
              </li>
              <li>
                Our expert will reach out to you at the scheduled time to
                discuss your needs and tailor a strategy
              </li>
            </ul>

            <Button className="mt-10 lg:mt-20" black>
              Book a Consultation
            </Button>
          </div>
        </div>

        <div className="relative max-w-[300px] mx-auto lg:mx-0 xl:max-w-full flex-grow">
          <img
            className="xl:absolute left-0 top-1/2 xl:-top-[80px] translate-y-0 w-full max-w-[593px]"
            src="/assets/consultation-man.png"
            alt="consultation"
          />
        </div>
      </div>
    </Section>
  );
};

export default Consultation;
