'use client'
import {TextInput} from "@/components/TextInput";
import {FC, useRef, useState} from "react";
import {StepHeader} from "@/components/StepHeader";
import {Step} from "@/components/Step";


interface StepProps {
    step:number;
    setStep: (_:number)=>void;
}
export const StepOne:FC<StepProps> = ({step, setStep}) => {
    let [name,setName]= useState("");
    let [email,setEmail]= useState("");
    let [phone,setPhone]= useState("");


    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const [errors, setErrors] = useState({});

    const handleNext = ()=>{
        let newErrors = {};
        // Validate each field
        if (!nameRef.current.checkValidity()) {
            newErrors.name = nameRef.current.validationMessage;
        }

        if (!emailRef.current.checkValidity()) {
            newErrors.email = emailRef.current.validationMessage;
        }

        if (!phoneRef.current.checkValidity()) {
            newErrors.phone = phoneRef.current.validationMessage;
        }
        setErrors(newErrors);
        setStep(step+1);
        //TODO fix issue with syuncing left panel and buttons.
        // TODO return back
        // if (Object.keys(newErrors).length === 0) {
        //     setStep(step+1);
        // }
    }
    return (
            <Step
                header="Personal Info"
                subheader="Please provide your name, email address, and phone number."
                onNext={handleNext}
                onPrev={()=>{}}
                showPrev={true}
            >
                <TextInput ref={nameRef} label={"name"} error={errors.name} value={name} setValue={setName} type={"text"} placeholder={"e.g. Stephen King"}></TextInput>
                <TextInput ref={emailRef} label={"Email Address"} error={errors.email} value={email} setValue={setEmail} type={"email"} placeholder={"e.g. stephenking@lorem.com"}></TextInput>
                <TextInput ref={phoneRef} label={"Phone Number"} error={errors.phone} value={phone} setValue={setPhone} type={"tel"} placeholder={"e.g. +1 234 567 890"}></TextInput>
            </Step>
    );
};