'use client'
import React, {FC, useState} from "react";
import {Step} from "@/components/Step";
import {PlanComponent} from "@/components/PlanComponent";
import ToggleButton from "@/components/ToogleButton";
import {UserPlan, UserPlanOptions} from "@/types/UserPlan";
import {getUserPlans} from "@/service/DataService";

interface StepProps {
    step:number;
    setStep: (_:number)=>void;
}

const defaultOptions:UserPlanOptions = {
    arcade: false,
    pro: false,
    advanced: false,
}
export const StepTwo:FC<StepProps> = ({step,setStep}) => {

    const [options, setOptions] = useState<UserPlanOptions>({
        ...defaultOptions
    });
    const [isMonth, setIsMonth] = useState(true);
    const setOption = (optionName:string, value:boolean) => {
        setOptions( ()=> ({
            ...defaultOptions,
            [optionName]: value
        }));
    };
    const handleNext=()=>{
        setStep(step+1);
    }
    const plans = getUserPlans();
    return (
            <Step
                header="Select your plan"
                subheader="You have the option of monthly or yearly billing."
                onNext={handleNext}
                onPrev={()=>{}}
                showPrev={true}
            >
                <div style={{display:"flex", flexDirection:"row", gap:"16px"}}>
                {Object.entries(plans).map(([planId, planDetails]) => (
                    <PlanComponent
                        key={planId}
                        selected={options[planId]}
                        setSelected={() => setOption(planId, !options[planId])}
                        title={planDetails.title}
                        icon={planDetails.icon}
                        priceMonth={planDetails.monthPrice}
                        priceYear={planDetails.yearPrice}
                        isMonth={isMonth}
                    />
                ))}
                </div>

                <div>
                    <ToggleButton left="Monthly" right="Yearly" checked={isMonth} setChecked={setIsMonth}/>
                </div>
            </Step>

    );

};