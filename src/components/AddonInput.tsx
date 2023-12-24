'use client'
interface AddonInputProps {
    selected:boolean;
    header:string;
    subheader:string;
    price: number;
    period: "month" | "year"
 }
export const AddonInput: React.FC<AddonInputProps> = ({header, subheader, price, period, selected}) => {
    const constructPriceString = (price:number, period: "month" | "year")=> {
        if(period === "month" ) {
            return `+$${price}/mon`;
        } else {
            return `+$${price}/yr`;
        }
        
    }
    return (
            <div style={styles.container}>
                <div style={styles.parcont}>
                    <div style={{display:"flex"}}>
                        <input type="checkbox" value={selected} style={{width:"20px", height: "20px" }}>
                        </input>
                        <div>
                            <div style={styles.header}>
                                {header}
                            </div>
                                <div style={styles.subheader}>
                            {subheader}
                                </div>
                        </div>
                    </div>
                    <div style={styles.price}>
                        {constructPriceString(price, period)}
                    </div>
                </div>
            </div>
    );
};

//TODO check how to use the css vars, like primary color
const styles ={
    parcont: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: "8px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#483EFF",
        gap: "8px",
        width: "450px",
        height: "81px",
        backgroundColor: "#F8F9FF",
        padding: "18px 24px"
    },
    header:{
        color: "#022959",
        fontSize: "16px",
        fontStyle: "normal",
    },
    subheader:{
        color: "#9699AA",
        fontSize: "14px",
        fontStyle: "normal",
    },
    price : {
        color: "#483EFF",
        textAlign: "right",
        fontSize: "14px"
    }
    // container: {
    //     display: "flex",
    //     width: "450px",
    //     height: "72px",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "flex-start",
    // }
}