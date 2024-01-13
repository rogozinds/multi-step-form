'use client'
import {useState} from "react";
import {AddonInput} from "@/components/AddonInput";
import {Step} from "@/components/Step";
import {getUserAddons} from "@/service/DataService";
import {AddonOptions} from "@/types/UserPlan";
import {calcPrice} from "@/utils/utils";

interface AddonProps {
    step: number;
    setStep: (_: number) => void;
    isMonth?:boolean;
}

export const StepThree: React.FC<AddonProps> = ({isMonth, step, setStep}) => {
    const addons = getUserAddons();
    const [options, setOptions] = useState<AddonOptions>({
        online_service: false,
        large_storage: false,
        custom_profile: false
    });

    const setOption = (optionName: string, value: boolean) => {
        setOptions(prevOptions => ({
            ...prevOptions,
            [optionName]: value
        }));
    };
    if (!isMonth) {
        isMonth = true;
    }
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
                    selected={options[addonId]}
                    setSelected={() => setOption(addonId, !options[addonId])}
                    header={details.title}
                    subheader={details.subtitle}
                    price={calcPrice(details.monthPrice, details.yearPrice, isMonth)}
                />
            ))}
        </Step>
    );
};