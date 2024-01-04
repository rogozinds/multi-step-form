'use client'
import React, {FC, forwardRef, useEffect, useState} from "react";
import styles from './plancomponent.module.css';
import Image from 'next/image'
interface PlanProps {
    title: "Arcade" | "Advanced" | "Pro";
    icon : string;
    priceMonth: number;
    priceYear: number;
    isMonth:boolean;
}
export const PlanComponent:FC<PlanProps> = ({title, icon, priceMonth, priceYear,isMonth}) => {
    const [selected, setSelected]  = useState(false);
    const calcPrice = (priceMonth:number, priceYear:number, isMonth:boolean) =>{
        if (isMonth) {
            return `$${priceMonth}/mon`;
        } else {
            return `$${priceYear}/yr`;
        }
    }
    const price = calcPrice(priceMonth, priceYear, isMonth);

    const selectPlan=()=>{
        setSelected(!selected);
    }
    const containerClasses = selected ? `${styles.container} ${styles.selected}` : styles.container;
    return (
        <div className={containerClasses} onClick={selectPlan}>
              <Image
                className={styles.logo}
                src={icon}
                alt="Some icon"
                width={40}
                height={40}
                priority></Image>
                <div>
                    <div className={styles.title}>
                        {title}
                    </div>
                    <div className={styles.price}>
                        {price}
                    </div>
                </div>
        </div>
    );
}
