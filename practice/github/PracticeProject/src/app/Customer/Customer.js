var Customer = /** @class */ (function () {
    function Customer(fname, lname, cty, cntry) {
        this.firstName = fname;
        this.lastName = lname;
        this.city = cty;
        this._country = cntry;
    }
    Object.defineProperty(Customer.prototype, "country", {
        get: function () {
            return this._country;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "cityName", {
        // public set country(value: string) {
        //     this._country = value;
        // }
        // get cityName(): string{
        //     return this.city;
        // }
        set: function (value) {
            this.city = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("Maira", "Khan", "lucknow", "Dubai");
myCustomer.firstName = "Munshat";
myCustomer.lastName = "Nazeer";
console.log(myCustomer.firstName);
console.log(myCustomer.country);
