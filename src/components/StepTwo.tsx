'use client'
import React, {FC, useState} from "react";
import {Step} from "@/components/Step";
import {PlanComponent} from "@/components/PlanComponent";
import ToggleButton from "@/components/ToogleButton";
import {UserPlan, UserPlanOptions} from "@/types/UserPlan";
import {getUserPlans} from "@/service/DataService";
import {defaultOptions, formStateAtom} from "@/store/formState";
import {useAtom} from "jotai";

interface StepProps {
    step:number;
    setStep: (_:number)=>void;
}

export const StepTwo:FC<StepProps> = ({step,setStep}) => {
    const [{ userPlanOptions, isMonth }, setFormState] = useAtom(formStateAtom);
    const setOption = (optionName, value) => {
        setFormState(oldState => ({
            ...oldState,
            userPlanOptions: {
                ...defaultOptions,
                [optionName]: value,
            }
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

                isMonth {isMonth}
                <div style={{display:"flex", flexDirection:"row", gap:"16px"}}>
                {Object.entries(plans).map(([planId, planDetails]) => (
                    <PlanComponent
                        key={planId}
                        selected={userPlanOptions[planId]}
                        setSelected={() => setOption(planId, true)}
                        title={planDetails.title}
                        icon={planDetails.icon}
                        priceMonth={planDetails.monthPrice}
                        priceYear={planDetails.yearPrice}
                        isMonth={isMonth}
                    />
                ))}
                </div>

                <div>
                    <ToggleButton
                        left="Monthly"
                        right="Yearly"
                        checked={isMonth}
                        setChecked={()=>{
                            setFormState(oldState => ({
                                ...oldState,
                                isMonth:!isMonth
                            }));
                        }}
                    />
                </div>
            </Step>

    );

};