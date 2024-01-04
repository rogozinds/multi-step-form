'use client'
import {TextInput} from "@/components/TextInput";
import React, {useState} from "react";
import {Step} from "@/components/Step";

export const StepFour = () => {
    return (
    <Step
        header="Finishing up"
        subheader="Double-check everything looks OK before confirming."
        onNext={()=>{}}
        onPrev={()=>{}}
        showPrev={true}
    >
        PlaceHolder
    </Step>
    );
};