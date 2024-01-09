'use client'
import React, {FC, useState} from "react";
import {Step} from "@/components/Step";
import {PlanComponent} from "@/components/PlanComponent";
import ToggleButton from "@/components/ToogleButton";

interface StepProps {
    step:number;
    setStep: (_:number)=>void;
}
export const StepTwo:FC<StepProps> = ({step,setStep}) => {
    const [options, setOptions] = useState({
        arcade: false,
        pro: false,
        advanced: false
    });
    const [isMonth, setIsMonth] = useState(true);
    const setOption = (optionName:string, value:boolean) => {
        setOptions(prevOptions => ({
            ...prevOptions,
            [optionName]: value
        }));
    };
    const handleNext=()=>{
        setStep(step+1);
    }
    return (
            <Step
                header="Select your plan"
                subheader="You have the option of monthly or yearly billing."
                onNext={handleNext}
                onPrev={()=>{}}
                showPrev={true}
            >
                <div style={{display:"flex", flexDirection:"row", gap:"16px"}}>

                    <PlanComponent
                        selected={options.arcade}
                        setSelected={() => setOption('arcade', !options.arcade)}
                                   title="Arcade" icon="images/icon-arcade.svg" priceMonth={9} priceYear={90} isMonth={true}/>
                    <PlanComponent
                        selected={options.advanced}
                        setSelected={()=>{setOption("advanced", !options.advanced)}}
                        title="Advanced" icon="images/icon-advanced.svg" priceMonth={12} priceYear={110} isMonth={true}/>
                    <PlanComponent
                        selected={options.pro}
                        setSelected={()=>{setOption("pro", !options.pro)}}
                        title="Pro" icon="images/icon-pro.svg" priceMonth={15} priceYear={120} isMonth={true}/>
                </div>

                <div>
                    <ToggleButton left="Monthly" right="Yearly" checked={isMonth} setChecked={setIsMonth}/>
                </div>
            </Step>

    );

};