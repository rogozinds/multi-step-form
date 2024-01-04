'use client'

interface StepHeaderProps {
    header:string;
    subheader:string;
}
export const StepHeader:React.FC<StepHeaderProps> = ({header,subheader}) => {
    return (
            <div className="step-header">
                <div className="content-header">
                    {header}
                </div>
                <div className="content-subheader">
                    {subheader}
                </div>
            </div>
    );
};