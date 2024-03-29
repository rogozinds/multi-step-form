'use client'
import React, {FC, useState} from "react";
import {Step} from "@/components/Step";
import {PlanComponent} from "@/components/PlanComponent";
import ToggleButton from "@/components/ToogleButton";
import styles from './plancomponent.module.css';
import {getUserPlans} from "@/service/DataService";
import {defaultOptions, formStateAtom} from "@/store/formState";
import {useAtom} from "jotai";

export const StepTwo:FC = () => {
    const [{step, userPlanOptions, isMonth }, setFormState] = useAtom(formStateAtom);

    const setStep = ( step:number) => {
        setFormState(oldState => ({
            ...oldState,
            step: step
        }));
    };
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
                onPrev={()=>{setStep(step-1)}}
                showPrev={true}
            >
                <div className={styles.planlist}>
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