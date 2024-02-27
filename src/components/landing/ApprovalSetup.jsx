import Button from "components/common/Button";
import Section from "components/common/Section";

const ApprovalSetup = () => {
  return (
    <Section className="relative bg-hero border-t-[5px] border-solid border-[#C8FF29]">
      <img
        src="/assets/arrow-left.svg"
        alt="arrow"
        className="absolute w-[230px] sm:w-[250px] xl:rotate-0 left-[20vw] lg:right-[45vw] top-0"
      />
      <img
        src="/assets/bg-glitter.png"
        alt="glitter"
        className="absolute left-0 top-0 w-full h-full object-cover opacity-10"
      />
      <div className="relative flex flex-col lg:flex-row justify-between gap-6 2xl:gap-[100px] text-[#C8FF29] z-10">
        <div className="xl:max-w-[720px] flex flex-col sm:flex-row gap-[34px] pt-[66px] lg:pb-[66px] xl:pt-20 xl:pb-[118px]">
          <div className="flex-shrink-0 w-10 sm:w-[60px] h-10 sm:h-[60px] rounded-full bg-[#C8FF29] flex justify-center items-center text-[#151515] font-bold text-2xl sm:text-[42px]">
            3
          </div>
          <div className="sm:mt-20">
            <h2 className="text-4xl sm:text-5xl lg:text-[60px] mb-10">
              Approval & Setup
            </h2>

            <ul className="text-xl lg:text-[25px] list-disc pl-10">
              <li className="mb-5">
                Once satisfied with the proposal, simply click the "Approve"
                button in the email.
              </li>
              <li className="mb-5">
                Complete a quick online onboarding form to provide necessary
                details.
              </li>
              <li className="mb-5">
                Our team will handle the setup, including ad creatives,
                targeting, and tracking.
              </li>
              <li>You'll be notified when campaigns are ready for launch</li>
            </ul>

            <Button green greenText className="mt-[62px]">
              Learn more
            </Button>
          </div>
        </div>{" "}
        <div className="mx-auto lg:mx-0 max-w-[300px] xl:max-w-[1000px] xl:relative flex-grow">
          &nbsp;
          <img
            className="xl:absolute xl:left-0 xl:top-1/2 xl:-translate-y-1/2 2xl:translate-y-0 2xl:top-[0px] w-full 2xl:w-[40vw] max-w-[706px]"
            src="/assets/approval-man.png"
            alt="approval"
          />
        </div>
      </div>
    </Section>
  );
};

export default ApprovalSetup;
