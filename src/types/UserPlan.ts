interface Options{
    arcade: boolean;
    pro: boolean;
    advanced: boolean;
}
export interface UserPlan {
   id: "arcade" | "pro" | "advanced";
   monthPrice: number;
   yearPrice: number;
   isMonth: boolean;
   icon: string;
   title: string;
}
export interface UserAddon {
    id: "online_service" | "large_storage" | "custom_profile";
    monthPrice: number;
    yearPrice: number;
    isMonth: boolean;
    title: string;
    subtitle: string;
}
export type UserPlanOptions = {
    [K in UserPlan["id"]]: boolean;
};

export type AddonOptions = {
    [K in UserAddon["id"]]: boolean;
}
export interface UserChoise {
    planId:UserPlanOptions;
    isMonth: boolean;
    addonIds: AddonOptions[]
}