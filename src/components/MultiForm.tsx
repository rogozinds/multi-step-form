import styles from './multiform.module.css'
import {useState} from "react";
import {StepOne} from "@/components/StepOne";
import {NavBar, StepHeader} from "@/components/NavBar";
import {StepFour} from "@/components/StepFour";
import {StepTwo} from "@/components/StepTwo";
import {StepThree} from "@/components/StepThree";
export const MultiForm = () => {

    const [step, setStep] = useState(1);
  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      case 4:
        return <StepFour />;
      default:
        return <StepOne />;
    }
  };
    return (
            <div className={`container ${styles.main}`}>
              <NavBar className="nav-bar" steps={steps} activeStep={step} setActiveStep={setStep} />
              <div className="content">
                {renderStep()}
              </div>
            </div>
    );
};
const steps:StepHeader[]= [
    {
        index:1,
        title: "Your Info"
    },
    {
        index:2,
        title: "Select Plan"
    },
    {
        index:3,
        title: "Add-ons"
    },
    {
        index:4,
        title: "Summary"
    }
]
