'use client'
import {TextInput} from "@/components/TextInput";
import {useState} from "react";
import {AddonInput} from "@/components/AddonInput";

interface AddonProps {
    period?: "month" | "year"
}
export const StepThree: React.FC<AddonProps> =({period}) => {
    if (!period) {
        period = "month";
    }
    return (
        <>
            <div className="content-header">
                Pick Addons
            </div>
            <div className="content-subheader">
                Add-ons help enhance your gaming experience.
            </div>
            <AddonInput selected={true} header="Online service" subheader="Access to multiplayer games" price={1} period={period}></AddonInput>
            <AddonInput selected={true} header="Larger storage" subheader="Extra 1TB of cloud save" price={2} period={period}></AddonInput>
            <AddonInput selected={false} header="Customizable profile" subheader="Custom theme on your profile" price={2} period={period}></AddonInput>
        </>
    );
};