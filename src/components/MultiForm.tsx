import styles from './multiform.module.css'
import {StepOne} from "@/components/StepOne";
import {NavBar, StepHeader} from "@/components/NavBar";
import {StepFour} from "@/components/StepFour";
import {StepTwo} from "@/components/StepTwo";
import {StepThree} from "@/components/StepThree";
import {useAtom} from "jotai";
import {formStateAtom} from "@/store/formState";
export const MultiForm = () => {

    const [{step}, setFormState] = useAtom(formStateAtom);
    const setStep = (step:number) => {
        setFormState(oldState => ({
            ...oldState,
            step: step
        }));
    };
  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne/>;
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
        title: "Select Plan hui"
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
