import { inject } from 'aurelia-framework';
import { Endpoint } from 'aurelia-api';

@inject(Endpoint.of('api'))
export class List {
    customers = [];

    constructor(apiEndpoint) {
        this.apiEndpoint = apiEndpoint;
    }

    activate() {
        return this.apiEndpoint.find('customers')
            .then(customers => this.customers = customers);
    }
}