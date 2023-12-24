'use client'
interface TextInputProps {
    label:string;
    pattern: "email" | "text" | "tel",
    placeholder: string,
    value:string;
    setValue?:()=>void;
}
export const TextInput: React.FC<TextInputProps> = ({label,value, setValue, pattern, placeholder}) => {
    const handleChange=(event)=>{
        console.log("value has changed:");
       setValue(event.target);
    }
    return (
        <div style={styles.container}>
            <div style={styles.label}>
                {label}
            </div>
            <input style={styles.input} value={value} onChange={handleChange} pattern={pattern} required={true} placeholder={placeholder}>

            </input>
        </div>
    );
};

//TODO check how to use the css vars, like primary color
const styles ={
    label:{
        color: "#022959",
        fontSize: "14px",
        fontStyle: "normal",
        textTransform: "capitalize"
    },
    input:{
        borderRadius: "8px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#D6D9E6",
        background: "#FFF",
        height:"48px",
        width: "450px",
        paddingLeft:"16px"
    },
    container: {
        display: "flex",
        width: "450px",
        height: "72px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "8px",
    }
}