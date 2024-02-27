import Button from "components/common/Button";
import Section from "components/common/Section";

const CustomizedProposal = () => {
  return (
    <Section className="relative bg-hero">
      <img
        src="/assets/arrow-right.svg"
        alt="arrow"
        className="absolute w-[230px] sm:w-[250px] [transform:rotateY(180deg)] xl:rotate-0 left-[20vw] 2xl:left-[27vw] top-0"
      />
      <img
        src="/assets/bg-glitter.png"
        alt="glitter"
        className="absolute left-0 top-0 w-full h-full object-cover opacity-10"
      />
      <div className="relative flex flex-col-reverse xl:flex-row items-center justify-between gap-12 xl:gap-[100px] text-[#D9D9D9] z-10">
        <div className="relative xl:static flex-grow">
          &nbsp;
          <img
            className="xl:absolute left-0 bottom-0 w-full xl:w-[150%] max-w-[500px] xl:max-w-[656px]"
            src="/assets/proposal-woman.png"
            alt="consultation"
          />
        </div>
        <div className="xl:max-w-[720px] flex flex-col sm:flex-row gap-[34px] pb-0 pt-[66px] xl:py-[66px]">
          <div className="flex-shrink-0 w-10 sm:w-[60px] h-10 sm:h-[60px] rounded-full bg-[#D9D9D9] flex justify-center items-center text-[#151515] font-bold text-2xl sm:text-[42px]">
            2
          </div>
          <div className="sm:mt-20">
            <h2 className="text-4xl sm:text-5xl lg:text-[60px] mb-10">
              Customized Proposal
            </h2>

            <ul className="text-xl lg:text-[25px] list-disc pl-10">
              <li className="mb-5">
                Based on the consultation, our team will create a tailored
                digital marketing proposal.
              </li>
              <li className="mb-5">
                You'll receive the proposal in your email within 24 hours.
              </li>
              <li className="mb-5">
                The proposal will outline the recommended ad platforms, budget,
                and expected outcomes.
              </li>
              <li>
                Review the proposal and discuss any adjustments or
                clarifications with our team.
              </li>
            </ul>

            <Button green className="mt-[62px]">
              Arrange now
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CustomizedProposal;
