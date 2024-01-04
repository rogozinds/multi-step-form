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
        return <StepOne step={step} setStep={setStep}/>;
      case 2:
        return <StepTwo step={step} setStep={setStep}/>;
      case 3:
        return <StepThree step={step} setStep={setStep}/>;
      case 4:
        return <StepFour step={step} setStep={setStep}/>;
      default:
        return <StepOne step={step} setStep={setStep}/>;
    }
  };
    return (
            <div className={`container ${styles.main}`}>
              <div className={styles.navbar}>
                  <NavBar steps={steps} activeStep={step} setActiveStep={setStep} />
              </div>
              <div className={styles.content}>
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
