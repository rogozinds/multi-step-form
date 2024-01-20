import {StepHeader} from "@/components/StepHeader";
import {FC} from "react";
import styles from './step.module.css';

interface StepProps {
    header:string;
    subheader:string;
    children:React.ReactNode;
    onPrev:()=>void;
    onNext:()=>void;
    showPrev:boolean;
    nextButtonTitle?:string;
}
export const Step:FC<StepProps> = ({ header, subheader, children, onPrev, onNext, showPrev,nextButtonTitle }) => {
    let nextTitle="Next Step";
    if(nextButtonTitle){
        nextTitle = nextButtonTitle;
    }
    return (
        <div className={styles.main}>
            <div>
                <StepHeader header={header}
                            subheader={subheader}/>
                <div className="step-content">
                    {children}
                </div>
            </div>
            <div className={styles.step_navigation}>
                <button className={`${styles.prev_button} ${!showPrev && styles.hidden}`} onClick={onPrev}>Go Back</button>
                <button className={styles.next_button} onClick={onNext}>{nextTitle}</button>
            </div>
        </div>
    );
};
