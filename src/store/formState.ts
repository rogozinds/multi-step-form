import { atom, useAtom } from 'jotai';
import { UserPlanOptions} from "@/types/UserPlan";

export const defaultOptions:UserPlanOptions = {
    arcade: false,
    pro: false,
    advanced: false,
}
export const formStateAtom = atom({
    step: 1,
    userPlanOptions: {...defaultOptions, arcade: true},
    addonOptions:[],
    isMonth: true,
});