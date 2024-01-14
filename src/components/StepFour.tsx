'use client'
import React, {useState} from "react";
import {Step} from "@/components/Step";
import {useAtom} from "jotai";
import {defaultFormState, formStateAtom} from "@/store/formState";
import {Summary} from "@/components/Summary";
import {ThankYouPage} from "@/pages/ThankYouPage";

export const StepFour = () => {
    const [isConfirm, setConfirm] = useState(false);
    const [{ step,userPlanOptions, isMonth }, setFormState] = useAtom(formStateAtom);
    const setStep = ( step:number) => {
        setFormState(oldState => ({
            ...oldState,
            step: step
        }));
    };
    const confirm = ()=>{
        setConfirm(true);
        setFormState({...defaultFormState,step:4});
    }
    return (
        <>
            {isConfirm && (
                <ThankYouPage></ThankYouPage>
            )
            }
            {!isConfirm && (
                <Step
                    header="Finishing up"
                    subheader="Double-check everything looks OK before confirming."
                    onNext={()=>{confirm()}}
                    onPrev={()=>{setStep(step-1)}}
                    showPrev={true}
                    nextButtonTitle="Confirm"
                >
                    <Summary pickAddon={()=>{setStep(2)}}></Summary>
                </Step>
            )
            }
        </>
    );
};