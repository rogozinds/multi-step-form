'use client'
import {TextInput} from "@/components/TextInput";
import {useState} from "react";

export const StepTwo = () => {
    let [name,setName]= useState("");
    let [email,setEmail]= useState("");
    let [phone,setPhone]= useState("");
    return (
        <>

            <div className="content-header">
                Select Your Plan
            </div>
            <div className="content-subheader">
                Please provide your name, email address, and phone number.
            </div>
        </>
    );
};