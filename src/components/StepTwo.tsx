'use client'
import React, {FC, useState} from "react";
import {Step} from "@/components/Step";
import {PlanComponent} from "@/components/PlanComponent";

interface StepProps {
    step:number;
    setStep: (_:number)=>void;
}
export const StepTwo:FC<StepProps> = ({step,setStep}) => {
    const handleNext=()=>{
        setStep(step+1);
    }
    return (
            <Step
                header="Pick add-ons"
                subheader="Add-ons help enhance your gaming experience."
                onNext={handleNext}
                onPrev={()=>{}}
                showPrev={true}
            >
                <PlanComponent title="Arcade" icon="images/icon-arcade.svg" priceMonth={9} priceYear={90} isMonth={true}/>
            </Step>

    );

};