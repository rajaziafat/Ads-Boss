import Button from "components/common/Button";
import Section from "components/common/Section";

const Contact = () => {
  return (
    <Section className="relative bg-[#D6D6D6] overflow-hidden">
      <img
        src="/assets/bg-glitter.png"
        alt="glitter"
        className="absolute left-0 top-0 w-full h-full object-cover opacity-10"
      />
      <div className="relative xl:flex justify-between gap-12 2xl:gap-[100px] text-[#343434] z-10">
        <div className="w-full xl:max-w-[720px] flex xl:justify-start justify-center gap-[34px] py-[66px] xl:pt-[104px] xl:pb-[118px]">
          <div className="lg:mt-10">
            <h2 className="text-[48px] font-abc mb-2 sm:mb-4">Talk to us</h2>
            <p className="text-lg sm:text-xl lg:text-[25px]">
              We would love to hear from you
            </p>

            <form className="mt-16" action="">
              <input
                className="mb-[36px] w-full bg-[#B5B5B5E5] border border-solid border-[#4E4E4E] rounded-[6px] text-black outline-none placeholder:text-black text-xl px-6 py-1"
                type="text"
                placeholder="Name"
              />
              <input
                className="mb-[36px] w-full bg-[#B5B5B5E5] border border-solid border-[#4E4E4E] rounded-[6px] text-black outline-none placeholder:text-black text-xl px-6 py-1"
                type="text"
                placeholder="Email"
              />

              <textarea
                name="description"
                id="descriptoin"
                cols="30"
                rows="5"
                className="w-full bg-[#B5B5B5E5] border border-solid border-[#4E4E4E] rounded-[6px] text-black outline-none placeholder:text-black text-xl px-6 py-1"
                placeholder="Description"
              ></textarea>

              <Button black className="mt-[62px] min-w-[217px] mx-auto block">
                Submit
              </Button>
            </form>
          </div>
        </div>{" "}
        <div className="absolute right-0 bottom-0 max-w-[500px] xl:max-w-full opacity-50 xl:opacity-100 xl:relative flex-grow">
          &nbsp;
          <img
            className="xl:absolute left-0 bottom-0 w-full 2xl:w-[45vw] xl:max-w-[858px]"
            src="/assets/contact-man.png"
            alt="contact"
          />
        </div>
      </div>
    </Section>
  );
};

export default Contact;
