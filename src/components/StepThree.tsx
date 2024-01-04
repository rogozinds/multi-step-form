'use client'
import {TextInput} from "@/components/TextInput";
import {useState} from "react";
import {AddonInput} from "@/components/AddonInput";
import {Step} from "@/components/Step";

interface AddonProps {
    step:number;
    setStep: (_:number)=>void;
    period?: "month" | "year"
}
export const StepThree: React.FC<AddonProps> =({period, step, setStep}) => {
    if (!period) {
        period = "month";
    }
    const handleNext = ()=>{

    }
    return (
            <Step
                header="Pick Addons"
                subheader="Add-ons help enhance your gaming experience."
                onNext={handleNext}
                onPrev={()=>{}}
                showPrev={true}
            >
                <AddonInput selected={true} header="Online service" subheader="Access to multiplayer games" price={1} period={period}></AddonInput>
                <AddonInput selected={true} header="Larger storage" subheader="Extra 1TB of cloud save" price={2} period={period}></AddonInput>
                <AddonInput selected={false} header="Customizable profile" subheader="Custom theme on your profile" price={2} period={period}></AddonInput>
            </Step>
    );
};