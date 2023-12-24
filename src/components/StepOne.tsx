'use client'
import {TextInput} from "@/components/TextInput";
import {useState} from "react";

export const StepOne = () => {
    let [name,setName]= useState("");
    let [email,setEmail]= useState("");
    let [phone,setPhone]= useState("");
    return (
        <>

            <div className="content-header">
                Personal Info
            </div>
            <div className="content-subheader">
                Please provide your name, email address, and phone number.
            </div>
            <TextInput label={"name"} value={name} setValue={setName} pattern={"text"} placeholder={"e.g. Stephen King"}></TextInput>
            <TextInput label={"Email Address"} value={email} setValue={setEmail}pattern={"email"} placeholder={"e.g. stephenking@lorem.com"}></TextInput>
            <TextInput label={"Phone Number"} value={phone} setValue={setPhone} pattern={"tel"} placeholder={"e.g. +1 234 567 890"}></TextInput>
        </>
    );
};