import styles from './summary.module.css';
import addonstyles from './addoninput.module.css';
import {useAtom} from "jotai";
import {formStateAtom} from "@/store/formState";
import {calcPrice} from "@/utils/utils";
import {getUserAddons, getUserPlans} from "@/service/DataService";
import {AddonOptions, UserAddon, UserPlan} from "@/types/UserPlan";
export const Summary = () => {
    const plans = getUserPlans();
    const addons = getUserAddons();
    const [{ userPlanOptions,addonOptions, isMonth }, setFormState] = useAtom(formStateAtom);
    const getPlan = ():UserPlan | null=>{
        const option =Object.entries(userPlanOptions).find(item=>item[1]===true);
        if(option){
            return plans[option[0]];
        } else {
            return null;
        }
    }
    const pickUserPlan = ()=>{

    }
    const getAddons = ():UserAddon[]=>{
        const items :UserAddon[] = [];
        const ids =Object.entries(addonOptions).filter(item=>item[1]===true).map(item=>item[0]);
        ids.forEach(id=>{
           if(addons[id]){
                items.push(addons[id]);
           }
        })
        return items;
    }
    const selectedPlan = getPlan()
    const selectedAddons = getAddons();

    const calcSumPrice=():string=>{
        let overallPrice=0;
        if(isMonth){
           overallPrice+=selectedPlan!.monthPrice ;
           selectedAddons.forEach(item=>{
               overallPrice+=item.monthPrice;
           })
        } else {
            overallPrice+=selectedPlan!.yearPrice ;
            selectedAddons.forEach(item=>{
                overallPrice+=item.yearPrice;
            })
        }
        return calcPrice(overallPrice, overallPrice, isMonth);
    }
    const getPlanName = ()=>{
        if(selectedPlan){
            return selectedPlan.title;
        }
        return "No option selected";
    }
    const getPeriodName =()=>{
        if(isMonth) {
            return "Monthly";
        } else {
            return "Annualy";
        }
    }
    const getSumPeriodName = () =>{
        if(isMonth) {
            return "per month";
        } else {
            return "per year";
        }
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.plancontainer}>
                        <div className={styles.plan}>
                            <div className={addonstyles.header}>
                                {`${getPlanName()} (${getPeriodName()})`}
                            </div>
                            <div className={`${addonstyles.subheader} ${styles.change_button}`} onClick={pickUserPlan}>
                                Change
                            </div>
                        </div>

                        <div className={styles.planprice}>
                            {calcPrice(selectedPlan?.monthPrice, selectedPlan?.yearPrice, isMonth)}
                        </div>
                    </div>
                    {
                        selectedAddons.length > 0 && (
                            <hr style={{ borderColor: '#9699AA', opacity: "0.2043", borderWidth: 1, width: "100%" }} />
                        )
                    }
                    {Object.entries(selectedAddons).map(([addonId, details]) => (
                       <div className={styles.addon}>
                            <div className={addonstyles.subheader}>
                                {details.title}
                            </div>
                            <div className={styles.addonprice}>
                                    {calcPrice(details.monthPrice, details.yearPrice, isMonth,true)}
                            </div>
                        </div>
                    ))}
                </div>

                    <div style={{padding:"0 24px"}} className={styles.addon}>
                        <div className={addonstyles.subheader}>
                            {`Total (${getSumPeriodName()})`}
                        </div>
                        <div className={styles.sumprice}>
                            {`${calcSumPrice()}`}
                        </div>
                    </div>
            </div>
        </>
    );
};