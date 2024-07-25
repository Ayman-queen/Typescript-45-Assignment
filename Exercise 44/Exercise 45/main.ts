type car = {
    manufacturer: string,
    model: string
    [key: string]: any;
}
function create_car(manufacturer:string, model:string, optional: Record<string, any>) : car {
    return{
        manufacturer,
        model,
        ...optional
        
    }
}
let my_car = create_car("Tyota","Corolla",{color:"Black",year:"2024"});
console.log(my_car);
