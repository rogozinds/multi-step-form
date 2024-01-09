import React, {FC, useState} from 'react';
import styles from './togglebutton.module.css';

interface Props {
    left:string;
    right:string;
    checked: boolean;//checked for left select, !checked for right
    setChecked: (v:boolean)=>void;
}
const ToggleButton:FC<Props> = ({left, right,checked, setChecked}) => {
    const toggleCheck = (e) => {
        e.preventDefault();
        setChecked(!checked);
    };

    const circleXPosition = checked ? 10:28;

    return (
        <div className={styles.content}>
            <span
                className={`${styles.toggleText} ${checked ? styles.highlighted : ''}`}
            >
                {left}
            </span>
                <svg
                    width="38"
                    height="20"
                    viewBox="0 0 38 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={(e)=>{toggleCheck(e)}}
                    style={{ cursor: 'pointer' }}
                >
                    <rect width="38" height="20" rx="10" fill="#022959"/>
                    <circle cx={circleXPosition} cy="10" r="6" fill="white"/>
                </svg>
            <span
                className={`${styles.toggleText} ${!checked ? styles.highlighted : ''}`}
            >
                {right}
            </span>
        </div>
    );
};

export default ToggleButton;
