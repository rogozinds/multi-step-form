'use client'
import Image from 'next/image'
import styles from './navbar.module.css'
export interface StepHeader {
    index:number;
    title: string
}
interface NavBarProps {
    steps:StepHeader[];
    activeStep:number;
    setActiveStep:(n:number)=>void;
}
export const NavBar:React.FC<NavBarProps> = ({steps, activeStep, setActiveStep}) => {


    const handleClick=(index:number)=>{
        setActiveStep(index);
    }
      const getCircleStyle = (index:number) => {
        return index === activeStep
          ? {  backgroundColor: '#BEE2FD', color: 'black'}
          : {  backgroundColor: 'transparent', color: 'white', border: '1px solid white' ,   };
      };
    return (
            <div className={styles.main} style={backgroundImage}>
              {steps.map(step => (
                    <div key={step.index} className={styles.stepContainer} >
                        <div className={styles.circle} style={getCircleStyle(step.index)} onClick={()=>handleClick(step.index)}>
                            {step.index}
                        </div>
                        <div className={styles.stepInfo}>
                            <div className={styles.subtitle}>STEP {step.index}</div>
                            <div className={styles.title}>{step.title}</div>
                        </div>
                    </div>
              ))}
    </div>
    );
};
const backgroundImage = {
    backgroundImage: 'url("/images/bg-sidebar-desktop.svg")',
    backgroundSize: 'cover',
};
