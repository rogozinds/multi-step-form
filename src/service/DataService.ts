import {UserAddon, UserPlan} from "@/types/UserPlan";

export const getUserPlans=():Record<UserPlan["id"], UserPlan>=>{
    const plans: Record<UserPlan["id"], UserPlan> = {
        arcade: {
            id: "arcade",
            monthPrice: 9,
            yearPrice: 100,
            title:"Arcade",
            icon:"images/icon-arcade.svg",
        },
        pro: {
            id: "pro",
            monthPrice: 12,
            yearPrice: 120,
            title:"Pro",
            icon:"images/icon-pro.svg"
        },
        advanced: {
            id: "advanced",
            monthPrice: 15,
            yearPrice: 140,
            title:"Advanced",
            icon:"images/icon-advanced.svg"
        },
    };
    return plans;
}

export const getUserAddons=():Record<UserAddon["id"], UserAddon>=>{
    const addons:Record<UserAddon["id"], UserAddon>= {
        online_service: {
            id: "online_service",
            monthPrice: 1,
            yearPrice: 10,
            title:"Online Service",
            subtitle:"Access to multiplayer games",
        },
        large_storage: {
            id: "large_storage",
            monthPrice: 2,
            yearPrice: 20,
            title:"Larger storage",
            subtitle:"Extra 1TB of cloud save",
        },
        custom_profile: {
            id: "custom_profile",
            monthPrice: 2,
            yearPrice: 15,
            title:"Customizable profile",
            subtitle:"Custom theme on your profile",
        },
    }
    return addons;
}