export class Customer{
    firstName!: string;
    lastName!: string;
    private city!: string;
    private _country!: string;
    public get country(): string {
        return this._country;
    }
    // public set country(value: string) {
    //     this._country = value;
    // }

    // get cityName(): string{
    //     return this.city;
    // }

    set cityName(value: string){
        this.city = value;
    }
    


    constructor(fname: string, lname:string, cty:string, cntry:string){
        this.firstName = fname;
        this.lastName = lname;
        this.city = cty;
        this._country = cntry;
    }
}

let myCustomer = new Customer("Maira","Khan","lucknow", "Dubai");
myCustomer.firstName = "Munshat";
myCustomer.lastName = "Nazeer";
console.log(myCustomer.firstName,);
console.log(myCustomer.country);