'use client'
import React, {forwardRef} from "react";
import styles from './textinput.module.css';
interface TextInputProps {
    label:string;
    type: "email" | "text" | "tel",
    placeholder: string,
    value:string;
    setValue?:()=>void;
    error:string;
}
export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    ({ label, error, value, setValue, type, placeholder }, ref) => {
    const handleChange=(event)=>{
       setValue(event.target.value);
    }
    return (
        <div className={styles.container}>
            {error && <div className={styles.error}>{error}</div>}
            <div className={styles.label}>
                {label}
            </div>
            <input className={styles.input} value={value} onChange={handleChange} type={type} required={true} placeholder={placeholder} ref={ref}>

            </input>
        </div>
    );
});
