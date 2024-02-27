import Hero from "components/landing/Hero";
import Consultation from "components/landing/Consultation";
import CustomizedProposal from "components/landing/CustomizedProposal";
import ApprovalSetup from "components/landing/ApprovalSetup";
import MonitorOptimize from "components/landing/MonitorOptimize";
import Contact from "components/landing/Contact";

const Landing = () => {
  return (
    <>
      <Hero />
      <Consultation />
      <CustomizedProposal />
      <ApprovalSetup />
      <MonitorOptimize />
      <Contact />
    </>
  );
};

export default Landing;
