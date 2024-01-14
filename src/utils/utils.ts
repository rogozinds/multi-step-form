export const calcPrice = (priceMonth:number, priceYear:number, isMonth:boolean, addPlus?:boolean) =>{
    let priceString:string;
    if (isMonth) {
        priceString= `$${priceMonth}/mon`;
    } else {
        priceString= `$${priceYear}/yr`;
    }
    if(addPlus){
        return `+${priceString}`;
    }
    return priceString;
}
