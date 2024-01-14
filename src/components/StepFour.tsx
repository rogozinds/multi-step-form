'use client'
import {TextInput} from "@/components/TextInput";
import React, {useState} from "react";
import {Step} from "@/components/Step";
import {useAtom} from "jotai";
import {formStateAtom} from "@/store/formState";
import {Summary} from "@/components/Summary";

export const StepFour = () => {
    const [{ userPlanOptions, isMonth }, setFormState] = useAtom(formStateAtom);
    return (
    <Step
        header="Finishing up"
        subheader="Double-check everything looks OK before confirming."
        onNext={()=>{}}
        onPrev={()=>{}}
        showPrev={true}
    >
        <Summary></Summary>
    </Step>
    );
};