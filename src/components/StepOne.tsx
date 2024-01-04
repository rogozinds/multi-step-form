'use client'
import {TextInput} from "@/components/TextInput";
import {useRef, useState} from "react";

export const StepOne = () => {
    let [name,setName]= useState("");
    let [email,setEmail]= useState("");
    let [phone,setPhone]= useState("");


    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const [errors, setErrors] = useState({});

    const handleNext = (event)=>{
        event.preventDefault();
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

        if (Object.keys(newErrors).length === 0) {
            //Go to next step
        }
    }
    return (
        <div >
            <div className="step-header">
                <div className="content-header">
                    Personal Info
                </div>
                <div className="content-subheader">
                    Please provide your name, email address, and phone number.
                </div>
            </div>
            <div className="step-content" >
                <TextInput ref={nameRef} label={"name"} error={errors.name} value={name} setValue={setName} type={"text"} placeholder={"e.g. Stephen King"}></TextInput>
                <TextInput ref={emailRef} label={"Email Address"} error={errors.email} value={email} setValue={setEmail} type={"email"} placeholder={"e.g. stephenking@lorem.com"}></TextInput>
                <TextInput ref={phoneRef} label={"Phone Number"} error={errors.phone} value={phone} setValue={setPhone} type={"tel"} placeholder={"e.g. +1 234 567 890"}></TextInput>
            </div>
            <button onClick={handleNext}> Next</button>
        </div>
    );
};