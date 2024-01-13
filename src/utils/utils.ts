export const calcPrice = (priceMonth:number, priceYear:number, isMonth:boolean) =>{
    if (isMonth) {
        return `$${priceMonth}/mon`;
    } else {
        return `$${priceYear}/yr`;
    }
}
