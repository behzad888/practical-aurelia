// app.js
import {computedFrom} from 'aurelia-framework';
export class App {
    constructor() {
        //Here we set some default values:
        this.services = [
            {
                name: 'Web Development',
                price: 300,
                active: true
            }, {
                name: 'Design',
                price: 400,
                active: false
            }, {
                name: 'Integration',
                price: 250,
                active: false
            }, {
                name: 'Training',
                price: 220,
                active: false
            }
        ];
        // using for computed observe
        this.lastServiceName = '';
    }

    toggleActive(service) {
        // In this case it will hide the tooltip.
        service.active = !service.active;
        this.lastServiceName = service.name;
    }
    @computedFrom('lastServiceName')
    get total() {
        // "total" will be observed.
        var total = 0;
        this.services.forEach((service) => {
            if (service.active) {
                total += service.price;
            }
        });
        return total;
    }
}