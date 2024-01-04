'use client'
import {TextInput} from "@/components/TextInput";
import {useState} from "react";

export const StepTwo = () => {
    let [name,setName]= useState("");
    let [email,setEmail]= useState("");
    let [phone,setPhone]= useState("");
    return (
        <>

            <div className="step-header">
                <div className="content-header">
                    Pick add-ons
                </div>
                <div className="content-subheader">
                    Add-ons help enhance your gaming experience.
                </div>
            </div>
        </>
    );
};