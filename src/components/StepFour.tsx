'use client'
import React, {useState} from "react";
import {Step} from "@/components/Step";
import {useAtom} from "jotai";
import {formStateAtom} from "@/store/formState";
import {Summary} from "@/components/Summary";

export const StepFour = () => {
    const [{ step,userPlanOptions, isMonth }, setFormState] = useAtom(formStateAtom);
    const setStep = ( step:number) => {
        setFormState(oldState => ({
            ...oldState,
            step: step
        }));
    };
    return (
    <Step
        header="Finishing up"
        subheader="Double-check everything looks OK before confirming."
        onNext={()=>{}}
        onPrev={()=>{setStep(step-1)}}
        showPrev={true}
    >
        <Summary pickAddon={()=>{setStep(2)}}></Summary>
    </Step>
    );
};