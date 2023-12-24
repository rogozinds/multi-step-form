'use client'
interface TextInputProps {
    label:string;
    value:string;
    setValue?:()=>void;
}
export const TextInput: React.FC<TextInputProps> = ({label,value, setValue}) => {
    const handleChange=(event)=>{
        console.log("value has changed:");
       setValue(event.target);
    }
    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            {label}
            <input value={value} onChange={handleChange}></input>
        </div>
    );
};