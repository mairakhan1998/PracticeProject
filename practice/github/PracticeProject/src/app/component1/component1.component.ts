import { Component } from '@angular/core';
import { Customer } from '../Customer/Customer';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component {
  //public myCustomer:Customer;
}

let myCustomer = new Customer("Munshat", "Nazeer", "Lko","India");
console.log(myCustomer.cityName);