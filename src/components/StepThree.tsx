'use client'
import {useState} from "react";
import {AddonInput} from "@/components/AddonInput";
import {Step} from "@/components/Step";

type Options = "onlineService" | "largeStorage" | "customProfile";
type Period = "month" | "year";

interface AddonProps {
    step: number;
    setStep: (_: number) => void;
    period?: Period
}

export const StepThree: React.FC<AddonProps> = ({period, step, setStep}) => {
    const [options, setOptions] = useState({
        onlineService: false,
        largeStorage: false,
        customProfile: false
    });

    const setOption = (optionName: string, value: boolean) => {
        setOptions(prevOptions => ({
            ...prevOptions,
            [optionName]: value
        }));
    };
    const getPrice = (option: Options, period: Period): number => {
        const monthPrice = {
            onlineService: 1,
            largeStorage: 2,
            customProfile: 2
        }
        const yearPrice = {
            onlineService: 10,
            largeStorage: 20,
            customProfile: 20
        }
        if (period === "month") {
            return monthPrice[option]
        } else {
            return yearPrice[option]
        }
    }
    const constructPriceString = (option: Options, period: "month" | "year") => {
        const price = getPrice(option, period);
        if (period === "month") {
            return `+$${price}/mon`;
        } else {
            return `+$${price}/yr`;
        }

    }
    if (!period) {
        period = "month";
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
            <AddonInput
                selected={options.onlineService}
                setSelected={() => {
                    setOption("onlineService", !options.onlineService)
                }}
                header="Online service" subheader="Access to multiplayer games"
                price={constructPriceString("onlineService", period)}>
            </AddonInput>
            <AddonInput
                selected={options.largeStorage}
                setSelected={() => {
                    setOption("largeStorage", !options.largeStorage)
                }}
                header="Larger storage" subheader="Extra 1TB of cloud save"
                price={constructPriceString("largeStorage", period)}>

            </AddonInput>
            <AddonInput
                selected={options.customProfile}
                setSelected={() => {
                    setOption("customProfile", !options.customProfile)
                }}
                header="Customizable profile"
                subheader="Custom theme on your profile"
                price={constructPriceString("customProfile", period)}>
            </AddonInput>
        </Step>
    );
};