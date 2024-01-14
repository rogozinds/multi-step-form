'use client'
import {useState} from "react";
import {AddonInput} from "@/components/AddonInput";
import {Step} from "@/components/Step";
import {getUserAddons} from "@/service/DataService";
import {AddonOptions} from "@/types/UserPlan";
import {calcPrice} from "@/utils/utils";
import {useAtom} from "jotai";
import {formStateAtom} from "@/store/formState";

interface AddonProps {
    step: number;
    setStep: (_: number) => void;
}

export const StepThree: React.FC<AddonProps> = ({ step, setStep}) => {

    const [{ addonOptions, isMonth }, setFormState] = useAtom(formStateAtom);
    const addons = getUserAddons();

    const setOption = (optionName: keyof AddonOptions, value: boolean) => {
        setFormState(oldState => ({
            ...oldState,
            addonOptions: {
                ...oldState.addonOptions,
                [optionName]: value,
            }
        }));
    };
    const handleNext = () => {

    }
    return (
        <Step
            header="Pick Addons"
            subheader="Add-ons help enhance your gaming experience."
            onNext={handleNext}
            onPrev={() => {
            }}
            showPrev={true}
        >
            {Object.entries(addons).map(([addonId, details]) => (
                <AddonInput
                    key={addonId}
                    selected={addonOptions[addonId]}
                    setSelected={() => setOption(addonId, !addonOptions[addonId])}
                    header={details.title}
                    subheader={details.subtitle}
                    price={calcPrice(details.monthPrice, details.yearPrice, isMonth, true)}
                />
            ))}
        </Step>
    );
};