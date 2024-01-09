'use client'
import styles from './addoninput.module.css';
interface AddonInputProps {
    selected:boolean;
    setSelected:(_:boolean)=>void;
    header:string;
    subheader:string;
    price: string;
 }
export const AddonInput: React.FC<AddonInputProps> = ({header, subheader, price, selected,setSelected}) => {
    const handleClick = ()=>{
       setSelected(!selected);
    }
    return (

            <div className={`${styles.container} ${selected ? styles.highlighted: ""}`} onClick={handleClick}>
                <div className={styles.parcont}>
                        <input type="checkbox" checked={selected} style={{width:"20px", height: "20px" }}>
                        </input>
                        <div>
                            <div className={styles.header}>
                                {header}
                            </div>
                                <div className={styles.subheader}>
                            {subheader}
                                </div>
                        </div>
                </div>
                <div className={styles.price}>
                    {price}
                </div>
            </div>
    );
};
